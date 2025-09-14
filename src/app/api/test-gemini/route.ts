import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    // Test Gemini API connection
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });

    const testPrompt = "Hello, this is a test of the Gemini API. Please respond with a simple greeting and confirm that the API is working correctly.";

    const result = await model.generateContent(testPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      message: 'Gemini API is working correctly!',
      response: text,
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY ? 'Configured' : 'Not configured',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Gemini API test error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to test Gemini API',
        details: 'Check your API key and network connection'
      },
      { status: 500 }
    );
  }
}
