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

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Convert base64 to buffer
    const imageBuffer = Buffer.from(imageData, 'base64');
    
    // Create the image part
    const imagePart = {
      inlineData: {
        data: imageData,
        mimeType: 'image/jpeg'
      }
    };

    // Create the prompt
    const fullPrompt = `${prompt}

Please analyze this image and provide a detailed description of how it should be transformed according to the category: ${category}.

The transformation should:
1. Maintain the original person's identity and facial features
2. Apply the specific style or effect requested
3. Ensure high quality and realistic results
4. Preserve the overall composition and lighting

Please provide a detailed description of the transformation process.`;

    // Generate content
    const result = await model.generateContent([fullPrompt, imagePart]);
    const response = await result.response;
    const text = response.text();

    // For now, return the original image with a success message
    // In a real implementation, you would use an image generation model
    return NextResponse.json({
      success: true,
      resultImage: `data:image/jpeg;base64,${imageData}`,
      description: text,
      category: category
    });

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process image' },
      { status: 500 }
    );
  }
}
