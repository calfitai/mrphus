export interface Category {
  id: string;
  title: string;
  description: string;
  emoji: string;
  prompt: string;
}

export const categories: Category[] = [
  {
    id: '1',
    title: 'Age Progression',
    description: 'See yourself in the future',
    emoji: '👴',
    prompt: 'Transform this person to show how they would look 30 years older. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Add natural aging effects: fine lines around eyes and mouth, deeper forehead wrinkles, slight sagging of facial skin, and mature skin texture. Keep the same hair color but make it slightly grayer. Maintain the same facial structure and expression. The result should look like a natural progression of aging while preserving the original person\'s identity.'
  },
  {
    id: '2',
    title: 'Baby Version',
    description: 'Turn into an adorable baby',
    emoji: '👶',
    prompt: 'Transform this person into a realistic baby version. CRITICAL: Maintain their exact facial features from the reference image - same eye shape, nose structure, mouth shape, and overall face proportions. Make them look like a newborn baby (0-3 months old) with smooth baby skin, chubby cheeks, and innocent expression. Keep the same hair color and texture but make it appropriate for a baby. The result should clearly show this is the same person as a baby. Use the reference image as the base and maintain character consistency.'
  },
  {
    id: '3',
    title: 'Artistic Portrait',
    description: 'Create a masterpiece',
    emoji: '🎨',
    prompt: 'Transform this photo into a stunning artistic portrait. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply a masterful painterly style with vibrant, rich colors, dramatic lighting, and creative composition. Use techniques inspired by famous artists like Van Gogh or Monet. The result should look like a professional artwork while preserving the original person\'s identity and character.'
  },
  {
    id: '4',
    title: 'Background Change',
    description: 'Change your surroundings',
    emoji: '🌅',
    prompt: 'Change the background of this image to a beautiful, professional setting. CRITICAL: Keep the person exactly the same - same facial features, clothing, pose, and lighting on their face. Only change the background to something elegant and appropriate. Consider settings like a modern office, luxury hotel lobby, beach sunset, or mountain landscape. The background should complement the person and look natural and professional.'
  },
  {
    id: '5',
    title: 'Cartoon Style',
    description: 'Turn into a cartoon character',
    emoji: '🎭',
    prompt: 'Transform this person into a high-quality cartoon character. CRITICAL: Maintain their exact facial features and recognizable characteristics from the reference image - same eye shape, nose structure, mouth shape, and overall face proportions. Apply a modern, professional cartoon style with clean lines, vibrant colors, and appealing character design. The result should look like a professional animation character while clearly being the same person.'
  },
  {
    id: '6',
    title: 'Expression Change',
    description: 'Show different emotions',
    emoji: '😊',
    prompt: 'Change the facial expression of this person to show a warm, genuine smile. CRITICAL: Keep everything else exactly the same - same facial features, hair, clothing, and background. Only modify the mouth and eye area to create a natural, happy expression. The smile should look authentic and match their facial structure. Maintain the same lighting and overall composition.'
  },
  {
    id: '7',
    title: 'Fantasy World',
    description: 'Enter a magical realm',
    emoji: '🧙‍♂️',
    prompt: 'Transform this person into a fantasy character in a magical world. CRITICAL: Maintain their exact facial features and recognizable characteristics from the reference image. Dress them in fantasy clothing appropriate for a wizard, elf, or magical being. Add fantasy elements like magical accessories, mystical background, and enchanting atmosphere. The result should look like a professional fantasy artwork while preserving the original person\'s identity.'
  },
  {
    id: '8',
    title: 'Glamorous Makeup',
    description: 'Professional glamour look',
    emoji: '💄',
    prompt: 'Apply professional glamorous makeup to this person. CRITICAL: Keep their exact facial features and natural beauty from the reference image. Add elegant makeup including foundation, eyeshadow, eyeliner, mascara, and lipstick in a sophisticated, red-carpet style. The makeup should enhance their natural features without changing their face structure. Maintain the same lighting and overall composition.'
  },
  {
    id: '9',
    title: 'Hair Transformation',
    description: 'Try a new hairstyle',
    emoji: '💇‍♀️',
    prompt: 'Change the hairstyle of this person to a modern, stylish look. CRITICAL: Keep their exact facial features, skin tone, and overall appearance from the reference image. Only modify the hair - consider options like a trendy bob, long waves, or contemporary cut. The new hairstyle should complement their face shape and look natural and professional. Maintain the same lighting and background.'
  },
  {
    id: '10',
    title: 'Professional Look',
    description: 'Business-ready appearance',
    emoji: '👔',
    prompt: 'Transform this person into a professional business look. CRITICAL: Maintain their exact facial features and natural appearance from the reference image. Dress them in professional business attire like a suit, blazer, or formal dress. The clothing should be appropriate for a corporate setting and complement their appearance. Keep the same facial expression and overall composition while making them look polished and professional.'
  },
  {
    id: '11',
    title: 'Style Transfer',
    description: 'Apply artistic styles',
    emoji: '🖼️',
    prompt: 'Apply a famous artistic style to this image. CRITICAL: Keep the person\'s exact facial features and recognizable characteristics from the reference image. Apply the artistic style of a famous painter like Picasso, Van Gogh, or Monet. The result should look like a professional artwork in that specific style while preserving the original person\'s identity and facial structure.'
  },
  {
    id: '12',
    title: 'Vintage Style',
    description: 'Classic retro look',
    emoji: '📸',
    prompt: 'Transform this image into a vintage, retro style. CRITICAL: Maintain the person\'s exact facial features and appearance from the reference image. Apply vintage effects like sepia tones, film grain, and classic composition. Consider styles from the 1950s, 60s, or 70s. The result should look like a professional vintage photograph while preserving the original person\'s identity and character.'
  }
];