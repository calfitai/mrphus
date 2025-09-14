import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MRPHUS AI - Professional AI Image Processing',
    short_name: 'MRPHUS AI',
    description: 'Transform your photos with professional AI technology. Age progression, style transfer, background changes, and much more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff5757',
    icons: [
      {
        src: '/MRPHUS-web-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['photo', 'productivity', 'utilities'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
