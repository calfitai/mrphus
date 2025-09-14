import { Category } from '@/types';

export interface AIRequest {
  imageData: string;
  category: Category;
  prompt: string;
}

export interface AIResponse {
  success: boolean;
  resultImage?: string;
  error?: string;
}

export class AIService {
  private static instance: AIService;
  private apiKey: string;

  private constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async processImage(request: AIRequest): Promise<AIResponse> {
    try {
      if (!this.apiKey) {
        throw new Error('API key not configured');
      }

      // Extract base64 data from data URL
      const base64Data = request.imageData.includes(',') 
        ? request.imageData.split(',')[1] 
        : request.imageData;

      const response = await fetch('/api/process-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData: base64Data,
          prompt: request.prompt,
          category: request.category.title
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return {
          success: true,
          resultImage: result.resultImage
        };
      } else {
        return {
          success: false,
          error: result.error || 'AI processing failed'
        };
      }
    } catch (error) {
      console.error('AI processing error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async generateImage(prompt: string): Promise<AIResponse> {
    try {
      if (!this.apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        return {
          success: true,
          resultImage: result.resultImage
        };
      } else {
        return {
          success: false,
          error: result.error || 'Image generation failed'
        };
      }
    } catch (error) {
      console.error('Image generation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
}

export const aiService = AIService.getInstance();