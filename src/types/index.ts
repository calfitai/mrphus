export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  imageUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  prompt: string;
  icon: string;
  color: string;
}
