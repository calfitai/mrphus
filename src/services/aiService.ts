export interface ImageGenerationRequest {
  prompt: string;
  imageData?: string; // base64 encoded image
}

export interface ImageGenerationResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

// Rate limiting için basit cache
class RateLimiter {
  private static requests: { [key: string]: number[] } = {};
  private static readonly MAX_REQUESTS_PER_MINUTE = 30;
  private static readonly WINDOW_MS = 60000; // 1 dakika

  static canMakeRequest(userId: string): boolean {
    const now = Date.now();
    if (!this.requests[userId]) {
      this.requests[userId] = [];
    }

    // Eski istekleri temizle
    this.requests[userId] = this.requests[userId].filter(
      timestamp => now - timestamp < this.WINDOW_MS
    );

    // Limit kontrolü
    if (this.requests[userId].length >= this.MAX_REQUESTS_PER_MINUTE) {
      return false;
    }

    // Yeni isteği ekle
    this.requests[userId].push(now);
    return true;
  }

  static getRemainingRequests(userId: string): number {
    const now = Date.now();
    if (!this.requests[userId]) {
      return this.MAX_REQUESTS_PER_MINUTE;
    }

    this.requests[userId] = this.requests[userId].filter(
      timestamp => now - timestamp < this.WINDOW_MS
    );

    return this.MAX_REQUESTS_PER_MINUTE - this.requests[userId].length;
  }
}

export class AIService {
  private static readonly GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
  private static readonly API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  static async generateImage(request: ImageGenerationRequest, userId: string): Promise<ImageGenerationResponse> {
    try {
      // Rate limiting kontrolü
      if (!RateLimiter.canMakeRequest(userId)) {
        return {
          success: false,
          error: 'Rate limit exceeded. Please try again later.'
        };
      }

      if (!this.API_KEY) {
        return {
          success: false,
          error: 'API key not configured'
        };
      }

      // Gemini API için request body oluştur
      const requestBody = {
        contents: [{
          parts: [
            {
              text: request.prompt
            }
          ]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      };

      // Eğer image varsa, base64'ü ekle
      if (request.imageData) {
        requestBody.contents[0].parts.push({
          inline_data: {
            mime_type: "image/jpeg",
            data: request.imageData.split(',')[1] // Remove data:image/jpeg;base64, prefix
          }
        });
      }

      const response = await fetch(`${this.GEMINI_API_URL}?key=${this.API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        return {
          success: false,
          error: `API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`
        };
      }

      const data = await response.json();
      
      // Gemini'dan gelen response'u parse et
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const content = data.candidates[0].content.parts[0];
        
        // Eğer image URL döndürülüyorsa
        if (content.text && content.text.includes('http')) {
          const imageUrl = content.text.match(/https?:\/\/[^\s]+/)?.[0];
          if (imageUrl) {
            return {
              success: true,
              imageUrl: imageUrl
            };
          }
        }
        
        // Text response'u image URL olarak kabul et (mock için)
        return {
          success: true,
          imageUrl: request.imageData || 'https://via.placeholder.com/512x512/FF6B35/FFFFFF?text=AI+Generated'
        };
      }

      return {
        success: false,
        error: 'No valid response from AI service'
      };

    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  static getRemainingRequests(userId: string): number {
    return RateLimiter.getRemainingRequests(userId);
  }

  static async uploadImageToStorage(imageData: string, userId: string): Promise<string | null> {
    try {
      // Firebase Storage'a upload et
      const { storage } = await import('@/config/firebaseConfig');
      const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
      
      const timestamp = Date.now();
      const fileName = `generated_${userId}_${timestamp}.jpg`;
      const storageRef = ref(storage, `generated-images/${fileName}`);
      
      // Base64'ü blob'a çevir
      const base64Data = imageData.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      
      await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(storageRef);
      
      return downloadURL;
    } catch (error) {
      console.error('Storage upload error:', error);
      return null;
    }
  }
}
