import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { prompt, category } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: 'Missing prompt parameter' },
        { status: 400 }
      );
    }

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Get the generative model - using Gemini 2.5 Flash
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    // Enhanced prompt for better image generation
    const enhancedPrompt = `You are an expert AI image generation specialist. Create a detailed, professional image based on this prompt: "${prompt}"

${category ? `Category: ${category}` : ''}

Requirements:
1. High-quality, professional appearance
2. Realistic and natural looking
3. Proper lighting and composition
4. Detailed and specific visual elements
5. Artistic and visually appealing

Please provide a comprehensive description of the image that should be generated, including:
- Visual style and aesthetic
- Lighting and mood
- Composition and framing
- Color palette
- Specific details and elements

Make it suitable for professional AI image generation.`;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const enhancedDescription = response.text();

    // For Gemini 2.5 Flash, we can generate images directly
    // Create a more specific image generation prompt
    const imageGenerationPrompt = `Generate a professional, high-quality image based on: ${prompt}

Style: Professional photography, realistic, high detail
Lighting: Natural, well-lit
Composition: Balanced, visually appealing
Quality: 4K resolution, sharp details
Mood: ${category || 'general'}

Create an image that matches this description perfectly.`;

          // Generate the image using Gemini 2.5 Flash
          const imageResult = await model.generateContent(imageGenerationPrompt);
          // const imageResponse = await imageResult.response;
    
    // For now, we'll return the enhanced description
    // In a full implementation, you would extract the generated image from the response
    return NextResponse.json({
      success: true,
      resultImage: null, // Will be populated when image generation is fully implemented
      description: enhancedDescription,
      originalPrompt: prompt,
      enhancedPrompt: imageGenerationPrompt,
      category: category || 'general',
      processingTime: Date.now()
    });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to generate image',
        details: 'Gemini API image generation failed'
      },
      { status: 500 }
    );
  }
}
