# Mrphus AI - Web Version

Modern web version of Mrphus AI Studio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 AI-powered image transformations
- 📱 Responsive design for all devices
- 🔥 Firebase integration for authentication and storage
- ⚡ Fast performance with Next.js
- 🎭 Multiple transformation categories
- 💾 Image gallery with download/share options

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Lucide React icons
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage)
- **AI**: Google Gemini API
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mrphus-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Firebase and Gemini API keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Set environment variables in Vercel dashboard

2. **Custom Domain Setup**
   - Add your domain (mrph.us) in Vercel dashboard
   - Update DNS records as instructed by Vercel

### Manual Deployment

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Home page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
├── config/            # Configuration files
│   └── firebaseConfig.ts
├── data/              # Static data
│   └── categories.ts
├── services/          # API services
│   └── aiService.ts
└── types/             # TypeScript types
    └── index.ts
```

## Features

### Image Transformations
- Age Progression
- Baby Version
- Artistic Portrait
- Background Change
- Cartoon Style
- Expression Change
- Fantasy World
- Glamorous Makeup
- Hair Transformation
- Professional Look
- Style Transfer
- Vintage Style

### User Experience
- Drag & drop image upload
- Real-time transformation preview
- Image gallery with download/share
- Credit system
- Responsive design
- Dark theme

## API Integration

### Firebase
- Authentication
- Firestore database
- Cloud Storage for images

### Google Gemini
- AI image generation
- Image transformation
- Rate limiting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@mrph.us or create an issue in the repository.