export interface Category {
  id: string;
  title: string;
  description: string;
  prompt: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: '1',
    title: 'Age Progression',
    description: 'See yourself in the future',
    prompt: 'Transform this person to show how they would look 30 years older. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Add natural aging effects: fine lines around eyes and mouth, deeper forehead wrinkles, slight sagging of facial skin, and mature skin texture. Keep the same hair color but make it slightly grayer. Maintain the same facial structure and expression. The result should look like a natural progression of aging while preserving the original person\'s identity.',
    image: '/images/Age Progression.jpeg'
  },
  {
    id: '2',
    title: 'Baby Version',
    description: 'Turn into an adorable baby',
    prompt: 'Transform this person into a realistic baby version. CRITICAL: Maintain their exact facial features from the reference image - same eye shape, nose structure, mouth shape, and overall face proportions. Make them look like a newborn baby (0-3 months old) with smooth baby skin, chubby cheeks, and innocent expression. Keep the same hair color and texture but make it appropriate for a baby. The result should clearly show this is the same person as a baby. Use the reference image as the base and maintain character consistency.',
    image: '/images/Baby version.jpeg'
  },
  {
    id: '3',
    title: 'Artistic Portrait',
    description: 'Create a masterpiece',
    prompt: 'Transform this photo into a stunning artistic portrait. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply a masterful painterly style with vibrant, rich colors, dramatic lighting, and creative composition. Use techniques inspired by famous artists like Van Gogh or Monet. The result should look like a professional artwork while preserving the original person\'s identity and character.',
    image: '/images/Artistic Portrait.jpeg'
  },
  {
    id: '4',
    title: 'Background Change',
    description: 'Change your surroundings',
    prompt: 'Change the background of this image to a beautiful, professional setting. CRITICAL: Keep the person exactly the same - same facial features, clothing, pose, and lighting on their face. Only change the background to something elegant and appropriate. Consider settings like a modern office, luxury hotel lobby, beach sunset, or mountain landscape. The background should complement the person and look natural and professional.',
    image: '/images/Background Change.jpeg'
  },
  {
    id: '5',
    title: 'Cartoon Style',
    description: 'Turn into a cartoon character',
    prompt: 'Transform this person into a high-quality cartoon character. CRITICAL: Maintain their exact facial features and recognizable characteristics from the reference image - same eye shape, nose structure, mouth shape, and overall face proportions. Apply a modern, professional cartoon style with clean lines, vibrant colors, and appealing character design. The result should look like a professional animation character while clearly being the same person.',
    image: '/images/Cartoon Style.jpeg'
  },
  {
    id: '6',
    title: 'Expression Change',
    description: 'Show different emotions',
    prompt: 'Change the facial expression of this person to show a warm, genuine smile. CRITICAL: Keep everything else exactly the same - same facial features, hair, clothing, and background. Only modify the mouth and eye area to create a natural, happy expression. The smile should look authentic and match their facial structure. Maintain the same lighting and overall composition.',
    image: '/images/Expression Change.png'
  },
  {
    id: '7',
    title: 'Fantasy World',
    description: 'Enter a magical realm',
    prompt: 'Transform this person into a fantasy character in a magical world. CRITICAL: Maintain their exact facial features and recognizable characteristics from the reference image. Dress them in fantasy clothing appropriate for a wizard, elf, or magical being. Add fantasy elements like magical accessories, mystical background, and enchanting atmosphere. The result should look like a professional fantasy artwork while preserving the original person\'s identity.',
    image: '/images/Fantasy World.jpeg'
  },
  {
    id: '8',
    title: 'Glamorous Makeup',
    description: 'Professional glamour look',
    prompt: 'Apply professional glamorous makeup to this person. CRITICAL: Keep their exact facial features and natural beauty from the reference image. Add elegant makeup including foundation, eyeshadow, eyeliner, mascara, and lipstick in a sophisticated, red-carpet style. The makeup should enhance their natural features without changing their face structure. Maintain the same lighting and overall composition.',
    image: '/images/Glamorous Makeup.png'
  },
  {
    id: '9',
    title: 'Hair Transformation',
    description: 'Try a new hairstyle',
    prompt: 'Change the hairstyle of this person to a modern, stylish look. CRITICAL: Keep their exact facial features, skin tone, and overall appearance from the reference image. Only modify the hair - consider options like a trendy bob, long waves, or contemporary cut. The new hairstyle should complement their face shape and look natural and professional. Maintain the same lighting and background.',
    image: '/images/hair transformation.png'
  },
  {
    id: '10',
    title: 'Professional Look',
    description: 'Business-ready appearance',
    prompt: 'Transform this person into a professional business look. CRITICAL: Maintain their exact facial features and natural appearance from the reference image. Dress them in professional business attire like a suit, blazer, or formal dress. The clothing should be appropriate for a corporate setting and complement their appearance. Keep the same facial expression and overall composition while making them look polished and professional.',
    image: '/images/Professional Look.jpeg'
  },
  {
    id: '11',
    title: 'Style Transfer',
    description: 'Apply artistic styles',
    prompt: 'Apply a famous artistic style to this image. CRITICAL: Keep the person\'s exact facial features and recognizable characteristics from the reference image. Apply the artistic style of a famous painter like Picasso, Van Gogh, or Monet. The result should look like a professional artwork in that specific style while preserving the original person\'s identity and facial structure.',
    image: '/images/Style Transfer.jpeg'
  },
  {
    id: '12',
    title: 'Vintage Style',
    description: 'Classic retro look',
    prompt: 'Transform this image into a vintage, retro style. CRITICAL: Maintain the person\'s exact facial features and appearance from the reference image. Apply vintage effects like sepia tones, film grain, and classic composition. Consider styles from the 1950s, 60s, or 70s. The result should look like a professional vintage photograph while preserving the original person\'s identity and character.',
    image: '/images/vintage.jpeg'
  },
  {
    id: '13',
    title: 'Interior & Architecture',
    description: 'Design transformation',
    prompt: 'Transform this interior space into a stunning, luxury design while MAINTAINING THE EXACT SPATIAL STRUCTURE. CRITICAL REQUIREMENTS: 1) Keep the EXACT room dimensions, wall positions, window/door locations, and ceiling height 2) Maintain the SAME architectural elements (beams, columns, structural features) 3) Preserve the EXACT layout and proportions 4) Only enhance: add premium materials (marble, natural wood, glass, metal), elegant furniture (Italian/Scandinavian luxury), perfect lighting (ambient, accent, natural), sophisticated color palette (neutrals, earth tones), and architectural details (crown molding, wainscoting). The result should look like the SAME room but with world-class interior design. DO NOT change room structure, only enhance the design elements.',
    image: '/images/interior.png'
  },
  {
    id: '14',
    title: 'Colorize Photo',
    description: 'Black & white to color',
    prompt: 'Colorize this black and white photo. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Transform this black and white photo into a beautiful colorized version with natural, realistic colors. Use appropriate skin tones, hair colors, and clothing colors that would be realistic for the person. The lighting and shadows should remain consistent with the original photo. The result should look like a naturally colorized photograph while preserving the person\'s identity.',
    image: '/images/colorize.png'
  },
  {
    id: '15',
    title: 'Remove Text',
    description: 'Clean image',
    prompt: 'Remove text and watermarks from this image. CRITICAL: Use the reference image as the base and maintain the person\'s exact appearance - same facial features, clothing, and background. Remove all text, watermarks, logos, and written content from the image while seamlessly filling the areas with appropriate background or content. The result should look completely natural as if the text was never there. Preserve all original details and maintain the person\'s identity.',
    image: '/images/remove-text.png'
  },
  {
    id: '16',
    title: 'Remove Object',
    description: 'Clean background',
    prompt: 'Remove unwanted objects from this image. CRITICAL: Use the reference image as the base and maintain the person\'s exact appearance - same facial features, clothing, and background. Remove the specified object while seamlessly filling the area with appropriate background content. The result should look completely natural as if the object was never there. Preserve all original details and maintain the person\'s identity.',
    image: '/images/remove object.png'
  },
  {
    id: '17',
    title: 'Gender Swap',
    description: 'Realistic transformation',
    prompt: 'Transform this person to the opposite gender. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Change gender-specific features: adjust jawline, brow ridge, and facial structure to match the opposite gender. Change hair style and length appropriately. The result should look like a realistic person of the opposite gender while maintaining the original person\'s character and expression.',
    image: '/images/gender swap.png'
  },
  {
    id: '18',
    title: 'Night Mode',
    description: 'Dark theme transformation',
    prompt: 'Transform this photo to have a night mode aesthetic. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply night mode effects: darker lighting, cool blue tones, dramatic shadows, and moody atmosphere. The background should look like it\'s nighttime with appropriate lighting. Keep the same facial structure and expression while creating a nocturnal mood.',
    image: '/images/night mode.png'
  },
  {
    id: '19',
    title: 'Summer Vibes',
    description: 'Warm summer transformation',
    prompt: 'Transform this photo to have summer vibes. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply summer effects: warm golden lighting, bright vibrant colors, sunny atmosphere, and summer background elements. The person should look like they\'re enjoying a beautiful summer day. Keep the same facial structure and expression while creating a warm, summery mood.',
    image: '/images/summer vibes.png'
  },
  {
    id: '20',
    title: 'K-Pop Style',
    description: 'Korean pop star look',
    prompt: 'Transform this person into a K-Pop star style. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply K-Pop styling: trendy hair color and style, fashionable clothing, and modern makeup. The background should be a K-Pop music video or stage setting. Keep the same facial structure and expression while creating a K-Pop idol appearance.',
    image: '/images/k-pop.png'
  },
  {
    id: '21',
    title: 'Anime Character',
    description: 'Japanese anime style',
    prompt: 'Transform this person into an anime character. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply anime style: large expressive eyes, colorful hair, and anime art style. The background should be an anime scene. Keep the same facial structure and expression while creating an anime character appearance.',
    image: '/images/anime character.png'
  },
  {
    id: '22',
    title: 'Traditional Asian',
    description: 'Cultural heritage look',
    prompt: 'Transform this person to wear traditional Asian clothing. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Add traditional Asian clothing like kimono, hanfu, or other cultural attire. The background should reflect traditional Asian culture. Keep the same facial structure and expression while creating a traditional cultural appearance.',
    image: '/images/traditional asian.png'
  },
  {
    id: '23',
    title: 'Modern Asian Fashion',
    description: 'Contemporary Asian style',
    prompt: 'Transform this person to wear modern Asian fashion. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Add contemporary Asian fashion trends and styling. The background should reflect modern Asian urban culture. Keep the same facial structure and expression while creating a modern fashion-forward appearance.',
    image: '/images/modern asian fashion.png'
  },
  {
    id: '24',
    title: 'Asian Beauty',
    description: 'Natural Asian beauty',
    prompt: 'Enhance this person with Asian beauty standards. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Apply Asian beauty enhancements: clear skin, natural makeup, and elegant styling. The background should complement the beauty aesthetic. Keep the same facial structure and expression while creating a natural Asian beauty appearance.',
    image: '/images/asian beauty.png'
  },
  {
    id: '25',
    title: 'Cyberpunk Style',
    description: 'Futuristic transformation',
    prompt: 'Transform this person into a cyberpunk character. CRITICAL: Use the reference image as the base and maintain their exact facial features - same eye shape, nose structure, mouth shape, and overall face proportions. Add cyberpunk elements: neon lighting, futuristic clothing, and technological accessories. The background should be a cyberpunk cityscape. Keep the same facial structure and expression while creating a futuristic cyberpunk appearance.',
    image: '/images/cyberpunk.png'
  },
  {
    id: '26',
    title: 'Blur Photo Fix',
    description: 'Fix blurry photos instantly',
    prompt: 'Fix this blurry photo and make it crystal clear. CRITICAL: Use advanced AI image enhancement to remove blur, sharpen details, and improve overall image quality. Enhance facial features, restore sharpness to eyes, and improve skin texture. The result should be a high-quality, sharp image that maintains the original composition and lighting while significantly improving clarity and detail.',
    image: '/images/blur-fix.jpg'
  }
];