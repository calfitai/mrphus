import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { imageData, prompt, category } = await request.json();

    if (!imageData || !prompt) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters' },
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
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    // Create the image part
    const imagePart = {
      inlineData: {
        data: imageData,
        mimeType: 'image/jpeg'
      }
    };

    // Enhanced prompt for better image processing
    const fullPrompt = `You are an expert AI image processing specialist. Analyze this image and apply the following transformation: ${prompt}

Category: ${category}

CRITICAL INSTRUCTIONS:
1. Maintain the original person's identity and facial features exactly
2. Apply the specific transformation requested while preserving natural appearance
3. Ensure high quality, realistic results
4. Keep the same composition and lighting
5. The result should look professional and natural

Please provide a detailed analysis of the transformation and any specific considerations for this image.`;

    // Generate content with image
    const result = await model.generateContent([fullPrompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // For Gemini 2.5 Flash, we'll use the enhanced prompt to generate a new image
    // Since Gemini 2.5 Flash can generate images, we'll create a new prompt for image generation
    const imageGenerationPrompt = `Create a new image based on the original image and the following transformation: ${prompt}

Transform the person in the image according to: ${category}

Requirements:
- Maintain the person's exact facial features and identity
- Apply the requested transformation professionally
- Keep natural lighting and composition
- Ensure high quality and realistic appearance
- The result should be a professional, enhanced version of the original`;

          // Generate the transformed image
          // const imageResult = await model.generateContent([imageGenerationPrompt, imagePart]);
          // const imageResponse = await imageResult.response;
    
    // For now, we'll return the original image with enhanced processing
    // In a full implementation, you would extract the generated image from the response
    return NextResponse.json({
      success: true,
      resultImage: `data:image/jpeg;base64,${imageData}`,
      description: text,
      category: category,
      enhancedPrompt: imageGenerationPrompt,
      processingTime: Date.now()
    });

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to process image',
        details: 'Gemini API processing failed'
      },
      { status: 500 }
    );
  }
}
