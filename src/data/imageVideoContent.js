export const imageVideoContent = {
    // ============================================
    // MODULE 1: Idea → Prompts
    // ============================================
    'iv-ip-01': {
        title: 'Introduction to Prompt',
        summary: 'Understand the fundamental role of prompts in AI image and video generation.',
        objectives: [
            'Define Prompt Engineering in the context of Visual AI',
            'Understand how AI models (Diffusion, Transformers) interpret text',
            'Learn the basic vocabulary of generative AI'
        ],
        theory: [
            'Prompt Engineering is simply how we talk to AI to get the pictures or videos we want. Think of it like giving instructions to an artist who can draw anything but has no common sense.',
            'These AI tools work by looking at billions of images and learning what things look like. When you type "cat", it remembers every cat it has ever seen and draws a new one for you.',
            'A prompt is not just a description; it is a set of instructions. You need to include the subject, the style, the lighting, and the camera angle to get the best result.',
            'Visual AI uses a process called "Diffusion". Imagine starting with a screen of random static noise, and slowly organizing that noise until it looks like a clear picture. That is what the AI does.',
            'Mastering this skill gives you control. Instead of getting random lucky results, you will be able to create exactly what you imagined in your head.'
        ],
        why: 'The difference between a generic image and a masterpiece often lies in the prompt. Mastering this skill gives you control over the chaotic nature of AI generation.',
        prompts: {
            goal: 'Create a basic image',
            before: 'A cool car',
            after: 'A futuristic sports car, neon lights, cyberpunk city background, wet pavement, cinematic lighting, 8k resolution',
            resultBefore: 'Generic car clip art.',
            resultAfter: 'High-fidelity cyberpunk scene.'
        },
        pitfalls: [
            { title: 'Too Short', description: 'Prompts with 1-2 words often yield random results.' },
            { title: 'Overloading', description: 'Adding too many conflicting concepts confuses the AI.' }
        ],
        keywords: [
            { word: 'Diffusion Model', meaning: 'AI model that generates images by removing noise', usage: '"Stable Diffusion is a diffusion model"' },
            { word: 'Seed', meaning: 'A number that initializes the generation process', usage: '"Use the same seed to reproduce the image"' }
        ],
        resources: [
            { title: 'Midjourney Documentation', url: 'https://docs.midjourney.com/' },
            { title: 'Stable Diffusion prompting guide', url: 'https://stable-diffusion-art.com/prompt-guide/' }
        ]
    },
    'iv-ip-02': {
        title: 'Visual Thinking & Idea Clarity',
        summary: 'Learn how to translate vague thoughts into clear visual concepts before writing a prompt.',
        objectives: [
            'Deconstruct abstract ideas into visual elements',
            'Use references and mood boards to clarify intent',
            'Identifying key visual components: Subject, Setting, Action'
        ],
        theory: [
            'AI cannot read your mind; it can only read your words. If your idea is blurry, the image will be blurry too. You must be specific.',
            'Visual Thinking means breaking a vague idea like "Freedom" into a picture. Maybe "Freedom" looks like a bird flying over a mountain, or a person running on a beach.',
            'Before you write a prompt, ask yourself four questions: Who is the subject? Where are they? What are they doing? What does the photo look like?',
            'Use precise vocabulary. Instead of saying "big", say "gigantic" or "massive". Instead of "blue", say "sapphire" or "navy". Nuance matters.',
            'It helps to visualize the image in your own head first. If you can\'t see it, the AI probably won\'t be able to make it either.'
        ],
        why: 'Garbage in, garbage out. If your idea is fuzzy, the image will be messy. Clear thinking leads to clear prompting.',
        prompts: {
            goal: 'Clarify a vague concept',
            before: 'Hope',
            after: 'A single sprout growing through a crack in concrete, golden hour sunlight, macro photography, hopeful atmosphere',
            resultBefore: 'Abstract colors or text.',
            resultAfter: 'A powerful metaphorical image.'
        },
        pitfalls: [
            { title: 'Abstract Concepts', description: 'Using words like "Success" or "Freedom" without visual metaphors.' },
            { title: 'Ambiguity', description: 'Words with double meanings (e.g., "Bat" - animal or sports equipment?).' }
        ],
        keywords: [],
        resources: []
    },
    'iv-ip-03': {
        title: 'Converting Ideas into Visual Descriptions',
        summary: 'Techniques for describing scenes in a way that AI understands.',
        objectives: [
            'Learn the "Subject + Context + Style" formula',
            'Practice descriptive writing for AI',
            'Avoid negative or confusing phrasing'
        ],
        theory: [
            'AI models prefer simple, descriptive sentences. They pay the most attention to nouns (objects) and adjectives (descriptions). verbs (actions) come second.',
            'Start with the main subject. This is the most important part. If you want a cat, start your sentence with "A cat". Don\'t bury the lead.',
            'Add the context next. Where is the cat? "Sitting on a windowsill". Then add the lighting and style: "Soft morning light, watercolor painting".',
            'Be concise but detailed. precise descriptions work better than long, rambling stories. The AI might get confused if the sentence is too complex.',
            'Avoid negatives if possible. Instead of saying "no clouds", say "clear blue sky". It is easier for the AI to draw something than to NOT draw something.'
        ],
        why: 'The AI is a literalist. It draws exactly what you say. Learning to speak its language ensures the output matches your vision.',
        prompts: {
            goal: 'Describe a scene',
            before: 'A scared dog',
            after: 'A trembling golden retriever puppy hiding under a bed, wide fearful eyes, dim lighting, shadows, emotional',
            resultBefore: 'Generic dog.',
            resultAfter: 'Emotive, storytelling image.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ip-04': {
        title: 'Prompt Anatomy (Who, What, Where, How)',
        summary: 'Dissecting the structure of a high-quality prompt.',
        objectives: [
            'Master the 4 pillars: Subject (Who), Action (What), Setting (Where), Style (How)',
            'Understand ordering and weighting in prompts',
            'Using separators and punctuation effectively'
        ],
        theory: [
            'Every great prompt has four key parts. First is "Who": Identify your subject clearly (e.g., "A robot").',
            'Second is "What": Describe the action or state. Is the robot standing still? Is it running? Is it rusty?',
            'Third is "Where": The background or setting is crucial. Is it in a factory? On Mars? In a white void? Don\'t leave it blank.',
            'Fourth is "How": This is the style. Is it a photo? A cartoon? A 3D render? What kind of lighting and colors are used?',
            'Putting these in the right order helps the AI prioritize. The words at the start of the prompt are usually considered more important than words at the end.'
        ],
        why: 'Structure prevents chaos. A well-ordered prompt helps the AI prioritize the most important elements.',
        prompts: {
            goal: 'Structure a complex prompt',
            before: 'A painting of a cat in space eating pizza',
            after: 'Subject: Tabby Cat -- Action: Eating a pepperoni pizza -- Location: International Space Station window looking at Earth -- Style: Oil painting by Van Gogh -- Aspect Ratio: 16:9',
            resultBefore: 'Random mess.',
            resultAfter: 'Coherent artistic composition.'
        },
        pitfalls: [
            { title: 'Wrong Order', description: 'Putting the style before the subject can sometimes apply the style to the wrong things.' }
        ],
        keywords: [],
        resources: []
    },
    'iv-ip-05': {
        title: 'Defining Intent, Mood & Outcome',
        summary: 'Setting the emotional tone and desired impact of your generation.',
        objectives: [
            'Use emotional keywords (e.g., "Melancholic", "Euphoric")',
            'Define the atmosphere (e.g., "Foggy", "Vibrant")',
            'Align the visual mood with the narrative intent'
        ],
        theory: [
            'An image is more than just objects; it is a feeling. You can control this feeling using "Mood Keywords".',
            'Words like "Gloomy", "Joyful", "Tense", or "Peaceful" change how the AI interprets color and lighting.',
            'Lighting is the biggest mood setter. "Golden Hour" makes things feel warm and happy. "Blue Hour" feels sad or calm. "Harsh Flash" feels raw and real.',
            'Atmosphere also matters. Adding "Fog", "Mist", "Rain", or "Dust particles" creates a sense of depth and tangible air.',
            'Think about what you want the viewer to feel when they look at the image, and include that emotion in your prompt.'
        ],
        why: 'An image without mood is boring. Defining the intent ensures the viewer feels what you want them to feel.',
        prompts: {
            goal: 'Set a specific mood',
            before: 'A forest',
            after: 'A dark, haunted forest, mist rolling over roots, cold blue moonlight, eerie atmosphere, horror theme',
            resultBefore: 'Standard stock photo tree.',
            resultAfter: 'Spooky, atmospheric scene.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ip-06': {
        title: 'From Abstract Thought to Concrete Prompt',
        summary: 'Workshop lesson: Practicing the translation of complex ideas into effective prompts.',
        objectives: [
            'Practice converting abstract briefs into concrete prompts',
            'Iterate on descriptions to refine output',
            'Understand how to "ground" abstract concepts'
        ],
        theory: [
            'Clients often speak in abstract terms. They might ask for an image that represents "Innovation" or "Synergy". AI struggles with these words.',
            'Your job is to translate "Innovation" into a concrete image. Maybe it looks like a glowing lightbulb made of fiber optic cables.',
            'This process is called "Grounding". You take a floating idea and tie it to a physical object that can be photographed or drawn.',
            'Use metaphors and symbols. A handshake represents agreement. A mountain peak represents achievement. A clock represents time.',
            'The more specific the physical details you provide, the closer the AI output will be to your original abstract idea.'
        ],
        why: 'Clients often give abstract briefs. Your job is to translate that into something the AI can draw.',
        prompts: {
            goal: 'Visualize "Innovation"',
            before: 'Innovation',
            after: 'A glowing lightbulb made of fiber optic cables, intricate details, bright white and blue light, dark background, macro shot',
            resultBefore: 'Generic clip art.',
            resultAfter: 'Striking tech visual.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 2: Image Generation Prompts
    // ============================================
    'iv-ig-01': {
        title: 'Image Prompt Structure & Formula',
        summary: 'A deep dive into the syntax and formulas for consistent image generation.',
        objectives: [
            'Master the standard formula: [Subject] + [Action] + [Context] + [Art Style] + [Technical Specs]',
            'Learn widely accepted prompting conventions',
            'Understand the role of commas and separators'
        ],
        theory: [
            'There is a "Golden Formula" that almost always works: Subject + Action + Context + Style + Specs.',
            'First, name your Subject clearly. Then, define the Action (what is happening?). Next, describe the Context (the background).',
            'After the scene is set, define the Style (e.g., Oil Painting) and the Specs (e.g., 4k, wide angle lens).',
            'Use commas to separate these ideas. It helps the AI understand where one description ends and the next begins.',
            'Following this structure makes your results predictable and consistent. It prevents the AI from skipping important details.'
        ],
        why: 'Formulas provide a reliability baseline. Once you know the rules, you can break them effectively.',
        prompts: {
            goal: 'Apply the formula',
            before: 'A dragon',
            after: 'A massive red dragon, breathing fire, atop a castle turret, medieval fantasy style, dramatic lighting, highly detailed, 8k',
            resultBefore: 'Simple dragon.',
            resultAfter: 'Epic fantasy illustration.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ig-02': {
        title: 'Subject Description & Detail Control',
        summary: 'Techniques for describing subjects with precision and controlling the level of detail.',
        objectives: [
            'Describe complex subjects (clothing, features, materials)',
            'Use modifiers to increase or decrease detail',
            'Handle multiple subjects in one frame'
        ],
        theory: [
            'The subject is the "Hero" of your image. You simply must be specific about their appearance.',
            'Do not just say "a man". Describe his age, his clothing, his expression, and even the texture of his skin.',
            'Materials matter. Mentioning "silk", "rusty metal", "worn leather", or "polished glass" adds incredible realism.',
            'You can control the level of detail with keywords. "Minimalist" makes things simple. "Intricate" or "Ornate" makes them complex.',
            'Be careful with multiple subjects. AI sometimes mixes them up (e.g., putting the woman\'s hat on the man). Keep descriptions distinct.'
        ],
        why: 'The subject is the hero of your image. If it looks generic, the image fails.',
        prompts: {
            goal: 'Describe a specific character',
            before: 'A warrior',
            after: 'A female elven warrior, silver hair, intricate emerald armor, scarred face, holding a glowing spear, determination, hyper-realistic texture',
            resultBefore: 'Generic soldier.',
            resultAfter: 'Unique character design.'
        },
        pitfalls: [
            { title: 'Subject Bleed', description: 'Attributes of one subject applying to another (e.g., "A blue man and a red dog" -> both purple).' }
        ],
        keywords: [],
        resources: []
    },
    'iv-ig-03': {
        title: 'Style, Art Direction & Aesthetic Control',
        summary: 'Steering the AI towards specific artistic styles, movements, and mediums.',
        objectives: [
            'Reference art movements (Impressionism, Cyberpunk, Surrealism)',
            'Invoke specific artists (safely and ethically)',
            'Define mediums (Watercolor, 3D Render, Pencil Sketch, Polaroid)'
        ],
        theory: [
            'Style is what separates a photograph from a cartoon. You must tell the AI what "Medium" to use.',
            'Keywords like "Oil Painting", "3D Render", "Pencil Sketch", or "Polaroid Photo" completely change the look.',
            'You can also reference art periods like "Renaissance", "Cyberpunk", "Art Deco", or "Impressionism" to get specific color palettes.',
            'Combining styles can create unique results. Try mixing "Ancient Egyptian" with " futuristic Sci-Fi".',
            'If you don\'t specify a style, the AI will guess, and it usually guesses a generic, boring digital art style.'
        ],
        why: 'Style defines the "vibe". It separates a photo from a painting from a cartoon.',
        prompts: {
            goal: 'Change art style',
            before: 'A city',
            after: 'A futuristic city, Ukiyo-e woodblock print style, muted colors, paper texture, traditional japanese art',
            resultBefore: 'Photo of buildings.',
            resultAfter: 'Stylized artwork.'
        },
        pitfalls: [],
        keywords: [
            { word: 'Aesthetic', meaning: 'The visual style or look', usage: '"Vaporwave aesthetic"' },
            { word: 'Medium', meaning: 'The material used to create art', usage: '"Watercolor medium"' }
        ],
        resources: []
    },
    'iv-ig-04': {
        title: 'Lighting, Color & Mood Design',
        summary: 'Using lighting and color theory to dramatically enhance image quality.',
        objectives: [
            'Master lighting types: Volumetric, Rim, Cinematic, Natural',
            'Control color palettes: Monochromatic, Pastel, Neon',
            'Use lighting to direct the viewer\'s eye'
        ],
        theory: [
            'Lighting makes an image look 3D and professional. Without good lighting prompts, images look flat.',
            'Use terms like "Volumetric Lighting" to get those beautiful shafts of light (god rays) coming through visual elements.',
            '"Rim Lighting" puts a glowing outline around your subject, separating them from the dark background.',
            'Color palettes also tell a story. "Pastel colors" feel soft and gentle. "Neon colors" feel energetic and modern.',
            'Don\'t ignore shadows. "Dramatic shadows" or "Chiaroscuro" can add mystery and depth to your composition.'
        ],
        why: 'Bad lighting makes an image look flat and fake. Good lighting makes it look professional and 3-dimensional.',
        prompts: {
            goal: 'Apply cinematic lighting',
            before: 'A portrait of a woman',
            after: 'Portrait of a woman, rim lighting, volumetric fog, dark background, contrasting blue and orange lights, cinematic depth of field',
            resultBefore: 'Flash photography style.',
            resultAfter: 'Movie poster quality.'
        },
        pitfalls: [],
        keywords: [
            { word: 'Volumetric Lighting', meaning: 'Visible light beams (god rays)', usage: '"Add volumetric lighting for atmosphere"' },
            { word: 'Rim Light', meaning: 'Light from behind the subject outlining them', usage: '"Use rim light to separate subject"' }
        ],
        resources: []
    },
    'iv-ig-05': {
        title: 'Camera Angles & Framing for Images',
        summary: 'Directing the virtual camera: Lens types, angles, and shot composition.',
        objectives: [
            'Control framing: Close-up, Wide shot, Aerial view, Low angle',
            'Specify lens types: Fisheye, Telephoto, Macro, 35mm',
            'Use composition rules: Rule of thirds, Symmetrical, Center'
        ],
        theory: [
            'You can act as the photographer by telling the AI where to put the camera.',
            '"Low Angle" makes the subject look big, powerful, and heroic. "High Angle" makes them look small and vulnerable.',
            'You can specify lenses too. "Wide Angle" captures the whole scene/landscape. "Macro Lens" captures tiny details like insects or eyes.',
            '"Drone View" or "Bird\'s Eye View" gives you a map-like perspective looking straight down.',
            'Composition terms like "Symmetrical", "Rule of Thirds", or "Centered" help organize the image nicely.'
        ],
        why: 'You are the director. Choosing the right angle changes the story of the image.',
        prompts: {
            goal: 'Change perspective',
            before: 'A city street',
            after: 'A city street, drone view, looking down, bird\'s eye view, wide angle, dynamic composition',
            resultBefore: 'Street level view.',
            resultAfter: 'Aerial map view.'
        },
        pitfalls: [],
        keywords: [
            { word: 'Bokeh', meaning: 'The aesthetic quality of the blur produced in the out-of-focus parts of an image', usage: '"Strong bokeh background"' },
            { word: 'Field of View (FOV)', meaning: 'How wide the camera sees', usage: '"Wide FOV"' }
        ],
        resources: []
    },
    'iv-ig-06': {
        title: 'The Power of Negative Prompting in image generation',
        summary: 'Learning to tell the AI what NOT to draw to clean up outputs.',
        objectives: [
            'Understand how negative prompts work',
            'Remove common defects (bad hands, extra limbs, text)',
            'Refine style by excluding unwanted attributes'
        ],
        theory: [
            'A "Negative Prompt" is a list of things you do NOT want in your image.',
            'AI was trained on the whole internet, so it knows about bad quality photos, blurry text, and watermarks. We use negative prompts to filter these out.',
            'Common negative words include: "blurry, low quality, ugly, watermark, text, signature, bad anatomy, deformed".',
            'You can also use it to enforce style. If you want a photo, put "cartoon, drawing, sketch" in the negative prompt.',
            'Think of it as sculpting: The positive prompt adds clay, and the negative prompt carves away the parts you don\'t want.'
        ],
        why: 'AI models are trained on internet data, which includes bad images. Negative prompts act as a filter to remove that "noise" and ensure quality.',
        prompts: {
            goal: 'Clean up a realistic portrait',
            before: 'Portrait of a person --no blurry',
            after: 'Portrait of a person --no blurry, low res, cartoon, painting, bad eyes, disfigured, watermark, text',
            resultBefore: 'Might still be artsy.',
            resultAfter: 'Clean, sharp photograph.'
        },
        pitfalls: [
            { title: 'Negating Everything', description: 'Using massive copy-paste negative lists can sometimes degrade image quality.' }
        ],
        keywords: [
            { word: 'Negative Prompt', meaning: 'Instructions on what to exclude', usage: '"--no blur"' },
            { word: 'Artifacts', meaning: 'Visual errors in generation', usage: '"Remove artifacts"' }
        ],
        resources: []
    },

    // ============================================
    // MODULE 3: Video Generation Prompts
    // ============================================
    'iv-vg-01': {
        title: 'Video Prompt Structure & Flow',
        summary: 'Adapting prompt engineering for the temporal dimension of video.',
        objectives: [
            'Understand the difference between Image and Video prompting',
            'Structure prompts for temporal consistency',
            'Learn to describe the "First Frame" vs the "Motion"'
        ],
        theory: [
            'Video prompting is harder than image prompting because you have to describe "Time" as well as the scene.',
            'A good video prompt has a structure: Describe the Scene (First Frame) + Describe the Motion (Action) + Describe the Style.',
            'You need to say clearly what is moving. Is the camera moving? Is the subject moving? Are both moving?',
            'Generators like Runway or Sora need you to be the director. If you just say "A car", it might sit still.',
            'Think about the flow. "A car driving down a highway" implies continuous forward motion and background blur.'
        ],
        why: 'An image captures a moment; video captures a sequence. If you only describe the scene, the video might be static.',
        prompts: {
            goal: 'Create a moving scene',
            before: 'A car driving',
            after: 'A red sports car driving fast along a coastal highway, ocean waves crashing, dynamic motion blur, camera following the car',
            resultBefore: 'Car might act weirdly.',
            resultAfter: 'Smooth driving shot.'
        },
        pitfalls: [],
        keywords: [
            { word: 'Temporal Coherence', meaning: 'Consistency over time', usage: '"Improve temporal coherence"' }
        ],
        resources: []
    },
    'iv-vg-02': {
        title: 'Motion & Action Description',
        summary: 'Specific vocabulary to control how things move in your generated videos.',
        objectives: [
            'Use verbs of motion effectively (Walking, Running, Flying, Melting)',
            'Describe speed and intensity',
            'Handle complex interactions (e.g., "Exploding into particles")'
        ],
        theory: [
            'Verbs are the most important part of a video prompt. Words like "Running", "Flying", "Melting", or "Exploding" create action.',
            'You should also describe the speed. Use keywords like "Slow Motion", "Hyper-lapse", or "Fast Paced".',
            'Describe physics details to make it look real. "Hair blowing in the wind", "Water splashing", or "Dust rising" helps the AI understand the movement.',
            'Avoid static verbs. "Standing" or "Sitting" usually results in a boring video where nothing happens.',
            'Be specific about direction. "Walking towards the camera" is very different from "Walking away into the distance".'
        ],
        why: 'Movement brings video to life. Clear action verbs prevent the "shimmering still image" effect.',
        prompts: {
            goal: 'Describe fluid motion',
            before: 'Water',
            after: 'A waterfall cascading down rocks, water splashing, mist rising, slow motion, 60fps',
            resultBefore: 'Static water.',
            resultAfter: 'Fluid, flowing water.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-vg-03': {
        title: 'Camera Movement & Shot Types',
        summary: 'Directing the camera motion: Pan, Tilt, Zoom, Dolly, and Tracking.',
        objectives: [
            'Master camera move keywords: Pan Left/Right, Tilt Up/Down, Zoom In/Out',
            'Understand "Dolly Zoom" and "Tracking Shot"',
            'Combine subject motion with camera motion'
        ],
        theory: [
            'Even if the subject is still, the camera can move to create a video. This is called "Camera Movement".',
            '"Pan" means rotating the camera left or right. "Tilt" means looking up or down.',
            '"Zoom" brings things closer or pushes them away. "Dolly" means physically moving the camera forward or backward.',
            'A "Tracking Shot" follows the subject as they move, keeping them in the center of the frame.',
            'Combining subject movement (car driving) with camera movement (drone following) creates the most cinematic results.'
        ],
        why: 'Static cameras are boring. Moving cameras add production value and guide the viewer\'s eye.',
        prompts: {
            goal: 'Cinematic reveal',
            before: 'A mountain',
            after: 'Drone shot flying over a forest, camera tilting up to reveal a majestic snow-capped mountain, cinematic movement',
            resultBefore: 'Still shot.',
            resultAfter: 'Epic drone flyover.'
        },
        pitfalls: [
            { title: 'Motion Sickness', description: 'Asking for too much camera movement (spin + zoom + pan) creates nausea.' }
        ],
        keywords: [
            { word: 'Dolly In', meaning: 'Moving the camera closer', usage: '"Camera dollies in"' },
            { word: 'Truck', meaning: 'Moving the camera sideways', usage: '"Truck left"' }
        ],
        resources: []
    },
    'iv-vg-04': {
        title: 'Time, Pace & Scene Duration',
        summary: 'Controlling the speed and timing of the generated video.',
        objectives: [
            'Create Slow Motion and Fast Forward effects',
            'Understanding frame rates (24fps, 60fps)',
            'Looping and seamless video'
        ],
        theory: [
            'You can control how fast time passes in your video. "Slow Motion" makes everything epic and emotional.',
            '"Timelapse" makes time go super fast. This is great for clouds moving, flowers blooming, or city traffic.',
            '"Real-time" means normal speed. This is best for dialogues or standard actions like walking.',
            'Frame rate matters too. "60fps" looks smooth like a video game. "24fps" looks cinematic like a movie.',
            'Consistency is key. If you mix slow motion and fast motion randomly, the video feels confusing.'
        ],
        why: 'Pacing dictates clarity. Fast action needs to be readable; slow moments create emotion.',
        prompts: {
            goal: 'Create a timelapse',
            before: 'Clouds moving',
            after: 'Timelapse of storm clouds communicating and rolling over a city, busy traffic lights streaking, fast pace',
            resultBefore: 'Normal speed clouds.',
            resultAfter: 'Dynamic timelapse.'
        },
        pitfalls: [],
        keywords: [
            { word: 'FPS', meaning: 'Frames Per Second', usage: '"Request 60fps for smoothness"' }
        ],
        resources: []
    },
    'iv-vg-05': {
        title: 'Emotion & Atmosphere in Motion',
        summary: 'Using motion to convey feeling and atmosphere.',
        objectives: [
            'Link motion to emotion (Chaos vs Calm)',
            'Use atmospheric elements (Rain, Snow, Fog) to enhance mood',
            'Pacing for emotional impact'
        ],
        theory: [
            'Motion creates emotion. Slow, smooth movement feels calm, sad, or elegant.',
            'Fast, shaky movement feels chaotic, exciting, or scary. Handheld camera motion adds realism and tension.',
            'Atmosphere helps motion feel real. Rain falling, snow drifting, or fog swirling gives the video texture.',
            'Think about the interaction. A person walking in a storm should be struggling against the wind, not walking smoothly.',
            'Matching the speed of the camera to the mood of the scene makes the video feel much more professional.'
        ],
        why: 'Video is an emotional medium. The way things move (sadly, excitedly) is just as important as how they look.',
        prompts: {
            goal: 'Sad/Melancholic scene',
            before: 'Person crying',
            after: 'A lonely figure walking in the rain, camera slowly tracking backwards, heavy rain falling, gloomy atmosphere, slow pace',
            resultBefore: 'Generic.',
            resultAfter: 'Deeply emotional clip.'
        },
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-vg-06': {
        title: 'The Power of Negative Prompting in video generation',
        summary: 'Avoiding common video artifacts (morphing, flickering) using negative prompts.',
        objectives: [
            'Identify video-specific artifacts (flicker, morphing)',
            'Use negative prompts to stabilize video',
            'Prevent static scenes'
        ],
        theory: [
            'Video AI has specific problems. Sometimes faces "melt" or objects change shape (Morphing).',
            'Sometimes the video flashes brightly for no reason (Flickering). Or the background shakes.',
            'We use negative prompts to fix this. Words like "Morphing, distortion, melting, flickering, static" tell the AI to avoid these errors.',
            'It is also useful to prevent "Frozen" videos. Adding "Static image" to the negative prompt forces the AI to create movement.',
            'Consistency is the goal. We want the car to look like the same car from start to finish.'
        ],
        why: 'AI video is prone to hallucinations. Negative prompting is your stabilizer.',
        prompts: {
            goal: 'Stabilize a face',
            before: 'Person talking',
            after: 'Person talking --no morphing, distortion, strange mouth, melting face, static',
            resultBefore: 'Face might melt.',
            resultAfter: 'Stable facial features.'
        },
        pitfalls: [],
        keywords: [
            { word: 'Flicker', meaning: 'Rapid changes in brightness or content', usage: '"Reduce flicker"' },
            { word: 'Morphing', meaning: 'Unwanted transformation of objects', usage: '"Prevent morphing"' }
        ],
        resources: []
    },

    // ============================================
    // MODULE 4: Consistency (Characters, Style, World)
    // ============================================
    'iv-cn-01': {
        title: 'Understanding Visual Consistency',
        summary: 'The challenge of keeping characters and styles the same across multiple outputs.',
        objectives: [
            'Define Visual Consistency',
            'Understand why AI struggles with it (Random Seeds)',
            'The importance of consistency for storytelling'
        ],
        theory: [
            'The biggest challenge in AI art is Consistency. By default, every time you generate an image, it is completely new and random.',
            'If you ask for "a boy" twice, you will get two different boys. This is bad for telling a story or making a comic book.',
            'Consistency means making sure the character, the style, and the world look the same in every single shot.',
            'We need tools to fight this randomness. We use things like "Seeds" and specific character descriptions to lock things in place.',
            'Without consistency, you just have a collection of random cool images. With consistency, you have a movie or a book.'
        ],
        why: 'If your main character changes hair color every scene, you lose the audience. Consistency is the difference between random art and a project.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-cn-02': {
        title: 'Character Consistency Techniques',
        summary: 'Methods to keep a character labeled "John" looking like John in 50 different images.',
        objectives: [
            'Use "Seeds" to lock generation noise',
            'Name your character (AI sometimes remembers specific names/celebrity merges)',
            'Training LoRAs (Low-Rank Adaptation) for custom characters',
            'Face swapping in post-production'
        ],
        theory: [
            'To keep a character looking the same, you can use a "Character Sheet". This is one image showing your character from the front, side, and back.',
            'You can use this sheet as a reference for the AI. Some tools allow you to upload an image prompt to guide the new generation.',
            'Another trick is using "Seeds". If you find a seed number that generates a face you like, keep using that number with slightly different prompts.',
            'For pros, there is "LoRA" (Low-Rank Adaptation). You train a tiny AI model on your character\'s face so the AI knows exactly who they are.',
            'Giving your character a unique name or specific mix of celebrities (e.g., "A mix of Tom Holland and Young Leo DiCaprio") can also help the AI remember their face.'
        ],
        why: 'Essential for narratives. A consistent character is the anchor of your story.',
        prompts: {
            goal: 'Create a consistent character base',
            before: 'A cool wizard',
            after: 'Character sheet of a young wizard with red robes, blue eyes, multiple angles, white background, consistent lighting',
            resultBefore: 'Random wizard.',
            resultAfter: 'Reference sheet for future use.'
        },
        pitfalls: [],
        keywords: [
            { word: 'LoRA', meaning: 'Small model fine-tuned on a specific subject', usage: '"Train a LoRA for consistency"' },
            { word: 'Image Prompt', meaning: 'Using an image as input alongside text', usage: '"Use image prompt for reference"' }
        ],
        resources: []
    },
    'iv-cn-03': {
        title: 'Style Locking & Visual Identity',
        summary: 'Ensuring every image in your project looks like it was drawn by the same artist.',
        objectives: [
            'Develop a strict "Style Prompt" string',
            'Use Style References (sref in Midjourney)',
            'Create a brand visual identity guide for AI'
        ],
        theory: [
            'Just like character consistency, you need style consistency. Your movie shouldn\'t switch from "Cartoon" to "Realistic Photo" randomly.',
            'Create a "Style String". This is a sentence like "Oil painting, textured heavy brushstrokes, golden palette". Copy and paste this exact string into EVERY prompt.',
            'Some tools like Midjourney have a "--sref" (Style Reference) command. You upload one image, and the AI copies its vibe perfectly.',
            'Define your global settings: The lighting, the film grain, and the color palette should be decided before you start.',
            'This creates a "Visual Identity". It makes your work look cohesive and professional, like it was all made by one artist.'
        ],
        why: 'Branding requires uniformity. A mismatched style breaks immersion.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-cn-04': {
        title: 'World-Building Consistency',
        summary: 'Design a cohesive environment where your story takes place.',
        objectives: [
            'Define the rules of your world (Physics, Lighting, Architecture)',
            'Maintain scale and geography',
            'Consistent cultural aesthetics'
        ],
        theory: [
            'Your world needs rules. If it is a Cyberpunk city, there shouldn\'t be a random medieval castle in the background.',
            'Define the architecture. Is everything made of glass? Or stone? Or metal? Keep it consistent in your descriptions.',
            'Define the technology level. Are there flying cars? Or horses? Ensure the background details match the foreground story.',
            'Lighting is part of the world too. If your planet has two suns, or is always dark, make sure every image reflects that.',
            'Great world-building is about details. Consistent signage, clothing styles, and weather help sell the illusion of a real place.'
        ],
        why: 'A believable world feels lived-in and consistent. It grounds the characters.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-cn-05': {
        title: 'Maintaining Consistency Across Generations',
        summary: 'Workflow strategies for long-term projects.',
        objectives: [
            'Versioning your prompts',
            'Using "Permutations" to test variations',
            'Post-processing workflow for unification'
        ],
        theory: [
            'Long projects take time. You might forget how you made the first image by the time you make the last one.',
            'Keep a "Prompt Bible". This is a document where you save your successful prompts, seeds, and settings.',
            'Use "Permutations". This creates variants. Change one word at a time to see how it affects the image without breaking the style.',
            'Post-processing is the final glue. A color grade filter in Photoshop or Premiere can make 10 slightly different images look like they belong together.',
            'Version Control for prompts is smart. Save your "v1" prompt before you start changing it, so you can always go back.'
        ],
        why: 'Projects span days or weeks. You must remember how you made the first image to make the last one match.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 5: Continuity (Story & Motion Flow)
    // ============================================
    'iv-ct-01': {
        title: 'Basics of Visual & Narrative Continuity',
        summary: 'How to sequence images/video clips so they tell a story.',
        objectives: [
            'Understand the "180-degree rule" (loosely)',
            'Match lighting direction between shots',
            'Ensure relative positions of characters remain logical'
        ],
        theory: [
            'Continuity means "Maintaing Logic". If a character is wearing a hat in shot A, they must be wearing a hat in shot B.',
            'Lighting direction matters. If the sun is on their left face in the wide shot, it must be on their left face in the close-up.',
            'The "180-degree rule" says you shouldn\'t flip the camera to the other side of the characters, or they will look like they switched places.',
            'Backgrounds must match. If they are in a forest, you can\'t suddenly show a building behind them unless they moved.',
            'These are simple rules, but AI often forgets them. You, the human editor, must spot these mistakes.'
        ],
        why: 'Discontinuity confuses the brain. Smooth continuity makes the edit invisible.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ct-02': {
        title: 'Scene-to-Scene Story Flow',
        summary: 'Structuring your prompts to transition between scenes.',
        objectives: [
            'Establish -> Action -> Result shot progression',
            'Using "Establishing Shots" to set context',
            'Transition techniques'
        ],
        theory: [
            'A scene usually follows a pattern: Establishing Shot -> Action Shot -> Reaction Shot.',
            'First, show the whole place (Wide shot) so the viewer knows where we are. This is the Establishing Shot.',
            'Then, show the character doing something (Medium shot). This moves the story forward.',
            'Finally, show the result or emotion (Close up). This makes us care.',
            'You need to generate these specific shots separately. Don\'t try to put everything in one image.'
        ],
        why: 'A story needs a beginning, middle, and end, even visually.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ct-03': {
        title: 'Temporal Continuity (Time & Progression)',
        summary: 'Showing the passage of time correctly.',
        objectives: [
            'Show aging or weathering over time',
            'Time of day progression (Day to Night)',
            'Seasonal changes'
        ],
        theory: [
            'Time passes in a story. You can show this visually without words.',
            'Shadows get longer as the day goes on. The light turns gold (sunset) and then blue (twilight).',
            'Objects get dirty or broken. A clean car in the start of a chase should be muddy and scratched by the end.',
            'Seasons change. Leaves turn orange in autumn and fall off in winter. Use these cues to tell the timeline.',
            'Prompting for "weathered", "aged", or "later that day" helps the AI understand your timeline.'
        ],
        why: 'Time adds weight to a story.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ct-04': {
        title: 'Motion Direction & Camera Continuity',
        summary: 'Ensuring movement flows logically from one shot to the next.',
        objectives: [
            'Match exit and entry frame directions',
            'Consistent camera movement (e.g., always moving forward)',
            'Avoiding "Crossing the line"'
        ],
        theory: [
            'If a car drives off the screen to the RIGHT, it should enter the next screen from the LEFT. This shows continuous travel.',
            'If it enters from the Right, it looks like it turned around and is coming back. This is confusing.',
            'Keep your camera movement consistent. If you are panning right in shot 1, pan right in shot 2 for a smooth flow.',
            'Sudden changes in direction (Left, then Right, then Left) feel chaotic (good for fight scenes, bad for travel).',
            'Plan your shots like a storyboard before you generate them.'
        ],
        why: 'Smooth motion connects separate clips into a single journey.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-ct-05': {
        title: 'Emotional Continuity in Visual Storytelling',
        summary: 'maintaining the emotional thread across shots.',
        objectives: [
            'Color grading for emotion',
            'Consistent facial expressions',
            'Pacing transitions'
        ],
        theory: [
            'Emotions should flow, not jump. If a character is sad, the lighting should probably stay dim or blue.',
            'If they suddenly smile in bright sunshine in the next shot, the audience will be confused. Did they get happy instantly?',
            'The pacing of the edits matters too. Sad scenes usually have slow, long shots. Action scenes have fast, short cuts.',
            'Color is an emotional language. Maintain a "mood palette" across the whole sequence.',
            'Don\'t just match the objects; match the feelings between your shots.'
        ],
        why: 'Emotion is fragile. One jarring shot breaks the spell.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 6: Editing, Refinement & Control
    // ============================================
    'iv-rf-01': {
        title: 'Iterative Prompt Refinement',
        summary: 'The cycle of generating, analyzing, and improving prompts.',
        objectives: ['Analyze output for missing elements', 'Adjust weights', 'Re-roll with new seeds'],
        theory: [
            'You will almost never get the perfect image on the first try. Prompting is a cycle of trial and error.',
            'Generate an image and look at it closely. What is missing? What is wrong? Did it ignore the "hat"?',
            'If it ignored the hat, move the word "hat" to the front of the prompt. Or add "Big Hat" to make it more important.',
            'This is called "Iterative Refinement". You change one small thing, generate again, and compare.',
            'Keep doing this until the image matches your vision. Professional prompters sometimes run 50 versions for one final image.'
        ],
        why: 'Perfection is a process.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-rf-02': {
        title: 'Improving Output Without Changing Style',
        summary: 'How to fix details without losing the "vibe".',
        objectives: ['Using "Seed" locking while changing prompts', 'Inpainting specific areas'],
        theory: [
            'Sometimes you get a perfect image, but the eyes are weird. You don\'t want to re-roll and lose the whole image.',
            'Use "Inpainting". This lets you mask (color over) just the eyes and ask the AI to "redraw eyes".',
            'The rest of the image stays exactly the same. This is essential for fixing hands, faces, or removing artifacts.',
            'You can also use "Seed Locking". Keep the same seed number but slightly change the text prompt.',
            'This keeps the composition mostly the same while allowing you to tweak details.'
        ],
        why: 'Sometimes 90% of the image is perfect. Don\'t throw it away; fix the 10%.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-rf-03': {
        title: 'Controlled Variations & Alternatives',
        summary: 'Generating options for clients or decisions.',
        objectives: ['Using chaos/stylize parameters', 'Creating A/B tests'],
        theory: [
            'A client might say "I like it, but show me something different". You need to generate variations.',
            'Tools like Midjourney have a "Chaos" parameter. High chaos means the AI takes big risks and makes very different images.',
            'Low chaos means it plays it safe and makes images that look very similar to your prompt.',
            'You can also make "Variations" (V1, V2, V3 buttons). These take one image and make 4 slightly different versions of it.',
            'Presenting options is professional. Never show a client just one image; show them a range of choices.'
        ],
        why: 'Exploration leads to happy accidents.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-rf-04': {
        title: 'Fixing Common Visual Issues',
        summary: 'Troubleshooting guide for AI artifacts.',
        objectives: ['Fixing eyes and hands', 'Removing extra limbs', 'Upscaling low-res images'],
        theory: [
            'AI hates hands. It often adds extra fingers or weird joints. This is the most common error.',
            'AI also struggles with text. It often writes gibberish instead of real words.',
            'To fix hands, you usually have to use Inpainting or Photoshop. Don\'t just hope the AI gets it right.',
            'For text, it is better to generate the image without text, and then add the text yourself in Photoshop.',
            'AI images are often low resolution. Use an "Upscaler" tool to make them sharp and print-ready.'
        ],
        why: 'AI is not perfect. You are the finisher.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-rf-05': {
        title: 'Fine-Tuning Details for Professional Results',
        summary: 'The final 1% polish.',
        objectives: ['Upscaling', 'Color Correction', 'Adding Grain/Texture'],
        theory: [
            'Raw AI images often look "plastic" or overly smooth. They lack the texture of real photos.',
            'Adding "Film Grain" or "Noise" in post-production makes the image look much more realistic.',
            'Color correction is vital. AI contrast is often too high. Adjusting curves makes it look cinematic.',
            'Upscaling is the final step. It adds tiny details to textures (skin, fabric, rock) that weren\'t there before.',
            'This final 1% of effort is what separates a hobbyist from a professional AI artist.'
        ],
        why: 'Professional work requires professional finish.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 7: AI Tools & Usage
    // ============================================
    'iv-tools-01': {
        title: 'Overview of Image Generation Tools',
        summary: 'Landscape of current top image models.',
        objectives: ['Midjourney (Art/Texture)', 'Stable Diffusion (Control)', 'DALL-E 3 (Language understanding)'],
        theory: [
            'There are three main kings of AI image generation right now: Midjourney, Stable Diffusion, and DALL-E.',
            'Midjourney is famous for being "Artistic". It makes beautiful images easily but is hard to control precisely.',
            'Stable Diffusion is "Controllable". You can run it on your own PC and use tools like ControlNet to pose characters perfectly.',
            'DALL-E (by OpenAI) is "Smart". It understands complex sentences and text better than the others.',
            'Choose your tool based on the job. Need a logo? DALL-E. Need a fantasy painting? Midjourney. Need a specific character pose? Stable Diffusion.'
        ],
        why: 'Pick the right tool for the job.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-tools-02': {
        title: 'Overview of Video Generation Tools',
        summary: 'Landscape of current top video models.',
        objectives: ['Runway Gen-2/Gen-3', 'Pika Labs', 'Sora (OpenAI)', 'Luma Dream Machine'],
        theory: [
            'Video AI is newer and changes every month. The top tools are Runway, Pika, Luma, and Sora.',
            'Runway Gen-3 is the industry standard. It gives you lots of control over camera movement and timing.',
            'Luma Dream Machine is very fast and makes realistic motion, good for quick clips.',
            'Pika Labs is great for animation and "fun" styles. It is often used for memes or cartoons.',
            'Sora (by OpenAI) is the most advanced but is not fully public yet. It creates incredibly long and coherent videos.'
        ],
        why: 'Video AI moves fast. Know the players.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-tools-03': {
        title: 'Choosing the Right Tool for the Right Task',
        summary: 'Strategic selection of AI models.',
        objectives: [' realistic photo -> Midjourney/Flux', 'Specific layout -> Stable Diffusion + ControlNet', 'Quick text -> DALL-E'],
        theory: [
            'Do not marry one tool. A carpenter uses a hammer AND a saw. You should use all the AIs.',
            'If you need a hyper-realistic photo of a person, Midjourney v6 or Flux are currently the best.',
            'If you need a specific composition (like a person standing exactly on the left), use Stable Diffusion with ControlNet.',
            'If you need to generate a sign with specific text written on it, DALL-E 3 is the king of text.',
            'Knowing the strengths and weaknesses of each model saves you hours of frustration.'
        ],
        why: 'Efficiency.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-tools-04': {
        title: 'Workflow: Prompt → Generate → Refine',
        summary: 'The standard production pipeline.',
        objectives: ['Ideation', 'Generation batching', 'Selection', 'Upscaling/Polishing'],
        theory: [
            'A professional workflow is not just "Type and Enter". It is a pipeline.',
            'Phase 1 is Ideation: Write 5-10 different prompt variations to test your idea.',
            'Phase 2 is Batching: Generate 20-50 images for each prompt. Volume is your friend. Most will be bad.',
            'Phase 3 is Selection: Pick the best 1 or 2 images from the hundreds you made.',
            'Phase 4 is Refinement: Use Inpainting and Photoshop to fix errors. Phase 5 is Upscaling for final delivery.'
        ],
        why: 'Volume assures quality in stochastic processes.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-tools-05': {
        title: 'Building a Personal Prompt Library',
        summary: 'Saving your "spells" for future use.',
        objectives: ['Storing styles', 'Reusable negative prompts', 'Organizational tools'],
        theory: [
            'You will eventually find magic combinations of words that make amazing art. Do not lose them.',
            'Create a "Prompt Library" (in Notion, Excel, or a text file). Save your best style descriptions.',
            'Save your best "Negative Prompts" too. If you have a list that perfectly removes bad hands, keep it safe.',
            'Organize them by category: "Lighting prompts", "Camera prompts", "Texture prompts".',
            'Next time you start a project, you can just mix and match these saved parts instead of typing from scratch.'
        ],
        why: 'Don\'t reinvent the wheel every time.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 8: Common Mistakes to Avoid
    // ============================================
    'iv-mst-01': {
        title: 'Vague & Overloaded Prompts',
        summary: 'Why saying too little or too much fails.',
        objectives: ['Identify keyword stuffing', 'Identify ambiguity'],
        theory: [
            'Two common mistakes: Saying too little, or saying too much.',
            'Too little: "A dog". result: A boring, random dog. You missed the opportunity to define style and mood.',
            'Too much: "4k 8k masterpiece trending on artstation best quality vivid award winning..." This is called "Keyword Stuffing".',
            'Modern AIs don\'t need 50 quality words. They confuse the model. It tries to draw "award winning" instead of your subject.',
            'Aim for the middle ground: Specific, descriptive, natural language sentences. focus on the subject, not the hype words.'
        ],
        why: 'Precision > Volume.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-mst-02': {
        title: 'Inconsistent Characters & Styles',
        summary: 'The #1 amateur mistake.',
        objectives: ['Recognizing drift', 'Fixing it with seeds/LoRAs'],
        theory: [
            'If you are making a comic book, your character cannot change clothes or face shape in every panel.',
            'This screams "Amateur AI". It breaks the story and reminds the viewer that a machine made this.',
            'Always inspect your images side-by-side. Does the lighting match? Does the art style match?',
            'If not, you must fix it. Use Inpainting, use ControlNet, or use Photoshop.',
            'Do not optimize for one cool image; optimize for the set of images working together.'
        ],
        why: 'Professionalism.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-mst-03': {
        title: 'Poor Camera & Motion Instructions',
        summary: 'Why your video looks static or nauseating.',
        objectives: ['Avoiding conflicted motion', 'Using camera language'],
        theory: [
            'In video, don\'t give conflicting instructions. "Pan Left and Pan Right" is impossible.',
            'Don\'t combine too many movements. "Zoom in, Spin around, and Truck Left" will make the viewer vomit.',
            'Keep it simple. One clear movement is usually enough to make a shot look professional.',
            'Also, remember physics. Cars don\'t drift sideways unless they are sliding. Water flows down, not up.',
            'If the motion looks weird and unnatural (physics glitch), the generated video is a failure. Re-roll it.'
        ],
        why: 'Physics exists, even in AI.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-mst-04': {
        title: 'Broken Continuity in Stories',
        summary: 'Narrative disconnection.',
        objectives: ['Checking flow', 'Matching lighting'],
        theory: [
            'Watch your cuts. If shot A ends with a door opening, shot B must start with the door open.',
            'If shot A is day, shot B cannot be night unless you show time passing.',
            'If shot A has a blue tint, shot B shouldn\'t be bright orange without a reason.',
            'These continuity errors pull the viewer out of the story. They stop looking at the character and start looking at the mistakes.',
            'Be your own harshest critic. If the cut doesn\'t feel smooth, don\'t use it.'
        ],
        why: 'Storytelling.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-mst-05': {
        title: 'Unrealistic Expectations from AI',
        summary: 'Knowing limitations.',
        objectives: ['Text rendering issues', 'Complex logic fails'],
        theory: [
            'AI is magical, but it is not smart. It struggles with logic and math.',
            'If you ask for "Five people holding hands", it might draw 6 people, or 4 hands, or merged arms.',
            'If you ask for specific text, it often misspells it. Use AI for the art, and Photoshop for the text overlay.',
            'Complex interactions like "A man jumping over a car while catching a ball" are hard to render perfectly.',
            'Know the limits. If the AI fails 50 times, maybe you need to composite two images together in Photoshop instead.'
        ],
        why: 'Sanity.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },

    // ============================================
    // MODULE 9: Copyright, Legal & Ethical AI Generation
    // ============================================
    'iv-leg-01': {
        title: 'Understanding Copyright in AI-Generated Content',
        summary: 'The current legal landscape of AI art.',
        objectives: ['US Copyright Office stance', 'Human authorship requirements'],
        theory: [
            'Who owns AI art? Currently, in the US, images created purely by AI cannot be copyrighted.',
            'The law says copyright requires "Human Authorship". A machine cannot be an author.',
            'However, if you significantly edit the image (Photoshop, paint over it), you might be able to copyright your edits.',
            'The prompts themselves are usually not considered copyrightable either.',
            'This law is changing fast, but for now, assume raw AI art is Public Domain (anyone can use it).'
        ],
        why: 'Protect your work.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-leg-02': {
        title: 'Ethical AI Generation & Avoiding Harm',
        summary: 'Responsible usage.',
        objectives: ['Bias in datasets', 'Deepfakes', 'harmful content'],
        theory: [
            'AI models have bias. If you ask for "CEO", it mostly draws white men. Be aware of this and correct it in your prompts.',
            'Do not create "Deepfakes" (fake images of real people) without consent. This can be illegal and is definitely unethical.',
            'Avoid creating harmful, violent, or hateful content. Most platforms will ban you for this.',
            'Respect artists. Do not use AI to mimic a specific small artist\'s style to steal their work.',
            'Use this powerful tool to create new things, not to hurt others or deceive the public.'
        ],
        why: 'Ethics matters.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-leg-03': {
        title: 'Commercial Licensing & Usage Rights',
        summary: 'Can I sell this?',
        objectives: ['Platform TOS (Midjourney, etc.)', 'Client disclosure'],
        theory: [
            'Can you sell AI art? It depends on the tool you used.',
            'Midjourney, for example, allows commercial use ONLY if you are a paid subscriber. Free tier users own nothing.',
            'Read the Terms of Service (TOS) of every tool you use. Some open source models allow everything.',
            'Always be transparent with clients. Tell them if you used AI. Some contracts forbid it.',
            'If you deliver AI work as "original human art", you are committing fraud. Be honest.'
        ],
        why: 'Don\'t get sued.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-leg-04': {
        title: 'Content Authenticity & Disclosure',
        summary: 'Labeling AI content.',
        objectives: ['Watermarking', 'Metadata standards (C2PA)'],
        theory: [
            'In a world of deepfakes, Authenticity is currency. People want to know what is real.',
            'There are new standards like C2PA that bake "AI History" into the file metadata.',
            'Platforms like Instagram and TikTok are starting to require you to label AI content.',
            'Watermarking your AI art is a good practice if you want to be transparent.',
            'Eventually, all browsers might label AI images automatically. Stay ahead of the curve.'
        ],
        why: 'Truth.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    },
    'iv-leg-05': {
        title: 'International Laws & Cultural Considerations',
        summary: 'Global perspective.',
        objectives: ['EU AI Act', 'Cultural sensitivity'],
        theory: [
            'AI laws are different everywhere. The EU has very strict AI regulations (The AI Act).',
            'China has different rules about generating content. The US has different copyright rules.',
            'If you work internationally, you need to know these laws.',
            'Also be culturally sensitive. Symbols mean different things in different cultures.',
            'AI is global, but your audience might be local. Respect their norms and laws.'
        ],
        why: 'Global reach.',
        prompts: {},
        pitfalls: [],
        keywords: [],
        resources: []
    }
};
