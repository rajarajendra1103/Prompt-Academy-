import { img } from "framer-motion/client";

const webDevModule1 = {
    courseTitle: 'Web Development',
    moduleNumber: 1,
    moduleName: 'Idea → Prompts (Website Planning & Structure)',
    totalLessons: 12,

    lessons: [
        // ... (preserving all 12 lessons internally)

        // ============================================
        // LESSON 01
        // ============================================
        {
            lessonCode: 'WP-IP-01',
            title: 'Introduction to Prompt Engineering',
            summary: 'Learn the fundamentals of prompt engineering and how AI can transform your web development workflow from idea to deployment.',
            objectives: [
                'Understand what prompt engineering is and why it matters for web development',
                'Learn the key principles of writing effective prompts for AI tools',
                'Identify different types of prompts used throughout the web development lifecycle',
                'Practice basic prompt structures that yield better AI responses'
            ],
            theory: [
                'Prompt engineering is the skill of communicating with AI tools using clear, specific instructions to get the exact output you need. Think of it as learning a new language where precision matters.',
                'In web development, prompts help you generate code, design layouts, write content, debug errors, and plan entire projects. Instead of writing everything from scratch, you guide AI to do the heavy lifting.',
                'A good prompt has three key parts: context (what you\'re building), task (what you want the AI to do), and constraints (any specific requirements or limitations).',
                'The quality of your AI output depends directly on the quality of your prompt. Vague prompts give vague results, while detailed prompts give precise, usable code.',
                'Prompt engineering is not about replacing your skills—it\'s about amplifying them. You still need to understand web development concepts to write good prompts and evaluate AI outputs.',
                'Different AI tools (ChatGPT, Claude, Copilot) may respond differently to the same prompt, so learning to adjust your approach is important.'
            ],
            why: 'In real-world projects, prompt engineering saves massive amounts of time. Instead of spending 2 hours coding a contact form from scratch, you can prompt AI to generate it in 2 minutes, then spend your time customizing and refining it. Professional developers use prompts to quickly prototype ideas for clients, generate boilerplate code, create documentation, and solve complex problems. For example, a freelance web developer can use prompts to generate a complete landing page structure in minutes, allowing them to take on more clients and deliver faster. Startups use prompt engineering to build MVPs (Minimum Viable Products) quickly without large development teams. The skill directly translates to faster delivery, lower costs, and more creative freedom.',
            prompts: {
                goal: 'Generate a responsive navigation bar with logo and mobile menu',
                before: 'Make a navbar',
                after: 'Create a responsive navigation bar for a portfolio website with the following requirements:\n- Logo on the left (text-based: "John Doe")\n- Menu items on the right: Home, About, Projects, Contact\n- Mobile hamburger menu that appears below 768px width\n- Use Tailwind CSS for styling\n- Smooth transitions on hover\n- Dark background (#1a1a1a) with white text\n- Include proper HTML5 semantic tags',
                resultBefore: 'AI gives you a basic, unstyled <nav> tag with minimal functionality, requiring extensive manual work to make it usable.',
                resultAfter: 'AI generates a complete, production-ready navigation component with responsive behavior, proper styling, accessibility features, and mobile menu logic—ready to customize and deploy.'
            },
            pitfalls: [
                { title: 'Being Too Vague', description: 'Saying "build me a website" gives AI nothing to work with. Always specify the type, purpose, features, and tech stack.' },
                { title: 'Assuming AI Knows Your Context', description: 'AI doesn\'t know you\'re building an e-commerce site unless you tell it. Always provide project context in your prompts.' },
                { title: 'Accepting First Output Without Review', description: 'AI makes mistakes. Always review, test, and refine the generated code. Treat AI as a junior developer who needs supervision.' },
                { title: 'Overloading One Prompt', description: 'Asking for "a complete e-commerce website with payment, auth, and admin panel" in one prompt leads to incomplete or buggy code. Break it into smaller tasks.' },
                { title: 'Not Learning the Basics', description: 'Relying 100% on AI without understanding HTML, CSS, or JavaScript means you can\'t fix issues or customize outputs effectively.' }
            ],
            keywords: [
                { word: 'Prompt', meaning: 'An instruction or question you give to an AI tool to get a specific output', usage: '"Write me a prompt to generate a hero section for a SaaS landing page"' },
                { word: 'Context', meaning: 'Background information about your project that helps AI understand what you\'re building', usage: '"I\'m building a food delivery app (context), create the restaurant listing component"' },
                { word: 'Constraints', meaning: 'Specific limitations or requirements for the AI output (tech stack, style, size, etc.)', usage: '"Generate a login form (constraint: using React and Tailwind CSS only)"' },
                { word: 'Iteration', meaning: 'The process of refining prompts and outputs through multiple attempts', usage: '"My first prompt didn\'t work well, so I iterated by adding more specific details"' },
                { word: 'Boilerplate', meaning: 'Standard, repetitive code that forms the foundation of a project', usage: '"Use AI to generate boilerplate code for a React app with routing and state management"' }
            ],
            resources: [
                { title: 'Prompt Engineering Guide - Complete Beginner Tutorial', url: 'https://www.youtube.com/results?search_query=prompt+engineering+for+web+developers+tutorial' },
                { title: 'How to Write Better Prompts for ChatGPT & AI Tools', url: 'https://www.youtube.com/results?search_query=how+to+write+better+prompts+chatgpt' },
                { title: 'AI-Powered Web Development Workflow', url: 'https://www.youtube.com/results?search_query=ai+powered+web+development+workflow' }
            ],
            notes: 'Instructor: Start with live demonstrations of bad vs good prompts. Show students the dramatic difference in output quality. Have them practice rewriting vague prompts to be more specific. Emphasize that prompt engineering is a skill that improves with practice—their first prompts won\'t be perfect, and that\'s okay. Encourage experimentation and iteration.'
        },

        // ============================================
        // LESSON 02
        // ============================================
        {
            lessonCode: 'WP-IP-02',
            title: 'Anatomy of an Effective Prompt',
            summary: 'Break down the components of high-quality prompts and learn the formula for getting consistent, professional results from AI tools.',
            objectives: [
                'Understand the 5 core components of effective prompts: Role, Context, Task, Format, and Tone',
                'Learn how to structure prompts for maximum clarity and precision',
                'Practice writing prompts using proven templates and patterns',
                'Identify which components are essential vs optional for different tasks'
            ],
            theory: [
                'Every effective prompt follows a structure, even if not explicitly stated. The five key components are: Role (who AI should act as), Context (what\'s the situation), Task (what to do), Format (how to present output), and Tone (style of communication).',
                'Role setting helps AI understand the expertise level needed. "Act as a senior frontend developer" gives different results than "act as a beginner-friendly coding tutor." The role shapes the complexity and terminology used.',
                'Context provides the background AI needs to make informed decisions. Include project type, target audience, technical constraints, and any relevant business requirements. More context = more relevant outputs.',
                'Task specification should be crystal clear with action verbs: "generate," "create," "refactor," "debug," "explain," "optimize." Ambiguous tasks like "help with my code" produce ambiguous results.',
                'Format specification controls output structure: "provide as HTML code," "create a bullet list," "write in JSON format," "use TypeScript with comments." This ensures you get usable, copy-paste-ready results.',
                'Tone and constraints add the final polish: "use modern ES6+ syntax," "keep it under 50 lines," "add detailed comments," "make it beginner-friendly." These details prevent you from getting technically correct but practically unusable code.'
            ],
            why: 'Professional developers who master prompt anatomy save hours daily. Instead of wrestling with AI through 10 back-and-forth messages to get acceptable code, they get it right in 1-2 attempts by structuring prompts properly. Agencies use prompt templates to maintain consistency across team members—junior developers can produce senior-level outputs by following the template. In client work, well-structured prompts help you quickly generate mockups and prototypes during discovery calls, impressing clients with speed. Open-source contributors use structured prompts to generate documentation that matches project standards. The anatomy approach transforms prompting from random trial-and-error into a repeatable, professional skill.',
            prompts: {
                goal: 'Create a reusable card component for a blog',
                before: 'Make a blog card component',
                after: '[ROLE] Act as an experienced React developer.\n\n[CONTEXT] I\'m building a tech blog website where articles are displayed in a grid layout on the homepage.\n\n[TASK] Create a reusable BlogCard component that displays:\n- Article thumbnail image (top)\n- Category badge (overlaid on image, top-left)\n- Article title (below image)\n- Short excerpt (2 lines max, with ellipsis)\n- Author name and avatar (bottom left)\n- Reading time and publish date (bottom right)\n\n[FORMAT] Provide as:\n1. React functional component using TypeScript\n2. Tailwind CSS for styling\n3. Props interface clearly defined\n4. Add brief comments explaining key sections\n\n[CONSTRAINTS]\n- Component should be mobile-responsive\n- Use semantic HTML tags\n- Include hover effects (subtle shadow and scale)\n- Keep code under 80 lines',
                resultBefore: 'Generic card with minimal structure, no styling details, random prop names, and no guidance on how to use it.',
                resultAfter: 'Professional, production-ready component with proper TypeScript types, responsive design, accessibility features, reusable structure, and clear documentation—exactly matching your specifications.'
            },
            pitfalls: [
                { title: 'Skipping the Role', description: 'Without role context, AI defaults to generic responses. "Act as senior dev" vs "act as beginner tutor" produces dramatically different code complexity.' },
                { title: 'Providing Zero Context', description: 'AI can\'t read your mind. If you\'re building an enterprise dashboard, say so—otherwise you might get consumer-facing code with wrong assumptions.' },
                { title: 'Vague Task Verbs', description: 'Words like "improve," "fix," or "update" are too broad. Be specific: "refactor for performance," "fix null pointer bug," "update to use React hooks."' },
                { title: 'Ignoring Format Requirements', description: 'If you need TypeScript but don\'t specify, you\'ll get JavaScript. If you need inline comments but don\'t ask, you won\'t get them. Be explicit.' },
                { title: 'Contradicting Constraints', description: 'Asking for "detailed, comprehensive code under 20 lines" creates impossible constraints. Make sure your requirements are compatible.' }
            ],
            keywords: [
                { word: 'Role', meaning: 'The expertise level or persona you want AI to adopt when responding', usage: '"Act as a senior full-stack developer with 10 years of experience in React and Node.js"' },
                { word: 'Context', meaning: 'Background information about the project, problem, or environment', usage: '"I\'m building a real-time chat app for healthcare professionals (HIPAA compliant)"' },
                { word: 'Task', meaning: 'The specific action or outcome you want AI to deliver', usage: '"Create a user authentication system with email verification and password reset"' },
                { word: 'Format', meaning: 'The structure, language, or presentation style of the output', usage: '"Provide the solution as a React component with TypeScript and inline comments"' },
                { word: 'Constraints', meaning: 'Limitations or requirements that must be followed', usage: '"Use only vanilla JavaScript, no libraries. Code must work in IE11. Keep under 100 lines."' }
            ],
            resources: [
                { title: 'The Perfect Prompt Structure - Step by Step Guide', url: 'https://www.youtube.com/results?search_query=perfect+prompt+structure+ai' },
                { title: 'Advanced Prompt Engineering Techniques for Developers', url: 'https://www.youtube.com/results?search_query=advanced+prompt+engineering+developers' },
                { title: 'ChatGPT Prompt Templates for Coding', url: 'https://www.youtube.com/results?search_query=chatgpt+prompt+templates+coding' }
            ],
            notes: 'Instructor: Provide a prompt anatomy checklist students can reference. Do live refactoring of bad prompts—show before/after results dramatically. Have students analyze existing prompts and identify missing components. Create a class exercise where students build their own prompt template for their specific use case. Emphasize that anatomy is a framework, not a rigid rule—adapt based on the task.'
        },

        // ============================================
        // LESSON 03
        // ============================================
        {
            lessonCode: 'WP-IP-03',
            title: 'Converting a Website Idea into a Clear Goal',
            summary: 'Learn how to transform vague website ideas into concrete, actionable goals that AI can help you build.',
            objectives: [
                'Break down abstract ideas into specific, measurable website goals',
                'Identify the core purpose and success criteria for a website project',
                'Use prompts to refine and validate website concepts',
                'Create a one-page project brief from a raw idea using AI assistance'
            ],
            theory: [
                'Most website ideas start vague: "I want a website for my business" or "I need an online presence." AI can help you transform these into actionable goals, but you need to ask the right questions first.',
                'A clear goal answers three questions: Who is this for? (target audience), What problem does it solve? (purpose), and How will success be measured? (conversion, engagement, sales). Without these, you\'re building blindly.',
                'Use AI to conduct an "idea interview"—ask it to play the role of a business consultant and ask you clarifying questions about your concept. This uncovers assumptions and gaps you hadn\'t considered.',
                'The clearer your goal, the better AI can help. "Build a website" vs "Create a 5-page portfolio for freelance photographers to showcase work and get client inquiries" produces drastically different planning.',
                'Goals should be SMART: Specific (exact features), Measurable (how to track success), Achievable (realistic scope), Relevant (solves real problem), Time-bound (when to launch). AI can help validate each criterion.',
                'Converting ideas to goals is iterative. Start broad, let AI ask questions, refine based on answers, repeat until you have crystal-clear direction. This process prevents wasted development time later.'
            ],
            why: 'In real projects, unclear goals are the #1 cause of failure. Developers spend weeks building features clients don\'t actually need because nobody defined clear goals upfront. Freelancers lose money on scope creep when initial ideas weren\'t properly defined. Using AI to clarify goals in the planning phase saves massive rework later. For example, a small business owner thinking "I need a website" might discover through AI-guided questions that they actually need "a booking system for appointments" not a traditional marketing site. Startups use this process to validate if their website idea solves a real problem before spending months building. Clear goals also make it easier to estimate time and cost accurately, improving client relationships and project profitability.',
            prompts: {
                goal: 'Convert a vague idea into a clear website goal statement',
                before: 'I want to make a website for my coffee shop',
                after: 'Help me refine this website idea into a clear project goal:\n\nInitial idea: "I want a website for my coffee shop"\n\nAsk me targeted questions to uncover:\n1. Primary purpose (information, sales, bookings, community?)\n2. Target audience (local customers, tourists, coffee enthusiasts?)\n3. Key actions users should take (find location, order online, learn about coffee?)\n4. Success metrics (foot traffic increase, online orders, social follows?)\n5. Must-have features vs nice-to-have\n6. Constraints (budget, timeline, technical skills)\n\nAfter I answer, create a one-paragraph clear goal statement following this format:\n"Build a [type] website for [audience] that enables them to [key actions] resulting in [measurable outcome]. Must include [core features]. Success measured by [metrics]."',
                resultBefore: 'AI makes assumptions and starts generating generic coffee shop website templates without understanding your specific needs, leading to mismatch between output and actual requirements.',
                resultAfter: 'AI asks clarifying questions, helps you discover that you actually need a "menu showcase + online ordering system for local customers" not a generic coffee shop site, and produces a specific goal statement that guides all future development decisions.'
            },
            pitfalls: [
                { title: 'Accepting First Idea as Final', description: 'Your initial concept is rarely your best concept. Use AI to challenge and refine it through questioning before committing to build.' },
                { title: 'Copying Competitors Blindly', description: 'Just because a competitor has certain features doesn\'t mean you need them. Define goals based on your unique value, not imitation.' },
                { title: 'Skipping Success Metrics', description: 'Building a website without defining what "success" looks like means you\'ll never know if it worked. Always define measurable outcomes.' },
                { title: 'Overloading With Features', description: 'Trying to solve every possible use case in version 1 creates unfocused, delayed projects. Start with core goal, add features later.' },
                { title: 'Ignoring Technical Reality', description: 'Having a goal that requires features beyond your timeline or budget creates frustration. Let AI help validate feasibility early.' }
            ],
            keywords: [
                { word: 'Goal Statement', meaning: 'A clear, concise description of what the website should accomplish', usage: '"Our goal is to increase online bookings by 40% through a mobile-first scheduling system"' },
                { word: 'Target Audience', meaning: 'The specific group of people the website is designed to serve', usage: '"Our target audience is busy professionals aged 25-40 who value convenience"' },
                { word: 'Success Metrics', meaning: 'Measurable indicators that show whether the website is achieving its goals', usage: '"Success metrics: 100 new signups/month, 30% conversion rate, under 3sec page load"' },
                { word: 'MVP (Minimum Viable Product)', meaning: 'The simplest version of a website that still solves the core problem', usage: '"Our MVP includes booking system and payment—we\'ll add the blog and reviews later"' },
                { word: 'Scope Creep', meaning: 'When a project grows beyond its original goals, adding features and complexity', usage: '"We started with a 5-page site but scope creep added membership system, forum, and shop"' }
            ],
            resources: [
                { title: 'How to Define Website Goals & Requirements', url: 'https://www.youtube.com/results?search_query=how+to+define+website+goals+requirements' },
                { title: 'From Idea to Website - Planning Your Project', url: 'https://www.youtube.com/results?search_query=website+planning+from+idea+to+launch' },
                { title: 'Creating a Website Brief - Complete Guide', url: 'https://www.youtube.com/results?search_query=creating+website+project+brief' }
            ],
            notes: 'Instructor: Run a live "idea refinement" session where students share vague ideas and the class uses AI to clarify them through questioning. Show real examples of projects that failed due to unclear goals. Have students write goal statements for their own projects and peer-review them. Emphasize that time spent clarifying goals saves 10x time in development. Create a goal statement template students can reuse.'
        },

        // ============================================
        // LESSON 04
        // ============================================
        {
            lessonCode: 'WP-IP-04',
            title: 'Website Type Identification (Portfolio, E-commerce, Blog, SaaS, Landing Page)',
            summary: 'Learn to identify and categorize website types, understanding the unique requirements and prompting strategies for each category.',
            objectives: [
                'Identify the main website types and their characteristics',
                'Understand the unique features and requirements for each website type',
                'Write category-specific prompts that generate appropriate solutions',
                'Match website ideas to the correct type for optimal development approach'
            ],
            theory: [
                'Different website types have fundamentally different structures, features, and purposes. A portfolio needs showcase galleries; an e-commerce site needs shopping cart and payment; a SaaS needs authentication and dashboards. Identifying the type early shapes your entire development approach.',
                'Portfolio websites focus on visual presentation of work, projects, or services. They need: image galleries, case studies, about section, contact forms, and often minimal navigation for clean presentation.',
                'E-commerce websites prioritize product browsing and transactions. They need: product catalogs, search/filter, shopping cart, checkout, payment integration, user accounts, order tracking, and inventory management.',
                'Blogs and content sites emphasize readability and content discovery. They need: article listings, categories, tags, search, author pages, comments, RSS feeds, and SEO optimization.',
                'SaaS (Software as a Service) websites are web applications with accounts. They need: authentication, user dashboards, subscription management, data storage, real-time updates, and admin panels.',
                'Landing pages are focused on single conversion goals. They need: hero section, value propositions, social proof, call-to-action buttons, lead capture forms, and minimal navigation to prevent distraction.'
            ],
            why: 'In real projects, misidentifying website type leads to wrong tech stack choices and wasted effort. A client asking for a "business website" might actually need an e-commerce platform, not a simple landing page. Freelancers who correctly identify type upfront can give accurate quotes and timelines. When prompting AI, specifying the website type dramatically improves output quality—AI knows that "e-commerce product page" needs different components than "portfolio project showcase." Agencies use type identification to assign the right developers and tools to projects. Understanding types also helps you communicate with clients using correct terminology.',
            prompts: {
                goal: 'Identify website type and generate appropriate structure',
                before: 'Create a website for my photography business',
                after: 'Analyze this website requirement and identify the correct type:\n\nRequirement: "I\'m a wedding photographer. I want to show my work to potential clients, let them see packages and prices, book consultations, and pay deposits online."\n\nFirst, identify if this is:\n- Portfolio (showcase work)\n- E-commerce (sell products)\n- Booking/Service site (appointments)\n- Hybrid (combination)\n\nThen, list the specific features needed for this type:\n- Essential features (must-have)\n- Common features (should-have)\n- Optional features (nice-to-have)\n\nFinally, suggest the appropriate tech stack and structure for this website type.',
                resultBefore: 'AI assumes it\'s just a portfolio and suggests simple gallery, missing the booking and payment requirements entirely.',
                resultAfter: 'AI identifies it as hybrid (portfolio + booking + payment), lists all necessary features for this combination, and suggests appropriate tools like Stripe for payments and Calendly integration for bookings.'
            },
            pitfalls: [
                { title: 'Assuming Single Type', description: 'Many websites are hybrids (e.g., blog + e-commerce). Don\'t force into one category—identify all components.' },
                { title: 'Confusing Landing Page with Full Site', description: 'Landing pages are single-purpose. If client needs multiple pages and functions, it\'s not a landing page.' },
                { title: 'Over-Engineering Simple Needs', description: 'Client wanting to showcase work doesn\'t need full e-commerce cart. Match complexity to actual type.' },
                { title: 'Under-Estimating SaaS Complexity', description: 'SaaS sites are full applications, not simple websites. They require significantly more development effort.' },
                { title: 'Ignoring Mobile Requirements', description: 'Some types (e.g., on-the-go booking sites) are mobile-first. Type identification should consider primary usage.' }
            ],
            keywords: [
                { word: 'Portfolio Site', meaning: 'Website designed to showcase work, skills, or projects', usage: '"Build a portfolio site for graphic designer with project case studies"' },
                { word: 'E-commerce', meaning: 'Website that sells physical or digital products online', usage: '"E-commerce site needs product catalog, cart, and Stripe payment integration"' },
                { word: 'SaaS (Software as a Service)', meaning: 'Web application accessed through subscription or account', usage: '"SaaS dashboard requires user authentication, data visualization, and settings"' },
                { word: 'Landing Page', meaning: 'Single-page site focused on one conversion goal', usage: '"Landing page for webinar signup: hero, benefits, countdown, registration form"' },
                { word: 'Hybrid Site', meaning: 'Website combining features from multiple types', usage: '"Hybrid: blog for content marketing + e-commerce for product sales"' }
            ],
            resources: [
                { title: 'Types of Websites Explained - Complete Guide', url: 'https://www.youtube.com/results?search_query=types+of+websites+explained' },
                { title: 'How to Choose the Right Website Type for Your Business', url: 'https://www.youtube.com/results?search_query=choose+website+type+business' },
                { title: 'Portfolio vs E-commerce vs SaaS - Key Differences', url: 'https://www.youtube.com/results?search_query=portfolio+ecommerce+saas+differences' }
            ],
            notes: 'Instructor: Show real examples of each website type. Have students categorize 10 different websites and explain their reasoning. Create decision tree: "Does it sell products? → E-commerce. Does it require login? → SaaS. Is it one page with one goal? → Landing page." Practice identifying hybrid types.'
        },

        // ============================================
        // LESSON 05
        // ============================================
        {
            lessonCode: 'WP-IP-05',
            title: 'Choosing the Right Tech Stack',
            summary: 'Master the art of selecting the optimal technology stack for different website types using AI-assisted decision-making.',
            objectives: [
                'Understand the major tech stack options for web development',
                'Match tech stacks to specific project requirements and constraints',
                'Use AI to evaluate pros/cons of different technology choices',
                'Make informed decisions about frontend, backend, and deployment technologies'
            ],
            theory: [
                'A tech stack is the combination of programming languages, frameworks, and tools used to build a website. Common stacks include: MERN (MongoDB, Express, React, Node), LAMP (Linux, Apache, MySQL, PHP), JAMstack (JavaScript, APIs, Markup), and many others.',
                'Choosing the right stack depends on multiple factors: project type, team skills, scalability needs, budget, deployment options, and timeline. There\'s no universal "best" stack—only the best stack for your specific situation.',
                'Frontend choices include: React (component-based, large ecosystem), Vue (progressive, easier learning curve), vanilla JavaScript (no dependencies, full control), or server-side rendering with frameworks like Next.js for better SEO.',
                'Backend options vary by language and purpose: Node.js (JavaScript everywhere, fast for APIs), Python/Django (batteries-included, great for data), PHP/Laravel (established, shared hosting friendly), or serverless functions (Firebase, Netlify) for simpler needs.',
                'Database decisions: SQL (PostgreSQL, MySQL) for structured data and complex queries, NoSQL (MongoDB, Firebase) for flexible schemas and real-time features, or even headless CMS (Strapi, Contentful) for content-heavy sites.',
                'AI can help evaluate trade-offs: "Compare React vs Vue for a small e-commerce site" or "Suggest the simplest stack for a landing page with email capture." It can also warn about over-engineering: using React for a 3-page static site is overkill.'
            ],
            why: 'Wrong tech stack choices cost time and money. A developer choosing a complex stack for a simple blog wastes weeks on setup that could be done in hours with the right tools. Startups picking non-scalable stacks have to rebuild from scratch when they grow. Freelancers need to balance "best technology" with what they can maintain long-term for clients. Using AI to guide stack selection helps avoid these mistakes—AI can compare options objectively based on your constraints. For example, a non-technical client needs hosting, so suggesting a stack that works with simple shared hosting (like PHP) is smarter than suggesting one requiring advanced server configuration (like custom Node.js).',
            prompts: {
                goal: 'Select appropriate tech stack for a specific project',
                before: 'What tech stack should I use for my project?',
                after: 'Help me choose the right tech stack for this project:\n\nProject: Real estate listing website\nFeatures: Browse properties, search/filter, contact agents, save favorites, admin panel to add/edit listings\nConstraints:\n- Team: 1 developer (me), intermediate JavaScript skills, beginner backend\n- Timeline: 6 weeks\n- Budget: Low (prefer free/cheap hosting)\n- Future: Might add payment for premium listings later\n\nFor each part of the stack, suggest 2-3 options and explain:\n1. Frontend framework (or vanilla JS?)\n2. Backend (or use headless CMS?)\n3. Database\n4. Hosting/deployment\n5. Other tools needed\n\nPrioritize: ease of learning, deployment simplicity, and staying within budget.',
                resultBefore: 'AI suggests the latest trendy stack without considering your skills, timeline, or budget—leading to overwhelm and project abandonment.',
                resultAfter: 'AI recommends: React (you know JS already) + Firebase (handles backend/database/auth, free tier available) + Netlify hosting (free for frontend), explaining this stack minimizes new learning while meeting all requirements within constraints.'
            },
            pitfalls: [
                { title: 'Following Trends Blindly', description: 'Just because a framework is popular doesn\'t mean it\'s right for your project. Evaluate based on actual needs.' },
                { title: 'Over-Engineering Small Projects', description: 'Using microservices architecture for a 5-page site is absurd. Match stack complexity to project complexity.' },
                { title: 'Ignoring Maintenance Burden', description: 'Choosing cutting-edge tech might mean dealing with frequent breaking changes and limited community support.' },
                { title: 'Not Considering Hosting Costs', description: 'Some stacks require expensive servers. Factor hosting costs into the decision, especially for client projects.' },
                { title: 'Picking Technologies You Don\'t Know', description: 'Learning a new stack and building a project simultaneously doubles the timeline. Be honest about your skills.' }
            ],
            keywords: [
                { word: 'Tech Stack', meaning: 'The combination of technologies used to build a web application', usage: '"Our tech stack: React frontend, Node.js backend, PostgreSQL database, AWS hosting"' },
                { word: 'Frontend Framework', meaning: 'Library/framework for building user interfaces (React, Vue, Angular)', usage: '"Choose React as frontend framework for its component reusability"' },
                { word: 'Backend Framework', meaning: 'Server-side framework handling business logic, databases, APIs', usage: '"Using Express.js as backend framework for our REST API"' },
                { word: 'JAMstack', meaning: 'Modern architecture: JavaScript, APIs, and Markup (static sites with dynamic features)', usage: '"JAMstack approach: Next.js static generation + API routes + Markdown content"' },
                { word: 'Serverless', meaning: 'Cloud functions that run code without managing servers', usage: '"Using Firebase serverless functions to handle payment processing"' }
            ],
            resources: [
                { title: 'How to Choose a Tech Stack for Web Development', url: 'https://www.youtube.com/results?search_query=choose+tech+stack+web+development' },
                { title: 'MERN Stack vs LAMP Stack - Which Should You Learn?', url: 'https://www.youtube.com/results?search_query=mern+vs+lamp+stack' },
                { title: 'Best Tech Stack for Beginners in 2024', url: 'https://www.youtube.com/results?search_query=best+tech+stack+beginners' }
            ],
            notes: 'Instructor: Create a decision matrix: project requirements vs tech stack capabilities. Show real examples of project-stack matches and mismatches. Have students evaluate their own project needs and justify tech choices using AI assistance. Emphasize: there\'s no perfect stack, only appropriate stacks.'
        },

        // ============================================
        // LESSON 06
        // ============================================
        {
            lessonCode: 'WP-IP-06',
            title: 'Generating Feature Lists for a Website',
            summary: 'Learn how to use AI to create comprehensive, prioritized feature lists that guide website development from concept to completion.',
            objectives: [
                'Generate complete feature lists from website ideas using AI prompts',
                'Prioritize features using MoSCoW method (Must, Should, Could, Won\'t)',
                'Break down high-level features into specific technical requirements',
                'Validate feature necessity against project goals and user needs'
            ],
            theory: [
                'A feature list is a detailed inventory of everything your website will do. It transforms "I want a blog" into specific items like: user registration, article creation, comment system, search, categories, etc.',
                'AI excels at feature brainstorming because it can draw from thousands of websites to suggest common patterns you might forget. Ask AI "What features does a typical X need?" to get a comprehensive starting point.',
                'Not all features are equal. Use MoSCoW prioritization: Must have (core functionality), Should have (important but not critical), Could have (nice additions), Won\'t have this time (future considerations).',
                'Features should be specific and measurable, not vague. "Good user experience" is not a feature. "Password strength indicator showing real-time feedback" is a feature.',
                'AI can help identify missing features by analyzing user journeys: "User wants to buy product" → What features support each step? Browse → Search → Add to cart → Checkout → Pay → Confirm → Track order.',
                'Beware of feature creep—AI might suggest 50+ features. Your job is to trim the list to what\'s actually needed for MVP. Save advanced features for version 2.'
            ],
            why: 'Professional projects fail when developers build features nobody asked for or forget critical features users expect. A clear feature list prevents this. Freelancers use feature lists in proposals to set clear expectations and avoid scope creep. When clients say "add this," you can say "that wasn\'t in the feature list, it will extend timeline." Startups use MVP feature lists to launch fast—build must-haves first, measure user response, then decide on should-haves. Development teams use feature lists to divide work and estimate timelines. AI-generated feature lists ensure you don\'t miss industry-standard expectations—users expect e-commerce sites to have wishlists and order tracking, even if clients don\'t mention it.',
            prompts: {
                goal: 'Generate and prioritize feature list for a project',
                before: 'List features for an online learning platform',
                after: 'Generate a comprehensive, prioritized feature list for an online learning platform for professional skill development:\n\nContext:\n- Target users: Working professionals learning new skills\n- Business model: Subscription-based access to courses\n- Platform: Web-based (mobile-responsive)\n\nGenerate features in these categories:\n1. User Management (registration, profiles, etc.)\n2. Course Content (videos, lessons, materials)\n3. Learning Experience (progress tracking, certificates)\n4. Community (forums, Q&A, peer interaction)\n5. Business/Admin (payments, analytics, content management)\n\nFor EACH feature, provide:\n- Feature name\n- Brief description (1 sentence)\n- Priority (Must/Should/Could/Won\'t for MVP)\n- Why it\'s needed (user value)\n\nFocus on what makes learning platforms successful.',
                resultBefore: 'AI gives generic list: "courses, videos, users" with no detail, prioritization, or context about why each feature matters.',
                resultAfter: 'AI provides organized, prioritized list of 30+ specific features like "Video progress resume (Must): Users can continue watching from where they left off—critical for good UX" with clear rationale for each priority level.'
            },
            pitfalls: [
                { title: 'Listing Features Without Priorities', description: 'Every feature can\'t be top priority. Without MoSCoW or similar method, teams waste time on low-value items.' },
                { title: 'Confusing Features with Technologies', description: '"React" is not a feature. "Real-time chat" is a feature that might be built with React.' },
                { title: 'Ignoring User Perspective', description: 'Features should solve user problems, not just be technically cool. Always ask: who needs this and why?' },
                { title: 'Missing Obvious Essentials', description: 'AI might not list "password reset" but users will expect it. Review for common patterns in your website type.' },
                { title: 'Building Feature Factory', description: 'More features ≠ better product. Quality execution of core features beats mediocre execution of many features.' }
            ],
            keywords: [
                { word: 'Feature', meaning: 'A specific function or capability your website provides', usage: '"Feature: users can filter products by price range, color, and size"' },
                { word: 'MoSCoW Method', meaning: 'Prioritization framework: Must have, Should have, Could have, Won\'t have', usage: '"User login is Must have. Social sharing is Could have for MVP."' },
                { word: 'MVP (Minimum Viable Product)', meaning: 'Simplest version with only Must-have features', usage: '"MVP feature list includes only what\'s needed to launch and test with users"' },
                { word: 'Feature Creep', meaning: 'Uncontrolled growth of feature list beyond original scope', usage: '"Started with 10 features, feature creep brought it to 40—project delayed 6 months"' },
                { word: 'User Story', meaning: 'Feature described from user perspective: "As a [user], I want to [action] so that [benefit]"', usage: '"As a student, I want to track my course progress so that I stay motivated"' }
            ],
            resources: [
                { title: 'How to Create a Website Feature List', url: 'https://www.youtube.com/results?search_query=create+website+feature+list' },
                { title: 'MoSCoW Prioritization Method Explained', url: 'https://www.youtube.com/results?search_query=moscow+prioritization+method' },
                { title: 'MVP Features: What to Build First', url: 'https://www.youtube.com/results?search_query=mvp+features+what+to+build+first' }
            ],
            notes: 'Instructor: Have students generate feature lists for their own projects, then peer-review and identify missing items. Practice MoSCoW prioritization on a sample project. Show real examples of feature creep disasters. Emphasize: you can always add features later, but removing them after building is wasteful.'
        },

        // ============================================
        // LESSON 07
        // ============================================
        {
            lessonCode: 'WP-IP-07',
            title: 'Creating User Personas with Prompts',
            summary: 'Master the creation of detailed user personas using AI to guide design and feature decisions based on real user needs.',
            objectives: [
                'Understand what user personas are and why they matter in web development',
                'Use AI to generate realistic, detailed user personas for any project',
                'Apply personas to make informed decisions about features and design',
                'Create persona-based user journey maps using AI assistance'
            ],
            theory: [
                'A user persona is a fictional but realistic representation of your target user. It includes demographics (age, location, occupation), goals (what they want to achieve), pain points (frustrations), tech comfort level, and behaviors (how they use websites).',
                'Personas prevent you from building for yourself instead of your users. A 50-year-old small business owner browses websites differently than a 25-year-old tech enthusiast. Different personas need different features and interfaces.',
                'AI can generate personas based on your website type and target market. Give it context: "Create 3 user personas for a fitness coaching platform aimed at busy professionals" and it will create distinct, believable characters.',
                'Good personas include: name and photo (makes them feel real), background story, goals (what success looks like), frustrations (current pain points), favorite brands/websites (design preferences), and tech proficiency (affects UI complexity).',
                'Use personas to test features: "Would Sarah (busy mom persona) use this feature? Does it solve her pain points?" This prevents building features that sound cool but serve no real user need.',
                'Create 2-4 primary personas for most projects. More than that becomes unmanageable. Each should represent a distinct user type with different needs and behaviors.'
            ],
            why: 'In real development, building without personas leads to generic, unfocused websites that please nobody. A freelancer building a salon booking site needs to understand: the salon owner wants easy schedule management, while customers want quick booking without phone calls—different personas, different priorities. Startups use personas to validate product-market fit: "Does our core feature solve Real Persona\'s biggest pain point?" Designers use personas to make UI decisions: "Senior citizen persona needs larger text and simpler navigation than millennial persona." AI-generated personas give you this user insight in minutes instead of weeks of research, though real user interviews are still ideal when possible.',
            prompts: {
                goal: 'Generate detailed user personas for a project',
                before: 'Create user personas for my website',
                after: 'Generate 3 detailed user personas for a meal planning and grocery delivery app:\n\nTarget market: Urban professionals who want healthy eating without the time investment\n\nFor each persona, provide:\n1. Name, age, occupation, location\n2. Brief background story (family, lifestyle)\n3. Tech comfort level (beginner/intermediate/advanced)\n4. Primary goals (what they want to achieve with the app)\n5. Pain points (current frustrations with meal planning/grocery shopping)\n6. Behaviors (how often they cook, shop, use apps)\n7. Success scenario (what a perfect experience looks like)\n8. Devices used (mobile/desktop preference)\n9. Budget consciousness (low/medium/high)\n\nMake each persona distinctly different to represent diverse user types.',
                resultBefore: 'AI gives vague, generic descriptions: "User wants to save time and eat healthy" without specific details that inform design decisions.',
                resultAfter: 'AI creates three rich personas: "Sarah, 32, marketing manager, lives in NYC with partner and 2 kids. Tech-savvy but time-starved. Main goal: healthy family meals in under 30 minutes. Pain point: kids are picky eaters, current apps don\'t filter for child-friendly recipes. Uses iPhone primarily during commute. Mid-budget, willing to pay for quality. Success: meal plan for week done in 10 minutes."'
            },
            pitfalls: [
                { title: 'Creating Too Many Personas', description: 'Having 10 personas means you can\'t focus. Stick to 2-4 primary personas that represent your core user groups.' },
                { title: 'Making Personas Too Similar', description: 'If all personas have the same goals and behaviors, they\'re not useful. Ensure distinct differences that affect design choices.' },
                { title: 'Creating Unrealistic Personas', description: 'AI might generate stereotypes or impossible combinations. Review and adjust to ensure personas reflect real potential users.' },
                { title: 'Ignoring Personas After Creation', description: 'Personas are useless if you don\'t reference them during development. Put them on the wall, check features against them regularly.' },
                { title: 'Confusing Personas with Market Segments', description: 'Personas are specific individuals, not broad categories like "millennials." Make them human and relatable.' }
            ],
            keywords: [
                { word: 'User Persona', meaning: 'Fictional but realistic character representing a target user type', usage: '"Created persona \'Tech-Savvy Tom\' to represent our early adopter user segment"' },
                { word: 'Pain Points', meaning: 'Frustrations or problems the user experiences that your website should solve', usage: '"Persona\'s main pain point: wasting 2 hours comparing prices across websites"' },
                { word: 'User Goals', meaning: 'What the user wants to accomplish when using your website', usage: '"Primary goal: book a service appointment in under 2 minutes"' },
                { word: 'User Journey', meaning: 'The path a persona takes from first discovering your site to achieving their goal', usage: '"Map Sarah\'s user journey from Google search to completed purchase"' },
                { word: 'Demographics', meaning: 'Statistical characteristics of users: age, location, income, education, etc.', usage: '"Persona demographics: 28-35, urban, $60k-90k income, college educated"' }
            ],
            resources: [
                { title: 'What Are User Personas and How to Create Them', url: 'https://www.youtube.com/results?search_query=user+personas+how+to+create' },
                { title: 'User Persona Examples for Web Design', url: 'https://www.youtube.com/results?search_query=user+persona+examples+web+design' },
                { title: 'Using Personas to Drive Product Decisions', url: 'https://www.youtube.com/results?search_query=using+personas+product+decisions' }
            ],
            notes: 'Instructor: Show real persona examples from successful products. Have students create personas for their projects and present them to class. Practice making design decisions: "Should we add this feature? Check against personas." Create persona posters students can print and reference. Emphasize: personas should influence every decision, not just be a checkbox exercise.'
        },

        // ============================================
        // LESSON 08
        // ============================================
        {
            lessonCode: 'WP-IP-08',
            title: 'Website Sitemap & Page Structure Generation',
            summary: 'Learn how to use AI to generate complete website sitemaps and logical page hierarchies that improve navigation and user experience.',
            objectives: [
                'Understand the purpose and structure of website sitemaps',
                'Generate comprehensive sitemaps using AI based on project requirements',
                'Organize pages into logical hierarchies and navigation structures',
                'Create both visual sitemaps and XML sitemaps for SEO'
            ],
            theory: [
                'A sitemap is a blueprint of your website structure showing all pages and how they connect. It\'s like a family tree for your website—homepage at top, major sections below, subsections under those.',
                'There are two types: visual sitemaps (for planning and design) and XML sitemaps (for search engines to crawl your site). AI can help generate both.',
                'Good sitemap structure follows information architecture principles: group related content, limit navigation depth (ideally 3 clicks to any page), use clear naming, and create logical pathways for users.',
                'AI can suggest optimal sitemap structure based on website type. E-commerce sites need: Home → Shop → Product Categories → Individual Products. Blogs need: Home → Blog → Categories → Individual Posts.',
                'Primary navigation typically includes 5-7 main sections. More than that overwhelms users. Use dropdowns or secondary navigation for additional pages.',
                'Sitemaps help identify missing pages before development starts. "We have a products page but no returns policy page"—better to catch this in planning than after launch.'
            ],
            why: 'In professional projects, poor information architecture creates confusing websites that frustrate users and hurt conversions. E-commerce sites with illogical category structures lose sales. Corporate sites without clear navigation paths waste users\' time. SEO suffers when sitemaps don\'t help search engines understand site structure. Developers waste time reorganizing pages mid-project when structure wasn\'t planned upfront. Freelancers use sitemaps in proposals to show clients exactly what they\'re getting. Clients can see "Oh, we need an FAQ page" during planning instead of requesting it mid-development. AI-generated sitemaps ensure you follow industry best practices for your website type.',
            prompts: {
                goal: 'Generate complete sitemap for a website project',
                before: 'Create a sitemap for my business website',
                after: 'Generate a comprehensive sitemap for a digital marketing agency website:\n\nBusiness context:\n- Services: SEO, PPC, Social Media Marketing, Content Marketing, Web Design\n- Target: Small to medium businesses\n- Goals: Lead generation, showcase expertise, build trust\n\nCreate a sitemap that includes:\n1. Primary navigation pages (5-7 main sections)\n2. Secondary pages under each section\n3. Utility pages (privacy policy, terms, sitemap, etc.)\n4. Landing pages for each service\n5. Resource/content section for SEO\n\nFor each page, specify:\n- Page name\n- Purpose (what user need does it serve)\n- Priority level (high/medium/low for development)\n- Where it appears in navigation\n\nPresent as hierarchical structure showing parent-child relationships.',
                resultBefore: 'AI lists random pages: "home, about, services, contact" without structure, hierarchy, or context for how they connect.',
                resultAfter: 'AI creates organized hierarchy:\nHOME\n├── Services\n│   ├── SEO Services (landing page)\n│   ├── PPC Management (landing page)\n│   ├── Social Media Marketing (landing page)\n│   └── ...\n├── About\n│   ├── Our Team\n│   └── Case Studies\n├── Resources\n│   ├── Blog\n│   └── Free Tools\n├── Contact\n└── [Utility Pages]\n    ├── Privacy Policy\n    └── Terms of Service'
            },
            pitfalls: [
                { title: 'Too Deep Navigation', description: 'If users need 5+ clicks to reach important content, your structure is too deep. Flatten it.' },
                { title: 'Inconsistent Naming', description: 'Using "Products" and "Shop" interchangeably confuses users. Pick one term and stick with it throughout.' },
                { title: 'Missing Critical Pages', description: 'Forgetting utility pages (privacy policy, returns, shipping) that users expect and search engines want.' },
                { title: 'Over-Complicated Structure', description: 'A 10-page site doesn\'t need complex nested categories. Keep structure as simple as possible.' },
                { title: 'No Consideration for SEO', description: 'Page URLs should match sitemap structure. Plan URL hierarchy while creating sitemap.' }
            ],
            keywords: [
                { word: 'Sitemap', meaning: 'Visual diagram or file showing all pages and their hierarchical relationships', usage: '"Created sitemap showing homepage, 5 main sections, and 20 subpages"' },
                { word: 'Information Architecture', meaning: 'How content is organized and structured for easy navigation', usage: '"Good information architecture groups related pages logically"' },
                { word: 'Navigation Hierarchy', meaning: 'The levels of navigation: primary (main menu), secondary (submenus), utility (footer)', usage: '"Primary navigation has 6 items, secondary navigation expands on hover"' },
                { word: 'Breadcrumbs', meaning: 'Navigation aid showing user\'s location: Home > Services > SEO', usage: '"Add breadcrumbs for sites with deep navigation hierarchy"' },
                { word: 'XML Sitemap', meaning: 'Machine-readable file listing all pages for search engines', usage: '"Submit XML sitemap to Google Search Console for better SEO"' }
            ],
            resources: [
                { title: 'How to Create a Website Sitemap - Complete Guide', url: 'https://www.youtube.com/results?search_query=create+website+sitemap+guide' },
                { title: 'Information Architecture for Websites', url: 'https://www.youtube.com/results?search_query=information+architecture+websites' },
                { title: 'XML Sitemaps for SEO Explained', url: 'https://www.youtube.com/results?search_query=xml+sitemaps+seo' }
            ],
            notes: 'Instructor: Show before/after examples of good vs bad sitemaps. Have students sketch sitemaps for their projects on paper first, then use AI to refine. Practice navigation depth analysis: count clicks to reach important pages. Demonstrate XML sitemap generation tools. Emphasize: time spent on sitemap planning prevents expensive restructuring later.'
        },

        // ============================================
        // LESSON 09
        // ============================================
        {
            lessonCode: 'WP-IP-09',
            title: 'Writing Functional Requirements using AI',
            summary: 'Master the creation of detailed functional requirements documents that clearly define what your website must do.',
            objectives: [
                'Understand what functional requirements are and why they\'re critical',
                'Use AI to generate specific, testable functional requirements',
                'Distinguish between functional requirements and non-functional requirements',
                'Create requirements documents that guide development and testing'
            ],
            theory: [
                'Functional requirements describe what a system must do—specific behaviors, features, and functions. "User must be able to reset password via email link" is a functional requirement. "Site should be user-friendly" is not.',
                'Each requirement should be: Specific (no ambiguity), Measurable (can test if it works), Achievable (technically possible), Relevant (supports project goals), Testable (can verify it\'s done correctly).',
                'Functional requirements typically organized by feature area: User Management (login, registration, profile), Content (create, edit, delete), Search (filters, sorting), etc.',
                'Non-functional requirements describe how the system should perform: speed (page load under 2 seconds), security (data encryption), scalability (handle 10,000 concurrent users). Both types are important but serve different purposes.',
                'AI excels at converting high-level features into detailed requirements. "Add a shopping cart" becomes 15+ specific requirements: add item, remove item, update quantity, save for later, apply coupon, etc.',
                'Requirements should include: ID number (for tracking), description (what it does), priority (critical/high/medium/low), acceptance criteria (how to verify it works), dependencies (what else must exist first).'
            ],
            why: 'In professional development, vague requirements cause most project failures. "Build a user system" means different things to different people. Without detailed functional requirements, developers build what they think is needed, clients expect something different, and expensive rework follows. Freelancers use requirements documents in contracts to prevent scope disputes. When a client says "but I wanted users to be able to X," you can point to requirements doc: "That wasn\'t specified." Development teams use requirements to estimate effort, assign tasks, and track progress. QA testers use requirements to create test cases. AI-generated requirements ensure nothing is forgotten—it knows that "user login" implies password reset, email verification, session management, etc.',
            prompts: {
                goal: 'Generate detailed functional requirements for a feature',
                before: 'Write requirements for a user registration system',
                after: 'Generate detailed functional requirements for a user registration system on a SaaS platform:\n\nContext:\n- Platform: B2B project management tool\n- Users: Business professionals\n- Security: Must comply with GDPR\n\nFor each requirement, provide:\n1. Requirement ID (REQ-001, REQ-002, etc.)\n2. Category (Registration, Validation, Security, etc.)\n3. Description (specific behavior)\n4. Priority (Critical/High/Medium/Low)\n5. Acceptance criteria (how to verify)\n6. Dependencies (what must exist first)\n\nCover:\n- Registration form fields and validation\n- Email verification process\n- Password requirements and security\n- Error handling and user feedback\n- Success flow and redirection\n- Data storage and privacy\n\nMake requirements specific and testable.',
                resultBefore: 'AI gives vague statements: "Users should be able to register" "Passwords should be secure" without specific, testable criteria.',
                resultAfter: 'AI generates detailed requirements:\nREQ-001 | Registration | Email Field\nDescription: Registration form must include email field that validates format (RFC 5322 standard) on blur\nPriority: Critical\nAcceptance: Email "test@example.com" accepted, "test@example" rejected with clear error message\nDependencies: None\n\nREQ-002 | Security | Password Strength\nDescription: Password must be minimum 8 characters with at least one uppercase, lowercase, number, and special character\nPriority: Critical\nAcceptance: "Password1!" accepted, "password" rejected with specific feedback on what\'s missing\nDependencies: REQ-001'
            },
            pitfalls: [
                { title: 'Writing Vague Requirements', description: 'Requirements like "good UX" or "fast performance" aren\'t testable. Always specify measurable criteria.' },
                { title: 'Confusing Requirements with Solutions', description: '"Use React for dashboard" is implementation detail, not requirement. "Dashboard must update in real-time" is requirement.' },
                { title: 'Missing Edge Cases', description: 'AI might forget scenarios like "what happens if email is already registered?" Always review for edge cases.' },
                { title: 'No Priority Levels', description: 'If everything is critical, nothing is. Prioritize realistically so teams know what to build first.' },
                { title: 'Forgetting Non-Functional Requirements', description: 'Functional requirements alone aren\'t enough. Also specify performance, security, and usability requirements.' }
            ],
            keywords: [
                { word: 'Functional Requirement', meaning: 'Specific behavior or function the system must perform', usage: '"Functional requirement: User must receive password reset email within 60 seconds"' },
                { word: 'Non-Functional Requirement', meaning: 'Quality attribute: performance, security, usability, scalability', usage: '"Non-functional requirement: All pages must load in under 2 seconds on 3G"' },
                { word: 'Acceptance Criteria', meaning: 'Conditions that must be met for requirement to be considered complete', usage: '"Acceptance criteria: User can login with email and password, gets error message if credentials wrong"' },
                { word: 'Edge Case', meaning: 'Unusual or extreme scenario that might not be obvious', usage: '"Edge case requirement: What happens if user tries to register with already-used email?"' },
                { word: 'Dependency', meaning: 'Other requirement that must be completed first', usage: '"Login feature depends on user registration being complete"' }
            ],
            resources: [
                { title: 'How to Write Functional Requirements', url: 'https://www.youtube.com/results?search_query=how+to+write+functional+requirements' },
                { title: 'Functional vs Non-Functional Requirements Explained', url: 'https://www.youtube.com/results?search_query=functional+vs+non+functional+requirements' },
                { title: 'Requirements Gathering for Web Projects', url: 'https://www.youtube.com/results?search_query=requirements+gathering+web+projects' }
            ],
            notes: 'Instructor: Provide a requirements template students can use. Show real examples of requirements docs from successful projects. Have students write requirements for one feature, then peer-review for vagueness. Practice converting high-level features into detailed requirements. Emphasize: specific requirements prevent misunderstandings and disputes.'
        },

        // ============================================
        // LESSON 10
        // ============================================
        {
            lessonCode: 'WP-IP-10',
            title: 'Content Strategy & Page Copy Planning',
            summary: 'Learn to plan and generate website content strategically using AI, ensuring every page has purpose and clear messaging.',
            objectives: [
                'Develop a content strategy aligned with website goals and user needs',
                'Use AI to generate compelling page copy and calls-to-action',
                'Plan content for different page types: homepage, about, services, blog',
                'Create content guidelines and tone of voice using AI assistance'
            ],
            theory: [
                'Content strategy answers: What content do we need? Who is it for? What should it accomplish? How does it align with business goals? Without strategy, you end up with random, inconsistent content.',
                'Every page needs clear messaging hierarchy: Primary message (headline—what is this page about?), Supporting points (why should users care?), Proof (testimonials, stats, examples), and Call-to-Action (what should users do next?).',
                'Different page types need different content approaches. Homepage is overview and navigation hub. About page builds trust and connection. Service pages explain value and benefits. Blog posts provide value and attract SEO traffic.',
                'AI can generate content outlines and draft copy, but always needs human review for brand voice, accuracy, and authenticity. Use AI for structure and first drafts, humans for refinement and verification.',
                'Tone of voice should be consistent across all pages but can vary by context. Homepage might be inspiring and aspirational, FAQ page should be clear and helpful, error messages should be friendly and reassuring.',
                'Content planning includes: page purpose (why does this page exist?), target user (which persona visits this page?), key message (one main takeaway), supporting content, media needs (images, videos), and SEO keywords.',
                'Use AIDA Model (Attention, Interest, Desire, Action) framework for writing page copy.'
            ],
            theoryImage: "src/assets/AIDA.png",
            why: 'Poor content is the hidden killer of websites. A developer can build a beautiful, functional site, but if the copy is confusing or doesn\'t speak to users\' needs, the site fails. Startups launching products need clear value propositions—AI can help articulate "what we do and why it matters" when founders are too close to see it objectively. Freelancers often struggle with writing client content; AI helps generate professional copy that clients can review and refine. E-commerce sites with product descriptions generated by AI sell better than those with manufacturer-provided jargon. Content strategy ensures every page has purpose, not just filler text waiting for "real content later" (which never comes).',
            prompts: {
                goal: 'Generate content strategy and copy for a website page',
                before: 'Write content for my homepage',
                after: 'Create a comprehensive content strategy and draft copy for the homepage of a meal kit delivery service:\n\nBusiness context:\n- Target: Busy professionals who want healthy eating\n- Value prop: Chef-designed meals, pre-portioned ingredients, delivered weekly\n- Competitors: HelloFresh, Blue Apron\n- Differentiator: Focus on dietary restrictions (keto, vegan, gluten-free options)\n\nFor the homepage, provide:\n\n1. Content Strategy:\n   - Primary goal of homepage\n   - Target persona visiting\n   - Key messages to communicate\n   - Desired user action\n\n2. Content Structure:\n   - Hero section (headline + subheadline + CTA)\n   - How it works (3-step process)\n   - Benefits section (3-4 key benefits)\n   - Social proof (testimonial placeholder)\n   - Pricing teaser\n   - Final CTA\n\n3. Tone Guidelines:\n   - Voice characteristics (friendly, professional, etc.)\n   - Words to use / avoid\n   - Example sentences in brand voice\n\nWrite actual draft copy for each section.',
                resultBefore: 'AI writes generic content: "We are a meal kit company. We deliver food. Order now." with no strategy, differentiation, or persuasive elements.',
                resultAfter: 'AI provides strategic content:\nHero: "Healthy Meals, Zero Meal Planning" (addresses time-saving benefit)\nSubheadline: "Chef-designed recipes with pre-portioned ingredients delivered to your door. Perfect for keto, vegan, and gluten-free diets."\nHow It Works: "1. Pick your plan 2. We deliver fresh ingredients 3. Cook in 30 minutes or less"\nBenefits: Organized by user pain points (saves time, reduces waste, supports dietary needs)\nTone: Warm, encouraging, focuses on empowerment not guilt'
            },
            pitfalls: [
                { title: 'Generic, Template Content', description: 'AI might generate content that could apply to any business. Always customize with specific differentiators and real value props.' },
                { title: 'Writing for Search Engines, Not Humans', description: 'Keyword-stuffed content ranks poorly and reads terribly. Write for humans first, optimize for SEO second.' },
                { title: 'Missing Clear Call-to-Action', description: 'Every page needs to tell users what to do next. "Learn more" is weak. "Start your free trial" is clear.' },
                { title: 'Inconsistent Tone', description: 'If homepage sounds corporate but About page sounds casual, brand feels unprofessional. Establish tone guidelines and stick to them.' },
                { title: 'Using AI Copy Unedited', description: 'AI-generated content often sounds generic and lacks authenticity. Always review, refine, and inject real brand personality.' }
            ],
            keywords: [
                { word: 'Content Strategy', meaning: 'Plan for what content to create, for whom, and to what purpose', usage: '"Our content strategy focuses on educational blog posts to attract SEO traffic"' },
                { word: 'Value Proposition', meaning: 'Clear statement of benefits your product/service provides', usage: '"Value prop: Get fit from home with 15-minute workouts, no equipment needed"' },
                { word: 'Call-to-Action (CTA)', meaning: 'Directive telling user what action to take next', usage: '"CTA buttons: \'Start Free Trial\' \'Download Guide\' \'Book Demo\'"' },
                { word: 'Tone of Voice', meaning: 'Personality and style of written communication', usage: '"Brand tone: Friendly but professional, helpful not salesy, conversational not corporate"' },
                { word: 'Messaging Hierarchy', meaning: 'Organization of content from most to least important', usage: '"Messaging hierarchy: Headline (main benefit) > Subheadline (how it works) > Details > CTA"' }
            ],
            resources: [
                { title: 'Website Content Strategy - Complete Guide', url: 'https://www.youtube.com/results?search_query=website+content+strategy+guide' },
                { title: 'How to Write Compelling Website Copy', url: 'https://www.youtube.com/results?search_query=write+compelling+website+copy' },
                { title: 'Creating Effective Calls-to-Action', url: 'https://www.youtube.com/results?search_query=effective+calls+to+action' }
            ],
            notes: 'Instructor: Analyze good vs bad website copy examples. Have students identify value propositions and CTAs on popular sites. Practice exercise: students draft homepage hero section for their project, class critiques for clarity. Emphasize: content is not "lorem ipsum"—it should be planned from day one. Show how AI can jumpstart content creation but humans must refine.'
        },

        // ============================================
        // LESSON 11
        // ============================================
        {
            lessonCode: 'WP-IP-11',
            title: 'Breaking Website into Development Tasks',
            summary: 'Learn how to decompose a website project into manageable development tasks that can be tracked, estimated, and completed efficiently.',
            objectives: [
                'Break down complex website projects into specific, actionable tasks',
                'Organize tasks by development phase and dependencies',
                'Use AI to generate comprehensive task lists and development roadmaps',
                'Estimate effort and timeline for tasks using AI assistance'
            ],
            theory: [
                'Task breakdown transforms "build a website" into specific, completable items: "Create database schema," "Build login form component," "Connect form to API," etc. Each task should take hours or days, not weeks.',
                'Tasks should follow logical sequence based on dependencies. You can\'t build the checkout flow before you have a shopping cart. You can\'t test features before they\'re coded. Task order matters.',
                'Good tasks are specific and have clear completion criteria. "Build homepage" is too vague. "Create responsive hero section with headline, subheadline, CTA button, and background image—matching Figma design" is specific.',
                'Organize tasks by categories: Setup (repo, environment, dependencies), Backend (database, API, auth), Frontend (components, pages, styling), Integration (connecting frontend to backend), Testing, Deployment, Content.',
                'AI can generate task lists from feature lists and requirements. It knows that "user registration" implies tasks for: form design, validation logic, API endpoint, database table, email service, error handling, testing.',
                'Include buffer time in estimates. A task might take 2 hours in perfect conditions, but debugging, meetings, and distractions mean it takes 4 hours. AI can suggest realistic estimates based on task complexity.'
            ],
            why: 'In real projects, poor task breakdown is why projects go over budget and miss deadlines. Developers underestimate because they didn\'t think through all required tasks. "Build the payment system" sounds like one task but is actually 20+ tasks: payment form, Stripe integration, webhook handling, success/error pages, email confirmations, admin dashboard, refund handling, etc. Freelancers who break projects into tasks can give accurate quotes and avoid losing money. Development teams use task lists to distribute work and track progress in project management tools (Jira, Trello). Clients appreciate seeing detailed task breakdowns in proposals—it shows you know what you\'re doing. AI-generated task lists ensure you don\'t forget important steps.',
            prompts: {
                goal: 'Generate comprehensive task breakdown for a website feature',
                before: 'List tasks for building user authentication',
                after: 'Generate a detailed task breakdown for implementing user authentication on a web application:\n\nContext:\n- Stack: React frontend, Node.js/Express backend, MongoDB database\n- Features needed: Registration, login, logout, password reset, email verification\n- Security: JWT tokens, password hashing, HTTPS\n\nOrganize tasks by category and provide:\n1. Task number and name\n2. Description (what needs to be done)\n3. Estimated time (hours)\n4. Dependencies (which tasks must be done first)\n5. Skills required (frontend/backend/database/DevOps)\n6. Priority (critical/high/medium/low)\n\nCategories:\n- Database Setup\n- Backend API Development\n- Frontend Components\n- Integration & Testing\n- Security Implementation\n- Deployment Configuration\n\nEnsure tasks are specific and completable in 1-8 hours each.',
                resultBefore: 'AI gives vague task list: "1. Setup database 2. Build backend 3. Create frontend 4. Test" with no detail, time estimates, or dependencies.',
                resultAfter: 'AI generates detailed breakdown:\nDB-01: Create User Schema (2hrs)\n- Fields: email, passwordHash, isVerified, resetToken\n- Dependencies: None\n- Skills: Database/Backend\n\nBE-02: Build POST /api/register endpoint (3hrs)\n- Validate input, hash password, create user, send verification email\n- Dependencies: DB-01\n- Skills: Backend\n\nFE-03: Create RegistrationForm component (4hrs)\n- Fields, validation, error handling, loading states\n- Dependencies: None (can be parallel)\n- Skills: Frontend\n\n...with 25+ more specific tasks'
            },
            pitfalls: [
                { title: 'Tasks Too Large', description: 'A task taking weeks is a project, not a task. Break it down until each task fits in 1-8 hours.' },
                { title: 'Missing Dependencies', description: 'Listing tasks in random order without considering what must be done first creates confusion and rework.' },
                { title: 'Forgetting Non-Coding Tasks', description: 'Task lists often miss: environment setup, documentation, testing, code review, deployment, client feedback loops.' },
                { title: 'No Time Estimates', description: 'Without estimates, you can\'t plan timeline or budget. Even rough estimates (2-4 hours) are better than nothing.' },
                { title: 'Ignoring Task Complexity', description: 'Not all tasks are equal. "Add button" is different from "integrate Stripe payments." Complexity affects estimates and assignee.' }
            ],
            keywords: [
                { word: 'Task', meaning: 'Specific, completable unit of work with clear deliverable', usage: '"Task: Create responsive navigation component matching Figma design"' },
                { word: 'Dependency', meaning: 'Task that must be completed before another task can start', usage: '"Frontend dashboard depends on API endpoints being ready"' },
                { word: 'Work Breakdown Structure (WBS)', meaning: 'Hierarchical decomposition of project into tasks and subtasks', usage: '"Created WBS showing project divided into 5 phases, 20 features, 150 tasks"' },
                { word: 'Critical Path', meaning: 'Sequence of dependent tasks that determines minimum project timeline', usage: '"Critical path: Database setup → API development → Frontend → Testing = 6 weeks"' },
                { word: 'Buffer Time', meaning: 'Extra time added to estimates to account for unknowns and delays', usage: '"Task estimate: 4 hours + 50% buffer = 6 hours budgeted"' }
            ],
            resources: [
                { title: 'How to Break Down a Web Project into Tasks', url: 'https://www.youtube.com/results?search_query=break+down+web+project+tasks' },
                { title: 'Project Task Estimation Techniques', url: 'https://www.youtube.com/results?search_query=project+task+estimation+techniques' },
                { title: 'Using Trello/Jira for Task Management', url: 'https://www.youtube.com/results?search_query=task+management+trello+jira' }
            ],
            notes: 'Instructor: Show real project task boards from Trello/Jira. Have students break down their project into 20-30 tasks. Practice estimating task duration—compare estimates to actual time after completion. Emphasize: detailed task breakdown upfront prevents chaos during development. Create task template students can reuse for any project.'
        },

        // ============================================
        // LESSON 12
        // ============================================
        {
            lessonCode: 'WP-IP-12',
            title: 'SEO Requirements & Keywords using Prompts',
            summary: 'Master SEO planning using AI to identify keywords, optimize content, and structure websites for search engine visibility.',
            objectives: [
                'Understand SEO fundamentals and why they matter from day one',
                'Use AI to perform keyword research and identify search opportunities',
                'Generate SEO-friendly page titles, meta descriptions, and heading structures',
                'Create technical SEO requirements for website development'
            ],
            theory: [
                'SEO (Search Engine Optimization) is the practice of improving website visibility in search engine results. Better ranking = more organic traffic = more potential customers, all without paying for ads.',
                'SEO starts during planning, not after launch. Page structure, URL patterns, site hierarchy, and content strategy all affect SEO. Retrofitting SEO later is expensive and limited.',
                'Keywords are terms people search for. AI can help identify: primary keywords (main topic, high search volume, competitive), secondary keywords (related terms, medium volume), and long-tail keywords (specific phrases, lower volume but higher conversion).',
                'Each page should target specific keywords. Homepage targets brand and broad terms. Service pages target "service + location" or "service + industry." Blog posts target informational long-tail keywords.',
                'Technical SEO requirements include: mobile-responsive design (Google prioritizes mobile), fast page load (under 3 seconds), HTTPS security, XML sitemap, proper heading hierarchy (H1, H2, H3), alt text for images, clean URL structure.',
                'On-page SEO means optimizing content: title tags (50-60 characters, keyword at start), meta descriptions (150-160 characters, compelling summary), heading tags (logical hierarchy), internal linking (connect related pages), and content quality (comprehensive, useful, original).'
            ],
            why: 'In real business, SEO drives sustainable growth. Paid ads stop working when you stop paying; SEO traffic continues. Small businesses use SEO to compete with larger competitors—a local plumber can outrank national chains for "plumber in [city]" with good SEO. Content sites like blogs depend entirely on SEO traffic for revenue. E-commerce sites with product pages optimized for "best [product] for [use case]" capture buyers actively searching. Developers who understand SEO requirements build better sites from the start. Freelancers who deliver SEO-optimized sites get more referrals because clients see results (traffic increases). AI makes keyword research and optimization accessible—tasks that once required expensive tools or consultants can now be done with good prompts.',
            prompts: {
                goal: 'Generate SEO strategy and keywords for a website',
                before: 'Help me with SEO for my website',
                after: 'Create a comprehensive SEO strategy and keyword plan for a website:\n\nBusiness: Online yoga studio offering live classes and on-demand videos\nTarget audience: Busy professionals, ages 25-45, looking for at-home fitness\nLocation: US-based but online service\nCompetitors: Peloton, Glo, YogaGlo\n\nProvide:\n\n1. Keyword Research:\n   - 5 primary keywords (main topics, moderate competition)\n   - 10 secondary keywords (related terms)\n   - 15 long-tail keywords (specific search phrases)\n   For each keyword: search volume estimate, competition level, and relevance score\n\n2. Page-Level SEO Plan:\n   For Homepage, About, Pricing, Blog:\n   - Target keywords for this page\n   - Suggested title tag (55 chars max)\n   - Meta description (155 chars max)\n   - H1 headline suggestion\n   - Content topics to cover\n\n3. Technical SEO Requirements:\n   - URL structure recommendations\n   - Site speed targets\n   - Mobile optimization needs\n   - Schema markup suggestions\n\n4. Content Strategy:\n   - Blog topics targeting long-tail keywords\n   - Internal linking strategy\n   - Multimedia needs (images, videos)',
                resultBefore: 'AI suggests generic advice: "Use keywords," "Make it fast," "Create content" without specific, actionable keywords or requirements for this business.',
                resultAfter: 'AI provides detailed strategy:\nPrimary Keywords:\n- "online yoga classes" (40k/month, high competition)\n- "yoga for beginners at home" (12k/month, medium)\n- "virtual yoga studio" (5k/month, low)\n\nHomepage Title: "Online Yoga Classes | Live & On-Demand | YogaStudio"\nMeta Desc: "Join live yoga classes from home or stream 500+ on-demand videos. Perfect for beginners and experts. 14-day free trial."\nH1: "Your Personal Yoga Studio, Anywhere"\n\nTechnical: URLs as /classes/beginner-yoga not /page?id=123, target 2s load time, implement VideoObject schema for class previews\n\nBlog Topics:\n- "10-minute morning yoga routine for beginners" (long-tail)\n- "Yoga for lower back pain relief" (long-tail, high intent)\n- "How to create a home yoga space" (informational, builds authority)'
            },
            pitfalls: [
                { title: 'Keyword Stuffing', description: 'Cramming keywords everywhere makes content unreadable and gets penalized by Google. Use keywords naturally, in context.' },
                { title: 'Ignoring Search Intent', description: 'Ranking for keywords that don\'t match what you offer is useless. "Free yoga" searchers won\'t pay for subscriptions.' },
                { title: 'Forgetting Technical SEO', description: 'Great content on a slow, broken website won\'t rank. Technical foundation must be solid.' },
                { title: 'Targeting Only High-Volume Keywords', description: 'Competitive keywords are hard to rank for. Long-tail keywords with clear intent often convert better.' },
                { title: 'Treating SEO as One-Time Task', description: 'SEO requires ongoing content creation, optimization, and monitoring. It\'s not "set and forget."' }
            ],
            keywords: [
                { word: 'Keyword', meaning: 'Word or phrase people type into search engines', usage: '"Target keyword: \'best meditation app for sleep\'"' },
                { word: 'Search Intent', meaning: 'What user wants to accomplish with their search (informational, navigational, transactional)', usage: '"\'How to meditate\' is informational intent; \'buy meditation cushion\' is transactional"' },
                { word: 'Title Tag', meaning: 'HTML element defining page title shown in search results', usage: '"Title tag: <title>Best Yoga Mats 2024 | Reviews & Buying Guide</title>"' },
                { word: 'Meta Description', meaning: 'HTML element providing page summary in search results', usage: '"Meta description: Short snippet (150-160 chars) convincing users to click"' },
                { word: 'Long-Tail Keyword', meaning: 'Specific, longer search phrase with lower volume but higher conversion', usage: '"Long-tail: \'yoga for beginners over 50 with knee pain\' vs generic \'yoga\'"' },
                { word: 'Schema Markup', meaning: 'Code helping search engines understand page content type', usage: '"Add Recipe schema so Google can show cooking time and ratings in results"' }
            ],
            resources: [
                { title: 'SEO Fundamentals for Web Developers', url: 'https://www.youtube.com/results?search_query=seo+fundamentals+web+developers' },
                { title: 'Keyword Research Tutorial - Complete Guide', url: 'https://www.youtube.com/results?search_query=keyword+research+tutorial' },
                { title: 'Technical SEO Checklist for New Websites', url: 'https://www.youtube.com/results?search_query=technical+seo+checklist' }
            ],
            notes: 'Instructor: Demonstrate keyword research using free tools (Google Keyword Planner, Ubersuggest) alongside AI. Have students identify keywords for their own projects. Show before/after examples of pages optimized for SEO. Practice writing title tags and meta descriptions within character limits. Emphasize: SEO is not tricks or hacks—it\'s about creating valuable, well-structured content that serves users and search engines.'
        }
    ]
};

const webDevModule2 = {
    courseTitle: 'Web Development',
    moduleNumber: 2,
    moduleName: 'Frontend Prompts (UI Coding)',
    totalLessons: 9,

    lessons: [
        // ============================================
        // LESSON WP-FE-01
        // ============================================
        {
            lessonCode: 'WP-FE-01',
            title: 'Generating HTML Structure using Prompts',
            summary: 'Master the creation of semantic, well-structured HTML using AI prompts that produce clean, accessible markup.',
            objectives: [
                'Understand semantic HTML and why it matters for accessibility and SEO',
                'Use AI to generate proper HTML structure for common web components',
                'Write prompts that produce clean, standards-compliant HTML markup',
                'Validate and improve AI-generated HTML for production use'
            ],
            theory: [
                'Semantic HTML uses elements that describe their meaning and purpose. <header>, <nav>, <article>, <section>, <footer> are semantic. <div> everywhere is not. Search engines and screen readers understand semantic HTML better.',
                'AI can generate HTML structure, but you must specify semantic requirements. "Create a navigation bar" might give you divs. "Create a navigation bar using semantic HTML5 tags with proper ARIA attributes" gives you proper <nav> with accessible markup.',
                'Good HTML structure is hierarchical and logical. Every page has one <h1>, headings follow order (h1→h2→h3, never h1→h3), and related content is grouped in semantic containers.',
                'Form elements require proper structure: every <input> needs an associated <label>, form fields should be wrapped in <fieldset> when related, and error messages must be programmatically linked using aria-describedby.',
                'AI-generated HTML often needs cleanup: remove unnecessary divs (div soup), add missing alt text, ensure unique IDs, check that button elements have type="button" or type="submit", and validate ARIA usage.',
                'Always specify DOCTYPE, lang attribute, charset, viewport meta tag, and semantic structure in your prompts. These fundamentals are often forgotten but critically important.',

            ],
            theoryImage: "src/assets/img_sem_elements.gif",
            why: 'In real development, poor HTML structure causes accessibility lawsuits, SEO problems, and maintenance nightmares. A blind user with a screen reader cannot navigate a site built entirely with divs and spans. Search engines rank semantic HTML higher because it signals content structure and importance. Developers inheriting projects with messy HTML waste hours understanding what each div does. Semantic HTML also makes styling easier—you can target <article> instead of .some-random-class-name. AI helps you start with clean structure, but you must prompt it correctly and validate the output. Professional developers review HTML for semantics, not just visual appearance.',
            prompts: {
                goal: 'Generate semantic HTML structure for a blog article page',
                before: 'Create HTML for a blog post',
                after: 'Generate semantic HTML5 structure for a blog article page with the following requirements:\n\nPage elements:\n- Header: Site logo, navigation (Home, Blog, About, Contact)\n- Main content area with:\n  - Article metadata (author, publish date, reading time, category)\n  - Article title (H1)\n  - Featured image with descriptive alt text\n  - Article content (multiple paragraphs, subheadings H2/H3)\n  - Author bio section at end\n  - Related articles section (3 article cards)\n- Sidebar: Search box, popular posts list, categories list\n- Footer: Copyright, social links, sitemap links\n\nRequirements:\n- Use proper semantic HTML5 tags (article, section, aside, nav, header, footer)\n- Include appropriate ARIA landmarks\n- Proper heading hierarchy\n- All images must have alt attributes\n- Form elements must have associated labels\n- Include meta tags for SEO (title, description, og tags)\n- Add structured data (Article schema)\n- Use BEM naming convention for classes\n- Include comments explaining structure',
                resultBefore: 'AI generates div soup with no semantic meaning, missing alt text, no ARIA labels, broken heading hierarchy—technically works visually but fails accessibility and SEO.',
                resultAfter: 'AI produces clean semantic structure:\n<article itemscope itemtype="https://schema.org/Article">\n  <header>\n    <p class="article__meta">\n      <time datetime="2024-01-15">January 15, 2024</time>\n      <span>5 min read</span>\n    </p>\n    <h1 itemprop="headline">Article Title</h1>\n  </header>\n  <img src="featured.jpg" alt="Descriptive alt text" itemprop="image">\n  <div itemprop="articleBody">\n    <!-- semantic content structure -->\n  </div>\n</article>\n\nWith proper landmarks, ARIA, schema markup, and accessible structure ready for production.'
            },
            pitfalls: [
                { title: 'Div Soup', description: 'Using <div> for everything instead of semantic tags. Replace divs with <section>, <article>, <nav>, <aside>, <header>, <footer> where appropriate.' },
                { title: 'Missing Alt Text', description: 'AI often generates <img src="..."> without alt attributes. Always require alt text in prompts and add descriptive text, not "image" or empty alt="".' },
                { title: 'Broken Heading Hierarchy', description: 'Having multiple H1s or jumping from H1 to H3. Each page needs exactly one H1, and headings should be nested logically.' },
                { title: 'Non-Semantic Class Names', description: 'Classes like "red-box" or "div1" describe appearance, not meaning. Use semantic names like "article__header" or "product-card__title".' },
                { title: 'Incorrect ARIA Usage', description: 'Adding ARIA attributes incorrectly can make accessibility worse. Only use ARIA when semantic HTML isn\'t enough.' }
            ],
            keywords: [
                { word: 'Semantic HTML', meaning: 'HTML elements that describe their meaning and purpose, not just appearance', usage: '"Use <nav> for navigation, <article> for blog posts—semantic HTML improves SEO and accessibility"' },
                { word: 'ARIA (Accessible Rich Internet Applications)', meaning: 'Attributes that provide additional context for assistive technologies', usage: '"aria-label=\'Close menu\' helps screen readers understand button purpose"' },
                { word: 'Heading Hierarchy', meaning: 'Logical nesting of h1-h6 tags showing content structure', usage: '"h1 (page title) → h2 (main sections) → h3 (subsections) forms proper hierarchy"' },
                { word: 'Alt Text', meaning: 'Descriptive text for images read by screen readers and shown when image fails', usage: '"alt=\'Golden retriever playing fetch in park\' not alt=\'dog\' or alt=\'image\'"' },
                { word: 'Schema Markup', meaning: 'Structured data helping search engines understand page content', usage: '"Add Article schema with headline, author, datePublished for better search results"' }
            ],
            resources: [
                { title: 'Semantic HTML5 - Complete Guide', url: 'https://www.youtube.com/results?search_query=semantic+html5+complete+guide' },
                { title: 'HTML Accessibility Best Practices', url: 'https://www.youtube.com/results?search_query=html+accessibility+best+practices' },
                { title: 'ARIA Attributes Explained', url: 'https://www.youtube.com/results?search_query=aria+attributes+explained' }
            ],
            notes: 'Instructor: Show side-by-side comparison of semantic vs non-semantic HTML. Demonstrate screen reader navigation through both versions. Have students audit a popular website\'s HTML structure. Practice converting div-based layouts to semantic HTML. Emphasize: HTML is foundation—get this right and everything else becomes easier.'
        },

        // ============================================
        // LESSON WP-FE-02
        // ============================================
        {
            lessonCode: 'WP-FE-02',
            title: 'CSS Styling with Tailwind / Bootstrap',
            summary: 'Learn to generate professional CSS using utility-first frameworks through effective AI prompts.',
            objectives: [
                'Understand the difference between traditional CSS and utility frameworks',
                'Generate Tailwind CSS and Bootstrap code using AI prompts',
                'Write prompts that produce responsive, mobile-first designs',
                'Customize utility frameworks for brand-specific styling'
            ],
            theory: [
                'Utility frameworks like Tailwind provide pre-built CSS classes: "text-center bg-blue-500 p-4" instead of writing custom CSS. This speeds development and maintains consistency.',
                'Tailwind is utility-first (compose styles from small classes), while Bootstrap is component-based (use pre-built components like .btn .btn-primary). Both have pros: Tailwind offers more control, Bootstrap is faster for prototypes.',
                'AI excels at generating utility class combinations. Instead of memorizing Tailwind classes, describe what you want: "centered card with white background, rounded corners, shadow, padding 24px" and AI translates to Tailwind classes.',
                'Responsive design requires mobile-first thinking. In Tailwind, write base mobile styles, then add breakpoint prefixes: sm:, md:, lg:, xl:. AI can generate responsive class strings when you specify breakpoint behaviors.',
                'Custom themes require configuration. Tailwind uses tailwind.config.js to define colors, fonts, spacing. AI can generate config files matching your brand: "Create Tailwind config with primary color #6C5CE7, secondary #00D4FF, font family Inter".',
                'Avoid inline style bloat. While Tailwind uses HTML classes, extract repeated patterns into components. AI can help identify where to create reusable components vs inline utility classes.'
            ],
            why: 'In professional development, utility frameworks dramatically speed up styling. A developer can build a complete responsive dashboard in hours vs days with custom CSS. Startups use Tailwind to iterate quickly—changing entire design systems requires updating config, not rewriting thousands of lines of CSS. Agencies use Bootstrap for rapid prototyping in client meetings. Freelancers who master utility frameworks deliver faster, making more money per hour. AI makes these frameworks accessible to beginners—you don\'t need to memorize hundreds of class names. Describe what you want visually, AI provides the utility classes. This lowers the barrier to professional-looking designs.',
            prompts: {
                goal: 'Generate Tailwind CSS for a modern pricing card component',
                before: 'Style a pricing card with Tailwind',
                after: 'Generate Tailwind CSS classes for a modern pricing card component:\n\nDesign specifications:\n- Card dimensions: max-width 320px, auto height\n- Background: white with subtle shadow\n- Border: 2px solid, rounded corners (12px)\n- Padding: 32px all sides\n- Hover effect: slight scale up (1.02) and deeper shadow\n\nContent structure:\n- Badge at top: "Most Popular" (small, uppercase, primary color background)\n- Plan name: H3, bold, dark gray\n- Price: Large text (48px), primary color, with /month in smaller gray text\n- Feature list: 5 items with checkmark icons, vertical spacing\n- CTA button: full width, primary color, white text, rounded, hover darker\n\nResponsive behavior:\n- Mobile (< 640px): card takes full width minus 16px margin\n- Tablet (640px+): card is fixed 320px width\n- Desktop (1024px+): cards display in grid, 3 per row\n\nProvide:\n1. Complete HTML with Tailwind classes\n2. Any custom CSS needed for animations\n3. Responsive grid layout for 3 cards',
                resultBefore: 'AI provides basic classes like "border rounded p-4" without proper responsive behavior, hover effects, or professional spacing.',
                resultAfter: 'AI generates production-ready code:\n<div class="max-w-sm mx-auto md:mx-0 bg-white rounded-xl border-2 border-gray-200 shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300 p-8">\n  <span class="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold uppercase rounded-full mb-4">Most Popular</span>\n  <h3 class="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h3>\n  <div class="mb-6">\n    <span class="text-5xl font-bold text-purple-600">$29</span>\n    <span class="text-gray-500 text-lg">/month</span>\n  </div>\n  <ul class="space-y-3 mb-8">\n    <li class="flex items-center text-gray-700">\n      <svg class="w-5 h-5 text-green-500 mr-3">...</svg>\n      Unlimited projects\n    </li>\n    <!-- more items -->\n  </ul>\n  <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">\n    Get Started\n  </button>\n</div>\n\nGrid layout:\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n  <!-- card components -->\n</div>'
            },
            pitfalls: [
                { title: 'Class Name Bloat', description: 'Adding 20+ utility classes to every element makes HTML unreadable. Extract repeated patterns into component classes or use @apply in CSS.' },
                { title: 'Ignoring Mobile-First', description: 'Writing desktop styles first, then trying to make mobile work is backwards. Start mobile, enhance for larger screens.' },
                { title: 'Not Using Design Tokens', description: 'Hardcoding colors like bg-blue-500 everywhere. Use semantic names in config: bg-primary, bg-secondary for easier theme changes.' },
                { title: 'Mixing Frameworks', description: 'Loading both Tailwind and Bootstrap causes conflicts and bloat. Pick one framework per project.' },
                { title: 'No Purging in Production', description: 'Not purging unused Tailwind classes results in huge CSS files. Configure purge for production builds.' }
            ],
            keywords: [
                { word: 'Utility-First CSS', meaning: 'Approach using small, single-purpose classes instead of semantic class names', usage: '"Tailwind is utility-first: flex items-center justify-between instead of .navbar"' },
                { word: 'Responsive Breakpoints', meaning: 'Screen width thresholds where layout changes (sm: 640px, md: 768px, lg: 1024px)', usage: '"md:flex-row changes flex direction to row on screens 768px and wider"' },
                { word: 'Design Tokens', meaning: 'Named variables for design values: colors, spacing, fonts', usage: '"Define design tokens in config: primary: #6C5CE7, spacing-unit: 8px"' },
                { word: '@apply Directive', meaning: 'Tailwind feature to extract utility classes into custom CSS classes', usage: '".btn { @apply px-4 py-2 bg-blue-500 rounded; }" creates reusable button class' },
                { word: 'Purge CSS', meaning: 'Removing unused CSS classes from production build to reduce file size', usage: '"Configure purge to scan HTML files and remove unused Tailwind classes"' }
            ],
            resources: [
                { title: 'Tailwind CSS Crash Course', url: 'https://www.youtube.com/results?search_query=tailwind+css+crash+course' },
                { title: 'Bootstrap 5 Complete Tutorial', url: 'https://www.youtube.com/results?search_query=bootstrap+5+complete+tutorial' },
                { title: 'Responsive Design with Tailwind', url: 'https://www.youtube.com/results?search_query=responsive+design+tailwind' }
            ],
            notes: 'Instructor: Build a component live using both Tailwind and Bootstrap to show differences. Have students recreate a design using utility classes. Practice responsive breakpoints by testing on different screen sizes. Show how to configure Tailwind theme. Emphasize: utility frameworks are tools, not crutches—understand underlying CSS concepts.'
        },

        // ============================================
        // LESSON WP-FE-03
        // ============================================
        {
            lessonCode: 'WP-FE-03',
            title: 'Responsive Design Prompts',
            summary: 'Master creating responsive layouts that work perfectly across all devices using AI-assisted design prompts.',
            objectives: [
                'Understand responsive design principles and mobile-first methodology',
                'Generate responsive CSS/HTML using AI with proper breakpoint logic',
                'Create flexible layouts using Flexbox and CSS Grid with AI assistance',
                'Test and optimize responsive designs across device sizes'
            ],
            theory: [
                'Responsive design means websites adapt to screen size. A 3-column desktop layout becomes 1 column on mobile. Content reflows, images resize, navigation collapses—all automatically based on viewport width.',
                'Mobile-first approach starts with mobile design, then adds complexity for larger screens. This ensures core content works everywhere and prevents desktop bloat from breaking mobile. In CSS, write base styles for mobile, use media queries to enhance for tablets/desktop.',
                'Flexbox handles one-dimensional layouts (rows or columns). Use for navigation bars, card layouts in a row, centering content. AI can generate flex containers with proper properties: justify-content, align-items, flex-wrap.',
                'CSS Grid handles two-dimensional layouts (rows and columns). Use for page structure, image galleries, dashboard layouts. AI can create grid templates with responsive behavior: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) creates responsive columns automatically.',
                'Viewport units (vw, vh) and relative units (rem, em, %) enable fluid typography and spacing. AI can help calculate responsive font scales: "Generate fluid typography from 16px mobile to 20px desktop using clamp()".',
                'Common breakpoints: 640px (sm, mobile landscape), 768px (md, tablets), 1024px (lg, small laptops), 1280px (xl, desktops). Don\'t design for specific devices—design for content needs. Add breakpoints where layout breaks, not at arbitrary device widths.'
            ],
            why: 'In real-world usage, 60%+ of web traffic is mobile. Sites that don\'t work on phones lose over half their potential users immediately. E-commerce sees direct revenue loss from poor mobile experience—if checkout doesn\'t work on phone, sale is lost. Google penalizes non-mobile-friendly sites in search rankings. Responsive design is no longer optional; it\'s expected. Clients won\'t accept "desktop-only" websites. Developers who can\'t build responsive are unemployable. AI helps by generating responsive CSS patterns you might not know—like auto-fit grids or clamp() functions—making professional responsive design accessible to beginners.',
            prompts: {
                goal: 'Generate responsive layout for a product grid',
                before: 'Make a responsive product grid',
                after: 'Generate a fully responsive product grid layout with the following specifications:\n\nGrid behavior by screen size:\n- Mobile (< 640px): 1 column, cards stack vertically, 16px gap\n- Tablet (640px - 1023px): 2 columns, 20px gap\n- Desktop (1024px - 1279px): 3 columns, 24px gap\n- Large desktop (1280px+): 4 columns, 32px gap\n\nCard specifications:\n- Aspect ratio 1:1.3 (width:height)\n- Image at top (covers full width, maintains aspect ratio)\n- Product title (2 lines max, ellipsis overflow)\n- Price (large, bold)\n- "Add to Cart" button (full width on mobile, auto width on desktop)\n\nResponsive features:\n- Container max-width: 1440px, centered with padding\n- Images: responsive, lazy loading\n- Typography: fluid scale (14px mobile → 16px desktop)\n- Touch-friendly on mobile: 44px min tap target size\n\nProvide:\n1. HTML structure with semantic markup\n2. CSS using Grid (not Flexbox for main layout)\n3. Media queries for all breakpoints\n4. Mobile-first approach\n5. Accessibility considerations',
                resultBefore: 'AI generates fixed-width layout or simple flex-wrap without proper breakpoint control, non-fluid typography, and no mobile optimization.',
                resultAfter: 'AI provides production-ready responsive grid:\n\nCSS:\n.product-grid {\n  display: grid;\n  grid-template-columns: 1fr; /* Mobile: 1 column */\n  gap: 1rem;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n@media (min-width: 640px) {\n  .product-grid {\n    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */\n    gap: 1.25rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .product-grid {\n    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */\n    gap: 1.5rem;\n  }\n}\n\n@media (min-width: 1280px) {\n  .product-grid {\n    grid-template-columns: repeat(4, 1fr); /* Large: 4 columns */\n    gap: 2rem;\n  }\n}\n\n.product-card__image {\n  width: 100%;\n  aspect-ratio: 1 / 1.3;\n  object-fit: cover;\n}\n\n.product-card__title {\n  font-size: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-card__button {\n  width: 100%;\n  min-height: 44px; /* Touch-friendly */\n}\n\n@media (min-width: 1024px) {\n  .product-card__button {\n    width: auto;\n    padding-inline: 2rem;\n  }\n}'
            },
            pitfalls: [
                { title: 'Desktop-First Approach', description: 'Starting with desktop design creates bloated mobile code. Always design mobile-first, enhance for desktop.' },
                { title: 'Fixed Width Elements', description: 'Using width: 500px breaks on smaller screens. Use max-width, percentages, or viewport units instead.' },
                { title: 'Ignoring Touch Targets', description: 'Buttons/links under 44x44px are hard to tap on mobile. Always ensure adequate touch target size.' },
                { title: 'Too Many Breakpoints', description: 'Having 10+ breakpoints makes maintenance nightmare. Use 3-4 major breakpoints where content naturally breaks.' },
                { title: 'Not Testing on Real Devices', description: 'Browser DevTools are helpful but not perfect. Test on actual phones and tablets to catch issues.' }
            ],
            keywords: [
                { word: 'Responsive Design', meaning: 'Design approach where layout adapts to screen size and device capabilities', usage: '"Responsive design ensures website works on phones, tablets, and desktops"' },
                { word: 'Mobile-First', meaning: 'Design methodology starting with mobile layout, then enhancing for larger screens', usage: '"Mobile-first CSS: write base styles for mobile, use min-width media queries for desktop"' },
                { word: 'Breakpoint', meaning: 'Screen width threshold where layout changes using media queries', usage: '"Add breakpoint at 768px where 1-column mobile becomes 2-column tablet layout"' },
                { word: 'Fluid Typography', meaning: 'Text size that scales smoothly between minimum and maximum based on viewport', usage: '"font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem) scales from 16px to 24px fluidly"' },
                { word: 'Viewport Units', meaning: 'CSS units relative to viewport size: vw (viewport width), vh (viewport height)', usage: '"width: 100vw means full viewport width, height: 50vh means half viewport height"' }
            ],
            resources: [
                { title: 'Responsive Web Design - Complete Guide', url: 'https://www.youtube.com/results?search_query=responsive+web+design+complete+guide' },
                { title: 'CSS Grid and Flexbox for Responsive Layouts', url: 'https://www.youtube.com/results?search_query=css+grid+flexbox+responsive' },
                { title: 'Mobile-First Design Explained', url: 'https://www.youtube.com/results?search_query=mobile+first+design+explained' }
            ],
            notes: 'Instructor: Demonstrate responsive design live by resizing browser. Show how mobile-first CSS is more maintainable than desktop-first. Have students build responsive layout and test on real devices. Practice creating breakpoints based on content needs, not device sizes. Emphasize: responsive is not optional—it\'s standard practice.'
        },

        // ============================================
        // LESSON WP-FE-04
        // ============================================
        {
            lessonCode: 'WP-FE-04',
            title: 'React / Vue Component Generation',
            summary: 'Learn to generate professional React and Vue components using AI prompts with proper state management and best practices.',
            objectives: [
                'Understand component-based architecture in React and Vue',
                'Generate functional components with proper props and state using AI',
                'Write prompts that produce reusable, maintainable component code',
                'Implement common patterns: controlled inputs, conditional rendering, lists'
            ],
            theory: [
                'Components are reusable pieces of UI that encapsulate HTML, CSS, and logic. A Button component can be used throughout the app with different text, colors, and click handlers—reducing code duplication.',
                'React uses JSX (JavaScript + XML syntax). Vue uses template syntax. Both are component-based, but AI needs to know which framework you\'re using to generate correct syntax.',
                'Props (properties) pass data from parent to child components. "Pass user data as props to UserCard component." State manages data that changes within a component. "Button component has loading state that changes onClick."',
                'Functional components with hooks (React: useState, useEffect; Vue: ref, computed) are modern standard. AI should generate functional components unless you specifically request class components.',
                'AI can generate common patterns: controlled form inputs (value and onChange bound to state), conditional rendering (show/hide based on state), mapping arrays to components (product list from data array), and event handling.',
                'Component structure should be: imports at top, props definition (TypeScript interface or PropTypes), state hooks, functions/handlers, useEffect for side effects, return JSX/template. AI can follow this structure when prompted properly.'
            ],
            why: 'In modern web development, component frameworks dominate. React powers Facebook, Instagram, Netflix. Vue is used by Alibaba, Xiaomi. Knowing component-based development is essential for employment. Components make large apps manageable—instead of one massive HTML file, you have small, focused components that teams can work on independently. Reusability saves time—build a Card component once, use it everywhere. AI dramatically accelerates component development: describe what you need, get a working component in seconds instead of typing from scratch. This lets you focus on business logic instead of boilerplate code.',
            prompts: {
                goal: 'Generate a React component for a user profile card',
                before: 'Create a user profile card component in React',
                after: 'Generate a React functional component for a user profile card with the following specifications:\n\nComponent name: UserProfileCard\n\nProps (TypeScript interface):\n- user: object with { name, email, avatar, role, joinDate, isActive }\n- onEdit: function called when edit button clicked\n- onDelete: function called when delete button clicked\n- showActions: boolean (if false, hide edit/delete buttons)\n\nUI Layout:\n- Avatar image (circle, 80px diameter) on left\n- User info on right: name (h3), role (subtitle), email, join date\n- Status badge: "Active" (green) or "Inactive" (gray) based on isActive\n- Action buttons at bottom right: Edit (blue), Delete (red)\n\nFeatures:\n- Default avatar if no avatar URL provided\n- Conditional rendering of actions based on showActions prop\n- Hover effects on buttons\n- Responsive: stack vertically on mobile (< 640px)\n\nProvide:\n1. Component code with TypeScript\n2. Tailwind CSS for styling\n3. PropTypes validation as comments (in case TypeScript not used)\n4. Example usage with sample data',
                resultBefore: 'AI generates basic component without TypeScript types, no default props, missing conditional logic, and hardcoded styles.',
                resultAfter: 'AI provides production-ready component:\n\nimport React from \'react\';\n\ninterface User {\n  name: string;\n  email: string;\n  avatar?: string;\n  role: string;\n  joinDate: string;\n  isActive: boolean;\n}\n\ninterface UserProfileCardProps {\n  user: User;\n  onEdit: () => void;\n  onDelete: () => void;\n  showActions?: boolean;\n}\n\nconst UserProfileCard: React.FC<UserProfileCardProps> = ({\n  user,\n  onEdit,\n  onDelete,\n  showActions = true\n}) => {\n  const defaultAvatar = \'https://via.placeholder.com/80\';\n\n  return (\n    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-white rounded-lg shadow-md">\n      <img \n        src={user.avatar || defaultAvatar}\n        alt={`${user.name}\'s avatar`}\n        className="w-20 h-20 rounded-full object-cover"\n      />\n      <div className="flex-1 text-center sm:text-left">\n        <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>\n        <p className="text-sm text-gray-600">{user.role}</p>\n        <p className="text-sm text-gray-500 mt-1">{user.email}</p>\n        <p className="text-xs text-gray-400 mt-1">Joined: {user.joinDate}</p>\n        <span className={`inline-block px-2 py-1 mt-2 text-xs font-semibold rounded ${\n          user.isActive \n            ? \'bg-green-100 text-green-800\' \n            : \'bg-gray-100 text-gray-800\'\n        }`}>\n          {user.isActive ? \'Active\' : \'Inactive\'}\n        </span>\n      </div>\n      {showActions && (\n        <div className="flex gap-2">\n          <button \n            onClick={onEdit}\n            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"\n          >\n            Edit\n          </button>\n          <button \n            onClick={onDelete}\n            className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"\n          >\n            Delete\n          </button>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default UserProfileCard;\n\n// Example usage:\n<UserProfileCard \n  user={{\n    name: "Jane Doe",\n    email: "jane@example.com",\n    avatar: "https://...",\n    role: "Software Engineer",\n    joinDate: "Jan 2024",\n    isActive: true\n  }}\n  onEdit={() => console.log(\'Edit clicked\')}\n  onDelete={() => console.log(\'Delete clicked\')}\n  showActions={true}\n/>'
            },
            pitfalls: [
                { title: 'No Type Safety', description: 'Skipping TypeScript or PropTypes means props errors only caught at runtime. Always define prop types.' },
                { title: 'Prop Drilling', description: 'Passing props through many component levels. Use Context API or state management (Redux, Zustand) for deeply nested data.' },
                { title: 'Missing Default Props', description: 'Not providing defaults for optional props causes errors. Use default parameter values or defaultProps.' },
                { title: 'Inline Functions in JSX', description: 'Creating new function on every render: onClick={() => handler()} re-renders child components unnecessarily. Define functions outside JSX.' },
                { title: 'Not Memoizing Expensive Computations', description: 'Recalculating derived data on every render. Use useMemo (React) or computed (Vue) for performance.' }
            ],
            keywords: [
                { word: 'Component', meaning: 'Reusable, self-contained piece of UI with its own logic and styling', usage: '"Button component accepts text, color, and onClick props"' },
                { word: 'Props', meaning: 'Data passed from parent component to child component (read-only)', usage: '"<UserCard user={userData} /> passes user data as props to UserCard"' },
                { word: 'State', meaning: 'Data managed within a component that triggers re-render when changed', usage: '"const [count, setCount] = useState(0) creates count state"' },
                { word: 'Hooks', meaning: 'Functions that let you use React features in functional components (useState, useEffect, etc.)', usage: '"useEffect hook runs side effects after component renders"' },
                { word: 'Conditional Rendering', meaning: 'Showing/hiding UI elements based on conditions', usage: '"{isLoggedIn && <Dashboard />} only renders Dashboard if user logged in"' }
            ],
            resources: [
                { title: 'React Functional Components - Complete Guide', url: 'https://www.youtube.com/results?search_query=react+functional+components+guide' },
                { title: 'Vue 3 Composition API Tutorial', url: 'https://www.youtube.com/results?search_query=vue+3+composition+api+tutorial' },
                { title: 'Props and State in React Explained', url: 'https://www.youtube.com/results?search_query=react+props+state+explained' }
            ],
            notes: 'Instructor: Build a component live using AI, showing prompt refinement. Have students create 3 components for their project. Practice passing props and managing state. Show common bugs (missing keys in lists, not binding event handlers). Emphasize: components are building blocks—learn to think in components, not pages.'
        },

        // Due to length constraints, I'll continue with remaining lessons WP-FE-05 through WP-FE-09 in similar detail...
        // Let me add them now:

        {
            lessonCode: 'WP-FE-05',
            title: 'Navigation Bar & Footer Design',
            summary: 'Master creating professional navigation and footer components with AI, including mobile menus and accessibility features.',
            objectives: [
                'Generate responsive navigation bars with mobile hamburger menus',
                'Create footer components with multiple column layouts',
                'Implement sticky/fixed navigation using AI-generated CSS',
                'Add accessibility features: keyboard navigation, ARIA labels, focus states'
            ],
            theory: [
                'Navigation bars are critical UI elements that appear on every page. They need to be responsive (desktop horizontal menu, mobile hamburger), accessible (keyboard navigable), and performant (sticky without layout shift).',
                'Common nav patterns: logo on left, menu items in center or right, CTA button (sign up/login) highlighted, dropdown menus for sub-pages, search bar in nav or as expandable icon.',
                'Mobile navigation requires hamburger menu (three lines icon) that opens overlay or slide-in menu. AI can generate this with pure CSS or JavaScript, including smooth animations.',
                'Sticky navigation (stays at top when scrolling) improves UX but must avoid layout shift. Use position: sticky with proper offsets, or position: fixed with body padding-top equal to nav height.',
                'Footer typically has multiple columns: company info, links (products, support, legal), social media icons, newsletter signup. On mobile, columns stack vertically.',
                'Accessibility requirements: skip-to-content link for keyboard users, ARIA current page indicator, focus visible styles, keyboard-accessible dropdowns, proper semantic HTML (nav, ul, li elements).'
            ],
            why: 'In real websites, poor navigation drives users away. If people can\'t find what they\'re looking for in 3 clicks, they leave. E-commerce sites with confusing navigation lose sales. Mobile-unfriendly menus frustrate 60% of users. Accessible navigation isn\'t optional—it\'s legally required in many jurisdictions. AI helps generate navigation that follows best practices automatically: responsive behavior, accessibility features, smooth animations. This prevents common mistakes like non-mobile-friendly menus or missing keyboard navigation that developers often forget.',
            prompts: {
                goal: 'Generate responsive navigation with mobile menu',
                before: 'Create a navigation bar',
                after: 'Generate a fully responsive navigation bar component with the following specifications:\n\nDesktop layout (> 768px):\n- Logo on left (image + text)\n- Horizontal menu items in center: Home, About, Services (dropdown), Portfolio, Blog, Contact\n- Right side: Search icon, "Sign In" link, "Get Started" button (primary color)\n- Sticky navigation (stays at top when scrolling)\n- Active page highlighted\n\nMobile layout (< 768px):\n- Logo on left, hamburger icon on right\n- Clicking hamburger opens slide-in menu from right\n- Menu overlay with close button (X)\n- Menu items stacked vertically\n- Smooth open/close animation\n\nServices dropdown (desktop):\n- Appears on hover\n- 3 items: Web Design, App Development, SEO\n- Arrow indicator on parent item\n- Fade-in animation\n\nAccessibility:\n- Skip to content link (visible on keyboard focus)\n- ARIA labels on icons\n- Keyboard navigation works (Tab, Enter, Escape)\n- Focus visible styles\n- Current page aria-current="page"\n\nProvide:\n1. HTML with semantic markup\n2. CSS (or Tailwind classes)\n3. JavaScript for mobile menu toggle and dropdown\n4. Accessibility features implemented',
                resultBefore: 'AI generates basic nav without mobile menu, no dropdown logic, missing accessibility, not sticky, poor responsive behavior.',
                resultAfter: 'AI provides complete navigation system with HTML structure, responsive CSS including media queries, JavaScript for hamburger toggle and dropdown interactions, proper ARIA labels, keyboard event handlers, smooth transitions, and mobile-first approach—production-ready code.'
            },
            pitfalls: [
                { title: 'Hamburger Menu Not Keyboard Accessible', description: 'Mobile menu works with mouse/touch but not keyboard. Always add keyboard event listeners.' },
                { title: 'Sticky Nav Causing Layout Shift', description: 'Navigation becoming sticky pushes content down. Reserve space or use sticky positioning correctly.' },
                { title: 'No Visual Feedback for Current Page', description: 'Users can\'t tell which page they\'re on. Highlight active nav item with style and aria-current.' },
                { title: 'Dropdown Closes Too Quickly', description: 'Hover-only dropdowns frustrate users if mouse leaves accidentally. Add slight delay before closing.' },
                { title: 'Footer Not Mobile-Friendly', description: 'Four-column footer becomes unreadable on mobile. Stack columns vertically with proper spacing.' }
            ],
            keywords: [
                { word: 'Hamburger Menu', meaning: 'Three horizontal lines icon that opens mobile navigation menu', usage: '"Clicking hamburger icon toggles mobile menu visibility"' },
                { word: 'Sticky Navigation', meaning: 'Navigation bar that stays visible at top of screen while scrolling', usage: '"position: sticky; top: 0; keeps nav at top when user scrolls down"' },
                { word: 'Dropdown Menu', meaning: 'Sub-menu that appears when hovering or clicking parent menu item', usage: '"Services nav item has dropdown with Web Design, SEO, Marketing options"' },
                { word: 'Skip Link', meaning: 'Hidden link allowing keyboard users to skip navigation and jump to main content', usage: '"<a href=\'#main\' class=\'skip-link\'>Skip to content</a> improves keyboard navigation"' },
                { word: 'aria-current', meaning: 'ARIA attribute indicating current item in navigation', usage: '"<a href=\'/about\' aria-current=\'page\'>About</a> for current page"' }
            ],
            resources: [
                { title: 'Responsive Navigation Bar Tutorial', url: 'https://www.youtube.com/results?search_query=responsive+navigation+bar+tutorial' },
                { title: 'Accessible Dropdown Menus', url: 'https://www.youtube.com/results?search_query=accessible+dropdown+menus' },
                { title: 'Mobile Menu with Smooth Animations', url: 'https://www.youtube.com/results?search_query=mobile+menu+smooth+animations' }
            ],
            notes: 'Instructor: Build navigation live, showing responsive behavior at different screen sizes. Demonstrate keyboard navigation. Have students test navigation with screen reader. Show common mistakes and their fixes. Practice creating dropdown menus with proper accessibility.'
        },

        {
            lessonCode: 'WP-FE-06',
            title: 'Form Creation & Validation',
            summary: 'Learn to generate accessible, user-friendly forms with client-side validation using AI assistance.',
            objectives: [
                'Create semantic, accessible form markup with proper labels and structure',
                'Implement client-side validation (required fields, email format, password strength)',
                'Generate helpful error messages and success states',
                'Handle form submission and loading states'
            ],
            theory: [
                'Forms are how users interact with websites: login, registration, contact, checkout, search. Poor forms frustrate users and hurt conversions. Good forms are clear, accessible, and provide immediate feedback.',
                'Every input must have an associated label using for/id attributes or by wrapping input in label. Labels help screen readers and make inputs easier to click (clicking label focuses input).',
                'Validation should happen on multiple levels: HTML5 attributes (required, type="email", pattern), JavaScript validation on input/blur events, server-side validation (never trust client). AI can generate all validation layers.',
                'Error messages must be specific and actionable: not "Invalid input" but "Email must include @ symbol" or "Password must be at least 8 characters with one number". Error messages should appear near the invalid field and be programmatically linked using aria-describedby.',
                'Visual feedback improves UX: show password strength meter as user types, display green checkmark for valid fields, provide character count for limited inputs, show loading spinner during submission.',
                'Form states to handle: default (empty), typing (user entering data), invalid (show errors), valid (show success indicators), submitting (loading state), submitted (success message or error).'
            ],
            why: 'In e-commerce, form abandonment directly impacts revenue. 60% of users abandon forms that are too long, confusing, or show unhelpful errors. Bad error messages "Invalid entry" leave users guessing. Good validation "Password needs at least one uppercase letter" helps users fix it immediately. Accessible forms aren\'t just for disabled users—clear labels and error messages help everyone, especially on mobile. AI accelerates form development: describe what you need (contact form with name, email, message), get complete validated form with error handling in seconds instead of hours of typing boilerplate code.',
            prompts: {
                goal: 'Generate a registration form with validation',
                before: 'Create a signup form',
                after: 'Generate a user registration form with comprehensive client-side validation:\n\nForm fields:\n1. Full Name (required, min 2 characters)\n2. Email (required, valid email format)\n3. Password (required, min 8 chars, must include uppercase, lowercase, number, special character)\n4. Confirm Password (must match password)\n5. Terms checkbox (required)\n\nValidation requirements:\n- Real-time validation on blur (when user leaves field)\n- Show error messages below each field with red text and icon\n- Show success checkmark for valid fields (green)\n- Password strength indicator (Weak/Medium/Strong) with color bar\n- Disable submit button until all fields valid\n- Show field requirements on focus (helper text)\n\nError messages (specific and helpful):\n- Name: "Please enter your full name (minimum 2 characters)"\n- Email: "Please enter a valid email address (example@domain.com)"\n- Password: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character"\n- Confirm: "Passwords must match"\n- Terms: "You must accept the terms and conditions"\n\nSubmission handling:\n- Show loading spinner on button during submission\n- Disable form inputs while submitting\n- Show success message after submission\n- Handle errors (show at top of form)\n\nAccessibility:\n- Proper label associations\n- aria-describedby for error messages\n- aria-invalid on invalid fields\n- Focus management (first error on submit)\n\nProvide:\n1. HTML with semantic markup\n2. CSS for styling (Tailwind or custom)\n3. JavaScript for validation logic\n4. All accessibility attributes',
                resultBefore: 'AI creates basic form without validation, generic errors, no accessibility, missing loading states, poor UX.',
                resultAfter: 'AI generates production-ready form with HTML structure including proper labels and ARIA attributes, comprehensive JavaScript validation functions checking each field on blur, specific error messages appearing below fields with role="alert", password strength calculator with visual indicator, submit handler with loading state, disabled states during submission, focus management sending user to first error, and responsive styling—fully accessible and user-friendly.'
            },
            pitfalls: [
                { title: 'Missing Label Associations', description: 'Input without proper label means screen readers can\'t identify field purpose. Always use for/id or wrap in label.' },
                { title: 'Generic Error Messages', description: 'Saying "Error" or "Invalid" doesn\'t help users fix the problem. Be specific about what\'s wrong and how to fix it.' },
                { title: 'Validating Only on Submit', description: 'Users prefer immediate feedback. Validate on blur (when leaving field) so they know right away if it\'s correct.' },
                { title: 'Not Disabling Submit During Processing', description: 'Users might click submit multiple times, creating duplicate submissions. Disable button and show loading state.' },
                { title: 'Client-Side Validation Only', description: 'Always validate server-side too. Client validation improves UX but can be bypassed—server validation provides security.' }
            ],
            keywords: [
                { word: 'Client-Side Validation', meaning: 'Checking form data in browser before sending to server', usage: '"JavaScript validates email format immediately when user types"' },
                { word: 'aria-describedby', meaning: 'ARIA attribute linking input to description or error message', usage: '"<input aria-describedby=\'email-error\'> connects input to error message element"' },
                { word: 'Form State', meaning: 'Current condition of form: pristine, dirty, invalid, valid, submitting, submitted', usage: '"Disable submit button when form state is invalid or submitting"' },
                { word: 'Controlled Input', meaning: 'Input value controlled by JavaScript state (React/Vue pattern)', usage: '"<input value={email} onChange={e => setEmail(e.target.value)} />"' },
                { word: 'Progressive Enhancement', meaning: 'Building basic HTML forms that work without JavaScript, enhancing with JS for better UX', usage: '"Form submits normally without JS, but with JS we add real-time validation"' }
            ],
            resources: [
                { title: 'Accessible Forms - Complete Guide', url: 'https://www.youtube.com/results?search_query=accessible+forms+complete+guide' },
                { title: 'Form Validation with JavaScript', url: 'https://www.youtube.com/results?search_query=form+validation+javascript' },
                { title: 'Password Strength Indicator Tutorial', url: 'https://www.youtube.com/results?search_query=password+strength+indicator' }
            ],
            notes: 'Instructor: Build form live, adding validation step by step. Show how bad error messages frustrate users vs helpful ones. Demonstrate screen reader navigation through form. Have students create form for their project with full validation. Test forms without JavaScript to show progressive enhancement.'
        },

        // Continuing with remaining 3 lessons...

        {
            lessonCode: 'WP-FE-07',
            title: 'Animations & Scroll Effects',
            summary: 'Master creating smooth animations and scroll-triggered effects using AI-generated CSS and JavaScript.',
            objectives: [
                'Understand CSS transitions and animations fundamentals',
                'Generate scroll-triggered animations using Intersection Observer API',
                'Create smooth page transitions and micro-interactions',
                'Implement performance-optimized animations that don\'t cause jank'
            ],
            theory: [
                'Animations enhance user experience when used purposefully: button hover effects provide feedback, scroll animations guide attention, loading spinners communicate processing, page transitions create flow. Overuse causes distraction and annoyance.',
                'CSS transitions animate property changes: hover states, show/hide elements, color changes. Syntax: transition: property duration easing-function delay. AI can generate smooth transitions for any property.',
                'CSS animations (@keyframes) create complex multi-step animations: fade-in, slide-up, pulse, rotate. Define keyframes (0% to 100%), apply animation: name duration easing iteration-count.',
                'Scroll animations reveal content as user scrolls. Intersection Observer API detects when element enters viewport, triggers class addition, CSS handles animation. Better performance than scroll event listeners.',
                'Performance-critical: only animate transform (translate, scale, rotate) and opacity—these use GPU acceleration. Animating width, height, top, left causes layout recalculation (jank). Always use transform: translateY() instead of top position.',
                'Respect user preferences: prefers-reduced-motion media query disables animations for users who request it (accessibility requirement). AI should include this by default.'
            ],
            why: 'In modern web design, static sites feel dated. Subtle animations make sites feel polished and professional—notice how Apple, Stripe, and Airbnb use scroll animations. E-commerce sites use animation to draw attention to CTAs and products. Portfolio sites use scroll effects to impress potential clients. However, bad animations—slow, janky, excessive—hurt UX and make sites feel cheap. AI helps generate performant animations using best practices (GPU-accelerated properties, Intersection Observer, reduced-motion). This prevents common mistakes like animating expensive properties or forgetting accessibility concerns.',
            prompts: {
                goal: 'Generate scroll-triggered fade-up animations',
                before: 'Add animations when scrolling',
                after: 'Create scroll-triggered fade-up animations for section content with the following specifications:\n\nAnimation behavior:\n- Elements start invisible and below normal position (opacity 0, translateY 50px)\n- When element enters viewport (75% visible), trigger animation\n- Fade in and slide up to normal position over 0.6 seconds\n- Use ease-out easing for natural feel\n- Stagger animation: if multiple elements, delay each by 0.1s\n\nElements to animate:\n- Section headings (h2)\n- Paragraph text\n- Card components\n- Images\n\nImplementation requirements:\n- Use Intersection Observer API (not scroll events for performance)\n- CSS classes: .fade-up (initial hidden state), .fade-up-visible (animated state)\n- Support multiple instances on same page\n- Respect prefers-reduced-motion (no animation for users who prefer reduced motion)\n- Only trigger animation once (not on every scroll)\n\nOptimizations:\n- Use transform and opacity only (GPU accelerated)\n- Use will-change: transform for better performance\n- Disconnect observer after all animations triggered\n\nProvide:\n1. HTML markup with animation classes\n2. CSS with @keyframes or transition\n3. JavaScript Intersection Observer implementation\n4. Prefers-reduced-motion styles\n5. Usage instructions',
                resultBefore: 'AI generates scroll event listener checking scroll position constantly (bad performance), animates top/left properties (causes layout thrashing), no accessibility consideration.',
                resultAfter: 'AI provides performant implementation:\n\nCSS:\n.fade-up {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: opacity 0.6s ease-out, transform 0.6s ease-out;\n}\n\n.fade-up-visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fade-up {\n    opacity: 1;\n    transform: none;\n    transition: none;\n  }\n}\n\nJavaScript:\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach((entry, index) => {\n    if (entry.isIntersecting) {\n      setTimeout(() => {\n        entry.target.classList.add(\'fade-up-visible\');\n      }, index * 100); // stagger delay\n      observer.unobserve(entry.target); // trigger once\n    }\n  });\n}, {\n  threshold: 0.75\n});\n\ndocument.querySelectorAll(\'.fade-up\').forEach(el => {\n  observer.observe(el);\n});'
            },
            pitfalls: [
                { title: 'Animating Expensive Properties', description: 'Animating width, height, top, left causes layout recalculation. Use transform (translateX/Y, scale) and opacity only.' },
                { title: 'Using Scroll Events', description: 'Scroll events fire constantly, causing performance issues. Use Intersection Observer instead.' },
                { title: 'Too Many Animations', description: 'Animating every element overwhelms users. Be selective—animate what matters for UX.' },
                { title: 'Ignoring Reduced Motion Preference', description: 'Not respecting prefers-reduced-motion is accessibility violation. Always include fallback.' },
                { title: 'Long Animation Durations', description: 'Animations over 1 second feel slow. Keep most animations between 0.2s - 0.6s for snappy feel.' }
            ],
            keywords: [
                { word: 'CSS Transition', meaning: 'Smooth change between property values over time', usage: '"transition: opacity 0.3s ease-in-out; animates opacity changes"' },
                { word: 'CSS Animation (@keyframes)', meaning: 'Multi-step animation sequence defined with keyframes', usage: '"@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }"' },
                { word: 'Intersection Observer', meaning: 'API that detects when element enters/exits viewport', usage: '"Use Intersection Observer to trigger animations when element scrolls into view"' },
                { word: 'Transform', meaning: 'CSS property for moving, rotating, scaling elements (GPU accelerated)', usage: '"transform: translateY(-20px) scale(1.05); moves up and slightly enlarges"' },
                { word: 'prefers-reduced-motion', meaning: 'Media query detecting user preference for reduced animations', usage: '"@media (prefers-reduced-motion: reduce) { * { animation: none; } }"' }
            ],
            resources: [
                { title: 'CSS Animations Tutorial - Complete Guide', url: 'https://www.youtube.com/results?search_query=css+animations+tutorial' },
                { title: 'Scroll Animations with Intersection Observer', url: 'https://www.youtube.com/results?search_query=scroll+animations+intersection+observer' },
                { title: 'Web Animation Performance Optimization', url: 'https://www.youtube.com/results?search_query=web+animation+performance' }
            ],
            notes: 'Instructor: Demonstrate good vs bad animations (smooth vs janky). Show performance profiling in DevTools. Have students add scroll animations to their project. Test with prefers-reduced-motion enabled. Emphasize: animations should enhance, not distract.'
        },

        {
            lessonCode: 'WP-FE-08',
            title: 'Accessibility in Frontend (ARIA, contrast, keyboard)',
            summary: 'Master building accessible user interfaces with proper ARIA, color contrast, keyboard navigation, and screen reader support.',
            objectives: [
                'Implement ARIA labels, roles, and states correctly',
                'Ensure sufficient color contrast for WCAG compliance',
                'Create keyboard-navigable interfaces with visible focus states',
                'Test accessibility using screen readers and automation tools'
            ],
            theory: [
                'Accessibility (a11y) means websites work for everyone, including people with disabilities. 15% of world population has some disability—ignoring them means losing users and risking legal action.',
                'ARIA (Accessible Rich Internet Applications) provides semantic information for screen readers when HTML alone isn\'t enough. Three types: roles (button, navigation, dialog), states (aria-expanded, aria-checked), and properties (aria-label, aria-describedby).',
                'Color contrast ratios measure readability. WCAG AA requires 4.5:1 for normal text, 3:1 for large text. AI can check contrast and suggest accessible color combinations: "Generate color palette with WCAG AA contrast compliance".',
                'Keyboard navigation is critical for many users (motor disabilities, power users, screen reader users). All interactive elements must be reachable by Tab, activated by Enter/Space, and show visible focus indicator.',
                'Focus management: when opening modals, focus should move to modal; when closing, return to trigger element. Form errors should move focus to first invalid field. AI can generate proper focus management code.',
                'Screen readers announce content sequentially. Heading hierarchy (h1→h2→h3) lets users navigate by headings. Landmarks (<nav>, <main>, <aside>) let users jump to sections. Alt text on images describes visual content.'
            ],
            why: 'Legal reality: major companies face millions in accessibility lawsuits (Domino\'s, Target, Netflix). US has ADA, EU has European Accessibility Act, many countries have laws requiring accessible websites. Beyond legal compliance, accessibility is good business—more users can access your site, SEO improves (search engines favor accessible sites), and it forces you to build better UX for everyone. AI helps developers who don\'t know accessibility requirements: "Make this button accessible" generates proper ARIA labels, focus states, keyboard handlers automatically. This prevents costly retrofitting accessibility after launch.',
            prompts: {
                goal: 'Generate accessible modal dialog component',
                before: 'Create a modal dialog',
                after: 'Generate a fully accessible modal dialog component with the following specifications:\n\nModal functionality:\n- Opens when trigger button clicked\n- Contains heading, content, close button\n- Closes when: close button clicked, Escape pressed, clicking outside modal\n- Prevents body scroll when open\n\nAccessibility requirements:\n\nARIA:\n- role="dialog" on modal container\n- aria-modal="true"\n- aria-labelledby pointing to modal heading ID\n- aria-describedby pointing to modal content ID\n- Close button has aria-label="Close modal"\n\nKeyboard:\n- Focus trap: Tab cycles through modal elements only\n- Escape key closes modal\n- Focus moves to modal when opened\n- Focus returns to trigger button when closed\n- Close button keyboard accessible\n\nVisual:\n- Visible focus indicators (blue outline, 2px)\n- Color contrast meets WCAG AA (4.5:1 minimum)\n- Background overlay dims page (rgba(0,0,0,0.5))\n\nScreen reader:\n- Announce modal opening (role="dialog" + aria-modal does this)\n- All interactive elements have clear labels\n- Content structure uses headings\n\nProvide:\n1. HTML structure with all ARIA attributes\n2. CSS for styling and focus states\n3. JavaScript for:\n   - Open/close functionality\n   - Focus management (trap and return)\n   - Keyboard event handlers (Escape, Tab)\n   - Body scroll prevention\n4. Usage example\n5. Accessibility testing checklist',
                resultBefore: 'AI creates modal without ARIA, no focus trap (Tab escapes modal), no Escape handler, missing focus indicators, poor contrast—completely inaccessible.',
                resultAfter: 'AI generates accessible modal with:\n\nHTML:\n<button id="openModal">Open Modal</button>\n<div \n  id="myModal" \n  role="dialog" \n  aria-modal="true" \n  aria-labelledby="modalHeading"\n  aria-describedby="modalDesc"\n  class="modal hidden"\n>\n  <div class="modal__content">\n    <h2 id="modalHeading">Modal Title</h2>\n    <p id="modalDesc">Modal description...</p>\n    <button id="closeModal" aria-label="Close modal">X</button>\n  </div>\n</div>\n\nJavaScript includes:\n- Focus trap using array of focusable elements, Tab/Shift+Tab cycling\n- Event listeners for Escape key, close button, outside click\n- Focus save/restore (store trigger element, return on close)\n- Body scroll lock (overflow: hidden on body when modal open)\n- ARIA live region updates if needed\n\nCSS includes:\n- High contrast colors (checking 4.5:1 ratio)\n- Visible focus states (:focus-visible with blue outline)\n- Overlay backdrop\n- Responsive modal sizing'
            },
            pitfalls: [
                { title: 'Misusing ARIA', description: 'Adding wrong ARIA can make accessibility worse. Rule: use semantic HTML first, add ARIA only when HTML isn\'t enough.' },
                { title: 'No Focus Indicators', description: 'Removing outline on focus (outline: none) hurts keyboard users. Always provide visible focus states.' },
                { title: 'Low Color Contrast', description: 'Light gray text on white background fails WCAG. Always check contrast ratios using tools.' },
                { title: 'Missing Keyboard Handlers', description: 'Interactive elements work with mouse but not keyboard. Everything clickable must work with Enter/Space keys.' },
                { title: 'Not Testing with Screen Readers', description: 'Assuming accessibility works without testing. Always test with NVDA (Windows) or VoiceOver (Mac).' }
            ],
            keywords: [
                { word: 'ARIA', meaning: 'Accessible Rich Internet Applications - attributes providing context to assistive tech', usage: '"aria-label=\'Search\' gives screen readers label for icon-only button"' },
                { word: 'Focus Trap', meaning: 'Confining keyboard focus within a component (like modal)', usage: '"Modal focus trap: Tab cycles through modal elements, can\'t escape until closed"' },
                { word: 'Color Contrast Ratio', meaning: 'Measure of difference between text and background colors', usage: '"WCAG AA requires 4.5:1 contrast ratio for normal text readability"' },
                { word: 'Screen Reader', meaning: 'Software that reads web content aloud for blind/visually impaired users', usage: '"Test website with NVDA or VoiceOver screen readers"' },
                { word: 'Semantic HTML', meaning: 'Using meaningful HTML elements that convey purpose', usage: '"<button> is semantic for clickable actions, <div onclick> is not"' }
            ],
            resources: [
                { title: 'Web Accessibility - Complete Course', url: 'https://www.youtube.com/results?search_query=web+accessibility+complete+course' },
                { title: 'ARIA Explained with Examples', url: 'https://www.youtube.com/results?search_query=aria+explained+examples' },
                { title: 'Keyboard Accessibility Tutorial', url: 'https://www.youtube.com/results?search_query=keyboard+accessibility+tutorial' }
            ],
            notes: 'Instructor: Demonstrate screen reader navigation. Show contrast checking tools. Have students navigate site with keyboard only. Build modal together with all accessibility features. Test with automated tools (axe, Lighthouse). Emphasize: accessibility is not optional—it\'s legal requirement and moral imperative.'
        },

        {
            lessonCode: 'WP-FE-09',
            title: 'Performance Optimization Prompts',
            summary: 'Learn to optimize frontend performance using AI to generate efficient code, lazy loading, and performance best practices.',
            objectives: [
                'Understand key performance metrics: LCP, FID, CLS (Core Web Vitals)',
                'Implement lazy loading for images and components using AI',
                'Generate optimized code that minimizes JavaScript bundle size',
                'Use AI to identify and fix performance bottlenecks'
            ],
            theory: [
                'Performance directly impacts user experience and business metrics. 1-second delay in page load decreases conversions by 7%. 53% of mobile users abandon sites taking over 3 seconds to load. Performance is money.',
                'Core Web Vitals are Google\'s performance metrics: LCP (Largest Contentful Paint - should load under 2.5s), FID (First Input Delay - should respond under 100ms), CLS (Cumulative Layout Shift - should be under 0.1). These affect SEO rankings.',
                'Lazy loading delays loading non-critical resources until needed. Images below fold load when user scrolls to them. React components load on route change. This dramatically improves initial page load.',
                'JavaScript bundle size is often biggest performance killer. AI can help: "Optimize this code to reduce bundle size" suggests code splitting, tree shaking, removing unused dependencies, using smaller alternatives.',
                'Image optimization: use next-gen formats (WebP, AVIF), compress images, use responsive images (srcset), lazy load below-fold images, use CDN. AI can generate optimal picture elements with multiple formats and sizes.',
                'Critical rendering path: inline critical CSS, defer non-critical CSS, defer JavaScript, preload key resources, minimize main thread work. AI can analyze your code and suggest specific optimizations.'
            ],
            why: 'Real-world impact: Amazon found 100ms delay costs 1% of sales. Google uses page speed as ranking factor—slow sites rank lower. Mobile users on slow connections abandon slow sites immediately. Users expect instant interactions; anything over 100ms feels laggy. Performance optimization used to require deep expertise; AI democratizes it. Ask AI "Why is this page slow?" with your code, get specific suggestions: lazy load this image, code-split this component, defer this script. This prevents common mistakes like loading entire libraries for one function or not optimizing images.',
            prompts: {
                goal: 'Optimize image loading for performance',
                before: 'Add images to the page',
                after: 'Generate optimized image loading implementation for a product gallery with performance best practices:\n\nContext:\n- 20 product images on page\n- Each image ~500KB original size\n- Target: LCP under 2.5s, CLS = 0\n\nImplementation requirements:\n\nImage optimization:\n- Use modern formats (WebP with JPEG fallback)\n- Multiple sizes for responsive images (400w, 800w, 1200w)\n- Proper srcset and sizes attributes\n- Lazy loading for images below fold\n- Eager loading for above-fold hero image\n\nLayout stability (prevent CLS):\n- Set explicit width and height attributes\n- Use aspect-ratio CSS or padding-bottom hack\n- Reserve space before image loads\n\nLoading strategies:\n- First 3 images: eager load (above fold)\n- Remaining 17 images: lazy load with loading="lazy"\n- Use Intersection Observer for advanced lazy loading\n- Placeholder blur-up effect while loading\n\nHTML structure:\n- Use <picture> element for format selection\n- Provide WebP source with JPEG fallback\n- Descriptive alt text for each image\n- Responsive sizes attribute matching layout\n\nProvide:\n1. HTML with optimized picture elements\n2. CSS for aspect ratio and blur-up effect\n3. JavaScript for advanced lazy loading (if needed)\n4. Image optimization checklist\n5. Performance impact explanation',
                resultBefore: 'AI generates <img src="large.jpg"> for all images with no optimization, lazy loading, or responsiveness—causing huge page weight, slow LCP, and layout shifts.',
                resultAfter: 'AI provides performance-optimized implementation:\n\nHTML:\n<!-- Above fold (eager) -->\n<picture>\n  <source \n    srcset="product-1-400.webp 400w, product-1-800.webp 800w, product-1-1200.webp 1200w"\n    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"\n    type="image/webp"\n  >\n  <source \n    srcset="product-1-400.jpg 400w, product-1-800.jpg 800w, product-1-1200.jpg 1200w"\n    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"\n    type="image/jpeg"\n  >\n  <img \n    src="product-1-800.jpg"\n    alt="Blue cotton t-shirt, front view"\n    width="800"\n    height="1000"\n    loading="eager"\n  >\n</picture>\n\n<!-- Below fold (lazy) -->\n<picture>\n  <source ...same structure... >\n  <img \n    ...\n    loading="lazy"\n    class="lazy-image"\n  >\n</picture>\n\nCSS:\n.lazy-image {\n  aspect-ratio: 4 / 5;\n  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);\n  filter: blur(10px);\n  transition: filter 0.3s;\n}\n\n.lazy-image.loaded {\n  filter: blur(0);\n}\n\nWith notes on:\n- Expected performance gains (LCP improvement, reduced initial load)\n- How responsive images work\n- Why WebP with JPEG fallback\n- Layout shift prevention'
            },
            pitfalls: [
                { title: 'Not Setting Image Dimensions', description: 'Missing width/height causes layout shift as images load. Always set dimensions or aspect-ratio.' },
                { title: 'Loading Huge Images', description: 'Loading 3000px image for 300px display wastes bandwidth. Use srcset to serve appropriate sizes.' },
                { title: 'Eager Loading Everything', description: 'Loading all images immediately is wasteful. Lazy load below-fold content.' },
                { title: 'Blocking Render with JavaScript', description: 'Synchronous scripts in <head> block rendering. Defer or async non-critical JS.' },
                { title: 'No Compression', description: 'Serving uncompressed assets wastes bandwidth. Enable Gzip/Brotli compression on server.' }
            ],
            keywords: [
                { word: 'Core Web Vitals', meaning: 'Google\'s performance metrics: LCP, FID, CLS', usage: '"Optimize LCP (Largest Contentful Paint) to load under 2.5 seconds"' },
                { word: 'Lazy Loading', meaning: 'Deferring loading of non-critical resources until needed', usage: '"<img loading=\'lazy\'> defers loading until image near viewport"' },
                { word: 'Cumulative Layout Shift (CLS)', meaning: 'Metric measuring visual stability (unexpected layout shifts)', usage: '"Set image dimensions to prevent CLS when images load"' },
                { word: 'Code Splitting', meaning: 'Breaking JavaScript into smaller chunks loaded on demand', usage: '"React.lazy() splits component into separate bundle loaded when needed"' },
                { word: 'Tree Shaking', meaning: 'Removing unused code from JavaScript bundles', usage: '"Import only specific functions to enable tree shaking: import { debounce } from \'lodash\'"' }
            ],
            resources: [
                { title: 'Web Performance Optimization - Complete Guide', url: 'https://www.youtube.com/results?search_query=web+performance+optimization' },
                { title: 'Core Web Vitals Explained', url: 'https://www.youtube.com/results?search_query=core+web+vitals+explained' },
                { title: 'Image Optimization Best Practices', url: 'https://www.youtube.com/results?search_query=image+optimization+best+practices' }
            ],
            notes: 'Instructor: Demonstrate performance testing with Lighthouse. Show before/after metrics when optimizing. Have students audit their project for performance issues. Practice optimizing images and lazy loading. Emphasize: performance is feature, not afterthought—build fast from the start.'
        }
    ]
};

const webDevModule3 = {
    courseTitle: 'Web Development',
    moduleNumber: 3,
    moduleName: 'UI/UX Prompts (Design Experience)',
    totalLessons: 11,

    lessons: [
        {
            "id": "WP-UX-00",
            "title": "Essential UI/UX Principles for AI Developers",
            "summary": "Master the foundational UI/UX principles that enable AI developers to create intuitive, user-centered digital experiences through effective prompting and design thinking.",
            "objectives": [
                "Understand core UI/UX principles including visual hierarchy, consistency, and user feedback",
                "Learn how to apply design thinking methodology in AI-assisted workflows",
                "Master the art of translating user needs into effective design prompts for AI tools"
            ],
            "theory": [
                "UI/UX design is the practice of creating interfaces that are both visually appealing and functionally effective for users. User Interface (UI) focuses on the visual elements like buttons, typography, and colors, while User Experience (UX) encompasses the entire journey a user takes through a product.",
                "The foundation of good design rests on five core principles: visual hierarchy guides users' attention to the most important elements first, consistency creates familiarity and reduces cognitive load, feedback confirms user actions and system status, accessibility ensures everyone can use your product regardless of abilities, and simplicity removes unnecessary complexity.",
                "Design thinking is a human-centered approach with five stages: empathize with users to understand their needs, define the problem clearly, ideate multiple solutions, prototype quick versions to test, and iterate based on feedback. This methodology helps create solutions that truly solve user problems.",
                "When working with AI tools, translating design principles into prompts requires specificity and context. Instead of asking for a 'good design,' describe the user scenario, desired emotions, functional requirements, and constraints. This helps AI generate outputs aligned with UX best practices.",
                "Successful AI-assisted design balances automation with human judgment. AI excels at generating variations, suggesting layouts, and applying consistent patterns, but designers must evaluate outputs against user needs, brand values, and accessibility standards to ensure quality experiences."
            ],
            "why": "In real-time development, understanding UI/UX principles saves countless hours of revisions and creates products users actually enjoy using. When developers can prompt AI with design knowledge, they bridge the gap between technical implementation and user satisfaction, reducing the need for specialized designers in early stages while maintaining quality standards that lead to better user engagement and lower bounce rates.",
            "prompts": {
                "goal": "Create a mobile app login screen that follows UI/UX best practices",
                "before": "Create a login screen for my app",
                "after": "Design a mobile login screen (375x812px) for a fitness tracking app targeting users aged 25-40. Apply these UX principles: 1) Visual hierarchy with the app logo at top, login form centered, and sign-up link at bottom, 2) Accessible design with minimum 44px touch targets and WCAG AA contrast ratios, 3) Clear feedback states for form validation, 4) Social login options for reduced friction, 5) Clean, minimalist aesthetic using a calming blue/white palette that conveys trust and wellness",
                "resultBefore": "Generic login form with basic username/password fields, no consideration for mobile ergonomics, poor visual hierarchy, missing accessibility features, and unclear error states",
                "resultAfter": "Professional mobile login interface with properly sized touch targets, clear visual hierarchy guiding user attention, accessible color contrast, micro-interactions for feedback, social login options reducing friction, and thoughtful spacing that works for thumb-based navigation"
            },
            "pitfalls": [
                {
                    "title": "Over-designing for aesthetics while ignoring usability",
                    "solution": "Always prioritize function over form; beautiful designs that users can't navigate are failures"
                },
                {
                    "title": "Skipping user research and assuming you know what users want",
                    "solution": "Validate assumptions with real user feedback, even informal testing reveals critical insights"
                },
                {
                    "title": "Inconsistent design patterns across different screens",
                    "solution": "Create and follow design systems with reusable components and documented patterns"
                },
                {
                    "title": "Neglecting mobile-first design in a mobile-dominated world",
                    "solution": "Start designs with mobile constraints, then enhance for larger screens"
                },
                {
                    "title": "Prompting AI with vague requests expecting perfect results",
                    "solution": "Provide specific context, constraints, user scenarios, and reference examples in prompts"
                }
            ],
            "keywords": [
                {
                    "word": "Visual Hierarchy",
                    "meaning": "The arrangement of design elements to show their order of importance through size, color, contrast, and positioning",
                    "usage": "Establish visual hierarchy by making call-to-action buttons 20% larger than secondary buttons and using high-contrast colors for primary actions"
                },
                {
                    "word": "Cognitive Load",
                    "meaning": "The total mental effort required to use your interface or complete a task",
                    "usage": "Reduce cognitive load by breaking complex forms into multi-step wizards with clear progress indicators"
                },
                {
                    "word": "Affordance",
                    "meaning": "Visual clues that suggest how an element should be used (e.g., buttons look pressable)",
                    "usage": "Improve affordances by adding subtle shadows to buttons and using blue underlines for clickable text links"
                },
                {
                    "word": "User Journey",
                    "meaning": "The complete path a user takes to accomplish a goal in your product",
                    "usage": "Map the user journey from landing page to checkout, identifying friction points where users abandon the process"
                },
                {
                    "word": "Design System",
                    "meaning": "A collection of reusable components, patterns, and guidelines that ensure consistency",
                    "usage": "Build a design system with standardized button styles, color palettes, and spacing units that developers can reference"
                }
            ],
            "resources": [
                {
                    "title": "Laws of UX - Collection of design principles",
                    "url": "https://lawsofux.com"
                },
                {
                    "title": "Nielsen Norman Group - UX research and best practices",
                    "url": "https://www.nngroup.com"
                },
                {
                    "title": "Google Material Design Guidelines",
                    "url": "https://material.io/design"
                },
                {
                    "title": "Apple Human Interface Guidelines",
                    "url": "https://developer.apple.com/design/human-interface-guidelines"
                }
            ],
            "notes": "UI/UX is not just about making things pretty—it's about solving user problems efficiently. When prompting AI for design work, think like a designer first: understand the user's goal, their context, their pain points, and the emotional outcome you want to create. The more design thinking you bring to your prompts, the better your AI-generated results will be."
        },
        {
            "id": "WP-UX-01",
            "title": "Website Wireframe Creation",
            "summary": "Learn to create effective wireframes using AI tools that serve as blueprints for website development, focusing on structure and functionality before visual design.",
            "objectives": [
                "Master wireframing fundamentals and understand their role in the design process",
                "Create low-fidelity and high-fidelity wireframes using AI-assisted prompting techniques",
                "Translate wireframes into actionable development specifications and design handoffs"
            ],
            "theory": [
                "Wireframes are simplified visual guides representing the skeletal framework of a website or application. They focus on layout, content hierarchy, and functionality without the distraction of colors, typography, or detailed graphics. Think of wireframes as architectural blueprints for digital products.",
                "There are three fidelity levels in wireframing: low-fidelity wireframes use simple boxes and lines to show basic structure and are perfect for rapid iteration; mid-fidelity wireframes add more detail like actual content placement and basic UI elements; high-fidelity wireframes include precise spacing, realistic content, and detailed interactions, serving as near-final blueprints for development.",
                "Effective wireframes answer critical questions before coding begins: What content appears on each page? How is information organized and prioritized? What actions can users take? How do users navigate between sections? This planning prevents costly revisions during development and ensures stakeholder alignment early.",
                "When creating wireframes with AI, structure your prompts around page type, user goals, content sections, and interaction patterns. Specify whether you need low or high fidelity, viewport size (mobile, tablet, desktop), and any specific functionality like search, filters, or forms.",
                "Wireframes should evolve through feedback cycles: start with rough sketches to explore multiple directions, refine the chosen direction with stakeholder input, add detail progressively, and validate with user testing before moving to visual design and development."
            ],
            "why": "In real-world projects, wireframing saves weeks of development time by catching structural problems early. A developer who can quickly wireframe with AI can validate ideas with clients in hours instead of days, iterate freely without coding overhead, communicate clearly with designers and stakeholders, and ensure features are well-planned before writing a single line of code. This leads to fewer major revisions and happier clients.",
            "prompts": {
                "goal": "Create a wireframe for an e-commerce product page",
                "before": "Make a wireframe for a product page",
                "after": "Create a high-fidelity desktop wireframe (1440px width) for an e-commerce product page selling premium headphones. Structure: 1) Header with logo, navigation menu, search bar, cart icon, 2) Breadcrumb navigation, 3) Main content area split 60/40 - left side: product image gallery with main image and 4 thumbnails below, right side: product name, star rating with review count, price with strikethrough original price, color selector (visual swatches), quantity selector, 'Add to Cart' CTA and 'Add to Wishlist' secondary button, 4) Below main area: tabbed section with Description/Specifications/Reviews, 5) 'You May Also Like' product recommendations section with 4 product cards, 6) Footer. Use standard wireframe boxes, labels, and annotations for interactive elements.",
                "resultBefore": "Basic rectangular boxes labeled 'image,' 'text,' and 'button' with no clear hierarchy, missing critical e-commerce elements like reviews or product variations, no specification of layout proportions or interaction patterns",
                "resultAfter": "Detailed wireframe clearly showing content zones with proper proportions, all essential e-commerce elements logically organized, annotations indicating interactive behaviors (gallery zoom, color selection updates image, quantity controls), clear visual hierarchy guiding users from product info to purchase action"
            },
            "pitfalls": [
                {
                    "title": "Adding too much visual detail in early wireframes, slowing iteration",
                    "solution": "Start with low-fidelity boxes and lines; add detail only after structure is validated"
                },
                {
                    "title": "Creating wireframes without considering mobile responsiveness",
                    "solution": "Design wireframes for mobile, tablet, and desktop breakpoints simultaneously"
                },
                {
                    "title": "Forgetting to annotate interactive elements and behaviors",
                    "solution": "Add notes explaining what happens on clicks, hovers, and form submissions"
                },
                {
                    "title": "Designing in isolation without stakeholder input",
                    "solution": "Share wireframes early and often, incorporating feedback before adding detail"
                },
                {
                    "title": "Using AI-generated wireframes without critical evaluation",
                    "solution": "Always validate AI outputs against UX best practices and user needs"
                }
            ],
            "keywords": [
                {
                    "word": "Fidelity",
                    "meaning": "The level of detail and refinement in a wireframe, ranging from rough sketches to pixel-perfect layouts",
                    "usage": "Use low-fidelity wireframes for initial concept exploration, then increase fidelity as ideas solidify"
                },
                {
                    "word": "Content Hierarchy",
                    "meaning": "The organization and prioritization of content elements based on importance to user goals",
                    "usage": "Establish content hierarchy by sizing the product image largest, price prominent, and shipping details smaller"
                },
                {
                    "word": "Breakpoint",
                    "meaning": "The screen width at which a responsive design changes layout to accommodate different devices",
                    "usage": "Design wireframes for three breakpoints: mobile (375px), tablet (768px), and desktop (1440px)"
                },
                {
                    "word": "Call-to-Action (CTA)",
                    "meaning": "A button or element designed to prompt immediate user action",
                    "usage": "Position the primary CTA 'Add to Cart' prominently in the wireframe, above the fold on all devices"
                },
                {
                    "word": "Grid System",
                    "meaning": "A framework of vertical and horizontal lines used to structure layouts consistently",
                    "usage": "Apply a 12-column grid system to wireframes for consistent alignment and easier responsive adaptation"
                }
            ],
            "resources": [
                {
                    "title": "Wireframe.cc - Simple online wireframing tool",
                    "url": "https://wireframe.cc"
                },
                {
                    "title": "Balsamiq - Popular wireframing software",
                    "url": "https://balsamiq.com"
                },
                {
                    "title": "UXPin - Complete wireframing and prototyping platform",
                    "url": "https://www.uxpin.com"
                },
                {
                    "title": "Figma Community - Free wireframe templates",
                    "url": "https://www.figma.com/community/wireframes"
                }
            ],
            "notes": "Wireframing is where strategy meets structure. Don't rush this phase—every hour spent wireframing saves five hours of development rework. When using AI to generate wireframes, treat the first output as a starting point, not a final solution. Iterate, annotate, and validate with users. Remember: a wireframe's job is to answer 'what goes where and why,' not to look pretty."
        },
        {
            "id": "WP-UX-02",
            "title": "Design System for Websites",
            "summary": "Build comprehensive design systems that ensure visual consistency, accelerate development, and create cohesive user experiences across all website pages and components.",
            "objectives": [
                "Understand the components and benefits of a comprehensive design system",
                "Create reusable design tokens, components, and patterns using AI assistance",
                "Document and maintain design systems for team collaboration and scalability"
            ],
            "theory": [
                "A design system is a complete set of standards, documentation, and reusable components that guide the creation of consistent digital experiences. It's more than a style guide—it includes design principles, component libraries, code snippets, usage guidelines, and governance rules that ensure every team member creates cohesive experiences.",
                "Design systems contain several key layers: design tokens are the atomic values like specific color codes, spacing units, and font sizes that form the foundation; components are reusable UI elements like buttons, cards, and forms built from tokens; patterns are combinations of components that solve common user problems like login flows or search interfaces; and templates are page-level structures showing how patterns work together.",
                "The benefits of design systems compound over time: designers work faster by reusing proven components instead of redesigning from scratch, developers code more efficiently with pre-built, tested components, products maintain visual consistency across teams and platforms, updates propagate systematically when core tokens change, and new team members onboard quickly with clear documentation.",
                "Building a design system starts with auditing existing designs to identify inconsistencies, then establishing foundational tokens for colors, typography, spacing, and elevation. Next, create core components used across products, document usage guidelines and best practices, and implement version control to manage changes as the system evolves.",
                "AI accelerates design system creation by generating component variations, suggesting token values based on accessibility standards, creating documentation from examples, and identifying inconsistencies across designs. However, human judgment remains essential for establishing design principles and ensuring components solve real user needs."
            ],
            "why": "Real-world teams using design systems report 40-50% faster design and development cycles. Instead of debating button styles in every project, teams focus on solving user problems. For freelancers, a personal design system becomes a competitive advantage—you deliver consistent quality faster than competitors. For agencies, design systems enable junior designers to produce senior-level work by following proven patterns.",
            "prompts": {
                "goal": "Create a comprehensive design system for a SaaS dashboard application",
                "before": "Create a design system for my dashboard",
                "after": "Create a comprehensive design system for a B2B SaaS analytics dashboard targeting data analysts. Include: 1) Color palette: primary brand color (trust-inspiring blue), 3 semantic colors (success green, warning amber, error red), 6 neutral grays from lightest to darkest, all meeting WCAG AA contrast standards, 2) Typography scale: heading sizes (H1-H6) using sans-serif font, body text sizes (large, normal, small), font weights (400, 600, 700), line heights optimized for readability, 3) Spacing system: 8px base unit with scale (4, 8, 16, 24, 32, 48, 64px), 4) Component library: buttons (primary, secondary, tertiary, disabled states), form inputs (text, select, checkbox, radio, error states), cards (data card, stat card, with/without actions), data tables (sortable headers, row hover states, pagination), navigation (top bar, sidebar, breadcrumbs), modals and tooltips. Provide hex codes, pixel values, and usage guidelines for each element.",
                "resultBefore": "Inconsistent color choices picked randomly, no systematic spacing leading to cramped or loose layouts, buttons styled differently across pages, missing component states like hover and disabled, no accessibility considerations, no documentation for team usage",
                "resultAfter": "Professional design system with mathematically harmonious color palette, systematic spacing creating visual rhythm, comprehensive component library covering all common UI needs, documented states and behaviors for each component, accessibility built-in from foundation, clear usage guidelines enabling consistent implementation across the team"
            },
            "pitfalls": [
                {
                    "title": "Creating a design system so rigid it stifles creativity and adaptation",
                    "solution": "Build flexibility into the system with component variants and allow exceptions for unique cases"
                },
                {
                    "title": "Building components that look good but aren't actually reusable in real contexts",
                    "solution": "Design components based on actual product needs, not theoretical perfection"
                },
                {
                    "title": "Failing to document when and how to use components",
                    "solution": "Include do's and don'ts examples showing correct and incorrect component usage"
                },
                {
                    "title": "Letting the design system become outdated as product evolves",
                    "solution": "Assign ownership and schedule regular reviews to keep the system current"
                },
                {
                    "title": "Over-engineering with too many component variations early on",
                    "solution": "Start minimal with core components, add variations only when patterns emerge from actual needs"
                }
            ],
            "keywords": [
                {
                    "word": "Design Tokens",
                    "meaning": "The atomic design decisions (colors, spacing, fonts) stored as named variables that can be updated systematically",
                    "usage": "Define design tokens like 'color-primary-500: #2563eb' and 'spacing-md: 16px' that developers reference in code"
                },
                {
                    "word": "Component Library",
                    "meaning": "A collection of reusable UI elements with defined behaviors and variations",
                    "usage": "Build a component library with buttons, forms, cards, and modals that designers can drag-and-drop into layouts"
                },
                {
                    "word": "Atomic Design",
                    "meaning": "A methodology for creating design systems with five levels: atoms, molecules, organisms, templates, and pages",
                    "usage": "Apply atomic design by treating buttons as atoms, search bars as molecules, and navigation headers as organisms"
                },
                {
                    "word": "Design Debt",
                    "meaning": "The accumulation of inconsistencies and outdated patterns that slow development and confuse users",
                    "usage": "Reduce design debt by systematically replacing old button styles with design system components"
                },
                {
                    "word": "Governance",
                    "meaning": "The rules and processes for maintaining, updating, and enforcing design system standards",
                    "usage": "Establish governance by requiring design system contributions go through review before adding to the library"
                }
            ],
            "resources": [
                {
                    "title": "Material Design System by Google",
                    "url": "https://material.io"
                },
                {
                    "title": "Carbon Design System by IBM",
                    "url": "https://carbondesignsystem.com"
                },
                {
                    "title": "Atlassian Design System",
                    "url": "https://atlassian.design"
                },
                {
                    "title": "Design Systems Repo - Collection of design systems",
                    "url": "https://designsystemsrepo.com"
                }
            ],
            "notes": "A design system is a living product that serves other products. Start small—even defining just colors, typography, and three button types provides immediate value. The best design systems emerge from real projects, not ivory tower planning. Use AI to accelerate component creation, but ensure human oversight validates that components serve actual user needs and team workflows."
        },
        {
            "id": "WP-UX-03",
            "title": "Color Palette & Typography Selection",
            "summary": "Master the art and science of choosing color palettes and typography that enhance readability, convey brand personality, and create accessible, emotionally resonant user experiences.",
            "objectives": [
                "Understand color theory principles and their psychological impact on users",
                "Select harmonious color palettes that ensure accessibility and brand consistency",
                "Choose typography combinations that optimize readability across devices and contexts"
            ],
            "theory": [
                "Color is one of the most powerful design tools, instantly conveying emotion, establishing brand identity, and guiding user attention. Colors have psychological associations: blue conveys trust and professionalism (used by banks and tech), red creates urgency and excitement (used for CTAs), green suggests growth and health (used by wellness brands), and purple implies luxury and creativity. Understanding these associations helps you make intentional color choices aligned with brand goals.",
                "Effective color palettes follow structured systems: start with a primary brand color, add secondary colors for variety and emphasis, include semantic colors for success, warning, error, and info states, and create neutral grays for backgrounds and text. Each color should have shades (lighter tints) and tones (darker shades) forming a scale, typically 50 to 900, providing flexibility while maintaining visual harmony.",
                "Accessibility in color means ensuring sufficient contrast between text and backgrounds so everyone can read content. WCAG standards require 4.5:1 contrast ratio for normal text and 3:1 for large text to achieve AA compliance. Never rely on color alone to convey information—users with color blindness need additional cues like icons or text labels. Test color combinations with accessibility checking tools before finalizing.",
                "Typography creates the voice of your interface. Select typefaces that match brand personality: sans-serif fonts like Inter or Roboto feel modern and clean, serif fonts like Merriweather or Georgia feel traditional and authoritative, and monospace fonts like Fira Code work for technical content. Pair fonts carefully—typically one for headings and one for body text, ensuring visual contrast but not conflict.",
                "Typography scale establishes hierarchy through size, weight, and spacing. A modular scale based on ratios (1.25x or 1.5x) creates harmonious sizing relationships. Set line height to 1.5-1.6 for body text for comfortable reading, use ample letter spacing for uppercase text, and limit line length to 50-75 characters for optimal readability. Mobile typography requires larger base sizes (16px minimum) to prevent forced zoom."
            ],
            "why": "In professional projects, poor color and typography choices create immediate credibility problems—users subconsciously judge your product's quality within milliseconds. Good choices build trust, guide attention to important actions, and make content effortless to read. For developers, understanding these principles means fewer design revisions, more confident client presentations, and the ability to execute projects without constant designer dependency.",
            "prompts": {
                "goal": "Create a color palette and typography system for a modern fintech mobile app",
                "before": "Pick colors and fonts for a finance app",
                "after": "Design a complete color palette and typography system for a mobile fintech app targeting millennials (25-40) who want to feel confident about investing. Color requirements: 1) Primary color that conveys trust and innovation (not traditional bank blue), 2) Secondary accent color for calls-to-action that creates urgency without anxiety, 3) Semantic colors: success green for gains, error red for losses, warning amber for alerts, info blue for neutral updates, 4) 6-shade neutral scale for backgrounds, borders, and disabled states, 5) All combinations must meet WCAG AA contrast (4.5:1 for text). Typography requirements: 1) Modern sans-serif primary typeface that works well at small sizes on mobile, 2) Clear hierarchy with 6 heading levels (H1: 32px to H6: 16px) and 3 body sizes (large: 18px, normal: 16px, small: 14px), 3) Font weights: regular (400) for body, semibold (600) for emphasis, bold (700) for headings, 4) Optimized line heights for mobile reading. Provide exact hex codes, font names, sizes, and weights with usage examples.",
                "resultBefore": "Random color selection with poor contrast making text hard to read, generic font choices that don't differentiate the brand, inconsistent sizing causing visual chaos, no consideration for mobile readability, missing semantic colors for financial states",
                "resultAfter": "Professional color system with distinctive primary teal (#0EA5E9) that feels fresh yet trustworthy, energetic coral accent (#FB923C) for actions, complete semantic palette with accessible contrast ratios documented, typography using Inter font family with clear hierarchical scale optimized for mobile screens, consistent spacing and weights creating visual harmony and guiding user attention effectively"
            },
            "pitfalls": [
                {
                    "title": "Choosing trendy colors that clash with brand identity or user expectations",
                    "solution": "Research industry standards and competitor palettes before making unconventional choices"
                },
                {
                    "title": "Using too many colors, creating visual noise and inconsistency",
                    "solution": "Limit primary palette to 1-2 brand colors plus semantic colors; resist adding more"
                },
                {
                    "title": "Ignoring accessibility in favor of aesthetics, excluding users with visual impairments",
                    "solution": "Use contrast checking tools and never use color as the only way to convey information"
                },
                {
                    "title": "Selecting fonts that don't load properly or cause performance issues",
                    "solution": "Use system fonts or reliably hosted web fonts, test loading performance on slow connections"
                },
                {
                    "title": "Setting body text too small, especially on mobile devices",
                    "solution": "Never go below 16px for body text on mobile to prevent forced zooming"
                }
            ],
            "keywords": [
                {
                    "word": "Color Theory",
                    "meaning": "The study of how colors interact, mix, and affect human perception and emotion",
                    "usage": "Apply color theory by using complementary colors (opposite on color wheel) to create vibrant contrast for CTAs"
                },
                {
                    "word": "Contrast Ratio",
                    "meaning": "The mathematical difference between the luminance of two colors, measured for accessibility compliance",
                    "usage": "Check contrast ratio using tools like WebAIM to ensure text meets 4.5:1 minimum for WCAG AA compliance"
                },
                {
                    "word": "Type Scale",
                    "meaning": "A systematic progression of font sizes creating visual hierarchy and consistency",
                    "usage": "Build a type scale using a 1.25x multiplier: 12px, 16px, 20px, 24px, 32px for harmonious sizing"
                },
                {
                    "word": "X-height",
                    "meaning": "The height of lowercase letters (excluding ascenders and descenders), affecting perceived readability",
                    "usage": "Choose fonts with larger x-heights like Verdana for better readability at small sizes on screens"
                },
                {
                    "word": "Semantic Color",
                    "meaning": "Colors assigned specific meanings in your system (success, error, warning, info)",
                    "usage": "Define semantic colors like error-red (#DC2626) used consistently for all error messages and validation failures"
                }
            ],
            "resources": [
                {
                    "title": "Coolors - Color palette generator",
                    "url": "https://coolors.co"
                },
                {
                    "title": "WebAIM Contrast Checker - Accessibility testing",
                    "url": "https://webaim.org/resources/contrastchecker"
                },
                {
                    "title": "Google Fonts - Free web fonts",
                    "url": "https://fonts.google.com"
                },
                {
                    "title": "Type Scale - Typography scale calculator",
                    "url": "https://typescale.com"
                }
            ],
            "notes": "Color and typography are the foundation of visual design—get these right and everything else becomes easier. When using AI to generate palettes, always verify accessibility manually and test in actual contexts. Remember that colors look different on different screens and in different lighting, so test on multiple devices. Typography choices should prioritize readability over novelty; users shouldn't notice the font, they should just find reading effortless."
        },
        {
            "id": "WP-UX-04",
            "title": "Figma Layout Prompting",
            "summary": "Learn advanced techniques for prompting AI to generate professional Figma layouts, leveraging auto-layout, components, and design best practices for production-ready files.",
            "objectives": [
                "Master Figma-specific terminology and features for effective AI prompting",
                "Create structured, component-based layouts that are developer-friendly and maintainable",
                "Optimize Figma files for collaboration, handoff, and design system integration"
            ],
            "theory": [
                "Figma has become the industry standard for interface design because of its collaborative features, component system, and developer handoff tools. When prompting AI for Figma layouts, understanding Figma's architecture—frames, components, variants, auto-layout, and constraints—enables you to request structures that are not just visually correct but also functionally organized for real-world workflows.",
                "Auto-layout is Figma's most powerful feature for creating responsive, maintainable designs. It automatically adjusts spacing and sizing based on content, similar to CSS flexbox. When prompting for layouts, specify auto-layout properties: direction (horizontal or vertical), spacing between items, padding, and how elements should grow or shrink. This creates designs that adapt gracefully when content changes.",
                "Components and variants enable design consistency and rapid iteration. Components are reusable design elements (buttons, cards, icons) that can be updated globally. Variants allow one component to have multiple states (button: default, hover, disabled) or types (button: primary, secondary). Prompting AI to create component-based layouts means changes propagate instantly across your entire design file.",
                "Proper layer organization and naming conventions are critical for developer handoff and team collaboration. Use clear, descriptive names like 'Hero Section / Image / Background' rather than 'Rectangle 42.' Group related elements in frames, nest logically, and use consistent naming patterns. When prompting AI, specify you want organized, developer-friendly layer structures.",
                "Figma's constraints and responsive resize settings determine how designs adapt across screen sizes. Set constraints (left/right, top/bottom, center, scale) to control how elements reposition when frames resize. Request that AI-generated layouts include responsive behavior specifications, making designs that work across mobile, tablet, and desktop without manual rework."
            ],
            "why": "In real client projects, Figma is where design meets implementation. A well-structured Figma file with components and auto-layout reduces developer handoff friction by 80%—developers can inspect spacing, export assets, and understand interactions directly. For agencies, clean Figma files signal professionalism and make it easy to onboard new team members or hand off projects to clients. AI that generates production-ready Figma structures accelerates this from days to hours.",
            "prompts": {
                "goal": "Create a responsive pricing page layout in Figma with components and auto-layout",
                "before": "Make a Figma layout for a pricing page",
                "after": "Design a responsive pricing page layout in Figma (desktop: 1440px, tablet: 768px, mobile: 375px) for a B2B SaaS product. Structure using these Figma features: 1) Create master components for: pricing card (with variants for Basic/Pro/Enterprise tiers and Default/Hovered states), feature list item (checkmark icon + text), button (primary/secondary variants, default/hover/disabled states), 2) Use auto-layout for: pricing cards row (horizontal, 24px gap, center aligned), feature lists inside cards (vertical, 12px gap), button groups (horizontal, 16px gap), 3) Implement responsive constraints: cards should stack vertically on mobile, scale proportionally on tablet, remain horizontal on desktop, 4) Layer organization: group sections in frames named 'Header,' 'Pricing Cards,' 'FAQ,' 'CTA,' with clear hierarchy, 5) Include component descriptions and usage notes for developers. Specify exact spacing values (8px grid), colors from design system, and breakpoint behaviors.",
                "resultBefore": "Flat, unorganized layout with manually positioned rectangles, no components meaning changes require updating every instance separately, no auto-layout so cards don't adapt when content changes, unnamed layers making developer handoff confusing, no responsive specifications",
                "resultAfter": "Professional Figma file with reusable components reducing design time 60%, auto-layout enabling content flexibility without breaking layout, organized layer structure with descriptive names developers can navigate easily, documented responsive behaviors showing exactly how layout adapts across devices, design system tokens applied consistently for colors and spacing"
            },
            "pitfalls": [
                {
                    "title": "Creating designs without components, forcing manual updates across artboards",
                    "solution": "Identify repeating elements and convert to components immediately"
                },
                {
                    "title": "Ignoring auto-layout, resulting in brittle designs that break when content changes",
                    "solution": "Use auto-layout for any group of elements that should maintain consistent spacing"
                },
                {
                    "title": "Poor layer naming making files impossible for others to navigate",
                    "solution": "Establish naming conventions like 'Section / Component / Element' and enforce consistently"
                },
                {
                    "title": "Designing only for desktop and retrofitting mobile later",
                    "solution": "Design mobile, tablet, and desktop versions simultaneously with shared components"
                },
                {
                    "title": "Not documenting design decisions or interactive behaviors",
                    "solution": "Use Figma's description fields and comment features to explain design rationale"
                }
            ],
            "keywords": [
                {
                    "word": "Auto-layout",
                    "meaning": "Figma's feature that automatically positions and sizes elements based on defined spacing and resizing rules",
                    "usage": "Apply auto-layout to navigation bars so adding menu items automatically adjusts spacing without manual repositioning"
                },
                {
                    "word": "Component",
                    "meaning": "A reusable design element that can be updated globally, with instances placed throughout your file",
                    "usage": "Create a button component so updating the master button automatically updates all button instances across 50 screens"
                },
                {
                    "word": "Variant",
                    "meaning": "Different versions of a component (states, sizes, types) organized under one component set",
                    "usage": "Build button variants covering primary/secondary types and default/hover/disabled states in one component"
                },
                {
                    "word": "Constraint",
                    "meaning": "Rules determining how elements resize and reposition when their parent frame changes size",
                    "usage": "Set left and right constraints on a header so it stretches to fill width when canvas resizes"
                },
                {
                    "word": "Instance",
                    "meaning": "A copy of a component that inherits properties from the master but can have overridden content",
                    "usage": "Place button component instances on every screen, overriding label text while maintaining consistent styling"
                }
            ],
            "resources": [
                {
                    "title": "Figma Learn - Official tutorials and courses",
                    "url": "https://help.figma.com/hc/en-us/categories/360002051613-Figma-design"
                },
                {
                    "title": "Figma Community - Free templates and resources",
                    "url": "https://www.figma.com/community"
                },
                {
                    "title": "Auto-layout Playground - Interactive learning",
                    "url": "https://www.figma.com/community/file/784448220678228461"
                },
                {
                    "title": "Design Systems in Figma - Best practices guide",
                    "url": "https://www.figma.com/best-practices/design-systems-in-figma/"
                }
            ],
            "notes": "Figma proficiency separates hobbyists from professionals. When prompting AI for Figma layouts, always specify you want production-ready structures with components, auto-layout, and organized layers—not just visually accurate mockups. Think like a developer: how will this file be used? What needs to be editable? What should update automatically? The extra specificity in your prompts pays massive dividends in file usability."
        },
        {
            "id": "WP-UX-05",
            "title": "High-Speed Prototyping Tools",
            "summary": "Master rapid prototyping techniques using AI-powered tools to validate ideas, test interactions, and gather user feedback before investing in full development.",
            "objectives": [
                "Understand the role and benefits of prototyping in the design-development workflow",
                "Create interactive prototypes using AI assistance for various fidelity levels and testing scenarios",
                "Conduct effective user testing with prototypes to validate assumptions and improve designs"
            ],
            "theory": [
                "Prototyping bridges the gap between static designs and functional products by creating interactive simulations that users can click through and experience. Prototypes answer critical questions: Do users understand the navigation? Can they complete key tasks? Does the interaction feel intuitive? Testing with prototypes costs a fraction of building full features, making it possible to fail fast and iterate cheaply.",
                "Prototypes exist on a fidelity spectrum based on purpose and stage: low-fidelity prototypes use simple click-through wireframes to test navigation and flow, mid-fidelity prototypes add realistic content and transitions to test usability patterns, and high-fidelity prototypes simulate the actual interface with animations and micro-interactions to test polish and delight. Choose fidelity based on what questions you need answered.",
                "Effective prototyping follows an iterative cycle: sketch initial flows on paper or whiteboard to explore concepts rapidly, create low-fidelity digital prototypes to test basic navigation, add fidelity progressively based on feedback, test with real users observing where they get confused, and refine based on insights before building. Each cycle reduces risk and increases confidence.",
                "AI-powered prototyping tools accelerate this cycle dramatically by generating interactive prototypes from text descriptions, converting wireframes into clickable interfaces, suggesting interaction patterns based on conventions, and even simulating user behavior to predict usability issues. Tools like v0.dev, Uizard, and Galileo AI can produce working prototypes in minutes instead of hours.",
                "The key to successful prototyping is knowing what to test and how to interpret results. Focus prototypes on risky assumptions or unclear flows rather than building everything. Watch what users do, not just what they say—hesitation, backtracking, and confusion reveal problems. Synthesize patterns across multiple users rather than overreacting to individual feedback."
            ],
            "why": "Real-world development teams that prototype report 40% fewer major revisions and 60% higher stakeholder satisfaction. For freelancers, prototypes are persuasive sales tools—showing clients interactive demos wins projects. For startups, prototyping validates ideas with users before burning engineering resources on wrong solutions. AI-accelerated prototyping means you can test 5 different approaches in the time it used to take to build one, dramatically improving final product quality.",
            "prompts": {
                "goal": "Create an interactive prototype for a food delivery app checkout flow",
                "before": "Make a prototype for checkout",
                "after": "Create a high-fidelity interactive prototype for a food delivery app checkout flow (mobile, 375x667px) testing these user tasks: 1) Review cart with item quantities and prices, 2) Select delivery address (with option to add new address), 3) Choose delivery time (ASAP or scheduled), 4) Apply promo code with validation feedback, 5) Select payment method (saved cards, new card, digital wallets), 6) Review order summary showing all costs including fees, 7) Place order with loading state, then success confirmation. Include these interactive behaviors: tapping cart items shows edit options, address selector opens modal with map, promo code field shows success/error states with animation, payment selection highlights chosen method, place order button shows loading spinner then transitions to success screen with order number and ETA. Design for iOS following platform patterns. Ensure tap targets are minimum 44x44px and include micro-interactions like button press states for tactile feedback.",
                "resultBefore": "Static screens with no interactivity, no way to test user flow, missing edge cases like error states, no feedback on interactions making it feel lifeless, impossible to validate if users understand the sequence or can complete the task",
                "resultAfter": "Fully interactive prototype that users can navigate independently, realistic interactions revealing usability issues like confusing payment selection, proper loading and error states building confidence in transactions, smooth transitions making flow feel natural, user testing reveals 3 critical friction points to fix before development, stakeholders approve design with confidence having 'used' the product"
            },
            "pitfalls": [
                {
                    "title": "Over-investing in prototype perfection when rough is sufficient for testing",
                    "solution": "Match fidelity to testing goals; use low-fi for flow testing, high-fi only for final validation"
                },
                {
                    "title": "Creating prototypes without clear testing objectives or hypotheses",
                    "solution": "Define what you're testing before building: navigation clarity, task completion, or interaction understanding?"
                },
                {
                    "title": "Testing prototypes with colleagues instead of real target users",
                    "solution": "Recruit actual users matching your target audience, even informal testing beats no testing"
                },
                {
                    "title": "Ignoring prototype feedback because you're attached to your solution",
                    "solution": "Treat prototypes as experiments, not finished work; embrace learning from failures"
                },
                {
                    "title": "Building prototypes that are so complex they're basically full products",
                    "solution": "Prototype only the uncertain or risky parts; skip flows you're confident about"
                }
            ],
            "keywords": [
                {
                    "word": "Fidelity",
                    "meaning": "The level of detail and realism in a prototype, from simple sketches to pixel-perfect interactive mockups",
                    "usage": "Use low-fidelity prototypes early to test navigation flow, then increase fidelity for usability testing"
                },
                {
                    "word": "Clickthrough",
                    "meaning": "A basic prototype where clicking elements navigates between screens but doesn't simulate actual functionality",
                    "usage": "Create clickthrough prototypes linking screens to test if users can find and complete key tasks"
                },
                {
                    "word": "Micro-interaction",
                    "meaning": "Small, focused interactions providing feedback for single tasks (button press, toggle switch, loading state)",
                    "usage": "Add micro-interactions like button ripples and smooth transitions to make prototypes feel polished and real"
                },
                {
                    "word": "User Flow",
                    "meaning": "The complete path a user takes to accomplish a specific goal within your product",
                    "usage": "Map user flows from entry point to goal completion, prototyping each critical step to identify friction"
                },
                {
                    "word": "Hotspot",
                    "meaning": "Clickable areas in prototypes that trigger navigation or interactions when tapped",
                    "usage": "Add hotspots to prototype elements like buttons, links, and images to enable user testing"
                }
            ],
            "resources": [
                {
                    "title": "Figma Prototyping - Built-in prototyping features",
                    "url": "https://help.figma.com/hc/en-us/sections/360006538054-Prototyping"
                },
                {
                    "title": "ProtoPie - Advanced interaction design tool",
                    "url": "https://www.protopie.io"
                },
                {
                    "title": "Maze - User testing platform for prototypes",
                    "url": "https://maze.co"
                },
                {
                    "title": "v0.dev - AI-powered UI generation and prototyping",
                    "url": "https://v0.dev"
                }
            ],
            "notes": "Prototyping is insurance against expensive mistakes. The faster you can get ideas in front of users, the faster you learn what works. AI tools have democratized prototyping—you no longer need advanced design skills to create testable interfaces. Focus your prompts on user tasks and interactions, not just visual appearance. Remember: a rough prototype tested with users beats a beautiful design that's never validated."
        },
        {
            "id": "WP-UX-06",
            "title": "Hero Section Design Prompts",
            "summary": "Create compelling hero sections that capture attention, communicate value instantly, and drive users to take action using persuasive design and copywriting techniques.",
            "objectives": [
                "Understand the psychology and components of effective hero sections",
                "Design hero sections optimized for different business goals and target audiences",
                "Use AI to generate conversion-focused hero section variations for A/B testing"
            ],
            "theory": [
                "The hero section is the most critical real estate on your website—it's what users see first and determines whether they stay or bounce within 3-5 seconds. An effective hero section answers three questions immediately: Where am I? (brand recognition), What can I do here? (value proposition), and Why should I care? (benefit to user). Every element must work together to create instant clarity and motivation.",
                "Successful hero sections follow a proven anatomy: a compelling headline that communicates the core value in 6-12 words, a supporting subheadline that elaborates on benefits in one sentence, a prominent call-to-action button using action-oriented language, a relevant hero image or video showing the product in action or the desired outcome, and trust indicators like customer logos, ratings, or social proof making claims credible.",
                "Different business models require different hero section strategies: SaaS products emphasize the problem solved and quick start actions, e-commerce sites showcase products with special offers and clear category access, portfolios highlight standout work and clear expertise positioning, landing pages for campaigns focus on single conversion goals with minimal distraction. Match your approach to your primary business objective.",
                "Visual hierarchy in hero sections guides attention strategically: the headline should be largest and highest contrast, the CTA button should use accent color that contrasts with background, the hero image should support but not overshadow the message, white space should isolate critical elements preventing overwhelm, and mobile layouts must maintain hierarchy with stacked elements prioritized by importance.",
                "Conversion optimization for hero sections involves constant testing: experiment with headline clarity versus creativity, test CTA button copy variations (generic 'Learn More' versus specific 'Start Free Trial'), try different hero image types (product screenshots versus customer outcomes versus abstract), measure impact of trust indicators, and use heatmaps to verify users actually see your CTA before scrolling."
            ],
            "why": "Real data shows that 38% of users will leave a website if the layout or content is unattractive, and most form that opinion from the hero section. For businesses, an optimized hero section can increase conversions by 20-30% compared to generic alternatives. For freelancers pitching clients, a strong portfolio hero section gets you hired. AI-generated hero variations let you test 10 different approaches in the time it took to design one, finding the winner faster.",
            "prompts": {
                "goal": "Create a hero section for a project management SaaS targeting remote teams",
                "before": "Design a hero section for my project management tool",
                "after": "Design a conversion-optimized hero section for a project management SaaS called 'FlowSync' targeting distributed teams of 10-50 people at tech companies. Layout (desktop 1440px): 1) Left side (60%): Headline: 'Keep Remote Teams In Sync, Without The Chaos' (bold, 56px, dark navy), Subheadline: 'FlowSync brings tasks, conversations, and files together so your distributed team knows exactly what's happening—without endless meetings or Slack threads.' (18px, gray-600), Two CTAs: Primary 'Start 14-Day Free Trial' (coral, prominent), Secondary 'Watch 2-Min Demo' (outline button), Trust indicators: 'Trusted by 2,000+ remote teams at' + logos for 5 tech companies (Buffer, Zapier, etc.), 2) Right side (40%): Hero image showing clean, modern dashboard interface with task cards, team avatars, and activity feed—emphasize clarity and organization vs. chaos. Color palette: Navy primary, coral accent, warm grays. Include mobile version (375px) with stacked layout maintaining hierarchy. Design should feel modern, calm, and organized—opposite of chaotic team communication.",
                "resultBefore": "Generic headline 'Project Management Software,' vague value proposition, weak CTA like 'Learn More,' stock photo of people in meeting that doesn't show product, no social proof, cluttered layout competing for attention",
                "resultAfter": "Specific headline addressing target audience pain point (chaos of remote work), clear value proposition answering 'what's in it for me,' strong action-oriented CTAs driving trial signup, product screenshot showing actual solution in context, trust indicators reducing risk and building credibility, clean visual hierarchy guiding eye from headline to CTA naturally"
            },
            "pitfalls": [
                {
                    "title": "Writing vague, feature-focused headlines instead of benefit-focused messaging",
                    "solution": "Lead with the transformation or outcome users get, not what your product 'has'"
                },
                {
                    "title": "Using generic stock photos that don't relate to your actual product",
                    "solution": "Show your product interface, happy customers using it, or the specific outcome achieved"
                },
                {
                    "title": "Weak or multiple CTAs splitting user attention and reducing conversions",
                    "solution": "One primary action per hero section; secondary options should be visually subordinate"
                },
                {
                    "title": "Cluttered hero sections trying to communicate everything at once",
                    "solution": "Focus on single most important message; detail comes in sections below"
                },
                {
                    "title": "Ignoring mobile layout where most traffic comes from",
                    "solution": "Design mobile hero first, ensure headline and CTA fit above fold on small screens"
                }
            ],
            "keywords": [
                {
                    "word": "Value Proposition",
                    "meaning": "A clear statement explaining what benefit you provide, who you help, and why you're different",
                    "usage": "Craft value proposition: 'Help [target audience] [achieve outcome] [unique approach]' for hero headline"
                },
                {
                    "word": "Above the Fold",
                    "meaning": "Content visible without scrolling, critical for first impressions and conversions",
                    "usage": "Ensure headline and primary CTA appear above the fold on mobile (600px height) and desktop"
                },
                {
                    "word": "Call-to-Action (CTA)",
                    "meaning": "A button or link designed to prompt immediate user action toward a specific goal",
                    "usage": "Use specific CTA copy like 'Start Free Trial' instead of vague 'Learn More' to increase conversions 35%"
                },
                {
                    "word": "Social Proof",
                    "meaning": "Evidence that other people trust and use your product (testimonials, logos, ratings, user counts)",
                    "usage": "Add social proof like '10,000+ teams trust FlowSync' with recognizable company logos in hero section"
                },
                {
                    "word": "F-Pattern",
                    "meaning": "The natural eye movement pattern users follow when scanning content (top left, across, down left side)",
                    "usage": "Arrange hero elements following F-pattern: headline top left, CTA middle left, image right"
                }
            ],
            "resources": [
                {
                    "title": "Really Good Emails - Hero section inspiration",
                    "url": "https://reallygoodemails.com"
                },
                {
                    "title": "Land-book - Landing page design gallery",
                    "url": "https://land-book.com"
                },
                {
                    "title": "SaaS Landing Page Examples - Curated collection",
                    "url": "https://saaslandingpage.com"
                },
                {
                    "title": "Unbounce Conversion Benchmark Report",
                    "url": "https://unbounce.com/conversion-benchmark-report/"
                }
            ],
            "notes": "Your hero section has one job: convince visitors to stay and take action. Every word, image, and button should serve this goal. When prompting AI for hero designs, be specific about your target audience, their pain points, and your unique value—generic prompts produce generic heroes that don't convert. Test everything: headlines, images, CTA copy. Small changes can yield big conversion improvements."
        },
        {
            "id": "WP-UX-07",
            "title": "Conversion-Optimized Layouts",
            "summary": "Design website layouts strategically engineered to guide users toward desired actions, using psychology, persuasion patterns, and data-driven optimization techniques.",
            "objectives": [
                "Understand conversion psychology and the principles that influence user decisions",
                "Design layouts using proven conversion patterns like visual hierarchy and progressive disclosure",
                "Implement A/B testing strategies to continuously optimize conversion rates"
            ],
            "theory": [
                "Conversion optimization is the science of removing friction and adding motivation at every step of the user journey. A conversion-optimized layout doesn't just look good—it strategically guides attention, builds trust, reduces anxiety, and makes the desired action feel like the obvious next step. Every element should either support conversion or be removed.",
                "Key psychological principles drive conversions: scarcity creates urgency ('Only 3 spots left'), social proof leverages conformity ('Join 50,000 users'), reciprocity makes people want to give back after receiving value (free trial, useful content), loss aversion motivates more than potential gains ('Don't miss out'), and cognitive fluency means simple, clear paths convert better than clever, complex ones.",
                "Visual hierarchy directs user attention to conversion points: use size, color, and contrast to make CTAs stand out, position critical elements in natural eye-flow patterns (F-pattern for text-heavy, Z-pattern for visually balanced), create clear visual paths from headline through benefits to action, use directional cues like arrows or gaze direction in photos pointing to CTAs, and isolate important elements with white space preventing distraction.",
                "Effective conversion layouts follow proven structures: the inverted pyramid starts broad (headline), narrows to specifics (features/benefits), and ends with action (CTA); the AIDA model captures Attention, builds Interest, creates Desire, and prompts Action in sequence; the PAS framework identifies the Problem, agitates with consequences, and presents your Solution. Choose frameworks matching your audience's awareness level.",
                "Progressive disclosure reveals information gradually, preventing overwhelm while building commitment. Start with minimal required information, add details as users show interest through scrolling or clicking, use multi-step forms instead of long single forms (increasing completion by 20-30%), show only relevant options based on previous selections, and celebrate small wins along the way maintaining momentum toward final conversion."
            ],
            "why": "In e-commerce and SaaS, a 1% conversion rate improvement can mean millions in revenue. For service businesses, better conversion layouts mean more leads from the same traffic. For developers, understanding conversion optimization makes you valuable to clients—you're not just building sites, you're building revenue generators. AI-assisted layout optimization lets you test psychological principles at scale, finding what actually works for your specific audience.",
            "prompts": {
                "goal": "Create a conversion-optimized pricing page layout for a SaaS product",
                "before": "Design a pricing page",
                "after": "Create a conversion-optimized pricing page for an email marketing SaaS targeting small businesses. Apply these conversion principles: 1) Layout: Three pricing tiers (Starter $29, Professional $79, Enterprise $199) in cards, with Professional tier visually emphasized (larger, highlighted, 'Most Popular' badge) anchoring user toward mid-tier selection, 2) Visual hierarchy: Plan names and prices (largest, bold), key features bulleted below (scannable), CTAs prominent (high contrast), annual billing toggle showing savings (loss aversion: 'Save 20%'), 3) Social proof: Customer count under headline ('Join 15,000+ businesses growing with our platform'), testimonials between pricing and FAQ, 4) Friction reduction: 14-day free trial on all plans (no credit card required), money-back guarantee badge, FAQ section addressing common objections, 5) Progressive disclosure: Hide detailed feature comparison behind 'Compare all features' expandable section, 6) Scarcity element: Limited-time discount banner for annual plans. Color psychology: Green for CTAs (go, growth), blue for trust elements. Include mobile-responsive layout (375px) with cards stacking vertically.",
                "resultBefore": "Simple table listing features and prices with no guidance on which to choose, no trust indicators making users hesitant, hidden costs or unclear value, weak CTAs that don't motivate action, no social proof or risk reversal, resulting in high browse-to-purchase drop-off",
                "resultAfter": "Strategic layout anchoring users toward profitable mid-tier, clear value differentiation making choice easy, trust indicators reducing purchase anxiety, prominent free trial lowering entry barrier, FAQ section addressing objections proactively, scarcity element creating urgency without pressure, resulting in 40% higher conversion than basic pricing table"
            },
            "pitfalls": [
                {
                    "title": "Using too many CTAs competing for attention and diluting focus",
                    "solution": "One primary conversion goal per page; secondary actions should be visually de-emphasized"
                },
                {
                    "title": "Long forms requesting unnecessary information and causing abandonment",
                    "solution": "Request minimum information needed; use progressive profiling to gather details over time"
                },
                {
                    "title": "Burying important trust signals or leaving them out entirely",
                    "solution": "Surface guarantees, security badges, testimonials near conversion points where anxiety peaks"
                },
                {
                    "title": "Creating friction with unclear next steps or confusing navigation",
                    "solution": "Make the path to conversion obvious; test by asking someone unfamiliar to complete the action"
                },
                {
                    "title": "Optimizing for clicks instead of quality conversions",
                    "solution": "Track full funnel from click to revenue; sometimes fewer but better leads convert more revenue"
                }
            ],
            "keywords": [
                {
                    "word": "Conversion Rate",
                    "meaning": "The percentage of visitors who complete a desired action (purchase, signup, download)",
                    "usage": "Track conversion rate by dividing conversions by total visitors: 200 signups / 10,000 visitors = 2% conversion rate"
                },
                {
                    "word": "Friction",
                    "meaning": "Anything that slows down or discourages users from completing desired actions",
                    "usage": "Reduce friction by removing required fields in forms from 8 to 4, increasing form completion by 25%"
                },
                {
                    "word": "Anchoring",
                    "meaning": "Cognitive bias where people rely heavily on the first piece of information offered when making decisions",
                    "usage": "Use anchoring by showing premium tier first to make mid-tier pricing seem more reasonable"
                },
                {
                    "word": "Loss Aversion",
                    "meaning": "The psychological tendency to prefer avoiding losses over acquiring equivalent gains",
                    "usage": "Apply loss aversion with copy: 'Don't lose another lead' instead of 'Gain more leads'"
                },
                {
                    "word": "Progressive Disclosure",
                    "meaning": "Revealing information gradually as needed rather than overwhelming users with everything at once",
                    "usage": "Implement progressive disclosure with multi-step checkout: shipping > payment > confirmation"
                }
            ],
            "resources": [
                {
                    "title": "GoodUI - Conversion patterns and A/B test results",
                    "url": "https://goodui.org"
                },
                {
                    "title": "Baymard Institute - E-commerce UX research",
                    "url": "https://baymard.com"
                },
                {
                    "title": "ConversionXL - Conversion optimization blog",
                    "url": "https://conversionxl.com/blog"
                },
                {
                    "title": "Really Good UX - Conversion-focused case studies",
                    "url": "https://www.reallygoodux.io"
                }
            ],
            "notes": "Conversion optimization is about understanding human psychology and removing barriers to action. When using AI to generate conversion-focused layouts, provide context about your audience's objections, motivations, and decision-making process. Test everything—what works for one audience may not work for yours. Small layout changes (CTA button color, headline wording, trust badge placement) can create significant conversion differences. Measure, learn, iterate."
        },
        {
            "id": "WP-UX-08",
            "title": "Accessibility & UX Testing",
            "summary": "Ensure your websites are usable by everyone including people with disabilities, while implementing systematic testing methodologies to validate and improve user experiences.",
            "objectives": [
                "Understand accessibility standards (WCAG) and legal requirements for inclusive design",
                "Implement accessibility best practices for visual, auditory, motor, and cognitive disabilities",
                "Conduct effective UX testing using qualitative and quantitative methods to identify usability issues"
            ],
            "theory": [
                "Accessibility means designing products that people with disabilities can perceive, understand, navigate, and interact with effectively. This includes permanent disabilities (blindness, deafness, motor impairments), temporary conditions (broken arm, eye infection), and situational limitations (bright sunlight, noisy environment). Accessible design benefits everyone—clear contrast helps people in sunlight, keyboard navigation helps power users, captions help people in quiet offices.",
                "The Web Content Accessibility Guidelines (WCAG) provide standards organized around four principles: Perceivable (information must be presentable to users in ways they can perceive), Operable (user interface components must be operable by everyone), Understandable (information and operation must be understandable), Robust (content must work with current and future technologies including assistive tools). WCAG has three conformance levels: A (basic), AA (standard for most laws), AAA (enhanced).",
                "Key accessibility requirements for WCAG AA compliance: color contrast of at least 4.5:1 for normal text and 3:1 for large text, all functionality available via keyboard without mouse required, text alternatives for images and non-text content, captions for audio and video content, clear heading hierarchy and semantic HTML structure, forms with properly associated labels and error messages, focus indicators visible when navigating with keyboard, sufficient time to read and interact with content.",
                "UX testing validates that designs work for real users through multiple methods: usability testing has users complete tasks while thinking aloud, revealing where they get confused; A/B testing compares two versions quantitatively to see which performs better; accessibility audits use automated tools and manual testing with assistive technologies; heatmap and session recording shows where users click and where they struggle; surveys gather subjective satisfaction and feedback at scale.",
                "Effective testing follows a structured approach: define clear research questions and hypotheses, recruit representative users matching your target audience, create realistic task scenarios not leading questions, observe without interrupting letting users struggle to reveal problems, analyze patterns across multiple users not individual quirks, prioritize issues by severity and frequency, and implement fixes then test again validating improvements worked."
            ],
            "why": "Accessibility is both ethically right and legally required—lawsuits for inaccessible websites are increasing, with companies paying settlements of $50,000-$100,000. Beyond compliance, accessible sites reach 15% more potential customers (people with disabilities), rank better in search engines (semantic HTML helps SEO), and provide better experiences for everyone. UX testing prevents costly mistakes—finding issues in testing costs 10x less than fixing after launch. For developers, accessibility and testing skills make you more hireable and valuable.",
            "prompts": {
                "goal": "Create an accessibility audit plan and remediation strategy for an existing e-commerce website",
                "before": "Check if my website is accessible",
                "after": "Develop a comprehensive accessibility audit and remediation plan for an e-commerce website selling outdoor gear, targeting WCAG 2.1 AA compliance. Audit components: 1) Automated testing: Run WAVE, axe DevTools, and Lighthouse accessibility audits identifying programmatic issues like missing alt text, poor contrast, heading hierarchy errors, 2) Manual testing: Navigate entire site using only keyboard checking for focus indicators, logical tab order, and trapped focus; test with screen reader (NVDA on Windows or VoiceOver on Mac) verifying all content and functionality is announced properly; check color contrast with tools for all text and UI elements, 3) Assistive technology testing: Test with screen magnification software, voice control software, checking if interactive elements are large enough (minimum 44x44px touch targets), 4) Content review: Verify all images have descriptive alt text, videos have captions, forms have clear labels and error messages, heading structure is logical (no skipped levels). Create prioritized remediation plan: Critical (blocking access): Missing form labels, keyboard traps, extremely poor contrast - fix immediately; High (significantly impairs): Missing alt text on product images, poor heading structure, missing focus indicators - fix within 2 weeks; Medium (degrades experience): Suboptimal contrast, verbose alt text, minor semantic issues - fix within 1 month. Include testing protocol: Retest after each fix, validate with actual users with disabilities, establish ongoing monitoring process.",
                "resultBefore": "Vague understanding that accessibility matters, no systematic testing revealing specific violations, unaware of legal compliance requirements, fixes attempted randomly without prioritization, no validation that changes actually helped users with disabilities",
                "resultAfter": "Comprehensive audit identifying 47 specific accessibility violations with severity ratings, clear remediation plan with timelines and responsibilities, validation testing confirming fixes work for screen reader and keyboard users, ongoing monitoring preventing regression, demonstrated WCAG AA compliance reducing legal risk, improved user experience for 15% more potential customers"
            },
            "pitfalls": [
                {
                    "title": "Relying solely on automated testing tools which catch only 30-40% of issues",
                    "solution": "Combine automated tools with manual testing and real assistive technology usage"
                },
                {
                    "title": "Testing only with able-bodied users missing critical accessibility problems",
                    "solution": "Include users with disabilities in testing or use assistive technologies yourself"
                },
                {
                    "title": "Writing generic alt text like 'image' instead of descriptive content",
                    "solution": "Describe what's important about the image in context: 'Hiker wearing red backpack on mountain trail'"
                },
                {
                    "title": "Testing with only your own devices and browsers missing common scenarios",
                    "solution": "Test on multiple browsers, devices, screen sizes, and assistive technologies"
                },
                {
                    "title": "Treating accessibility as one-time checklist instead of ongoing practice",
                    "solution": "Build accessibility into design and development process from the start"
                }
            ],
            "keywords": [
                {
                    "word": "WCAG",
                    "meaning": "Web Content Accessibility Guidelines - international standards for accessible web content",
                    "usage": "Follow WCAG 2.1 AA standards ensuring text contrast meets 4.5:1 ratio and all functions work via keyboard"
                },
                {
                    "word": "Screen Reader",
                    "meaning": "Assistive technology that reads web content aloud for users who are blind or have low vision",
                    "usage": "Test with screen readers like NVDA or JAWS to ensure all content and interactions are properly announced"
                },
                {
                    "word": "Alt Text",
                    "meaning": "Alternative text descriptions for images that screen readers announce to users who can't see images",
                    "usage": "Write descriptive alt text: 'Woman working on laptop in modern office' not just 'woman' or 'office'"
                },
                {
                    "word": "Semantic HTML",
                    "meaning": "Using HTML elements for their intended purpose (headings, lists, buttons) rather than styling divs",
                    "usage": "Use semantic HTML: <button> for buttons, <h1>-<h6> for headings, <nav> for navigation, helping assistive tech"
                },
                {
                    "word": "Focus Indicator",
                    "meaning": "Visual highlight showing which element currently has keyboard focus for navigation",
                    "usage": "Ensure focus indicators are visible: 2px solid outline in contrasting color around focused elements"
                }
            ],
            "resources": [
                {
                    "title": "WAVE - Web accessibility evaluation tool",
                    "url": "https://wave.webaim.org"
                },
                {
                    "title": "axe DevTools - Browser accessibility testing extension",
                    "url": "https://www.deque.com/axe/devtools"
                },
                {
                    "title": "WebAIM - Accessibility resources and articles",
                    "url": "https://webaim.org"
                },
                {
                    "title": "A11y Project - Accessibility checklist and guides",
                    "url": "https://www.a11yproject.com"
                }
            ],
            "notes": "Accessibility is not optional—it's a legal requirement in many jurisdictions and fundamental to reaching all users. Don't wait until the end to think about accessibility; build it in from the start. Use AI to help generate accessible code and identify issues, but always validate with real assistive technologies and actual users with disabilities. Remember: good accessibility is good UX for everyone."
        },
        {
            "id": "WP-UX-09",
            "title": "UX Copywriting for Web",
            "summary": "Master the art of writing clear, concise, and conversion-focused copy that guides users, builds trust, and motivates action throughout the user interface and customer journey.",
            "objectives": [
                "Understand UX writing principles and how copy affects usability and conversion",
                "Write effective microcopy for buttons, forms, error messages, and empty states",
                "Create compelling value propositions and calls-to-action that drive user behavior"
            ],
            "theory": [
                "UX writing is the practice of crafting the words users encounter when interacting with your product—button labels, form instructions, error messages, empty states, and navigation. Unlike marketing copy that persuades, UX copy guides and clarifies, reducing friction and building confidence. Every word should help users accomplish their goals faster and with less confusion.",
                "Effective UX writing follows core principles: clarity over cleverness means avoiding puns or jargon when clear instruction serves better, conciseness respects users' time and attention with minimal words conveying maximum meaning, consistency uses the same terms for the same concepts throughout the product preventing confusion, useful feedback tells users what happened and what to do next, and appropriate tone matches brand personality while staying helpful and professional.",
                "Microcopy appears at critical decision points guiding users: button labels should describe the action outcome ('Create Account' not 'Submit'), placeholder text should show format examples not redundantly repeat labels, error messages should explain the problem and solution ('Password must be at least 8 characters' not 'Invalid password'), success confirmations should celebrate completion ('Your order is confirmed!' not just 'Success'), and empty states should explain why nothing is showing and suggest next actions.",
                "Writing effective CTAs involves understanding user psychology: action-oriented verbs create momentum ('Start your free trial' versus 'Free trial'), first-person language increases commitment ('Send my invite' versus 'Send invite'), value-focused copy emphasizes benefits ('Get my discount' versus 'Claim discount'), specificity reduces uncertainty ('Download the guide' versus 'Download'), and time-sensitivity creates urgency ('Book your spot today' versus 'Book now').",
                "Voice and tone must flex by context: onboarding should be encouraging and clear explaining what's happening and why, error states should be apologetic and helpful taking responsibility and offering solutions, success moments can be celebratory rewarding users for completion, technical settings can be brief and precise assuming expert users, and marketing-adjacent sections like hero and pricing can be more persuasive. Consistency in voice with flexibility in tone creates cohesive yet appropriate experiences."
            ],
            "why": "Studies show that clear UX copy reduces support tickets by 40% and increases conversion rates by 15-30% compared to generic alternatives. Users scan rather than read, so every word must earn its place. For developers building products, good UX writing means fewer confused users, less support burden, and higher feature adoption. AI can generate copy variations, but understanding these principles ensures you recognize and select quality over clever-but-confusing options.",
            "prompts": {
                "goal": "Write UX copy for a multi-step subscription signup flow",
                "before": "Write copy for a signup form",
                "after": "Create comprehensive UX copy for a 3-step subscription signup flow for a meal planning app targeting busy parents. Apply these UX writing principles: 1) Step 1 - Account Creation: Headline: 'Start Your Free 7-Day Trial' (clear value), Subhead: 'No credit card required. Cancel anytime.' (addressing objection), Email field label: 'Email', Placeholder: 'you@example.com' (format example), Password field label: 'Create Password', Helper text: 'At least 8 characters' (requirement before error), Button: 'Continue to Meal Preferences' (specific next step), 2) Step 2 - Preferences: Headline: 'Personalize Your Meal Plans', Dietary preference checkboxes (Vegetarian, Vegan, Gluten-Free, etc.) with helper text: 'We'll suggest recipes matching your needs', Family size selector: 'How many people are you cooking for?', Button: 'See Your Recommendations' (outcome-focused), 3) Step 3 - Plan Selection: Headline: 'Choose Your Plan', Plan cards with 'Most Popular' badge on mid-tier (social proof), Annual toggle: 'Save 30% with annual billing' (specific benefit), Button: 'Start My Free Trial' (personal, action-oriented). Throughout flow: Progress indicator (Step 1 of 3), Back link in top-left, FAQ section at bottom addressing common hesitations. Error messages: 'Please enter a valid email address' (specific), 'Password must be at least 8 characters long' (solution-oriented). Success state: 'Welcome to Meal Planner! 🎉 Check your email to confirm your account.' Tone: Friendly, encouraging, clear—like a helpful friend, not corporate.",
                "resultBefore": "Generic copy like 'Submit' on buttons providing no context, vague errors like 'Invalid input' leaving users confused, no progress indication causing anxiety, missing value reinforcement causing drop-off, inconsistent tone ranging from casual to formal creating trust issues",
                "resultAfter": "Clear, action-oriented button copy increasing click-through, specific error messages reducing support tickets by 45%, progress indicators reducing abandonment from 60% to 35%, value reinforcement at each step maintaining motivation, consistent friendly tone building trust and brand affinity"
            },
            "pitfalls": [
                {
                    "title": "Using vague labels like 'Submit' or 'Click Here' that don't describe outcomes",
                    "solution": "Write specific, action-oriented labels: 'Create My Account', 'Download Report', 'Schedule Demo'"
                },
                {
                    "title": "Writing clever or cute copy that obscures meaning for users in a hurry",
                    "solution": "Prioritize clarity; save personality for less critical moments like success states"
                },
                {
                    "title": "Inconsistent terminology confusing users (Settings vs Preferences vs Options)",
                    "solution": "Create terminology glossary and use the same term for the same concept everywhere"
                },
                {
                    "title": "Error messages that blame users or don't explain how to fix problems",
                    "solution": "Make errors helpful: explain what went wrong and what to do next"
                },
                {
                    "title": "Empty states that say nothing helpful when users first encounter them",
                    "solution": "Explain why it's empty and suggest first action: 'No projects yet. Create your first project to get started.'"
                }
            ],
            "keywords": [
                {
                    "word": "Microcopy",
                    "meaning": "Small bits of text guiding users through interfaces (button labels, form hints, error messages)",
                    "usage": "Improve microcopy on form submit button from 'Submit' to 'Create My Account' increasing conversion 22%"
                },
                {
                    "word": "Voice",
                    "meaning": "The consistent personality and character of your brand expressed through writing",
                    "usage": "Establish voice guidelines: 'We're friendly and approachable but never unprofessional or overly casual'"
                },
                {
                    "word": "Tone",
                    "meaning": "The emotional inflection of voice that changes based on context and user emotion",
                    "usage": "Adjust tone: celebratory for success states, empathetic and apologetic for errors"
                },
                {
                    "word": "Empty State",
                    "meaning": "The screen users see when no content exists yet, opportunity to guide next action",
                    "usage": "Write helpful empty states: 'Your inbox is empty! Start a conversation by clicking New Message.'"
                },
                {
                    "word": "Progressive Disclosure",
                    "meaning": "Revealing information or options gradually as needed rather than overwhelming upfront",
                    "usage": "Apply progressive disclosure with 'Advanced Options' link instead of showing 15 fields initially"
                }
            ],
            "resources": [
                {
                    "title": "Microcopy - The book on UX writing",
                    "url": "https://www.microcopybook.com"
                },
                {
                    "title": "UX Writing Hub - Articles and examples",
                    "url": "https://uxwritinghub.com"
                },
                {
                    "title": "Really Good UX - Microcopy examples",
                    "url": "https://www.reallygoodux.io"
                },
                {
                    "title": "Content Design London - Readability guidance",
                    "url": "https://readabilityguidelines.co.uk"
                }
            ],
            "notes": "Words are part of your interface design, not an afterthought. Every label, message, and instruction affects usability and conversion. When using AI to generate UX copy, provide context about where copy appears, what user is trying to do, and what emotional state they're in. Test copy with real users—watch where they hesitate or get confused. Small word changes create big usability improvements. Read copy aloud; if it sounds awkward, rewrite it."
        },
        {
            "id": "WP-UX-10",
            "title": "Usability Audit using AI",
            "summary": "Leverage AI-powered tools and methodologies to systematically evaluate websites for usability issues, accessibility problems, and conversion bottlenecks, creating actionable improvement roadmaps.",
            "objectives": [
                "Conduct comprehensive usability audits using AI-assisted analysis and heuristic evaluation",
                "Identify and prioritize usability issues based on severity and user impact",
                "Create actionable audit reports with specific, implementable recommendations for improvement"
            ],
            "theory": [
                "A usability audit is a systematic evaluation of how easy and efficient your website is to use, identifying friction points that prevent users from achieving their goals. Unlike user testing which observes actual behavior, audits apply expert evaluation using established heuristics (rules of thumb) like Jakob Nielsen's 10 usability principles: visibility of system status, match between system and real world, user control and freedom, consistency and standards, error prevention, recognition rather than recall, flexibility and efficiency, aesthetic and minimalist design, help users recognize and recover from errors, and help and documentation.",
                "AI-powered usability audits combine multiple analysis methods: automated scanning tools check for technical issues like broken links, slow load times, and accessibility violations; AI heuristic evaluation analyzes screenshots and flows against UX principles identifying confusing navigation or poor hierarchy; session replay analysis reviews user recordings detecting struggle patterns like rage clicks or form abandonment; heatmap interpretation shows where users look and click revealing ignored elements or distractions; and comparative analysis benchmarks your site against competitors and industry standards.",
                "Effective audits follow a structured process: define scope and key user journeys to evaluate, collect data using automated tools, manual inspection, and analytics, analyze findings categorizing issues by type (navigation, content, visual design, technical), prioritize problems by severity (critical blockers, high friction, medium annoyance, low polish), and create actionable recommendations with specific solutions, effort estimates, and expected impact on user experience and business metrics.",
                "Severity prioritization uses impact-effort matrices: critical issues completely block user goals (checkout broken, search non-functional) and must be fixed immediately regardless of effort; high-impact issues significantly degrade experience (confusing navigation, poor mobile layout) and should be prioritized based on user frequency and business value; medium issues cause annoyance but have workarounds (inconsistent button styles, verbose messaging); low issues are polish improvements (minor spacing, color adjustments). Focus effort where impact is highest.",
                "AI accelerates audits by processing large amounts of data quickly, identifying patterns humans might miss, generating detailed reports automatically, and suggesting specific fixes based on best practices. However, human judgment remains essential for understanding context, evaluating trade-offs, prioritizing based on business goals, and ensuring recommendations align with brand and user needs. The best audits combine AI efficiency with human expertise."
            ],
            "why": "Professional usability audits identify issues costing businesses 20-40% of potential revenue through user drop-off and inefficiency. A systematic audit before major redesigns prevents expensive mistakes, while ongoing audits catch degradation before it impacts metrics. For freelancers, offering AI-assisted audits is a high-value service requiring minimal time investment. For product teams, regular audits maintain quality as features accumulate. AI tools reduce audit time from weeks to days while increasing coverage and consistency.",
            "prompts": {
                "goal": "Conduct a comprehensive AI-assisted usability audit of an e-commerce checkout flow",
                "before": "Audit my checkout process",
                "after": "Perform a comprehensive usability audit of an e-commerce checkout flow for a fashion retailer using AI-assisted analysis. Audit components: 1) Automated technical analysis: Use Google Lighthouse for performance, accessibility, and SEO scores; Check for broken links, slow-loading resources, and mobile responsiveness issues; Validate form functionality and error handling, 2) Heuristic evaluation against Nielsen's 10 principles: Analyze 5-screen checkout flow (Cart Review > Shipping > Payment > Confirmation) for visibility of system status (progress indicators, loading states), user control (ability to edit, back navigation), consistency (button styles, terminology), error prevention and recovery (validation, clear error messages), 3) Session replay analysis: Review 50+ real user sessions identifying struggle points (rage clicks, repeated back-button use, form abandonment), Calculate completion rate and average time per checkout step, 4) Accessibility check: Test with screen reader (NVDA) for proper form labels and announcements, Verify WCAG AA compliance for contrast, keyboard navigation, focus indicators, 5) Comparative benchmarking: Compare against 3 competitor checkout flows noting better patterns. Generate prioritized findings report with: Critical Issues (P0): Prevent checkout completion - fix immediately (example: broken payment processing, missing required field validation), High Issues (P1): Significant friction causing abandonment - fix within 1 week (example: confusing shipping options, poor mobile keyboard handling), Medium Issues (P2): Degrade experience - fix within 1 month (example: verbose copy, suboptimal field order), Low Issues (P3): Polish improvements - backlog (example: inconsistent button sizes, spacing). For each issue provide: Description with screenshot, User impact and estimated % of users affected, Specific recommendation with example solution, Development effort estimate, Expected improvement metric (completion rate, time-to-complete).",
                "resultBefore": "Vague sense that checkout 'could be better,' no specific understanding of where users struggle, issues identified randomly without prioritization, fixes attempted based on gut feeling rather than data, no measurement of whether changes actually improved user experience",
                "resultAfter": "Detailed audit identifying 23 specific usability issues with severity ratings, data showing 35% of mobile users abandon at payment step due to poor keyboard handling (P0 issue), clear prioritization: fix 3 critical blockers immediately, address 7 high-friction items this sprint, actionable recommendations with examples: 'Replace country dropdown with auto-detected default + search-enabled selector', effort estimates guiding sprint planning, baseline metrics to measure improvement post-fixes"
            },
            "pitfalls": [
                {
                    "title": "Relying only on automated tools which miss context-dependent usability issues",
                    "solution": "Combine automated scanning with manual expert evaluation and real user session analysis"
                },
                {
                    "title": "Creating exhaustive lists of minor issues without prioritization",
                    "solution": "Focus on high-impact problems first; don't let minor polish distract from major friction"
                },
                {
                    "title": "Writing audit findings without specific, actionable recommendations",
                    "solution": "Each finding must include concrete solution with example implementation or reference"
                },
                {
                    "title": "Auditing in isolation without understanding business context or constraints",
                    "solution": "Discuss with stakeholders to understand goals, priorities, and technical limitations before auditing"
                },
                {
                    "title": "Conducting one-time audits instead of establishing ongoing evaluation",
                    "solution": "Schedule regular audits (quarterly) and implement continuous monitoring for regressions"
                }
            ],
            "keywords": [
                {
                    "word": "Heuristic Evaluation",
                    "meaning": "Expert review method using established usability principles to identify interface problems",
                    "usage": "Conduct heuristic evaluation against Nielsen's 10 usability heuristics, documenting violations with screenshots"
                },
                {
                    "word": "Severity Rating",
                    "meaning": "Classification system ranking usability issues by impact on users and business (critical, high, medium, low)",
                    "usage": "Assign severity ratings: P0 (critical blockers), P1 (major friction), P2 (moderate issues), P3 (polish)"
                },
                {
                    "word": "Session Replay",
                    "meaning": "Recording of actual user interactions showing mouse movement, clicks, scrolling, and form inputs",
                    "usage": "Analyze session replays to identify struggle patterns like form field confusion or navigation loops"
                },
                {
                    "word": "Rage Click",
                    "meaning": "Multiple rapid clicks on the same element indicating user frustration with non-responsive interface",
                    "usage": "Detect rage clicks in session replays revealing buttons users expect to work but don't"
                },
                {
                    "word": "Friction Log",
                    "meaning": "Chronological documentation of usability issues encountered during task completion attempts",
                    "usage": "Maintain friction log documenting every point of confusion or delay during checkout flow completion"
                }
            ],
            "resources": [
                {
                    "title": "Google Lighthouse - Automated site auditing",
                    "url": "https://developers.google.com/web/tools/lighthouse"
                },
                {
                    "title": "Hotjar - Heatmaps and session recordings",
                    "url": "https://www.hotjar.com"
                },
                {
                    "title": "Nielsen Norman Group - Heuristic evaluation guide",
                    "url": "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/"
                },
                {
                    "title": "Baymard Institute - E-commerce UX benchmarks",
                    "url": "https://baymard.com"
                }
            ],
            "notes": "Usability audits are diagnostic tools—they identify problems but solving them requires creativity and judgment. AI excels at finding patterns and comparing against standards, but humans must evaluate trade-offs and prioritize based on business context. The best audits lead to action, not just reports. Focus on high-impact issues first—fixing three critical problems beats documenting thirty minor ones. Measure results: did fixing identified issues actually improve user behavior and business metrics? Iterate based on data."
        }
    ]
};

const webDevModule4 = {
    courseTitle: 'Web Development',
    moduleNumber: 4,
    moduleName: ' Backend Prompts & Connections (Website Logic)',
    totalLessons: 10,


    "lessons": [
        {
            "id": "WP-BE-01",
            "title": "Website Backend Architecture Design",
            "summary": "Learn to design scalable, maintainable backend architectures for websites, understanding layers, patterns, and how to prompt AI for production-ready backend structures.",
            "objectives": [
                "Understand backend architecture patterns including MVC, layered architecture, and microservices",
                "Design scalable backend systems with proper separation of concerns and modularity",
                "Use AI to generate well-structured backend architectures with clear organization and best practices"
            ],
            "theory": [
                "Backend architecture is the structural design of server-side systems that handle business logic, data processing, and communication between the frontend and database. A well-designed architecture makes code maintainable, testable, and scalable as your website grows. Think of it as the blueprint for your website's engine—it determines how components interact, how data flows, and how easy it is to add features later.",
                "The most common pattern for web backends is MVC (Model-View-Controller) which separates concerns into three layers: Models represent data and business logic, Views handle presentation (often the frontend in modern apps), and Controllers process requests and coordinate between models and views. This separation means you can change how data is stored without touching request handling, or update business rules without modifying the API layer.",
                "Modern backend architectures often use a layered approach with distinct responsibilities: the API/Controller layer handles HTTP requests and responses, the Service/Business Logic layer contains core application rules and workflows, the Data Access layer manages database interactions and queries, and the Infrastructure layer handles external services like email, payments, and file storage. Each layer only talks to adjacent layers, creating clear boundaries and making testing easier.",
                "Choosing between monolithic and microservices architectures depends on your needs: monolithic backends keep everything in one codebase, making development simple and deployment straightforward, ideal for small to medium websites with one team. Microservices split functionality into independent services (user service, payment service, content service), allowing teams to work independently and scale components separately, but adding complexity in deployment and communication between services.",
                "Key architectural decisions include: choosing synchronous versus asynchronous processing (should form submissions block the user or happen in background?), stateless versus stateful design (should the server remember user sessions or use tokens?), RESTful versus GraphQL APIs (fixed endpoints or flexible queries?), and authentication strategies (sessions, JWT tokens, OAuth). These choices affect performance, scalability, and development complexity, so understanding trade-offs is crucial."
            ],
            "why": "In real-world projects, poor backend architecture creates technical debt that slows development to a crawl within months. A well-architected backend means adding features takes hours instead of days, bugs are easier to find and fix, and scaling to handle more users doesn't require complete rewrites. For developers using AI, understanding architecture ensures you can evaluate and refine generated code rather than blindly accepting structures that won't scale. Companies pay premium rates for developers who can design clean, maintainable backends.",
            "prompts": {
                "goal": "Design backend architecture for a blog platform with user authentication, posts, and comments",
                "before": "Create a backend for a blog website",
                "after": "Design a scalable backend architecture for a blog platform supporting 10,000+ users with these requirements: user authentication (email/password + OAuth), post creation with rich text and images, comments with nested replies, and user profiles. Use Node.js with Express framework and PostgreSQL database. Structure: 1) API Layer (Express routes): /api/auth (register, login, logout, refresh-token), /api/users (get-profile, update-profile), /api/posts (create, read, update, delete, list-with-pagination), /api/comments (create, reply, delete), 2) Service Layer (business logic): AuthService (handles password hashing, JWT generation, OAuth integration), UserService (profile management, validation), PostService (post CRUD, image upload to S3, markdown parsing), CommentService (nested comment handling, notification triggers), 3) Data Access Layer (repositories): UserRepository, PostRepository, CommentRepository with TypeORM for database queries, 4) Middleware: authentication middleware (verify JWT), authorization middleware (check ownership), validation middleware (Joi schemas), error handling middleware, 5) External Services: AWS S3 for image storage, SendGrid for email notifications, Redis for session caching. Use dependency injection for testability, implement proper error handling with custom error classes, add request logging with Winston, and include API versioning (/api/v1). Provide folder structure, key file examples, and dependency list.",
                "resultBefore": "Flat file structure with all code mixed together, no separation of concerns making testing impossible, business logic scattered across route handlers, direct database queries in controllers, no error handling strategy, hardcoded configuration, impossible to scale or maintain",
                "resultAfter": "Clean layered architecture with /routes, /services, /repositories, /middleware, /config folders, clear separation allowing independent testing of each layer, business logic centralized in services, reusable repository pattern abstracting database, consistent error handling across all endpoints, environment-based configuration, ready to scale horizontally by adding more server instances"
            },
            "pitfalls": [
                {
                    "title": "Over-engineering with unnecessary complexity for simple websites",
                    "solution": "Start with simpler monolithic architecture; refactor to microservices only when scaling demands it"
                },
                {
                    "title": "Mixing business logic into controllers making code untestable",
                    "solution": "Keep controllers thin—only handle request/response; move logic to service layer"
                },
                {
                    "title": "No separation between development, staging, and production environments",
                    "solution": "Use environment variables for configuration, maintain separate databases per environment"
                },
                {
                    "title": "Tight coupling between layers making changes cascade everywhere",
                    "solution": "Use dependency injection and interfaces to decouple components"
                },
                {
                    "title": "Ignoring error handling until production crashes reveal problems",
                    "solution": "Implement global error handling middleware and custom error classes from day one"
                }
            ],
            "keywords": [
                {
                    "word": "MVC (Model-View-Controller)",
                    "meaning": "Architectural pattern separating data (Model), presentation (View), and request handling (Controller)",
                    "usage": "Implement MVC by creating /models for data schemas, /views for templates, /controllers for route handlers"
                },
                {
                    "word": "Service Layer",
                    "meaning": "The layer containing business logic and workflows, coordinating between controllers and data access",
                    "usage": "Create UserService.js with methods like registerUser(), loginUser() containing authentication business logic"
                },
                {
                    "word": "Dependency Injection",
                    "meaning": "Design pattern where dependencies are provided to a class rather than created inside it",
                    "usage": "Inject database connection into repositories: new UserRepository(database) instead of hardcoding connection"
                },
                {
                    "word": "Middleware",
                    "meaning": "Functions that execute during request processing, handling cross-cutting concerns like auth and logging",
                    "usage": "Add authentication middleware: app.use('/api/posts', authMiddleware, postRoutes)"
                },
                {
                    "word": "Stateless",
                    "meaning": "Server doesn't store session data; each request contains all needed information (typically via JWT tokens)",
                    "usage": "Design stateless API using JWT tokens in headers instead of server-side sessions for horizontal scaling"
                }
            ],
            "resources": [
                {
                    "title": "The Clean Architecture - Robert C. Martin",
                    "url": "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                },
                {
                    "title": "Node.js Best Practices - GitHub repository",
                    "url": "https://github.com/goldbergyoni/nodebestpractices"
                },
                {
                    "title": "REST API Tutorial",
                    "url": "https://restfulapi.net"
                },
                {
                    "title": "Martin Fowler - Microservices Guide",
                    "url": "https://martinfowler.com/microservices"
                }
            ],
            "notes": "Good architecture is invisible when done right—developers work efficiently without fighting the structure. Start simple and refactor as needs emerge rather than building for hypothetical future requirements. When using AI to generate backend code, always specify the architecture pattern you want and the separation of concerns. Review generated code to ensure proper layering and not mixing responsibilities. Remember: architecture is about long-term maintainability, not showing off knowledge of every pattern."
        },
        {
            "id": "WP-BE-02",
            "title": "API Design for Forms & Auth",
            "summary": "Master RESTful API design principles for building secure, intuitive endpoints that handle form submissions, user authentication, and data validation efficiently.",
            "objectives": [
                "Design RESTful APIs following industry standards for resource naming and HTTP methods",
                "Create secure authentication endpoints with proper token management and session handling",
                "Implement robust form submission APIs with validation, error handling, and user feedback"
            ],
            "theory": [
                "API (Application Programming Interface) design is the process of creating the contract between your frontend and backend, defining what requests clients can make and what responses they'll receive. Well-designed APIs are intuitive, consistent, and predictable—developers can guess endpoint names and behavior without reading extensive documentation. REST (Representational State Transfer) is the most common API design pattern using HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources (users, posts, comments).",
                "RESTful API conventions follow predictable patterns: use nouns for endpoints representing resources (/api/users, /api/posts), apply HTTP methods for actions (GET retrieves, POST creates, PUT updates, DELETE removes), use plural nouns for collections (/users) and IDs for specific items (/users/123), nest related resources logically (/posts/123/comments), and return appropriate HTTP status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error).",
                "Form submission APIs must handle the complete lifecycle: receive and validate input data checking required fields, format rules, and business constraints; sanitize inputs preventing SQL injection and XSS attacks; process the data according to business logic; store results in the database with proper transactions; return meaningful responses indicating success or specific validation errors; and trigger any side effects like sending confirmation emails or notifications. Each step must handle both success and failure scenarios gracefully.",
                "Authentication APIs typically include several endpoints working together: POST /auth/register creates new accounts with password hashing and email verification; POST /auth/login validates credentials and returns access token (JWT) plus refresh token; POST /auth/logout invalidates tokens or sessions; POST /auth/refresh-token exchanges expired access tokens for new ones without re-login; POST /auth/forgot-password initiates password reset flow; POST /auth/reset-password completes password change with token validation. Each endpoint must implement security best practices like rate limiting, HTTPS only, and secure token storage.",
                "API responses should be consistent and developer-friendly: wrap data in standard structure with status, data, and error fields; include pagination metadata for lists (total count, page number, page size); provide detailed error messages with field-level validation feedback; use appropriate HTTP status codes matching the actual result; include helpful metadata like timestamps and request IDs for debugging; and version your API (/api/v1) to allow non-breaking changes over time."
            ],
            "why": "Real-world applications live or die by their APIs. A poorly designed API frustrates frontend developers, causes security vulnerabilities, and requires constant breaking changes disrupting users. Well-designed APIs reduce frontend development time by 40%, minimize support tickets from validation errors, and make adding features straightforward. For developers, API design skills are highly valued—companies pay premium rates for those who can create intuitive, secure APIs. AI can generate endpoints quickly, but understanding these principles ensures you build APIs users actually want to work with.",
            "prompts": {
                "goal": "Design complete API for user registration, login, and profile update with form handling",
                "before": "Create authentication API endpoints",
                "after": "Design a complete RESTful API for user authentication and profile management with these specifications: 1) Registration Endpoint - POST /api/v1/auth/register, Request body: {email, password, firstName, lastName, acceptTerms}, Validation: email format valid and unique, password minimum 8 chars with uppercase/lowercase/number, firstName/lastName required and 2-50 chars, acceptTerms must be true, Response 201: {status: 'success', data: {user: {id, email, firstName, lastName}, accessToken, refreshToken}}, Response 400: {status: 'error', errors: [{field: 'email', message: 'Email already exists'}, {field: 'password', message: 'Password must contain uppercase letter'}]}, Side effects: hash password with bcrypt, create email verification token, send welcome email, 2) Login Endpoint - POST /api/v1/auth/login, Request: {email, password}, Validation: both required, rate limit 5 attempts per 15 min, Response 200: {status: 'success', data: {user, accessToken, refreshToken}}, Response 401: {status: 'error', message: 'Invalid credentials'}, Security: increment failed attempts, lock account after 5 failures, 3) Profile Update - PUT /api/v1/users/me, Headers: Authorization: Bearer {accessToken}, Request: {firstName, lastName, bio, avatarUrl}, Validation: optional fields but if provided must meet format rules, Response 200: {status: 'success', data: {user}}, Response 401 if token invalid/expired, 4) Refresh Token - POST /api/v1/auth/refresh, Request: {refreshToken}, Response: {accessToken}, Security: rotate refresh token on each use. Include middleware for JWT verification, request validation with Joi schemas, error handling, and API documentation using OpenAPI/Swagger specification.",
                "resultBefore": "Inconsistent endpoint naming (/createUser, /user/new, /signup), no validation allowing malformed data into database, plain text passwords stored, generic error messages 'Error occurred', no rate limiting allowing brute force attacks, missing token refresh requiring constant re-login",
                "resultAfter": "RESTful endpoints following conventions, comprehensive validation with field-level error messages, bcrypt password hashing with salting, detailed validation feedback helping users fix issues, rate limiting preventing abuse, JWT access/refresh token pattern for security and UX, OpenAPI documentation for frontend integration, consistent response format across all endpoints"
            },
            "pitfalls": [
                {
                    "title": "Using verbs in endpoint URLs instead of nouns with HTTP methods",
                    "solution": "Use /api/posts (POST to create) not /api/createPost, /api/posts/123 (DELETE) not /api/deletePost/123"
                },
                {
                    "title": "Returning 200 OK for failed validation or business logic errors",
                    "solution": "Use 400 Bad Request for validation errors, 401 for auth failures, 409 for conflicts"
                },
                {
                    "title": "Sending plain text passwords or storing them unhashed",
                    "solution": "Hash passwords with bcrypt (10+ rounds) before storing, never log or transmit plain passwords"
                },
                {
                    "title": "No rate limiting allowing unlimited login attempts",
                    "solution": "Implement rate limiting: 5 attempts per IP per 15 minutes, account lockout after threshold"
                },
                {
                    "title": "Generic error messages hiding what actually went wrong",
                    "solution": "Return field-specific validation errors: {field: 'email', message: 'Email format invalid'}"
                }
            ],
            "keywords": [
                {
                    "word": "REST (Representational State Transfer)",
                    "meaning": "Architectural style using HTTP methods and resource URLs for API design",
                    "usage": "Design REST API: GET /api/posts retrieves list, POST /api/posts creates new, PUT /api/posts/123 updates"
                },
                {
                    "word": "JWT (JSON Web Token)",
                    "meaning": "Encoded token containing user claims, signed to prevent tampering, used for stateless authentication",
                    "usage": "Generate JWT after login: jwt.sign({userId: user.id}, secret, {expiresIn: '15m'})"
                },
                {
                    "word": "Validation",
                    "meaning": "Process of checking input data meets required format, type, and business rule constraints",
                    "usage": "Validate request with Joi: Joi.object({email: Joi.string().email().required()})"
                },
                {
                    "word": "Rate Limiting",
                    "meaning": "Restricting number of requests from a client within a time window to prevent abuse",
                    "usage": "Apply rate limiting: app.use('/api/auth/login', rateLimit({max: 5, windowMs: 15*60*1000}))"
                },
                {
                    "word": "HTTP Status Code",
                    "meaning": "Three-digit code indicating request outcome (200 success, 400 client error, 500 server error)",
                    "usage": "Return appropriate codes: 201 for created resource, 400 for validation error, 401 for auth failure"
                }
            ],
            "resources": [
                {
                    "title": "REST API Best Practices",
                    "url": "https://restfulapi.net/rest-api-design-tutorial-with-example"
                },
                {
                    "title": "JWT.io - Introduction to JSON Web Tokens",
                    "url": "https://jwt.io/introduction"
                },
                {
                    "title": "OWASP Authentication Cheat Sheet",
                    "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
                },
                {
                    "title": "Joi Validation Library Documentation",
                    "url": "https://joi.dev/api"
                }
            ],
            "notes": "API design is communication design—you're creating a language for systems to talk. Consistency matters more than perfection; developers prefer predictable patterns over clever one-offs. When prompting AI for API code, always specify the full request/response structure, validation rules, error scenarios, and security requirements. Test your APIs with tools like Postman before integrating with frontend. Remember: good APIs are boring—they do exactly what developers expect without surprises."
        },
        {
            "id": "WP-BE-03",
            "title": "Authentication Systems",
            "summary": "Build secure, production-ready authentication systems implementing industry-standard practices for password management, session handling, and multi-factor authentication.",
            "objectives": [
                "Implement secure password authentication with proper hashing, salting, and validation",
                "Design session and token-based authentication strategies for different application needs",
                "Add OAuth integration and multi-factor authentication for enhanced security"
            ],
            "theory": [
                "Authentication is the process of verifying user identity, answering 'are you who you claim to be?' It's the foundation of website security—protecting user data, preventing unauthorized access, and ensuring accountability. Modern authentication systems must balance security (making attacks difficult) with usability (not frustrating legitimate users). The stakes are high: authentication breaches expose user data, damage reputation, and create legal liability under regulations like GDPR and CCPA.",
                "Password-based authentication remains most common but requires careful implementation to be secure. Never store passwords in plain text—use bcrypt or argon2 hashing algorithms with automatic salting, making rainbow table attacks impossible. Enforce password requirements (minimum 8 characters, mix of character types) and check against common password databases to prevent easily guessed passwords. Implement password reset flows securely using time-limited tokens sent to verified email addresses, never revealing whether an email exists in the system during reset requests to prevent user enumeration attacks.",
                "Session-based versus token-based authentication represent different trade-offs: session-based stores user state on the server, creating a session ID cookie, allowing server to invalidate sessions instantly but requiring shared session storage for horizontal scaling. Token-based (JWT) stores claims in client-held tokens, enabling stateless servers that scale easily but making logout and token revocation more complex. Choose sessions for traditional server-rendered sites, tokens for single-page apps and mobile apps, or hybrid approaches combining both for maximum flexibility.",
                "OAuth 2.0 and social login (Sign in with Google, Facebook, GitHub) provide authentication without managing passwords yourself. Users click a social provider button, get redirected to provider's login page, approve your app accessing their basic info, and provider redirects back with an authorization code you exchange for an access token. This reduces friction (users prefer one-click login), improves security (fewer password databases to breach), but adds complexity in configuration and dependency on external providers. Implement OAuth as an addition to email/password, not a replacement.",
                "Multi-factor authentication (MFA) adds a second verification method beyond passwords, dramatically increasing security. Common second factors include time-based one-time passwords (TOTP) generated by apps like Google Authenticator, SMS codes sent to verified phone numbers, email confirmation links, and hardware security keys. MFA should be encouraged for all users and required for privileged accounts (admins). Implementation involves generating a secret key during setup, storing it encrypted, and verifying the current TOTP code matches during login."
            ],
            "why": "In professional environments, authentication vulnerabilities are the #1 attack vector—81% of data breaches involve weak or stolen passwords. A properly implemented authentication system protects users, builds trust, and avoids costly breaches and regulatory fines. For developers, authentication is critical infrastructure you can't afford to get wrong. While AI can generate authentication code, understanding these principles ensures you recognize insecure patterns and implement defenses against real attack vectors like credential stuffing, session hijacking, and brute force attacks.",
            "prompts": {
                "goal": "Implement complete authentication system with password auth, OAuth, and MFA",
                "before": "Add user login to my website",
                "after": "Implement a production-ready authentication system with these security features: 1) Password Authentication: Use bcrypt with 12 salt rounds for hashing, validate passwords against 'haveibeenpwned' common password database, require minimum 10 characters with uppercase, lowercase, number, and special character, implement account lockout after 5 failed attempts with exponential backoff (1 min, 5 min, 15 min, 1 hour), rate limit login endpoint to 5 attempts per IP per 15 minutes, 2) Session Management: Generate cryptographically secure session IDs using crypto.randomBytes(32), store sessions in Redis with 24-hour expiration, implement 'remember me' option extending expiration to 30 days, rotate session ID on privilege escalation (login, password change), provide session listing allowing users to view and revoke active sessions, 3) OAuth Integration: Support Google and GitHub OAuth using Passport.js, link OAuth accounts to existing email accounts by matching verified emails, allow users to disconnect OAuth providers if password is set, store OAuth tokens encrypted in database for API access, 4) Multi-Factor Authentication: Implement TOTP using 'speakeasy' library, generate QR code for authenticator app setup, require 6-digit code entry on login after password, provide backup codes (10 one-time codes) for account recovery, allow admin users to enforce MFA requirement, 5) Password Reset: Generate cryptographically secure reset tokens valid for 1 hour, send reset links via email with clear expiration time, invalidate all sessions on password change, 6) Security Headers: Set httpOnly and secure flags on cookies, implement CSRF protection with tokens, add rate limiting on all auth endpoints. Include comprehensive logging of authentication events (login success/failure, password changes, MFA setup) for security auditing. Use environment variables for secrets and API keys.",
                "resultBefore": "Plain text passwords in database, no rate limiting allowing brute force, sessions never expire creating security risk, generic error messages revealing account existence, no MFA option for high-value accounts, password reset links never expire, missing security headers allowing XSS attacks",
                "resultAfter": "Bcrypt-hashed passwords with high salt rounds, rate limiting preventing brute force attacks, sessions expire appropriately with option for extended 'remember me', generic error messages preventing user enumeration, optional MFA for all users (required for admins), time-limited password reset tokens, comprehensive security headers, detailed audit logs for compliance and security monitoring"
            },
            "pitfalls": [
                {
                    "title": "Using weak hashing (MD5, SHA1) or no hashing at all for passwords",
                    "solution": "Always use bcrypt, scrypt, or argon2 with appropriate cost factors (bcrypt rounds: 12+)"
                },
                {
                    "title": "No rate limiting allowing unlimited login attempts",
                    "solution": "Implement both IP-based rate limiting and account-based lockouts with exponential backoff"
                },
                {
                    "title": "Session fixation vulnerabilities not rotating session IDs after login",
                    "solution": "Generate new session ID immediately after successful authentication"
                },
                {
                    "title": "Password reset tokens that never expire or can be reused",
                    "solution": "Make tokens single-use with 1-hour expiration, invalidate after successful reset"
                },
                {
                    "title": "Storing OAuth tokens or JWT secrets in plain text",
                    "solution": "Encrypt tokens at rest, store secrets in environment variables, never commit to code"
                }
            ],
            "keywords": [
                {
                    "word": "Bcrypt",
                    "meaning": "Cryptographic hashing algorithm designed for passwords with built-in salting and configurable cost factor",
                    "usage": "Hash passwords: const hash = await bcrypt.hash(password, 12); verify: await bcrypt.compare(password, hash)"
                },
                {
                    "word": "Salt",
                    "meaning": "Random data added to passwords before hashing to prevent rainbow table attacks",
                    "usage": "Bcrypt automatically generates unique salt per password, no manual salt management needed"
                },
                {
                    "word": "CSRF (Cross-Site Request Forgery)",
                    "meaning": "Attack where malicious site tricks authenticated users into making unwanted requests",
                    "usage": "Prevent CSRF with tokens: generate per-session token, require it in forms, validate on submission"
                },
                {
                    "word": "TOTP (Time-based One-Time Password)",
                    "meaning": "Algorithm generating temporary codes that change every 30 seconds for MFA",
                    "usage": "Implement TOTP: const secret = speakeasy.generateSecret(); verify code: speakeasy.totp.verify({secret, token})"
                },
                {
                    "word": "OAuth 2.0",
                    "meaning": "Authorization framework allowing third-party apps to access user resources without passwords",
                    "usage": "Integrate Google OAuth: redirect to Google, receive code, exchange for access token, fetch user info"
                }
            ],
            "resources": [
                {
                    "title": "OWASP Authentication Cheat Sheet",
                    "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
                },
                {
                    "title": "Passport.js - Authentication middleware for Node.js",
                    "url": "https://www.passportjs.org"
                },
                {
                    "title": "Have I Been Pwned - Compromised password database",
                    "url": "https://haveibeenpwned.com/Passwords"
                },
                {
                    "title": "OAuth 2.0 Simplified",
                    "url": "https://aaronparecki.com/oauth-2-simplified"
                }
            ],
            "notes": "Authentication is one area where you absolutely cannot cut corners—security breaches destroy trust and businesses. When using AI to generate authentication code, always review for security anti-patterns: unhashed passwords, missing rate limiting, weak session management. Test authentication flows thoroughly including edge cases: expired tokens, account lockouts, concurrent sessions. Stay updated on security best practices as attack methods evolve. Consider using established authentication libraries (Passport.js, Auth0, Firebase Auth) rather than building from scratch—they've solved problems you haven't encountered yet."
        },
        {
            "id": "WP-BE-04",
            "title": "CMS Backend Design",
            "summary": "Design flexible, scalable backend systems for Content Management Systems that enable non-technical users to create, edit, and publish content with workflows and permissions.",
            "objectives": [
                "Understand CMS architecture patterns and data models for flexible content structures",
                "Implement CRUD operations with version control, workflow states, and publishing schedules",
                "Design role-based access control and content approval workflows for multi-user CMS environments"
            ],
            "theory": [
                "A Content Management System (CMS) backend separates content from presentation, allowing non-developers to manage website content through user-friendly interfaces. Unlike static websites where content is hardcoded, CMS backends store content in databases and provide APIs or admin panels for creating, editing, and organizing content. This enables marketing teams to update pages, bloggers to publish articles, and editors to review content without touching code. Popular CMS approaches include headless CMS (API-only backend with separate frontend) and traditional CMS (coupled backend and frontend like WordPress).",
                "CMS data models must balance flexibility with structure. The core entities typically include: Content Types (blog post, page, product) defining what fields exist; Content Items (actual articles, pages) containing the data; Media Assets (images, videos, PDFs) with metadata and organization; Users with roles and permissions; Categories and Tags for organization; and Revisions tracking all content changes. Advanced CMSs support custom content types, allowing admins to define new structures (events, recipes, testimonials) without developer involvement through field builders.",
                "Content workflow states manage the publishing lifecycle: Draft (work in progress, not visible to public), In Review (submitted for approval by editors), Scheduled (approved, publishes at specified time), Published (live and visible), and Archived (no longer active but retained for history). Transitions between states require appropriate permissions—authors can create drafts and submit for review, editors can approve and publish, admins can do everything. This workflow prevents unauthorized content from going live and enables collaborative content creation with quality control.",
                "Version control and revision history are essential CMS features, tracking every content change with who made it, when, and what changed. Users can compare versions side-by-side, revert to previous versions if changes break something, and audit content evolution for compliance. Implementation typically stores each version as a complete snapshot (simple but storage-heavy) or as diffs (complex but efficient). Include soft deletes (mark as deleted but retain in database) rather than hard deletes to enable recovery from mistakes.",
                "Media management handles file uploads, storage, and delivery. Accept images, videos, PDFs through the API, validate file types and sizes preventing malicious uploads, store files in cloud storage (AWS S3, Cloudinary) not local filesystem for scalability, generate multiple sizes for responsive images, extract and store metadata (dimensions, file size, EXIF data), organize with folders or tags, and serve optimized versions through CDN for performance. Implement permissions on media—users should only access and delete their own uploads unless they have admin privileges."
            ],
            "why": "Real-world businesses need CMS backends to scale content production without scaling developer teams. A marketing team of 10 people can publish hundreds of pages monthly through a good CMS, while trying to do that through developers creates bottlenecks and frustration. For developers, CMS backends are high-value deliverables—clients pay well for systems that empower their teams. Understanding CMS design patterns means you can build custom solutions matching client needs or effectively customize platforms like Strapi, Contentful, or Sanity. AI excels at generating CMS CRUD code, but knowing these patterns ensures you build systems people actually want to use.",
            "prompts": {
                "goal": "Design backend for a headless CMS supporting blog posts with workflow and media management",
                "before": "Create a CMS backend for blog posts",
                "after": "Design a headless CMS backend for a multi-author blog with these specifications: 1) Content Type System: Define flexible content types (BlogPost, Page, Author) with custom fields, BlogPost fields: title (text, required), slug (text, unique, auto-generated from title), excerpt (textarea, 200 chars), content (rich text, supports markdown and HTML), featuredImage (media reference), author (reference to User), categories (many-to-many with Category model), tags (array of strings), metaTitle and metaDescription (SEO fields), status (enum: draft, review, scheduled, published, archived), scheduledPublishDate (datetime, optional), 2) API Endpoints: GET /api/v1/content-types (list available types), POST /api/v1/posts (create draft), GET /api/v1/posts (list with filters for status, author, category, date range, pagination), GET /api/v1/posts/:id (single post with populated references), PUT /api/v1/posts/:id (update), DELETE /api/v1/posts/:id (soft delete), POST /api/v1/posts/:id/publish (change status to published), POST /api/v1/posts/:id/submit-review (draft → review), 3) Workflow System: Authors can create drafts and submit for review, Editors can approve (review → published) or reject (review → draft with comments), Scheduled posts automatically publish at specified time via cron job, Email notifications on status changes, Audit trail logging all state transitions, 4) Revision History: Save complete snapshot on every update, Include version number, timestamp, user who made change, API endpoints: GET /api/v1/posts/:id/revisions (list all versions), POST /api/v1/posts/:id/revert/:versionId (restore old version), 5) Media Management: POST /api/v1/media (upload with multipart/form-data), Validate file types (images: jpg, png, webp; docs: pdf), Resize images to multiple sizes (thumbnail 150px, medium 600px, large 1200px), Store in AWS S3 with unique keys, Return media object: {id, url, thumbnailUrl, filename, size, mimeType}, GET /api/v1/media (list user's uploads), DELETE /api/v1/media/:id (remove if not referenced by content), 6) Role-Based Access Control: Roles: Author (create/edit own posts), Editor (manage all posts, approve reviews), Admin (everything plus user management), Implement permission checks on all endpoints. Use MongoDB for flexible schema, Express.js for API, AWS S3 for media, Redis for caching published content, and JWT for authentication. Provide OpenAPI documentation for frontend integration.",
                "resultBefore": "Simple CRUD with no workflow, anyone can publish directly to production, no version history making mistakes unrecoverable, media files stored on server filesystem causing scaling issues, no permissions allowing users to edit others' content, no scheduling or automation",
                "resultAfter": "Professional workflow with draft/review/published states, role-based permissions preventing unauthorized publishing, complete revision history with comparison and revert capabilities, cloud-based media storage with automatic image optimization, scheduled publishing via automated jobs, comprehensive audit trail for compliance, API documentation enabling easy frontend integration"
            },
            "pitfalls": [
                {
                    "title": "Storing media files on local filesystem instead of cloud storage",
                    "solution": "Use AWS S3, Cloudinary, or similar cloud storage from day one for scalability"
                },
                {
                    "title": "Hard deletes losing content permanently instead of soft deletes",
                    "solution": "Add 'deletedAt' timestamp field, filter it in queries, retain for recovery and auditing"
                },
                {
                    "title": "No revision history making content changes unrecoverable",
                    "solution": "Store snapshots or diffs on every update with user, timestamp, and version number"
                },
                {
                    "title": "Missing workflow states allowing direct publish without review",
                    "solution": "Implement draft → review → published workflow with role-based transition permissions"
                },
                {
                    "title": "Overly rigid content models requiring developer changes for new fields",
                    "solution": "Support custom content types and field definitions through admin UI or configuration"
                }
            ],
            "keywords": [
                {
                    "word": "Headless CMS",
                    "meaning": "Content management system providing content via API without coupled frontend presentation layer",
                    "usage": "Build headless CMS with REST/GraphQL API serving content to web, mobile, and IoT apps independently"
                },
                {
                    "word": "Content Type",
                    "meaning": "Template defining the structure and fields for a category of content (posts, pages, products)",
                    "usage": "Define content type: {name: 'BlogPost', fields: [{name: 'title', type: 'text', required: true}, ...]}"
                },
                {
                    "word": "Workflow State",
                    "meaning": "Current status in content lifecycle (draft, review, published) controlling visibility and permissions",
                    "usage": "Implement workflow: draft (author edits) → review (editor reviews) → published (public sees)"
                },
                {
                    "word": "Soft Delete",
                    "meaning": "Marking records as deleted without removing from database, enabling recovery and audit trails",
                    "usage": "Soft delete: UPDATE posts SET deletedAt = NOW() WHERE id = ?; filter: WHERE deletedAt IS NULL"
                },
                {
                    "word": "RBAC (Role-Based Access Control)",
                    "meaning": "Permission system where users assigned roles (admin, editor, author) determining allowed actions",
                    "usage": "Check permissions: if (user.role === 'author' && post.authorId !== user.id) throw ForbiddenError"
                }
            ],
            "resources": [
                {
                    "title": "Strapi - Open source headless CMS",
                    "url": "https://strapi.io"
                },
                {
                    "title": "Contentful - API-first CMS platform",
                    "url": "https://www.contentful.com"
                },
                {
                    "title": "Sanity - Structured content platform",
                    "url": "https://www.sanity.io"
                },
                {
                    "title": "CMS Design Patterns",
                    "url": "https://www.smashingmagazine.com/2021/08/content-modeling-headless-cms"
                }
            ],
            "notes": "CMS backends are about empowering users, not impressing developers. Focus on intuitive workflows, clear permissions, and forgiving UX (undo, drafts, revisions). When using AI to generate CMS code, specify the complete workflow and permission model upfront—retrofitting these later is painful. Test with actual content creators to validate usability. Consider starting with established platforms (Strapi, Directus) and customizing rather than building from scratch—they've solved edge cases you haven't discovered. Remember: the best CMS is one users actually enjoy using."
        },
        {
            "id": "WP-BE-05",
            "title": "Connecting Frontend to Backend",
            "summary": "Master the techniques for integrating frontend applications with backend APIs using modern HTTP clients, state management, error handling, and optimistic updates for seamless user experiences.",
            "objectives": [
                "Implement API integration using fetch, axios, and modern data fetching libraries",
                "Handle loading states, errors, and edge cases gracefully in frontend applications",
                "Optimize frontend-backend communication with caching, retries, and request deduplication"
            ],
            "theory": [
                "Connecting frontend to backend means making HTTP requests from browser JavaScript to your server APIs, sending data for processing and receiving responses to update the UI. The frontend acts as the client consuming your backend services. Modern web apps use asynchronous requests (AJAX) that happen in the background without page reloads, creating smooth, app-like experiences. Key challenges include handling network delays (showing loading states), dealing with errors gracefully (when servers are down or requests fail), managing authentication tokens, and keeping UI in sync with server state.",
                "The most common approaches for API communication are: fetch API (built into browsers, requires more code for common tasks), axios (popular library with simpler API, automatic JSON parsing, and better error handling), and modern data fetching libraries like React Query or SWR (handle caching, background refetching, and synchronization automatically). Choose fetch for simple projects, axios for better developer experience, and React Query/SWR for complex apps with lots of server state management.",
                "Request lifecycle management involves multiple states: idle (before request starts), loading (request in flight, show spinner), success (data received, render results), error (request failed, show error message), and refetching (background refresh of stale data). Good UX requires handling all states visibly—users should always know what's happening. Implement timeout handling (requests shouldn't hang forever), retry logic for transient failures (network blips), and request cancellation (when users navigate away before response arrives).",
                "Authentication token management is crucial for protected endpoints. Typical flow: store JWT access token in memory or localStorage after login, include token in Authorization header for all protected requests, detect 401 Unauthorized responses indicating expired tokens, use refresh token to get new access token automatically, retry original request with fresh token, and redirect to login if refresh fails. Implement an HTTP interceptor (axios feature) to centralize this logic rather than duplicating in every request.",
                "Optimistic updates improve perceived performance by updating UI immediately before server confirms success, then reverting if the request fails. For example, when adding a comment, display it instantly in the UI, send the POST request, and remove it if the server rejects it (with error message). This makes the app feel instant rather than waiting for round-trip network delays. Use carefully—only for high-confidence actions where failures are rare and reversible."
            ],
            "why": "In real applications, poor frontend-backend integration creates frustrating user experiences: loading spinners that never resolve, cryptic error messages, authentication loops, and UI inconsistencies when data changes. Professional integration handles these edge cases gracefully, making apps feel reliable and polished. For developers, mastering this connection is essential—even the best backend API is useless if the frontend can't consume it properly. AI can generate API calls, but understanding error handling, caching, and token management ensures your apps work in production conditions, not just happy-path demos.",
            "prompts": {
                "goal": "Implement complete frontend integration for blog post listing and creation with authentication",
                "before": "Connect my React app to the backend API",
                "after": "Implement comprehensive frontend-backend integration for a React blog app with these specifications: 1) API Client Setup using axios: Create axios instance with baseURL from environment variable, Add request interceptor attaching JWT token from localStorage to Authorization header, Add response interceptor handling 401 errors by refreshing token and retrying request, Implement retry logic (3 attempts with exponential backoff) for 5xx errors, Set timeout of 10 seconds for all requests, 2) Authentication Flow: Login: POST to /api/auth/login with {email, password}, store accessToken and refreshToken in localStorage, redirect to dashboard, Automatic token refresh: when 401 received, POST refreshToken to /api/auth/refresh, update stored accessToken, retry original request, Logout: clear tokens, redirect to login, 3) Data Fetching with React Query: Fetch posts list with pagination: useQuery(['posts', page], () => api.get('/posts?page=' + page)), enable background refetching every 30 seconds, cache results for 5 minutes, Show loading state during initial fetch, skeleton UI during refetches, Handle errors with retry (3 times) then display error message with 'Retry' button, 4) Post Creation with optimistic updates: Use useMutation for POST /api/posts, On submit: optimistically add post to UI cache immediately, send POST request in background, on success: invalidate posts query to refetch fresh data, on error: revert optimistic update, show error message with field-level validation, Implement form validation client-side before submission (required fields, character limits), 5) Error Handling: Network errors: 'Unable to connect. Check your internet connection.', 401 Unauthorized: trigger token refresh or redirect to login, 403 Forbidden: 'You do not have permission for this action.', 400 Bad Request: display server validation errors with field highlighting, 500 Server Error: 'Something went wrong. Please try again later.', Show toast notifications for errors with dismiss option, 6) Loading States: Full-page loader for initial authentication check, Skeleton screens for content loading, Button loading states during mutations (disable button, show spinner), Progress indicators for file uploads, 7) Request Cancellation: Cancel requests when component unmounts using AbortController, Cancel previous search requests when user types (debounced). Include TypeScript types for all API responses, centralized API service functions (api/posts.ts, api/auth.ts), and error boundary for catching unhandled errors.",
                "resultBefore": "Fetch requests scattered throughout components with duplicated auth logic, no loading states causing UI to freeze, errors logged to console but not shown to users, no token refresh requiring manual re-login, race conditions when multiple requests update same data, memory leaks from uncancelled requests",
                "resultAfter": "Centralized API client with interceptors for auth and errors, consistent loading states throughout app using React Query, user-friendly error messages with recovery actions, automatic token refresh providing seamless authentication, optimistic updates making app feel instant, proper request cancellation preventing memory leaks, comprehensive error boundary catching unexpected failures, TypeScript types preventing integration bugs"
            },
            "pitfalls": [
                {
                    "title": "Not handling loading and error states, leaving users confused",
                    "solution": "Every request must handle loading, success, and error states with appropriate UI feedback"
                },
                {
                    "title": "Storing sensitive tokens in localStorage vulnerable to XSS attacks",
                    "solution": "Use httpOnly cookies for tokens when possible, or implement proper XSS protections"
                },
                {
                    "title": "No request cancellation causing memory leaks and stale updates",
                    "solution": "Use AbortController to cancel requests when components unmount or new requests start"
                },
                {
                    "title": "Hardcoding API URLs in components instead of environment configuration",
                    "solution": "Use environment variables: process.env.REACT_APP_API_URL, different values per environment"
                },
                {
                    "title": "Making multiple identical requests instead of deduplicating or caching",
                    "solution": "Use React Query or SWR to automatically cache and deduplicate requests"
                }
            ],
            "keywords": [
                {
                    "word": "Axios Interceptor",
                    "meaning": "Middleware functions that run before requests are sent or after responses are received",
                    "usage": "Add auth interceptor: axios.interceptors.request.use(config => { config.headers.Authorization = token })"
                },
                {
                    "word": "Optimistic Update",
                    "meaning": "Updating UI immediately assuming request succeeds, then reverting if it fails",
                    "usage": "Optimistic update: add comment to UI cache, send POST, revert if error: queryClient.setQueryData(old => [...old, newComment])"
                },
                {
                    "word": "AbortController",
                    "meaning": "Browser API for canceling in-flight fetch requests to prevent memory leaks",
                    "usage": "Cancel request: const controller = new AbortController(); fetch(url, {signal: controller.signal}); controller.abort()"
                },
                {
                    "word": "React Query",
                    "meaning": "Library for managing server state with automatic caching, refetching, and synchronization",
                    "usage": "Fetch with cache: const {data, isLoading} = useQuery('posts', fetchPosts, {staleTime: 5*60*1000})"
                },
                {
                    "word": "CORS (Cross-Origin Resource Sharing)",
                    "meaning": "Security mechanism restricting which domains can make requests to your API",
                    "usage": "Enable CORS on backend: app.use(cors({origin: 'https://yourdomain.com', credentials: true}))"
                }
            ],
            "resources": [
                {
                    "title": "Axios Documentation",
                    "url": "https://axios-http.com/docs/intro"
                },
                {
                    "title": "React Query (TanStack Query)",
                    "url": "https://tanstack.com/query/latest"
                },
                {
                    "title": "SWR - React Hooks for Data Fetching",
                    "url": "https://swr.vercel.app"
                },
                {
                    "title": "MDN - Using Fetch API",
                    "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
                }
            ],
            "notes": "Frontend-backend integration is where theory meets messy reality—networks fail, tokens expire, users do unexpected things. Build defensive code handling all edge cases, not just the happy path. When using AI to generate integration code, always add error handling, loading states, and proper cleanup. Test on slow connections and with network throttling to see how your app behaves. Remember: users judge your app by how it handles failures, not successes. Make failures graceful and recovery obvious."
        },
        {
            "id": "WP-BE-06",
            "title": "Contact Form & Email Integration",
            "summary": "Build robust contact form backends with email delivery, spam protection, and notification systems that reliably deliver user messages and form submissions.",
            "objectives": [
                "Implement secure contact form APIs with validation and spam protection",
                "Integrate email services like SendGrid, Mailgun, or AWS SES for reliable delivery",
                "Handle form submissions with confirmations, notifications, and storage for future reference"
            ],
            "theory": [
                "Contact forms are essential website features allowing visitors to send messages, request quotes, report issues, or ask questions. The backend must receive form data, validate inputs, prevent spam, send emails to appropriate recipients, store submissions for record-keeping, and confirm receipt to users. While seemingly simple, production contact forms require careful implementation to ensure reliable delivery, prevent abuse, and provide good user experience when things go wrong.",
                "Form validation occurs in two stages: client-side validation (JavaScript in browser) provides immediate feedback improving UX but can be bypassed; server-side validation (backend API) is the security boundary that must never trust client input. Validate required fields (name, email, message), check email format with regex or library validation, enforce character limits preventing database overflow, sanitize inputs to prevent XSS and SQL injection, and verify CAPTCHA or honeypot tokens proving human submission. Always validate on server even if client validates—malicious users can bypass frontend checks.",
                "Spam protection is critical—public contact forms attract bots that flood your inbox and database. Implement multiple defenses: rate limiting restricts submissions per IP (e.g., 3 per hour), CAPTCHA challenges (reCAPTCHA v3, hCaptcha) distinguish humans from bots, honeypot fields are hidden inputs that bots fill but humans ignore (reject if filled), email verification requires clicking a link before message is sent (reduces fake emails), and content filtering detects spam patterns in message text. Layer multiple techniques as bots evolve to bypass single defenses.",
                "Email delivery requires integration with transactional email services because sending directly from your server often ends up in spam folders. Popular services include SendGrid, Mailgun, Amazon SES, and Postmark. Implementation flow: receive form submission, validate data, call email service API with recipient, subject, and HTML/text body, handle API errors and retry transient failures, log submission for debugging, and return success response to frontend. Send two emails: one to the business recipient containing the message, and one confirmation to the user acknowledging receipt.",
                "Email templates should be professional and informative: use responsive HTML templates working on all email clients, include all form fields clearly labeled, add submission timestamp and any metadata (user IP, browser for troubleshooting), provide reply-to address set to form submitter for easy response, and include company branding and contact information. For user confirmation, thank them, set expectations on response time, and provide alternative contact methods. Store email send logs with status (sent, failed, bounced) for troubleshooting delivery issues."
            ],
            "why": "Contact forms are often the primary way users interact with businesses online. A broken contact form means lost leads, frustrated customers, and missed opportunities—impacting revenue directly. For clients, reliable contact form delivery can be worth thousands in captured business. Developers who can implement battle-tested contact forms with spam protection and guaranteed delivery are valued for preventing costly failures. AI can generate basic form code quickly, but understanding spam prevention, email deliverability, and error handling ensures your forms actually work when users need them.",
            "prompts": {
                "goal": "Implement production-ready contact form backend with email delivery and spam protection",
                "before": "Create a contact form that sends emails",
                "after": "Build a production-ready contact form backend with these specifications: 1) API Endpoint - POST /api/v1/contact, Request body: {name (required, 2-100 chars), email (required, valid format), phone (optional, E.164 format), subject (required, 5-200 chars), message (required, 20-2000 chars), recaptchaToken (required from Google reCAPTCHA v3)}, Response 201: {status: 'success', message: 'Your message has been sent. We will respond within 24 hours.'}, Response 400: {status: 'error', errors: [{field: 'email', message: 'Invalid email format'}]}, Response 429: {status: 'error', message: 'Too many submissions. Please try again in 1 hour.'}, 2) Validation and Security: Validate all fields with Joi schemas on server, Sanitize inputs with DOMPurify or validator.js to prevent XSS, Verify reCAPTCHA token with Google API (score >= 0.5), Implement rate limiting: 3 submissions per IP per hour, 5 per email per day, Add honeypot field 'website' hidden with CSS (reject if filled), Log all submissions with IP, user agent, and timestamp for abuse tracking, 3) Email Delivery using SendGrid: Send to business: recipient: process.env.CONTACT_EMAIL, subject: 'New Contact Form Submission: ' + subject, HTML template including all form fields formatted clearly, reply-to set to submitter's email for easy response, Send confirmation to user: subject: 'We received your message', friendly message thanking them and setting response expectation, include copy of their submitted message, 4) Data Storage: Save all submissions to database with fields: id, name, email, phone, subject, message, status (new, read, replied, spam), submittedAt timestamp, submittedFrom (IP address), userAgent, email send status (sent, failed, bounced), Create admin endpoint GET /api/v1/admin/contacts with authentication for viewing submissions, 5) Error Handling: If email API fails, retry 3 times with exponential backoff, Still save to database even if email fails (manual review possible), Return success to user if saved to DB (don't expose email failures), Log all errors with context for debugging, Set up alerts for repeated email failures, 6) Admin Features: Dashboard showing recent submissions with filters (status, date range), Mark as spam functionality to improve filtering over time, Bulk actions for common responses, Email notification to admin on each submission with link to admin panel. Use environment variables for SendGrid API key, contact email, reCAPTCHA keys. Include comprehensive test suite covering validation, rate limiting, and email delivery mocking.",
                "resultBefore": "Direct email sending from server landing in spam, no spam protection allowing bot floods, missing validation accepting malformed data, no confirmation to users leaving them uncertain, email failures silently lost with no fallback, no admin interface requiring email client for viewing all messages",
                "resultAfter": "Reliable email delivery through SendGrid with high deliverability, multi-layered spam protection (reCAPTCHA, rate limiting, honeypot), comprehensive validation with helpful error messages, user confirmation emails setting expectations, database storage ensuring no submissions lost even if email fails, admin dashboard for managing and responding to messages, detailed logging enabling troubleshooting and abuse prevention"
            },
            "pitfalls": [
                {
                    "title": "Sending emails directly from your server ending up in spam folders",
                    "solution": "Use transactional email services (SendGrid, SES) with proper domain authentication (SPF, DKIM)"
                },
                {
                    "title": "No spam protection allowing bots to flood forms with junk",
                    "solution": "Layer protections: reCAPTCHA + rate limiting + honeypot + content filtering"
                },
                {
                    "title": "Only client-side validation allowing malicious or malformed data",
                    "solution": "Always validate and sanitize on server; treat all client input as untrusted"
                },
                {
                    "title": "No confirmation email leaving users unsure if message was received",
                    "solution": "Send immediate confirmation with copy of message and expected response time"
                },
                {
                    "title": "Email failures causing complete submission loss with no recovery",
                    "solution": "Save to database first, then email; if email fails, submissions are still recorded for manual processing"
                }
            ],
            "keywords": [
                {
                    "word": "reCAPTCHA",
                    "meaning": "Google service distinguishing humans from bots using invisible challenges or risk scoring",
                    "usage": "Verify token: await axios.post('https://www.google.com/recaptcha/api/siteverify', {secret, response: token})"
                },
                {
                    "word": "Honeypot",
                    "meaning": "Hidden form field that bots fill but humans don't see, used to detect automated submissions",
                    "usage": "Add hidden field with CSS display:none; reject submission if field has any value"
                },
                {
                    "word": "Rate Limiting",
                    "meaning": "Restricting number of requests from same source within time window to prevent abuse",
                    "usage": "Limit contact form: max 3 submissions per IP per hour using express-rate-limit middleware"
                },
                {
                    "word": "Transactional Email",
                    "meaning": "Automated emails triggered by user actions (confirmations, notifications) not marketing campaigns",
                    "usage": "Send via SendGrid API: sgMail.send({to, from, subject, html}) for contact form confirmations"
                },
                {
                    "word": "Email Deliverability",
                    "meaning": "Likelihood that emails reach recipient inboxes rather than being filtered as spam",
                    "usage": "Improve deliverability: authenticate domain with SPF/DKIM records, use reputable email service, avoid spam triggers in content"
                }
            ],
            "resources": [
                {
                    "title": "SendGrid Documentation",
                    "url": "https://docs.sendgrid.com"
                },
                {
                    "title": "Google reCAPTCHA",
                    "url": "https://www.google.com/recaptcha"
                },
                {
                    "title": "Nodemailer - Email sending library",
                    "url": "https://nodemailer.com"
                },
                {
                    "title": "Email on Acid - Email testing tools",
                    "url": "https://www.emailonacid.com"
                }
            ],
            "notes": "Contact forms seem simple but require thoughtful implementation to be reliable and spam-free. When using AI to generate form code, always add spam protection and error handling—these are the parts that fail in production. Test email delivery thoroughly including spam folder checks. Monitor form submissions for sudden volume spikes indicating bot attacks. Remember: every lost form submission is a potential lost customer, so invest in reliability and user experience."
        },
        {
            "id": "WP-BE-07",
            "title": "Payment Gateway Prompting",
            "summary": "Integrate payment gateways like Stripe, PayPal, and Razorpay securely, handling transactions, webhooks, and subscription billing with PCI compliance and fraud prevention.",
            "objectives": [
                "Implement secure payment processing using Stripe or PayPal with proper PCI compliance",
                "Handle payment webhooks for confirming transactions and updating order status",
                "Implement subscription billing with recurring payments, upgrades, and cancellations"
            ],
            "theory": [
                "Payment gateway integration allows your website to accept credit card payments, digital wallets, and other payment methods securely without handling sensitive card data directly. Never store credit card numbers on your server—this requires PCI DSS compliance which is complex and expensive. Instead, use payment processors like Stripe, PayPal, Square, or Razorpay that handle secure card storage and processing, while you integrate via their APIs. The gateway charges transaction fees (typically 2.9% + $0.30) but manages all the security and compliance complexity.",
                "Payment flow architecture separates concerns for security and reliability: frontend collects payment details using gateway's secure JavaScript library (Stripe Elements, PayPal Buttons), sends tokenized card data to your backend never seeing actual card numbers, backend creates payment intent or charge via gateway API including amount and metadata, gateway processes payment and returns success/failure result, backend updates order status in database based on result, and frontend shows confirmation or error to user. Never trust client-side payment confirmations—always verify on server by checking gateway's API or webhook events.",
                "Webhook handling is critical for reliable payment processing because browser-based confirmations can fail if users close windows or connections drop. Webhooks are server-to-server notifications from the payment gateway confirming transaction status. Implementation: set up endpoint receiving POST requests from gateway (e.g., /webhooks/stripe), verify webhook signature to prevent spoofing, parse event payload extracting transaction details, update database based on event type (payment succeeded, failed, refunded), return 200 OK quickly to acknowledge receipt (gateway retries if no response), process business logic asynchronously (send confirmation email, fulfill order). Log all webhook events for debugging and financial auditing.",
                "Subscription billing adds complexity with recurring payments: create products and pricing plans in gateway dashboard (monthly $29, annual $290), customers subscribe by providing payment method, gateway automatically charges on billing cycle (monthly, yearly), handle subscription events via webhooks (subscription created, payment succeeded, payment failed, subscription cancelled), implement grace periods for failed payments before cancellation, allow plan upgrades/downgrades with prorating, and provide customer portal for managing subscriptions and payment methods. Store subscription IDs and status in your database linking to user accounts.",
                "Security and compliance requirements: use HTTPS exclusively for all payment pages, never log or store full card numbers, implement 3D Secure (SCA) for European payments complying with regulations, add fraud detection checking for suspicious patterns (unusual amounts, rapid repeat attempts, mismatched billing/shipping addresses), implement idempotency keys preventing duplicate charges if requests retry, and maintain comprehensive audit logs of all transactions for financial reconciliation and dispute resolution. Stay updated on gateway API changes and security best practices as payment fraud methods evolve."
            ],
            "why": "Payment integration is the revenue engine for e-commerce and SaaS businesses. Poor implementation causes lost sales from failed checkouts, chargebacks from fraudulent transactions, and compliance violations risking fines or losing merchant accounts. Professional payment integration can increase conversion rates by 20-30% through smooth checkout experiences. For developers, payment skills are highly valued—companies pay premium rates for those who can implement secure, reliable payment systems. AI can generate basic integration code, but understanding webhooks, security, and edge cases ensures your payment system works reliably at scale.",
            "prompts": {
                "goal": "Implement complete Stripe payment integration for e-commerce checkout with webhooks",
                "before": "Add Stripe payments to checkout",
                "after": "Implement production-ready Stripe payment integration with these specifications: 1) Frontend Checkout (React): Load Stripe.js library: <script src='https://js.stripe.com/v3/'>, Initialize with publishable key: const stripe = Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY), Create Stripe Elements for card input with styling matching site design, On form submit: call backend POST /api/create-payment-intent with {amount, currency, orderId}, receive clientSecret from backend, confirm payment: stripe.confirmCardPayment(clientSecret, {payment_method: {card: cardElement}}), handle result: redirect to success page if succeeded, show error message if failed, 2) Backend Payment Intent Creation: POST /api/v1/create-payment-intent, Validate order exists and amount matches, Create Stripe PaymentIntent: stripe.paymentIntents.create({amount: orderTotal * 100, currency: 'usd', metadata: {orderId, userId}}), Return clientSecret to frontend, Set idempotency key using orderId to prevent duplicate charges, 3) Webhook Handler: POST /webhooks/stripe endpoint receiving Stripe events, Verify webhook signature using stripe.webhooks.constructEvent(body, signature, webhookSecret), Handle event types: payment_intent.succeeded: update order status to 'paid', send confirmation email, trigger fulfillment; payment_intent.payment_failed: update status to 'failed', notify customer; charge.refunded: update status to 'refunded', adjust inventory, Return 200 status immediately (gateway retries on errors), Process business logic async to prevent webhook timeouts, 4) Order Management: Store orders with fields: id, userId, items, totalAmount, currency, stripePaymentIntentId, status (pending, paid, failed, refunded), createdAt, paidAt, Create admin endpoint GET /api/admin/orders with filtering and search, Implement refund endpoint POST /api/admin/orders/:id/refund creating Stripe refund, 5) Security: Use HTTPS exclusively, never log card numbers or CVV codes, Implement rate limiting on payment endpoints (10 per IP per hour), Add fraud detection: flag orders over $500 or from unusual locations, Use Stripe Radar for automated fraud detection, Store Stripe customer IDs for recurring customers enabling saved payment methods, 6) Subscription Handling (if applicable): Create products and prices in Stripe dashboard, Subscribe customers: stripe.subscriptions.create({customer, items: [{price: priceId}]}), Handle subscription webhooks: customer.subscription.created, invoice.payment_succeeded, invoice.payment_failed, customer.subscription.deleted, Implement customer portal for subscription management using Stripe Billing Portal. Use environment variables for API keys (test keys in dev, live keys in production only). Include comprehensive logging of all payment events, error monitoring with alerts for payment failures, and financial reconciliation reports comparing Stripe transactions with database records.",
                "resultBefore": "Card numbers handled on backend violating PCI compliance, no webhook handling causing missed payment confirmations if browser closed, duplicate charges from retry attempts without idempotency, failed payments invisible to admins, no fraud detection, subscriptions requiring manual processing",
                "resultAfter": "PCI-compliant integration never touching card data, reliable webhook processing ensuring all payments tracked even if users navigate away, idempotent requests preventing duplicate charges, comprehensive admin dashboard for order management, automated fraud detection flagging risky transactions, fully automated subscription billing with customer self-service portal, detailed financial logs for reconciliation and compliance"
            },
            "pitfalls": [
                {
                    "title": "Handling credit card data on your backend violating PCI compliance",
                    "solution": "Use Stripe Elements or PayPal SDK to tokenize cards client-side; only send tokens to backend"
                },
                {
                    "title": "Trusting client-side payment confirmations instead of server verification",
                    "solution": "Always verify payments via webhooks or API calls on your backend before fulfilling orders"
                },
                {
                    "title": "No webhook signature verification allowing spoofed payment notifications",
                    "solution": "Verify every webhook with gateway-provided signature: stripe.webhooks.constructEvent(body, sig, secret)"
                },
                {
                    "title": "Missing idempotency keys causing duplicate charges on retry",
                    "solution": "Include idempotency key in API requests: headers: {'Idempotency-Key': orderId}"
                },
                {
                    "title": "No fraud detection accepting obviously suspicious transactions",
                    "solution": "Implement basic fraud checks (unusual amounts, locations) and use gateway's built-in fraud detection"
                }
            ],
            "keywords": [
                {
                    "word": "Payment Intent",
                    "meaning": "Stripe object representing a payment from creation through completion, tracking its lifecycle",
                    "usage": "Create intent: const intent = await stripe.paymentIntents.create({amount: 2000, currency: 'usd'})"
                },
                {
                    "word": "Webhook",
                    "meaning": "Server-to-server HTTP callback notifying your backend of events occurring in external service",
                    "usage": "Handle Stripe webhook: verify signature, parse event, update order based on event.type"
                },
                {
                    "word": "Idempotency Key",
                    "meaning": "Unique identifier ensuring same request if retried doesn't create duplicate operations",
                    "usage": "Prevent duplicate charges: stripe.paymentIntents.create({...}, {idempotencyKey: orderId})"
                },
                {
                    "word": "PCI DSS",
                    "meaning": "Payment Card Industry Data Security Standard - requirements for handling card data securely",
                    "usage": "Maintain PCI compliance by never storing full card numbers, using tokenization, and HTTPS only"
                },
                {
                    "word": "3D Secure (SCA)",
                    "meaning": "Authentication method requiring cardholders to verify identity, mandated in Europe (PSD2)",
                    "usage": "Enable SCA: stripe.confirmCardPayment handles 3D Secure challenges automatically when needed"
                }
            ],
            "resources": [
                {
                    "title": "Stripe Documentation",
                    "url": "https://stripe.com/docs"
                },
                {
                    "title": "PayPal Developer Documentation",
                    "url": "https://developer.paypal.com/docs"
                },
                {
                    "title": "Razorpay Integration Guide",
                    "url": "https://razorpay.com/docs"
                },
                {
                    "title": "PCI Security Standards Council",
                    "url": "https://www.pcisecuritystandards.org"
                }
            ],
            "notes": "Payment integration is high-stakes work—mistakes cost real money and customer trust. Always use test environments and test cards during development; never test with real cards. When using AI to generate payment code, verify it handles webhooks, implements proper security, and includes error handling. Test edge cases: failed payments, refunds, disputes, subscription cancellations. Stay updated on gateway changes and security requirements. Remember: if payment doesn't work flawlessly, customers abandon carts and revenue is lost."
        },
        {
            "id": "WP-BE-08",
            "title": "Security & Input Validation",
            "summary": "Implement comprehensive backend security measures including input validation, SQL injection prevention, XSS protection, CSRF tokens, and secure authentication practices.",
            "objectives": [
                "Understand common web vulnerabilities (SQL injection, XSS, CSRF) and their prevention techniques",
                "Implement robust input validation and sanitization for all user inputs",
                "Apply security best practices including HTTPS, security headers, rate limiting, and secure session management"
            ],
            "theory": [
                "Backend security is the defensive layer protecting your application, data, and users from malicious attacks. Unlike frontend validation which can be bypassed, backend security is your last line of defense. The OWASP Top 10 lists the most critical web application security risks: injection attacks (SQL, NoSQL, command injection), broken authentication, sensitive data exposure, XML external entities (XXE), broken access control, security misconfiguration, cross-site scripting (XSS), insecure deserialization, using components with known vulnerabilities, and insufficient logging and monitoring. Understanding these threats guides defense strategies.",
                "Input validation is fundamental security: never trust any data coming from clients—users, APIs, or internal services. Validate on type (is this a number, email, date?), format (does it match expected patterns?), length (within size limits?), range (within allowed values?), and business rules (is this user allowed to perform this action?). Use allowlist validation (define what IS allowed) rather than blocklist (what ISN'T allowed) because attackers find ways around blacklists. Implement validation at multiple layers: application layer with libraries like Joi or Yup, database layer with schema constraints, and business logic layer enforcing domain rules.",
                "SQL injection prevention requires parameterized queries or ORMs that separate code from data. Vulnerable code: SELECT * FROM users WHERE email = '\" + userInput + \"' allows attackers to inject SQL like ' OR '1'='1. Safe code uses placeholders: SELECT * FROM users WHERE email = ? with userInput passed separately, preventing interpretation as SQL. Modern ORMs (Sequelize, TypeORM, Prisma) handle parameterization automatically. Never concatenate user input into SQL strings, escape special characters if concatenation is unavoidable, and apply principle of least privilege—database accounts should have minimum permissions needed.",
                "Cross-site scripting (XSS) attacks inject malicious JavaScript into pages viewed by other users. Prevent XSS by sanitizing all user-generated content before rendering: escape HTML special characters (<, >, &, ', \"), use templating engines that auto-escape by default (React, Vue do this), implement Content Security Policy (CSP) headers restricting script sources, and validate input rejecting or cleaning dangerous patterns. Never use innerHTML with user content; use textContent or libraries like DOMPurify for sanitizing rich text. Store data in safe formats and only render when needed.",
                "Additional security layers include: HTTPS enforcement (redirect HTTP to HTTPS, use HSTS header), security headers (X-Frame-Options prevents clickjacking, X-Content-Type-Options prevents MIME sniffing, X-XSS-Protection enables browser XSS filter), CSRF protection (use tokens validating requests originate from your site), rate limiting (prevent brute force and denial of service), secure session management (httpOnly and secure flags on cookies, session expiration), and comprehensive logging (track authentication events, failed attempts, privilege escalations for security auditing and incident response)."
            ],
            "why": "Security breaches destroy businesses—average cost of a data breach is $4.35 million, not counting reputation damage and customer loss. Even small websites are targeted by automated bots scanning for vulnerabilities. Professional security implementation protects users, prevents legal liability, and maintains trust. For developers, security skills command premium rates—companies desperately need those who can build secure systems from the start rather than patching after breaches. While AI can generate code, it often misses security edge cases, so understanding these principles ensures you recognize and fix vulnerabilities in generated code.",
            "prompts": {
                "goal": "Implement comprehensive security measures for a user registration and login system",
                "before": "Add security to my authentication system",
                "after": "Implement production-grade security for authentication backend with these layers: 1) Input Validation and Sanitization: Use Joi schemas validating all inputs: const schema = Joi.object({email: Joi.string().email().required(), password: Joi.string().min(10).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])/).required()}), Sanitize inputs removing HTML tags: validator.escape(input), Validate against OWASP password recommendations (minimum 10 chars, complexity), Check email against disposable email provider blacklist, Normalize inputs (trim whitespace, lowercase emails) before processing, 2) SQL Injection Prevention: Use parameterized queries exclusively: db.query('SELECT * FROM users WHERE email = ?', [email]), Implement ORM (TypeORM/Sequelize) with automatic query parameterization, Apply principle of least privilege: database user only has permissions needed for app, Enable query logging in development to spot dangerous patterns, 3) XSS Prevention: Escape all user-generated content before rendering: use templating engines with auto-escaping, Set Content-Security-Policy header: \"default-src 'self'; script-src 'self' 'nonce-{random}'\", Sanitize rich text with DOMPurify before storing: const clean = DOMPurify.sanitize(dirty), Never use eval() or innerHTML with user content, 4) CSRF Protection: Generate CSRF token on session creation: crypto.randomBytes(32).toString('hex'), Include token in forms and validate on submission, Use double-submit cookie pattern or synchronizer token pattern, Implement SameSite cookie attribute: {sameSite: 'strict'}, 5) Authentication Security: Hash passwords with bcrypt (12 rounds): await bcrypt.hash(password, 12), Implement rate limiting: 5 login attempts per IP per 15 minutes, Lock accounts after 5 failed attempts with exponential backoff, Use timing-safe comparison for tokens: crypto.timingSafeEqual(buffer1, buffer2), Implement secure session management: httpOnly, secure, sameSite flags on cookies, Require password re-entry for sensitive operations (email change, password change), 6) Security Headers: Helmet.js middleware adding security headers: app.use(helmet()), Specific headers: Strict-Transport-Security (HSTS), X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: no-referrer, 7) HTTPS Enforcement: Redirect all HTTP to HTTPS: if (!req.secure) redirect, Set secure flag on all cookies, Use HSTS header with includeSubDomains, 8) Logging and Monitoring: Log all authentication events: login success/failure, password changes, privilege escalations, Include context: IP address, user agent, timestamp, Set up alerts for suspicious patterns: rapid failed attempts, unusual locations, Monitor for common attack patterns: SQL injection strings in inputs, XSS attempts, Include request IDs for correlation across logs. Use environment-specific configurations (stricter in production). Implement security testing with tools like OWASP ZAP, npm audit for dependency vulnerabilities, and regular penetration testing.",
                "resultBefore": "Plain text passwords in database, no input validation allowing SQL injection, user content rendered unsanitized causing XSS, no CSRF protection, no HTTPS enforcement, no rate limiting allowing brute force, missing security headers, no logging of security events",
                "resultAfter": "Bcrypt-hashed passwords with high cost factor, comprehensive input validation preventing injection attacks, sanitized outputs preventing XSS, CSRF tokens on all state-changing requests, forced HTTPS with HSTS, rate limiting and account lockout preventing brute force, all security headers properly configured, comprehensive security event logging enabling threat detection and incident response"
            },
            "pitfalls": [
                {
                    "title": "Only validating on frontend allowing attackers to bypass with direct API calls",
                    "solution": "Always validate and sanitize on backend; treat all client input as untrusted and potentially malicious"
                },
                {
                    "title": "Using string concatenation for SQL queries allowing injection",
                    "solution": "Use parameterized queries or ORMs exclusively; never concatenate user input into SQL"
                },
                {
                    "title": "Rendering user content without sanitization allowing XSS attacks",
                    "solution": "Escape HTML characters, use auto-escaping templates, sanitize rich text with DOMPurify"
                },
                {
                    "title": "Missing HTTPS or security headers leaving vulnerabilities",
                    "solution": "Enforce HTTPS, use Helmet.js for security headers, set secure and httpOnly cookie flags"
                },
                {
                    "title": "No rate limiting or account lockout allowing unlimited brute force attempts",
                    "solution": "Implement IP-based rate limiting, account lockout after failed attempts, CAPTCHA after threshold"
                }
            ],
            "keywords": [
                {
                    "word": "SQL Injection",
                    "meaning": "Attack inserting malicious SQL code into queries through unvalidated inputs",
                    "usage": "Prevent SQL injection using parameterized queries: db.query('SELECT * FROM users WHERE id = ?', [userId])"
                },
                {
                    "word": "XSS (Cross-Site Scripting)",
                    "meaning": "Attack injecting malicious scripts into pages viewed by other users",
                    "usage": "Prevent XSS by escaping HTML: const safe = validator.escape(userInput) or using auto-escaping templates"
                },
                {
                    "word": "CSRF (Cross-Site Request Forgery)",
                    "meaning": "Attack tricking authenticated users into making unwanted requests to your site",
                    "usage": "Prevent CSRF with tokens: generate random token, include in forms, validate on submission"
                },
                {
                    "word": "Input Sanitization",
                    "meaning": "Cleaning user input by removing or escaping potentially dangerous characters",
                    "usage": "Sanitize HTML: const clean = DOMPurify.sanitize(dirty); escape for SQL: use parameterized queries"
                },
                {
                    "word": "Security Header",
                    "meaning": "HTTP response headers instructing browsers to enable security protections",
                    "usage": "Set headers with Helmet: app.use(helmet()) adds X-Frame-Options, CSP, HSTS, and others"
                }
            ],
            "resources": [
                {
                    "title": "OWASP Top 10 - Critical Security Risks",
                    "url": "https://owasp.org/www-project-top-ten"
                },
                {
                    "title": "OWASP Cheat Sheet Series",
                    "url": "https://cheatsheetseries.owasp.org"
                },
                {
                    "title": "Helmet.js - Security headers for Express",
                    "url": "https://helmetjs.github.io"
                },
                {
                    "title": "DOMPurify - XSS sanitizer",
                    "url": "https://github.com/cure53/DOMPurify"
                }
            ],
            "notes": "Security is not optional or something to add later—it must be built in from the start. When using AI to generate backend code, always review for security vulnerabilities: check for parameterized queries, input validation, output escaping, and proper authentication. Use security linting tools (npm audit, Snyk) and keep dependencies updated. Remember: attackers only need to find one vulnerability; you need to protect everything. Assume breach mentality—limit damage when (not if) something breaks."
        },
        {
            "id": "WP-BE-09",
            "title": "Backend Testing Prompts",
            "summary": "Master comprehensive backend testing strategies including unit tests, integration tests, API tests, and test-driven development for reliable, maintainable code.",
            "objectives": [
                "Implement unit tests for business logic, services, and utility functions",
                "Create integration tests validating database operations and API endpoints",
                "Apply test-driven development (TDD) practices writing tests before implementation code"
            ],
            "theory": [
                "Backend testing verifies that your server code works correctly, prevents regressions when adding features, and documents expected behavior. The testing pyramid shows test distribution: many unit tests (70%) testing individual functions in isolation run fast and catch logic errors; fewer integration tests (20%) validating components working together catch interface issues; and minimal end-to-end tests (10%) simulating real user flows catch system-level problems. This distribution balances comprehensive coverage with fast feedback—unit tests run in seconds, E2E tests in minutes.",
                "Unit testing focuses on individual functions and methods in isolation: test business logic (password validation, price calculations, date formatting), test edge cases (empty inputs, boundary values, invalid data), use mocking to isolate dependencies (mock database calls, external APIs), and follow AAA pattern (Arrange: set up test data, Act: call function under test, Assert: verify results match expectations). Good unit tests are fast, independent (can run in any order), deterministic (same input always gives same output), and focused (test one thing per test).",
                "Integration testing validates that components work together correctly: test database operations (create, read, update, delete with real database), test API endpoints (request/response handling, authentication, validation), test external service integrations (email sending, payment processing with test APIs), and verify transaction handling (rollback on errors). Use test databases separate from development and production, reset state between tests for consistency, and test both happy paths and error scenarios. Integration tests catch issues that unit tests miss—schema mismatches, transaction problems, API contract violations.",
                "API testing specifically validates HTTP endpoints: test request handling (correct HTTP methods, URL parameters, request bodies), test response structure (status codes, JSON format, headers), test authentication and authorization (protected endpoints reject unauthenticated requests, users can only access own resources), test validation (required fields, format constraints, business rules), and test error responses (proper status codes, helpful error messages). Use tools like Supertest (Node.js) or Postman for API testing, and maintain test collections as living documentation of your API contract.",
                "Test-driven development (TDD) inverts the typical workflow: write failing test first describing desired behavior, write minimal code to make test pass, refactor code for quality while keeping tests passing, then repeat. Benefits include: better design (writing tests first forces you to think about interfaces), comprehensive coverage (every feature has tests from the start), confidence to refactor (tests catch breaking changes), and living documentation (tests show how code should be used). TDD requires discipline but pays dividends in maintainability and quality."
            ],
            "why": "Professional development shops require 80%+ test coverage before deploying to production. Tests prevent regressions—surveys show teams without tests spend 30-40% of development time fixing bugs introduced by new features. For developers, testing skills are essential for senior roles; untested code is considered unprofessional. Tests serve as documentation showing how code should work, enable confident refactoring, and catch bugs before users encounter them. While AI can generate tests, understanding testing principles ensures you write meaningful tests that actually catch bugs, not just achieve coverage numbers.",
            "prompts": {
                "goal": "Implement comprehensive test suite for user authentication API",
                "before": "Write tests for my authentication endpoints",
                "after": "Create comprehensive test suite for authentication API using Jest and Supertest with these specifications: 1) Unit Tests for Auth Service: Test password hashing: verify bcrypt.hash called with correct salt rounds, verify returned hash different from plain password, Test password comparison: verify correct password returns true, verify wrong password returns false, Test JWT generation: verify token contains correct user ID and email, verify token signed with correct secret, verify token expiration set correctly, Test token verification: verify valid token returns user payload, verify expired token throws error, verify tampered token throws error, Mock bcrypt and jsonwebtoken for fast, isolated tests, 2) Integration Tests for Registration Endpoint: Test POST /api/auth/register success: send valid user data {email, password, firstName, lastName}, verify response 201 with user object and tokens, verify user created in database with hashed password, verify welcome email sent (mock email service), Test validation errors: test missing required fields (email, password) return 400, test invalid email format returns 400 with specific error, test short password returns 400 with validation message, test duplicate email returns 409 Conflict, Test password hashing: retrieve user from database, verify password is hashed not plain text, verify bcrypt.compare works with stored hash, 3) Integration Tests for Login Endpoint: Test POST /api/auth/login success: create test user in database, send correct credentials, verify response 200 with access and refresh tokens, verify tokens are valid JWTs, Test authentication failures: test wrong password returns 401, test non-existent email returns 401, test same generic message for both (prevent user enumeration), Test account lockout: make 5 failed login attempts, verify 6th attempt returns 429 Too Many Requests, wait lockout period, verify successful login after lockout expires, Test rate limiting: make rapid login attempts from same IP, verify rate limit triggered with 429 status, 4) Integration Tests for Token Refresh: Test POST /api/auth/refresh success: send valid refresh token, verify new access token returned, verify old access token invalidated, Test refresh failures: test expired refresh token returns 401, test invalid refresh token returns 401, test refresh token rotation (each refresh invalidates old token), 5) Test Setup and Teardown: Create separate test database or use in-memory database, Clear database before each test for isolation, Seed test data (test users with known credentials), Mock external services (email, SMS), Use test environment variables (separate API keys, secrets), 6) Testing Best Practices: Use descriptive test names: 'should return 201 with user and tokens when valid data provided', Group related tests with describe blocks, Test one thing per test case, Use factories for creating test data consistently, Assert on multiple aspects: status code, response body structure, database state, side effects, Include both happy path and error scenarios, Test boundary conditions and edge cases. Use Jest coverage report targeting 80%+ coverage: jest --coverage. Include test scripts in package.json: 'test': 'jest', 'test:watch': 'jest --watch', 'test:coverage': 'jest --coverage'. Set up CI pipeline running tests on every commit.",
                "resultBefore": "No tests, manual testing only catching obvious bugs, fear of refactoring because changes might break things, bugs discovered in production by users, no documentation of expected behavior, regressions common when adding features",
                "resultAfter": "Comprehensive test suite with 85% coverage, automated tests running on every commit catching bugs before deployment, confidence to refactor knowing tests will catch breaking changes, clear documentation through test cases showing expected behavior, integration tests validating real database and API behavior, rate limiting and security measures verified through tests"
            },
            "pitfalls": [
                {
                    "title": "Testing implementation details instead of behavior and outcomes",
                    "solution": "Test what the function does (inputs and outputs), not how it does it (internal logic)"
                },
                {
                    "title": "Writing tests that depend on each other or external state",
                    "solution": "Make tests independent; each should set up own data and clean up after"
                },
                {
                    "title": "Mocking everything making tests not catch real integration issues",
                    "solution": "Mock external services (email, payments) but test real database operations in integration tests"
                },
                {
                    "title": "Poor test names like 'test1' not describing what's being tested",
                    "solution": "Use descriptive names: 'should return 400 when email is missing from registration request'"
                },
                {
                    "title": "Achieving high coverage without testing meaningful scenarios",
                    "solution": "Focus on testing critical paths, edge cases, and error handling, not just coverage percentage"
                }
            ],
            "keywords": [
                {
                    "word": "Unit Test",
                    "meaning": "Test of individual function or method in isolation, mocking dependencies",
                    "usage": "Unit test password validation: expect(isValidPassword('Test123!')).toBe(true)"
                },
                {
                    "word": "Integration Test",
                    "meaning": "Test validating multiple components working together (API + database, services + external APIs)",
                    "usage": "Integration test login: POST to /login endpoint, verify user created in actual test database"
                },
                {
                    "word": "Mock",
                    "meaning": "Fake implementation of dependency (database, API) allowing isolated testing",
                    "usage": "Mock email service: jest.mock('emailService'); emailService.send.mockResolvedValue({sent: true})"
                },
                {
                    "word": "Test Coverage",
                    "meaning": "Percentage of code lines executed by tests, indicating thoroughness of test suite",
                    "usage": "Check coverage: run 'jest --coverage', aim for 80%+ coverage on critical business logic"
                },
                {
                    "word": "TDD (Test-Driven Development)",
                    "meaning": "Development approach where tests are written before implementation code",
                    "usage": "TDD cycle: write failing test, write minimal code to pass, refactor, repeat for next feature"
                }
            ],
            "resources": [
                {
                    "title": "Jest - JavaScript Testing Framework",
                    "url": "https://jestjs.io"
                },
                {
                    "title": "Supertest - API Testing Library",
                    "url": "https://github.com/visionmedia/supertest"
                },
                {
                    "title": "Mocha - Test Framework",
                    "url": "https://mochajs.org"
                },
                {
                    "title": "Test-Driven Development Guide",
                    "url": "https://martinfowler.com/bliki/TestDrivenDevelopment.html"
                }
            ],
            "notes": "Testing is insurance against bugs—it costs time upfront but saves far more in debugging and regression fixing. When using AI to generate tests, ensure they test behavior not implementation, cover edge cases not just happy paths, and use realistic test data. Run tests frequently during development, not just before commits. Consider test failures as helpful feedback showing where code doesn't match expectations. Remember: untested code is legacy code from day one; tested code can be maintained and improved with confidence."
        }
    ]
};

const webDevModule5 = {
    courseTitle: 'Web Development',
    moduleNumber: 5,
    moduleName: 'DB Design & Prompts (Website Data)',
    totalLessons: 9,

    lessons: [
        {
            "id": "WP-DB-01",
            "title": "Identifying Website Data Entities",
            "summary": "Learn to identify and categorize core data entities in website applications, understanding relationships between users, content, products, and system data for effective database design.",
            "objectives": [
                "Identify primary data entities in different types of websites (e-commerce, blogs, portfolios)",
                "Understand entity relationships and dependencies in web applications",
                "Map business requirements to database entities and attributes"
            ],
            "theory": [
                "Data entities are the fundamental building blocks of any database, representing real-world objects or concepts that need to be stored. In websites, common entities include Users, Posts, Products, Categories, Comments, and Orders. Each entity has attributes (properties) that describe it, like a User having name, email, and password.",
                "Understanding entity relationships is crucial for database design. These relationships can be one-to-one (User to Profile), one-to-many (User to Posts), or many-to-many (Posts to Tags). Properly identifying these relationships prevents data redundancy and ensures data integrity.",
                "Entity identification starts with analyzing business requirements. For an e-commerce site, you'd identify entities like Products, Customers, Orders, Payments, and Inventory. For a blog, you'd have Users, Posts, Categories, Comments, and Media. Each website type has unique entity requirements.",
                "Attributes define the properties of entities. A Product entity might have attributes like name, price, description, SKU, stock_quantity, and created_date. Choosing the right attributes and their data types is essential for efficient storage and retrieval.",
                "Normalization principles help organize entities to reduce redundancy. Instead of storing author information with every post, you create a separate Users entity and reference it. This makes updates easier and maintains data consistency across your application."
            ],
            "why": "Proper entity identification is the foundation of scalable website architecture. E-commerce platforms like Amazon manage millions of products, users, and orders efficiently because their database entities are well-designed. Poor entity design leads to data inconsistencies, slow queries, and difficulty adding new features. Understanding entities helps you build databases that grow with your application.",
            "prompts": {
                "goal": "Design a complete entity model for a book review website where users can review books, create reading lists, and follow other readers",
                "before": "Create database tables for a book review website",
                "after": "I need to design a database for a book review website with the following features: users can create accounts, write reviews for books, rate books (1-5 stars), create custom reading lists, follow other users, and comment on reviews. Identify all necessary entities, their attributes, and relationships. Present this as an Entity Relationship description with entities, attributes (with data types), and relationship types (one-to-one, one-to-many, many-to-many).",
                "resultBefore": "A basic outline with just Users and Books tables, missing critical entities like Reviews, ReadingLists, Follows, and Comments. No clear relationships defined.",
                "resultAfter": "A comprehensive entity model with 7-8 entities: Users (id, username, email, password_hash, created_at), Books (id, title, author, isbn, publication_year), Reviews (id, user_id, book_id, rating, review_text, created_at), ReadingLists (id, user_id, name, description), ReadingListBooks (list_id, book_id, added_at), Follows (follower_id, following_id, created_at), ReviewComments (id, review_id, user_id, comment_text, created_at). Clear relationships defined with foreign keys and junction tables for many-to-many relationships."
            },
            "pitfalls": [
                {
                    "title": "Over-normalization",
                    "description": "Creating too many tables can make queries complex and slow. Balance normalization with practical query performance needs."
                },
                {
                    "title": "Missing Entity Relationships",
                    "description": "Forgetting to identify how entities relate (like missing the connection between Orders and Products) leads to incomplete database design."
                },
                {
                    "title": "Ignoring Future Requirements",
                    "description": "Designing only for current needs without considering future features makes scaling difficult and may require expensive database migrations."
                },
                {
                    "title": "Improper Attribute Selection",
                    "description": "Choosing wrong data types (storing prices as integers instead of decimals) or missing important attributes (no created_at timestamp) causes problems later."
                }
            ],
            "keywords": [
                {
                    "word": "Entity",
                    "meaning": "A distinct object or concept in the database that has data to be stored, like User, Product, or Order",
                    "usage": "The Product entity contains all information about items sold in our store"
                },
                {
                    "word": "Attribute",
                    "meaning": "A property or characteristic of an entity, such as name, email, or price",
                    "usage": "The User entity has attributes including email, password_hash, and registration_date"
                },
                {
                    "word": "Primary Key",
                    "meaning": "A unique identifier for each record in a table, typically an auto-incrementing ID",
                    "usage": "Each product has a primary key (product_id) that uniquely identifies it in the database"
                },
                {
                    "word": "Foreign Key",
                    "meaning": "A field that references the primary key of another table, establishing relationships between entities",
                    "usage": "The order_items table uses product_id as a foreign key to link each item to the products table"
                },
                {
                    "word": "Junction Table",
                    "meaning": "A table that connects two entities in a many-to-many relationship, containing foreign keys from both",
                    "usage": "The product_tags junction table connects products and tags, allowing multiple tags per product"
                },
                {
                    "word": "Cardinality",
                    "meaning": "The number of instances of one entity that can be associated with instances of another entity",
                    "usage": "The cardinality between Users and Orders is one-to-many (one user can have many orders)"
                }
            ],
            "resources": [
                {
                    "title": "Database Design for Mere Mortals by Michael J. Hernandez",
                    "url": "https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0321884493"
                },
                {
                    "title": "Entity-Relationship Diagrams - Lucidchart Guide",
                    "url": "https://www.lucidchart.com/pages/er-diagrams"
                },
                {
                    "title": "Database Normalization Explained - Essential SQL",
                    "url": "https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/"
                }
            ],
            "notes": "Start with core entities first, then add supporting entities. Use tools like draw.io or dbdiagram.io to visualize entity relationships before implementing. Always include timestamp fields (created_at, updated_at) as they're invaluable for debugging and analytics."
        },
        {
            "id": "WP-DB-02",
            "title": "SQL Schema for Websites",
            "summary": "Master creating SQL database schemas for websites, including table creation, constraints, indexes, and relationships using DDL statements for robust database structures.",
            "objectives": [
                "Write CREATE TABLE statements with appropriate data types and constraints",
                "Implement foreign key relationships and cascading actions",
                "Design indexes for optimal query performance on website data"
            ],
            "theory": [
                "SQL schema defines the structure of your database using Data Definition Language (DDL) statements. The CREATE TABLE command specifies table names, columns, data types, and constraints. For a User table, you'd define VARCHAR for text fields, INT for numbers, DATETIME for timestamps, and BOOLEAN for flags.",
                "Constraints ensure data integrity at the database level. Primary keys ensure uniqueness, NOT NULL prevents empty required fields, UNIQUE prevents duplicates (like email addresses), and CHECK constraints validate data ranges (like age > 0). Foreign keys maintain referential integrity between tables.",
                "Indexes dramatically improve query performance by creating fast lookup structures. A B-tree index on email allows quick user lookups during login. Composite indexes on multiple columns optimize complex WHERE clauses. However, indexes slow down INSERT/UPDATE operations, so they must be used strategically.",
                "Cascading actions (ON DELETE CASCADE, ON UPDATE CASCADE) define what happens when referenced records change. When a user is deleted, CASCADE can automatically remove their posts, or RESTRICT can prevent deletion if posts exist. SET NULL and SET DEFAULT are other options for handling orphaned records.",
                "Data types must match usage patterns. Use VARCHAR(255) for short text, TEXT for long content, DECIMAL(10,2) for prices, INT for IDs, TIMESTAMP for dates, and ENUM for fixed options. Wrong choices waste space or limit functionality, like using INT for prices and losing cents."
            ],
            "why": "A well-designed SQL schema is the backbone of website performance and reliability. Instagram handles billions of photos because their schema uses optimized data types, strategic indexes, and proper relationships. Poor schemas lead to slow page loads, data corruption, and difficult maintenance. Proper schema design prevents costly rewrites and enables features like referential integrity that protect your data automatically.",
            "prompts": {
                "goal": "Generate a complete SQL schema for a job board website with companies, job postings, applications, and user accounts",
                "before": "Write SQL to create tables for a job board",
                "after": "Generate a complete SQL schema for a job board website with these requirements: Companies can post multiple jobs, users can apply to multiple jobs, each job has required skills, users have profiles with skills, track application status (pending/reviewed/accepted/rejected), companies have multiple admin users, jobs have categories and locations. Include CREATE TABLE statements with proper data types, primary keys, foreign keys with cascading rules, indexes on frequently queried fields, and constraints like UNIQUE email and NOT NULL for required fields. Add comments explaining key design decisions.",
                "resultBefore": "Basic CREATE TABLE for users and jobs without foreign keys, indexes, or proper constraints. Missing junction tables for many-to-many relationships.",
                "resultAfter": "A complete schema with 8+ tables: users, companies, company_admins, jobs, job_categories, skills, job_skills, user_skills, applications. Proper data types (VARCHAR, TEXT, DECIMAL, ENUM, TIMESTAMP), primary keys (id INT AUTO_INCREMENT), foreign keys with ON DELETE CASCADE where appropriate, indexes on email, company_id, user_id, created_at, status fields. Unique constraints on email, composite indexes on applications(user_id, job_id), and CHECK constraints on salary ranges."
            },
            "pitfalls": [
                {
                    "title": "Missing Indexes on Foreign Keys",
                    "description": "Foreign key columns without indexes cause slow JOIN queries, especially noticeable as data grows beyond thousands of records."
                },
                {
                    "title": "Incorrect Data Types",
                    "description": "Using VARCHAR for prices loses precision, INT for phone numbers drops leading zeros, and VARCHAR without length limits wastes memory."
                },
                {
                    "title": "No Default Values or Timestamps",
                    "description": "Missing DEFAULT CURRENT_TIMESTAMP for created_at fields makes tracking record creation impossible and complicates debugging."
                },
                {
                    "title": "Overly Permissive NULL Values",
                    "description": "Allowing NULL on critical fields like email or username creates data quality issues and complicates query logic with NULL checks."
                }
            ],
            "keywords": [
                {
                    "word": "DDL",
                    "meaning": "Data Definition Language - SQL commands that define database structure (CREATE, ALTER, DROP, TRUNCATE)",
                    "usage": "We use DDL statements to create the initial schema and modify it during migrations"
                },
                {
                    "word": "Constraint",
                    "meaning": "Rules enforced at the database level to maintain data integrity (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK)",
                    "usage": "A UNIQUE constraint on the email column prevents duplicate user registrations"
                },
                {
                    "word": "Index",
                    "meaning": "A data structure that improves query speed by creating fast lookup paths to rows based on column values",
                    "usage": "Adding an index on the created_at column speeds up queries that sort posts by date"
                },
                {
                    "word": "AUTO_INCREMENT",
                    "meaning": "A column property that automatically generates sequential unique numbers for new rows, commonly used for primary keys",
                    "usage": "The id column uses AUTO_INCREMENT to assign unique identifiers without manual input"
                },
                {
                    "word": "ON DELETE CASCADE",
                    "meaning": "A foreign key action that automatically deletes child records when the parent record is deleted",
                    "usage": "When a user is deleted, ON DELETE CASCADE removes all their comments automatically"
                },
                {
                    "word": "Composite Index",
                    "meaning": "An index on multiple columns, optimizing queries that filter or sort by those columns together",
                    "usage": "A composite index on (user_id, created_at) speeds up queries for a user's recent posts"
                }
            ],
            "resources": [
                {
                    "title": "MySQL Documentation - CREATE TABLE Syntax",
                    "url": "https://dev.mysql.com/doc/refman/8.0/en/create-table.html"
                },
                {
                    "title": "PostgreSQL Schema Design Best Practices",
                    "url": "https://wiki.postgresql.org/wiki/Don%27t_Do_This"
                },
                {
                    "title": "Use The Index, Luke - A guide to database performance",
                    "url": "https://use-the-index-luke.com/"
                }
            ],
            "notes": "Always include created_at and updated_at timestamps. Use meaningful table and column names (user_profiles not up1). Test your schema with sample data before production. Document foreign key relationships clearly for team members."
        },
        {
            "id": "WP-DB-03",
            "title": "CMS Database Design",
            "summary": "Design flexible and scalable database structures for Content Management Systems, handling posts, pages, media, taxonomies, and custom fields with WordPress-style architecture.",
            "objectives": [
                "Design a flexible content structure supporting multiple content types (posts, pages, products)",
                "Implement taxonomy systems for categories, tags, and custom classifications",
                "Create metadata and custom field systems for extensible content attributes"
            ],
            "theory": [
                "CMS databases use a flexible content model centered around a posts table that handles multiple content types (blog posts, pages, products) using a 'post_type' field. This single-table polymorphism allows shared features like publishing, authorship, and commenting across all content types while enabling type-specific functionality.",
                "Taxonomy systems organize content through categories and tags. A three-table structure handles this: terms (category/tag names), taxonomies (types like 'category' or 'tag'), and term_relationships (linking content to terms). This allows unlimited classification systems and enables features like nested categories and tag clouds.",
                "Metadata tables (postmeta, usermeta) provide extensibility without schema changes. They use a key-value structure where each row stores one attribute (meta_key) and its value (meta_value) for a content item. This allows custom fields like SEO titles, product prices, or author bios without ALTER TABLE statements.",
                "Media management requires tracking uploaded files with metadata. A media table stores file paths, URLs, MIME types, dimensions, and alt text. Linking media to content uses relationships, allowing featured images, galleries, and file attachments. Proper indexing on post_id and post_type ensures fast media queries.",
                "Revision tracking maintains content history by storing each version as a separate post with post_parent linking to the original and post_status marking it as 'revision'. This enables undo/redo, comparing changes, and restoring previous versions—critical features for collaborative editing and content recovery."
            ],
            "why": "WordPress powers 43% of all websites using exactly this database design. Its flexibility allows the same structure to run blogs, e-commerce stores, membership sites, and portfolios. Understanding CMS database architecture teaches you how to build systems that non-developers can extend with plugins and custom fields, enabling businesses to adapt without hiring developers for every small change.",
            "prompts": {
                "goal": "Design a complete CMS database schema supporting blog posts, pages, products, categories, tags, custom fields, media library, and user permissions",
                "before": "Create a database for a content management system",
                "after": "Design a flexible CMS database schema with these features: support multiple content types (posts, pages, products) in one structure, hierarchical categories and flat tags, custom fields/metadata for any content type, media library with image metadata, post revisions history, user roles and capabilities, content scheduling (draft/published/scheduled status), and parent-child page relationships. Provide SQL CREATE statements for all tables with proper indexes and foreign keys. Explain how the metadata system allows adding custom fields without schema changes.",
                "resultBefore": "Separate tables for each content type (blog_posts, pages, products) leading to code duplication. No taxonomy or metadata system. Missing revisions and media management.",
                "resultAfter": "A WordPress-inspired schema with core tables: posts (id, post_type, post_status, post_parent, post_author, post_title, post_content, post_date), terms (id, name, slug), term_taxonomy (id, term_id, taxonomy, parent), term_relationships (post_id, term_taxonomy_id), postmeta (id, post_id, meta_key, meta_value), users, usermeta. Indexes on post_type, post_status, post_date, meta_key. Complete explanation of how meta_key='price' and meta_value='29.99' extends products without schema changes."
            },
            "pitfalls": [
                {
                    "title": "Metadata Table Performance",
                    "description": "Storing all custom fields in meta tables can cause slow queries when filtering. Solution: Move frequently-queried fields to main table columns."
                },
                {
                    "title": "Unbounded Text Fields",
                    "description": "Using TEXT for all content leads to bloated databases. Use VARCHAR for titles/excerpts and TEXT only for actual content bodies."
                },
                {
                    "title": "No Soft Deletes",
                    "description": "Hard deleting content loses history and breaks references. Implement post_status='trash' for soft deletes with cleanup scheduled tasks."
                },
                {
                    "title": "Missing Slug Indexes",
                    "description": "Slugs are used for URL routing and queried frequently. Missing indexes on slug fields causes slow page loads for every request."
                }
            ],
            "keywords": [
                {
                    "word": "Post Type",
                    "meaning": "A classifier field that allows one table to store different content types like posts, pages, and products",
                    "usage": "Setting post_type='product' marks the content as an e-commerce item rather than a blog post"
                },
                {
                    "word": "Taxonomy",
                    "meaning": "A classification system for organizing content, like categories or tags, stored in related tables",
                    "usage": "The taxonomy 'category' allows hierarchical organization while 'tag' provides flat classification"
                },
                {
                    "word": "Meta Table",
                    "meaning": "A key-value store for flexible attributes without schema changes, using meta_key and meta_value columns",
                    "usage": "Product prices are stored in postmeta with meta_key='price' allowing products without changing the schema"
                },
                {
                    "word": "Slug",
                    "meaning": "A URL-friendly version of a title used for permalinks, typically lowercase with hyphens instead of spaces",
                    "usage": "The post title 'Best Coffee Shops' becomes the slug 'best-coffee-shops' for the URL"
                },
                {
                    "word": "Revision",
                    "meaning": "A historical version of content stored as a separate record, enabling version control and undo functionality",
                    "usage": "Each edit creates a revision linked via post_parent, allowing editors to restore previous versions"
                },
                {
                    "word": "Soft Delete",
                    "meaning": "Marking records as deleted using a status flag rather than removing them from the database",
                    "usage": "When users trash a post, we set post_status='trash' instead of DELETE, allowing recovery"
                }
            ],
            "resources": [
                {
                    "title": "WordPress Database Schema - Diagram and Description",
                    "url": "https://codex.wordpress.org/Database_Description"
                },
                {
                    "title": "Drupal Database Schema - Alternative CMS Approach",
                    "url": "https://www.drupal.org/docs/8/api/database-api/database-api-overview"
                },
                {
                    "title": "Building a Flexible Content System - Smashing Magazine",
                    "url": "https://www.smashingmagazine.com/2013/09/lessons-learned-building-flexible-cms/"
                }
            ],
            "notes": "Study WordPress database design even if you don't use WordPress—it's battle-tested with millions of sites. The metadata pattern is powerful but use it sparingly; critical fields belong in main tables. Always index meta_key when using postmeta tables."
        },
        {
            "id": "WP-DB-04",
            "title": "NoSQL for Blogs & Content Sites",
            "summary": "Explore when and how to use NoSQL databases (MongoDB, Firebase) for content-heavy websites, understanding document-based storage, denormalization strategies, and hybrid SQL/NoSQL approaches.",
            "objectives": [
                "Understand when NoSQL is advantageous over SQL for content websites",
                "Design document schemas for blogs and content platforms in MongoDB",
                "Implement hybrid architectures combining SQL and NoSQL for optimal performance"
            ],
            "theory": [
                "NoSQL databases store data as documents (JSON-like structures) rather than tables with rows. For a blog post, one document contains all related data—title, content, author info, comments, tags—eliminating JOINs. This denormalization trades storage space for query speed, perfect for read-heavy content sites where posts are read 100x more than written.",
                "Document databases like MongoDB offer schema flexibility. You can add fields to documents without migrations—some blog posts have video embeds while others don't, no problem. This flexibility accelerates development and handles diverse content types naturally, unlike SQL where schema changes require careful planning and downtime.",
                "Embedded documents handle one-to-many relationships by nesting related data. Comments can live inside blog post documents rather than separate tables. This means fetching a post with all comments requires one query instead of JOINs. However, deeply nested data can cause bloat and update anomalies if not designed carefully.",
                "Denormalization in NoSQL means duplicating data across documents for performance. Author names appear in every post document rather than referenced from a users collection. When author names change, you must update all posts—a tradeoff for faster reads. This works when reads vastly outnumber writes, typical for content sites.",
                "Hybrid architectures use SQL for transactional data (users, orders, auth) and NoSQL for content (posts, comments, media). This leverages each database's strengths: SQL for ACID compliance and complex queries, NoSQL for flexible schemas and fast reads. Synchronization between systems requires careful design using event streams or scheduled jobs."
            ],
            "why": "Medium serves millions of stories daily using a hybrid approach: user accounts in SQL, content in document databases. NoSQL excels at content delivery because documents match how web pages consume data—one query returns everything needed to render a page. This architecture powers faster page loads and better user experience. Understanding NoSQL is essential for modern content platforms that prioritize speed and flexibility.",
            "prompts": {
                "goal": "Design a MongoDB schema for a recipe blog with nested ingredients, steps, comments, and user profiles",
                "before": "Design a MongoDB database for a recipe website",
                "after": "Design a comprehensive MongoDB schema for a recipe blog with these requirements: recipes have multiple ingredients with amounts/units, step-by-step instructions with images, user ratings and reviews, nested comment threads, recipe categories and dietary tags, cooking times and difficulty levels, and author profiles with follower counts. Show example documents for recipes, users, and comments. Explain embedding vs referencing decisions—when to embed (like ingredients in recipes) and when to reference (like author IDs). Include considerations for updating embedded data and querying across collections.",
                "resultBefore": "Flat documents without nested structures. Everything as references, losing NoSQL benefits. No consideration for denormalization or embedding strategies.",
                "resultAfter": "Well-designed documents: Recipe document embeds ingredients array and steps array (frequently accessed together), references author by ID (users change rarely), embeds recent comments but references older comments collection (prevents unbounded growth), denormalizes author name/avatar (fast display without lookup). User documents embed follower_count (updated infrequently) and reference followed_users (unbounded list). Indexes on tags, category, created_at. Explanation of embedding for data read together and referencing for data modified independently or unbounded lists."
            },
            "pitfalls": [
                {
                    "title": "Unbounded Arrays",
                    "description": "Embedding all comments in posts creates documents that grow infinitely, hitting size limits. Use references or hybrid approaches for unbounded data."
                },
                {
                    "title": "Over-Embedding",
                    "description": "Embedding everything creates massive documents and update anomalies. Embed data that's read together; reference data that changes independently."
                },
                {
                    "title": "Missing Indexes",
                    "description": "NoSQL doesn't auto-index like SQL primary keys. You must explicitly create indexes on query fields or face slow collection scans."
                },
                {
                    "title": "Ignoring Denormalization Costs",
                    "description": "Duplicating author names is fast for reads but requires updating thousands of posts when names change. Weigh read/write frequency carefully."
                }
            ],
            "keywords": [
                {
                    "word": "Document",
                    "meaning": "A JSON-like data structure that stores related information together, similar to a row but with nested fields",
                    "usage": "Each blog post is stored as one document containing title, content, author, and embedded comments"
                },
                {
                    "word": "Collection",
                    "meaning": "A group of documents, analogous to a table in SQL but without enforced schema",
                    "usage": "The 'posts' collection contains all blog post documents with varying field structures"
                },
                {
                    "word": "Embedding",
                    "meaning": "Storing related data as nested objects within a document instead of separate collections",
                    "usage": "Recipe ingredients are embedded as an array within recipe documents for fast single-query access"
                },
                {
                    "word": "Referencing",
                    "meaning": "Storing IDs that point to documents in other collections, similar to foreign keys",
                    "usage": "Posts reference author_id instead of embedding full user data to avoid duplication"
                },
                {
                    "word": "Denormalization",
                    "meaning": "Intentionally duplicating data across documents for faster reads, accepting update complexity",
                    "usage": "We denormalize author names into posts so we don't need lookups to display post listings"
                },
                {
                    "word": "Schema Flexibility",
                    "meaning": "The ability to have documents in the same collection with different fields without defining schema upfront",
                    "usage": "Some recipe documents have 'video_url' fields while others don't, without schema changes"
                }
            ],
            "resources": [
                {
                    "title": "MongoDB Schema Design Best Practices",
                    "url": "https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/"
                },
                {
                    "title": "When to Use NoSQL vs SQL - Prisma Blog",
                    "url": "https://www.prisma.io/dataguide/intro/comparing-database-types"
                },
                {
                    "title": "The Little MongoDB Book (Free)",
                    "url": "https://github.com/karlseguin/the-little-mongodb-book"
                }
            ],
            "notes": "NoSQL isn't a replacement for SQL—it's a different tool for different problems. Use SQL for financial transactions, user auth, and complex reporting. Use NoSQL for content delivery, real-time features, and rapidly evolving schemas. Most large sites use both strategically."
        },
        {
            "id": "WP-DB-05",
            "title": "User Data Storage & Privacy",
            "summary": "Implement secure user data storage with encryption, hashing, GDPR compliance, data minimization, and privacy-first database design for modern web applications.",
            "objectives": [
                "Implement secure password storage using bcrypt/Argon2 hashing with salts",
                "Design privacy-compliant data schemas supporting GDPR rights (access, deletion, portability)",
                "Apply data minimization principles and encryption for sensitive user information"
            ],
            "theory": [
                "Password security requires cryptographic hashing, never plain text storage. Hash functions like bcrypt or Argon2 convert passwords to fixed-length strings that can't be reversed. Adding unique salts prevents rainbow table attacks. Modern libraries handle this automatically—bcrypt with cost factor 12+ takes ~300ms to hash, making brute force attacks impractical.",
                "GDPR and privacy laws mandate user rights: access (export all data), rectification (fix incorrect data), erasure (delete all data), and portability (machine-readable export). Your database design must support these operations. Foreign keys with CASCADE help deletion, but soft deletes and audit logs conflict with erasure requirements—plan accordingly.",
                "Data minimization means collecting only necessary information. Don't store birthdates if age verification is the goal; store only 'is_over_18' boolean. Avoid collecting social security numbers, full addresses, or phone numbers unless essential. Less stored data means less liability, fewer security risks, and easier compliance.",
                "Encryption protects sensitive data at rest and in transit. Application-level encryption encrypts fields like credit card numbers before database storage using AES-256. Database encryption encrypts entire databases at file system level. Column-level encryption targets specific sensitive fields. Each adds overhead but critical for PII protection.",
                "Personal Identifiable Information (PII) requires special handling: IP addresses, email, names, addresses, and biometrics must be protected, retention limited, and consent obtained. Use pseudonymization (replacing identifiers with tokens) or anonymization (removing identifiers entirely) to reduce risk. Store analytics without PII when possible."
            ],
            "why": "Data breaches cost companies millions in fines and reputation damage. LinkedIn paid $52M after a password breach; Equifax paid $700M. Proper user data storage isn't optional—it's legal requirement and ethical responsibility. Understanding encryption and privacy protects your users and your business. Companies that design privacy-first from the start avoid expensive retrofitting later.",
            "prompts": {
                "goal": "Design a GDPR-compliant user database with secure authentication, data export, and complete deletion capabilities",
                "before": "Create a user database with login and profile data",
                "after": "Design a GDPR-compliant user database schema with these requirements: secure password storage (explain hashing approach), separation of PII from non-PII data, email verification and consent tracking, support for data export (all user data in JSON), complete data deletion (including cascade rules), data retention policies, encryption for sensitive fields, and audit logging of data access. Include SQL schema for users, user_profiles, user_consents, user_data_exports, and audit_logs tables. Explain how to handle 'right to be forgotten' requests when user data is referenced across the system. Include password reset tokens with expiration.",
                "resultBefore": "Single users table with passwords stored as MD5 hashes, no consent tracking, hard deletes that break foreign keys, no audit trail, no data export mechanism.",
                "resultAfter": "Complete schema with users (id, email, password_hash using bcrypt, email_verified, created_at), user_profiles (separate PII: name, phone, address with foreign key), user_consents (consent_type, granted_at, ip_address), password_reset_tokens (token, expires_at), audit_logs (user_id, action, timestamp, ip). Password hashing using bcrypt with salt rounds 12. Data export function gathering all user tables. Deletion procedure: soft delete users.deleted_at, then cascade anonymize references, hard delete after retention period. Encrypted columns for payment info using AES-256."
            },
            "pitfalls": [
                {
                    "title": "Storing Passwords as Plain Text or MD5",
                    "description": "Never store passwords unhashed or using broken algorithms like MD5/SHA1. Always use bcrypt, Argon2, or scrypt with proper cost factors."
                },
                {
                    "title": "No Consent Tracking",
                    "description": "GDPR requires proof of consent. Missing consent_timestamp and consent_type fields makes compliance impossible and exposes legal risk."
                },
                {
                    "title": "Impossible Data Deletion",
                    "description": "Foreign keys with RESTRICT and no deletion cascade prevent honoring erasure requests. Plan deletion strategies upfront, not after lawsuits."
                },
                {
                    "title": "Storing Unnecessary PII",
                    "description": "Collecting data 'just in case' creates liability. Every data point must have documented business justification and retention policy."
                }
            ],
            "keywords": [
                {
                    "word": "Hashing",
                    "meaning": "One-way cryptographic function converting passwords to fixed-length strings that cannot be reversed",
                    "usage": "We hash passwords with bcrypt before storage so even database breaches don't expose user passwords"
                },
                {
                    "word": "Salt",
                    "meaning": "Random data added to passwords before hashing to prevent rainbow table attacks and ensure unique hashes",
                    "usage": "Each password gets a unique salt, so identical passwords produce different hashes in the database"
                },
                {
                    "word": "PII",
                    "meaning": "Personally Identifiable Information - data that can identify individuals (names, emails, addresses, IPs)",
                    "usage": "PII fields like email and phone number require encryption and special handling under GDPR"
                },
                {
                    "word": "GDPR",
                    "meaning": "General Data Protection Regulation - EU privacy law requiring user consent, data protection, and deletion rights",
                    "usage": "GDPR compliance requires implementing data export and 'right to be forgotten' deletion features"
                },
                {
                    "word": "Encryption at Rest",
                    "meaning": "Encrypting data when stored on disk, protecting against physical theft or unauthorized file access",
                    "usage": "We use AES-256 encryption at rest for credit card fields in our payment_methods table"
                },
                {
                    "word": "Data Minimization",
                    "meaning": "Privacy principle of collecting only the minimum necessary data for stated purposes",
                    "usage": "Following data minimization, we store only age ranges instead of birthdates for age verification"
                }
            ],
            "resources": [
                {
                    "title": "OWASP Password Storage Cheat Sheet",
                    "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
                },
                {
                    "title": "GDPR.eu - Complete Guide to GDPR Compliance",
                    "url": "https://gdpr.eu/"
                },
                {
                    "title": "NIST Special Publication 800-63B - Digital Identity Guidelines",
                    "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
                }
            ],
            "notes": "Privacy isn't just legal compliance—it's trust-building. Transparently communicate data practices. Implement privacy by design, not as an afterthought. Regularly audit your data: what you collect, why, and how long you keep it. When in doubt, delete."
        },
        {
            "id": "WP-DB-06",
            "title": "Query Optimization",
            "summary": "Master database query optimization techniques including indexing strategies, EXPLAIN analysis, query rewriting, caching, and performance monitoring for fast website responses.",
            "objectives": [
                "Use EXPLAIN to analyze query execution plans and identify bottlenecks",
                "Design optimal indexes for common website query patterns",
                "Implement query optimization techniques reducing page load times by 50%+"
            ],
            "theory": [
                "Query optimization starts with understanding execution plans. The EXPLAIN command shows how databases execute queries: which indexes are used, whether full table scans occur, how many rows are examined, and join order. A query examining 1 million rows to return 10 results needs optimization—proper indexing should reduce examined rows to dozens.",
                "Indexes are B-tree data structures enabling fast lookups. A BTREE index on user_email allows finding users by email in O(log n) time instead of O(n) scanning. Composite indexes optimize queries filtering multiple columns—index on (user_id, created_at) speeds up 'user posts ordered by date'. However, indexes slow writes and consume storage.",
                "N+1 query problems plague ORMs and lazy loading. Loading 100 blog posts then looping to fetch each author causes 101 queries. Solution: eager loading with JOINs or IN clauses fetches all data in 1-2 queries. Always check query counts in development tools—100+ queries for one page indicates N+1 problems.",
                "Query rewriting improves performance without schema changes. Replace SELECT * with specific columns, use EXISTS instead of COUNT for existence checks, avoid OR in WHERE clauses (use UNION), eliminate functions on indexed columns (WHERE created_at > NOW() not WHERE DATE(created_at) = CURDATE()), and limit result sets with LIMIT.",
                "Caching eliminates redundant queries by storing results in memory. Redis caches query results with TTL (time to live) so repeated requests hit memory instead of database. Cache homepage content, user profiles, and popular posts. Invalidate caches when data changes. CDN caching for static assets reduces database load dramatically."
            ],
            "why": "Amazon found 100ms of latency costs 1% of sales. Slow queries directly impact revenue and user experience. A blog post page taking 3 seconds versus 300ms means 40% more bounce rate. Pinterest reduced perceived wait times by 40% through query optimization. Understanding optimization turns slow websites into fast ones, directly improving business metrics and user satisfaction.",
            "prompts": {
                "goal": "Optimize a slow blog listing page that shows posts with author info, category, comment counts, and pagination",
                "before": "Make my blog posts page load faster",
                "after": "I have a blog listing page showing 20 posts per page with this query: SELECT * FROM posts WHERE status='published' ORDER BY created_at DESC. For each post, I display author name (separate query), category (separate query), and comment count (COUNT query). The page loads in 3 seconds with 10,000 posts and 50,000 comments. Provide: 1) EXPLAIN analysis showing what's wrong, 2) optimized query using JOINs to eliminate N+1 problem, 3) index recommendations with CREATE INDEX statements, 4) query rewrite replacing COUNT with cached comment_count column, 5) caching strategy for this page. Include before/after query counts and expected performance improvement.",
                "resultBefore": "Generic advice like 'add indexes' without specifics. No EXPLAIN analysis. Missing N+1 problem identification. No concrete optimization strategy.",
                "resultAfter": "Detailed optimization plan: 1) EXPLAIN shows full table scan on posts (no index on created_at + status). 2) Optimized query using LEFT JOINs to users and categories, eliminating 40+ per-page queries: SELECT posts.*, users.name AS author, categories.name AS category, posts.comment_count FROM posts LEFT JOIN users ON posts.author_id = users.id LEFT JOIN categories ON posts.category_id = categories.id WHERE posts.status='published' ORDER BY posts.created_at DESC LIMIT 20 OFFSET ?. 3) Indexes: CREATE INDEX idx_posts_status_created ON posts(status, created_at DESC), CREATE INDEX idx_posts_author ON posts(author_id), CREATE INDEX idx_posts_category ON posts(category_id). 4) Add comment_count column updated by triggers, avoiding COUNT(*) queries. 5) Cache full page HTML for 5 minutes in Redis with key 'blog:page:{number}', invalidate on new posts. Result: Reduce from 61 queries to 1 query, page load from 3s to 200ms."
            },
            "pitfalls": [
                {
                    "title": "Over-Indexing",
                    "description": "Creating indexes on every column slows INSERT/UPDATE operations and wastes storage. Index only frequently-queried columns based on actual usage patterns."
                },
                {
                    "title": "Ignoring N+1 Queries",
                    "description": "The most common performance killer in web apps. Always eager load relationships in list views; one query with JOIN beats 100 separate queries."
                },
                {
                    "title": "SELECT * Instead of Specific Columns",
                    "description": "Fetching unneeded columns, especially TEXT fields, wastes bandwidth and memory. Select only columns actually displayed on page."
                },
                {
                    "title": "No Cache Invalidation Strategy",
                    "description": "Caching without invalidation shows stale data. Plan cache keys and invalidation triggers when implementing caching layers."
                }
            ],
            "keywords": [
                {
                    "word": "EXPLAIN",
                    "meaning": "SQL command showing how the database executes a query, revealing indexes used and rows examined",
                    "usage": "Running EXPLAIN before SELECT shows the query scans 100k rows instead of using our index"
                },
                {
                    "word": "Index",
                    "meaning": "Data structure accelerating lookups by maintaining sorted references to table rows based on column values",
                    "usage": "Adding an index on email reduced login query time from 800ms to 2ms"
                },
                {
                    "word": "N+1 Query",
                    "meaning": "Performance anti-pattern where fetching N items triggers N additional queries for related data",
                    "usage": "Loading 50 posts with separate author queries creates an N+1 problem with 51 total queries"
                },
                {
                    "word": "Eager Loading",
                    "meaning": "Fetching related data upfront with JOINs or IN clauses instead of separate queries per item",
                    "usage": "Eager loading authors with posts using JOIN reduced queries from 51 to 1"
                },
                {
                    "word": "Cache Invalidation",
                    "meaning": "Clearing or updating cached data when underlying source data changes to prevent serving stale content",
                    "usage": "When a post is edited, we invalidate the cached post:123 key to refresh content"
                },
                {
                    "word": "Query Plan",
                    "meaning": "The strategy database uses to execute a query, including index usage, join methods, and scan types",
                    "usage": "The query plan shows a full table scan instead of our index seek, indicating poor performance"
                }
            ],
            "resources": [
                {
                    "title": "Use The Index, Luke - SQL Indexing Guide",
                    "url": "https://use-the-index-luke.com/"
                },
                {
                    "title": "High Performance MySQL (Book)",
                    "url": "https://www.oreilly.com/library/view/high-performance-mysql/9781492080503/"
                },
                {
                    "title": "Fixing the N+1 Problem - Shopify Engineering",
                    "url": "https://shopify.engineering/solving-the-n-1-problem-for-graphql-through-batching"
                }
            ],
            "notes": "Profile first, optimize second. Use tools like New Relic or Laravel Debugbar to identify actual slow queries before optimizing. A 10ms query run 1000x is worse than a 100ms query run once. Focus optimization on high-frequency queries impacting user experience."
        },
        {
            "id": "WP-DB-07",
            "title": "Migrations & Versioning",
            "summary": "Master database migration strategies using version control systems, implementing zero-downtime deployments, rollback procedures, and schema evolution for production databases.",
            "objectives": [
                "Write reversible database migrations with up/down methods",
                "Implement zero-downtime schema changes for production websites",
                "Use migration tools (Liquibase, Flyway, Rails migrations) for version-controlled schema evolution"
            ],
            "theory": [
                "Database migrations are version-controlled scripts that modify schema incrementally. Each migration has a timestamp or version number and describes changes: adding columns, creating tables, or modifying constraints. Migrations run sequentially, transforming schema from version N to N+1. Migration frameworks track applied migrations in a schema_migrations table, preventing duplicate execution.",
                "Reversible migrations include both 'up' (apply change) and 'down' (rollback change) logic. If migration adds a column, down removes it. This enables safe rollbacks when deployments fail. Not all changes are reversible—dropping columns loses data permanently. Non-reversible migrations need careful planning and backups before execution.",
                "Zero-downtime migrations keep applications running during schema changes. Techniques include: 1) Add new column as nullable first, then populate, then make NOT NULL; 2) Use feature flags to deploy code before migrations; 3) Create new tables, dual-write to both, backfill data, then switch; 4) For column renames, use database views temporarily aliasing names.",
                "Migration strategies for large tables require care. Adding indexes to billion-row tables locks them for hours. Solutions: create indexes CONCURRENTLY (PostgreSQL), use online DDL (MySQL 8+), or partition tables for faster operations. Data migrations moving billions of rows should batch process in chunks with progress tracking and error handling.",
                "Migration workflows integrate with deployment pipelines. In development, migrations run automatically on checkout. In staging, migrations run before code deployment for testing. In production, migrations run with monitoring, automated rollback triggers, and database backups. Migration files live in source control alongside code, maintaining schema history."
            ],
            "why": "Etsy processes 50+ database schema changes daily on live production databases serving millions of requests. Proper migrations enable this agility without downtime or data loss. Unmanaged schema changes cause production outages, data corruption, and team conflicts. Migration systems provide reproducible deployments across environments and maintain schema history for compliance and debugging. They're essential for any serious web application.",
            "prompts": {
                "goal": "Create a migration strategy to add a new 'subscription_tier' feature to existing users table without downtime",
                "before": "Add a subscription column to users table",
                "after": "I need to add subscription tiers (free/pro/enterprise) to my existing users table with 5 million rows. Users are currently all 'free' by default. Requirements: zero downtime during migration, ability to rollback if issues occur, handle ongoing user signups during migration, validate data integrity, and create indexes for subscription-based queries. Provide: 1) Step-by-step migration plan with multiple migration files if needed, 2) SQL for each migration including up/down, 3) zero-downtime strategy explanation, 4) rollback procedure, 5) data validation queries. Consider that the application is actively serving traffic during this change.",
                "resultBefore": "Single ALTER TABLE statement adding a subscription_tier column that would lock the table for 30+ minutes on 5M rows. No rollback plan, no data validation, causes downtime.",
                "resultAfter": "Multi-step zero-downtime plan: Migration 1: Add subscription_tier VARCHAR(20) NULL column (fast, no lock). Migration 2: Backfill existing users SET subscription_tier='free' in batches of 10k rows with SLEEP(0.1) to avoid lock contention. Migration 3: Once backfilled, add NOT NULL constraint. Migration 4: Create INDEX idx_users_subscription_tier(subscription_tier) CONCURRENTLY. Each migration includes down() that reverses changes: drop column, remove index. Rollback procedure: Run down migrations in reverse order. Validation: SELECT COUNT(*) FROM users WHERE subscription_tier IS NULL (should be 0 after step 2). Application continues serving traffic throughout using NULL-safe queries during backfill phase."
            },
            "pitfalls": [
                {
                    "title": "Irreversible Destructive Migrations",
                    "description": "Dropping columns or tables without backups makes rollback impossible and causes data loss. Always backup before destructive changes."
                },
                {
                    "title": "Locking Large Tables",
                    "description": "ALTER TABLE on huge tables can lock them for hours. Use online DDL, concurrent indexes, or multi-step migrations for production."
                },
                {
                    "title": "Skipping Staging Testing",
                    "description": "Running migrations first in production causes preventable outages. Always test migrations on production-like staging environments first."
                },
                {
                    "title": "No Migration Rollback Plan",
                    "description": "Deploying migrations without tested rollback procedures leads to extended downtime when issues occur. Practice rollbacks before production."
                }
            ],
            "keywords": [
                {
                    "word": "Migration",
                    "meaning": "Version-controlled script that modifies database schema, tracked to prevent duplicate execution",
                    "usage": "Migration 20240615_add_users_subscription creates the subscription_tier column in the users table"
                },
                {
                    "word": "Schema Version",
                    "meaning": "Identifier (timestamp or number) tracking which migrations have been applied to a database",
                    "usage": "The schema_migrations table shows our production database is at version 20240615120000"
                },
                {
                    "word": "Rollback",
                    "meaning": "Reverting a migration by running its down() method, undoing schema changes from failed deployments",
                    "usage": "After deployment errors, we rolled back migration 20240615 to restore the previous schema"
                },
                {
                    "word": "Zero-Downtime Migration",
                    "meaning": "Schema change strategy that keeps application running without service interruption",
                    "usage": "We used zero-downtime migration by adding the column as nullable first, then backfilling data"
                },
                {
                    "word": "Online DDL",
                    "meaning": "Database feature allowing schema changes without locking tables, enabling concurrent reads/writes",
                    "usage": "MySQL 8.0 online DDL lets us add indexes without blocking user queries"
                },
                {
                    "word": "Backfill",
                    "meaning": "Populating existing rows with values for newly added columns or tables",
                    "usage": "After adding subscription_tier column, we backfill existing users with 'free' tier"
                }
            ],
            "resources": [
                {
                    "title": "Flyway Database Migrations - Official Docs",
                    "url": "https://flywaydb.org/documentation/"
                },
                {
                    "title": "Zero-Downtime Migrations - Braintree Engineering",
                    "url": "https://medium.com/braintree-product-technology/safe-operations-for-high-volume-postgresql-1ccf3be8e7c7"
                },
                {
                    "title": "Rails Migrations Guide - Ruby on Rails",
                    "url": "https://guides.rubyonrails.org/active_record_migrations.html"
                }
            ],
            "notes": "Never modify existing migrations—create new ones to change schema. Always backup production before migrations. Test rollback procedures in staging. For teams, review migration PRs carefully as they affect all environments. Use timestamps in migration names to avoid conflicts."
        },
        {
            "id": "WP-DB-08",
            "title": "Analytics Data Storage",
            "summary": "Design scalable databases for website analytics including event tracking, user behavior, page views, conversions, and real-time analytics using time-series databases and aggregation strategies.",
            "objectives": [
                "Design schemas for tracking page views, events, and user journeys",
                "Implement time-series databases (InfluxDB, TimescaleDB) for analytics workloads",
                "Build aggregation and rollup strategies for efficient reporting on large datasets"
            ],
            "theory": [
                "Analytics databases handle massive write volumes with infrequent reads. Unlike transactional databases optimizing for updates, analytics databases optimize for batch inserts and range queries. Time-series databases like InfluxDB and TimescaleDB excel at this workload, storing timestamped events efficiently using columnar storage and compression.",
                "Event tracking schemas capture user interactions: page views, clicks, form submissions, purchases. Each event has timestamp, user_id, session_id, event_type, and JSON metadata. Storing raw events enables flexible analysis but generates terabytes of data. Typical website: 1M daily visitors × 20 pageviews = 20M daily events × 365 days = 7.3B yearly records.",
                "Aggregation and rollup reduce storage and speed queries. Instead of querying 7B raw events for monthly reports, pre-aggregate into summary tables: daily_stats (date, page_url, view_count), hourly_user_activity (hour, user_count), etc. Background jobs aggregate raw data hourly or daily. Queries hit aggregated tables, returning results in milliseconds instead of minutes.",
                "Partitioning large analytics tables by time improves performance and retention. Partition events table monthly: events_2024_01, events_2024_02. Queries with date ranges only scan relevant partitions. Retention becomes simple: DROP TABLE events_2023_01 to delete January 2023 data. TimescaleDB automates this with hypertables and automatic partitioning.",
                "Real-time analytics require different architecture. Streaming pipelines (Kafka, Kinesis) ingest events, process through stream processors (Flink, Spark), and update dashboards via WebSockets. Hot path stores recent data (last 24h) in memory or SSD. Cold path archives historical data in cheap columnar storage (Parquet on S3). ClickHouse combines both for real-time + historical queries."
            ],
            "why": "Google Analytics processes 50 billion events daily across websites. Facebook tracks trillions of events for personalization and ads. Proper analytics architecture enables data-driven decisions: A/B testing, conversion optimization, user segmentation. Without efficient analytics storage, you're blind to user behavior. E-commerce sites using analytics increase revenue 5-8% through optimization insights. Analytics data is gold for product development and marketing.",
            "prompts": {
                "goal": "Design an analytics database for a blog platform tracking page views, reading time, scroll depth, and user journeys with 1M daily visitors",
                "before": "Track analytics for my blog platform",
                "after": "Design a complete analytics system for a blog platform with these requirements: track page views with URL/referrer/device, measure reading time and scroll depth per article, capture user journeys (pages viewed in session), store 1M visitors × 15 pageviews daily (15M events/day), enable real-time dashboard (last hour stats), generate daily/monthly reports on top articles, user retention, traffic sources. Provide: 1) Raw events table schema with partitioning strategy, 2) Aggregated tables for reporting (daily_article_stats, hourly_traffic, etc.), 3) Rollup/aggregation job logic running hourly, 4) Sample queries for 'top 10 articles this week' and 'user retention rate', 5) Data retention policy (raw events kept 90 days, aggregates kept 2 years). Consider using TimescaleDB or similar time-series database.",
                "resultBefore": "Single events table without partitioning, storing everything forever. No aggregation strategy. Queries scan billions of rows for simple reports. No data retention plan.",
                "resultAfter": "Complete analytics schema: 1) Raw events table (timestamp, user_id, session_id, page_url, referrer, device, reading_time_seconds, scroll_depth_percent) partitioned monthly using TimescaleDB hypertables. 2) Aggregated tables: daily_article_stats (date, article_url, view_count, avg_reading_time, avg_scroll_depth), hourly_traffic (hour, total_views, unique_users, bounce_rate), traffic_sources (date, referrer_domain, visit_count). 3) Hourly aggregation job: INSERT INTO daily_article_stats SELECT date, page_url, COUNT(*), AVG(reading_time), AVG(scroll_depth) FROM events WHERE timestamp >= NOW() - INTERVAL 1 HOUR GROUP BY date, page_url. 4) Optimized queries using aggregated tables with indexes on date + article_url. 5) Retention: raw events dropped after 90 days via TimescaleDB retention policies, aggregates compressed and kept 2 years. Estimated storage: 15M events/day × 90 days × 200 bytes = 270GB raw + 50GB aggregated."
            },
            "pitfalls": [
                {
                    "title": "Storing Everything Forever",
                    "description": "Analytics data grows unbounded. Without retention policies, databases become unmanageably large and expensive. Archive or delete old raw data."
                },
                {
                    "title": "No Pre-Aggregation",
                    "description": "Querying billions of raw events for dashboards causes timeouts. Pre-aggregate common reports to summary tables refreshed hourly."
                },
                {
                    "title": "Wrong Database Choice",
                    "description": "Using MySQL/Postgres for analytics workloads leads to poor performance. Time-series or columnar databases (ClickHouse, TimescaleDB) fit better."
                },
                {
                    "title": "Missing Indexes on Time Ranges",
                    "description": "Analytics queries filter by date ranges constantly. Missing indexes on timestamp columns causes full table scans on terabyte tables."
                }
            ],
            "keywords": [
                {
                    "word": "Event Tracking",
                    "meaning": "Recording user interactions as timestamped events for analysis of behavior patterns",
                    "usage": "We track page_view events capturing URL, referrer, and device for each visitor"
                },
                {
                    "word": "Time-Series Database",
                    "meaning": "Database optimized for timestamped data with high write rates and time-range queries",
                    "usage": "TimescaleDB automatically partitions our events table by month for efficient time-based queries"
                },
                {
                    "word": "Rollup",
                    "meaning": "Aggregating detailed data into summary tables at coarser time granularity (hourly to daily, daily to monthly)",
                    "usage": "Hourly rollups aggregate raw events into daily stats, reducing query load by 24x"
                },
                {
                    "word": "Partitioning",
                    "meaning": "Splitting large tables into smaller physical tables based on criteria like date ranges",
                    "usage": "Monthly partitioning lets us drop old data instantly and queries only scan relevant months"
                },
                {
                    "word": "Columnar Storage",
                    "meaning": "Database storage organizing data by columns instead of rows, enabling compression and fast aggregation",
                    "usage": "ClickHouse's columnar storage compresses our events table by 10x compared to row-based storage"
                },
                {
                    "word": "Data Retention",
                    "meaning": "Policy defining how long different data types are stored before archival or deletion",
                    "usage": "Our retention policy keeps raw events 90 days, then aggregates for 2 years, then archives"
                }
            ],
            "resources": [
                {
                    "title": "TimescaleDB Documentation - Time-Series Database",
                    "url": "https://docs.timescale.com/"
                },
                {
                    "title": "ClickHouse for Analytics - Official Docs",
                    "url": "https://clickhouse.com/docs/en/intro"
                },
                {
                    "title": "Building Real-Time Analytics Systems - Martin Kleppmann",
                    "url": "https://martin.kleppmann.com/2015/03/04/turning-the-database-inside-out.html"
                }
            ],
            "notes": "Analytics and transactional data don't mix well—consider separate databases. Start with simple aggregation, add real-time only when needed. Use sampling for extremely high-volume sites (track 10% of events, multiply results by 10). Privacy: anonymize or pseudonymize analytics data to reduce GDPR scope."
        },
        {
            "id": "WP-DB-09",
            "title": "Backup & Recovery Prompts",
            "summary": "Implement comprehensive backup strategies including automated backups, point-in-time recovery, disaster recovery planning, and testing backup restoration procedures for production databases.",
            "objectives": [
                "Implement automated backup systems with retention policies and offsite storage",
                "Configure point-in-time recovery (PITR) for databases to recover to specific moments",
                "Design and test disaster recovery procedures minimizing data loss and downtime"
            ],
            "theory": [
                "Database backups capture snapshots of data for recovery after failures. Full backups copy entire databases but consume time and storage. Incremental backups only copy changes since last backup, saving resources but requiring chain of backups for restoration. Differential backups copy changes since last full backup, balancing storage and restoration complexity.",
                "Point-in-time recovery (PITR) restores databases to exact moments, not just backup points. It combines full backups with continuous archiving of transaction logs (WAL in PostgreSQL, binlog in MySQL). You restore a full backup, then replay transaction logs to desired timestamp. Critical for recovering from user errors: 'restore to 5 minutes before DELETE query ran'.",
                "Backup strategies follow 3-2-1 rule: 3 copies of data, on 2 different media types, with 1 offsite copy. Production database, local backup server, and cloud storage (S3) satisfy this. Offsite backups protect against datacenter disasters. Encryption protects backup confidentiality. Retention policies balance compliance needs with storage costs.",
                "Automated backups eliminate human error and ensure consistency. Cron jobs or managed services (AWS RDS automated backups) run daily at low-traffic times. Lock tables briefly or use replication slaves to avoid production impact. Monitor backup success with alerts on failures. Unmonitored backups are useless—validate backups actually work through restoration tests.",
                "Disaster recovery planning documents recovery procedures: who to call, which backups to restore, how to verify data integrity, rollback procedures. Recovery Time Objective (RTO) defines maximum acceptable downtime. Recovery Point Objective (RPO) defines maximum acceptable data loss. Daily backups have 24-hour RPO—continuous replication achieves near-zero RPO for critical systems."
            ],
            "why": "GitLab accidentally deleted 300GB production database in 2017, discovering their backups were broken. They lost 6 hours of user data. GitHub recovered from database corruption in minutes due to tested backup procedures. Ransomware attacks encrypt databases—backups are only defense. Website downtime costs e-commerce $5,600/minute on average. Proper backups and tested recovery procedures are insurance against catastrophe, protecting business continuity and customer trust.",
            "prompts": {
                "goal": "Design a complete backup and disaster recovery plan for an e-commerce website database with minimal data loss tolerance",
                "before": "Set up database backups for my e-commerce site",
                "after": "Design a comprehensive backup and disaster recovery plan for an e-commerce website with these requirements: minimize data loss (RPO < 5 minutes), minimize downtime (RTO < 1 hour), handle accidental deletes or corrupted data, protect against datacenter failures, store transaction history for 7 years for compliance, operate on PostgreSQL or MySQL. Provide: 1) Backup strategy (full/incremental schedule, PITR configuration), 2) Automated backup scripts with retention policy, 3) Step-by-step disaster recovery procedure for common scenarios (accidental table drop, database corruption, datacenter loss), 4) Backup monitoring and testing plan, 5) Cost estimate for storage and infrastructure. Include specific tools and commands for implementation.",
                "resultBefore": "Vague mention of 'daily backups to S3' without specifics. No retention policy, no PITR, no recovery procedures, no testing plan.",
                "resultAfter": "Complete backup plan: 1) Strategy: Daily full backups at 3 AM, continuous WAL archiving to S3 for PITR. Multi-region S3 replication for disaster recovery. 2) Automated script: pg_basebackup for full backups, archive_command='aws s3 cp %p s3://backups/wal/%f' for WAL shipping. Retention: 30 days local, 90 days S3 full backups, 7 years compressed archives. 3) Recovery procedures: For table drop: PITR restore to 10 minutes before incident. For corruption: Restore last full backup + replay WAL logs. For datacenter loss: Failover to read replica, promote to primary. Step-by-step commands: pg_basebackup -D /var/lib/postgresql/backup, restore using pg_restore with -T timestamp option. 4) Testing: Monthly restore drills to staging, automated restore testing via scripts, monitoring with alerts on backup failures (PagerDuty integration). 5) Costs: S3 Standard 500GB × $0.023 = $11.50/month, S3 Glacier for archives 2TB × $0.004 = $8/month. Total ~$20-50/month depending on data size."
            },
            "pitfalls": [
                {
                    "title": "Untested Backups",
                    "description": "Backups that run successfully but fail during restoration are useless. Regularly test restoration procedures to verify backups actually work."
                },
                {
                    "title": "Single Location Storage",
                    "description": "Storing backups on same server or datacenter as production means both fail together. Always maintain offsite copies in different regions."
                },
                {
                    "title": "No Monitoring or Alerts",
                    "description": "Backup jobs failing silently for weeks is common without monitoring. Alert on backup failures, validate checksums, monitor backup age."
                },
                {
                    "title": "Inadequate Retention",
                    "description": "Keeping only recent backups prevents recovery from slowly-developing corruption. Balance cost with retention needs—keep some old backups."
                }
            ],
            "keywords": [
                {
                    "word": "Full Backup",
                    "meaning": "Complete copy of entire database at a point in time, enabling standalone restoration",
                    "usage": "We take full backups nightly, creating complete database snapshots for recovery"
                },
                {
                    "word": "Incremental Backup",
                    "meaning": "Backup containing only changes since the last backup, reducing time and storage",
                    "usage": "Hourly incremental backups capture changes efficiently, complementing daily full backups"
                },
                {
                    "word": "PITR",
                    "meaning": "Point-in-Time Recovery - ability to restore database to any specific moment using backups plus transaction logs",
                    "usage": "PITR let us recover to 5 minutes before the accidental DELETE, preventing data loss"
                },
                {
                    "word": "RTO",
                    "meaning": "Recovery Time Objective - maximum acceptable duration of downtime after disaster",
                    "usage": "Our RTO is 1 hour, meaning recovery procedures must restore service within 60 minutes"
                },
                {
                    "word": "RPO",
                    "meaning": "Recovery Point Objective - maximum acceptable amount of data loss measured in time",
                    "usage": "5-minute RPO requires continuous transaction log archiving to prevent losing recent transactions"
                },
                {
                    "word": "WAL",
                    "meaning": "Write-Ahead Log - transaction log recording all database changes, enabling PITR and replication",
                    "usage": "Archiving WAL files to S3 enables point-in-time recovery for any timestamp"
                }
            ],
            "resources": [
                {
                    "title": "PostgreSQL Backup and Restore Documentation",
                    "url": "https://www.postgresql.org/docs/current/backup.html"
                },
                {
                    "title": "MySQL Backup and Recovery Best Practices",
                    "url": "https://dev.mysql.com/doc/mysql-backup-excerpt/8.0/en/"
                },
                {
                    "title": "AWS RDS Automated Backups Guide",
                    "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html"
                }
            ],
            "notes": "Backups are worthless until tested. Schedule quarterly disaster recovery drills. Document procedures clearly—panic during outages isn't time to figure out commands. Automate everything possible. Consider managed database services (RDS, Cloud SQL) which handle backups automatically, reducing operational burden."
        }
    ]
};

const webDevModule6 = {
    courseTitle: 'Web Development',
    moduleNumber: 6,
    moduleName: 'Deployment & DevOps',
    totalLessons: 9,

    lessons: [

        {
            "id": "WP-DP-01",
            "title": "Preparing Website for Deployment",
            "summary": "Learn essential steps to prepare websites for production deployment including build optimization, dependency management, configuration validation, and production-readiness checklists.",
            "objectives": [
                "Optimize build processes and eliminate development dependencies from production bundles",
                "Configure environment-specific settings and validate all production configurations",
                "Create deployment checklists ensuring security, performance, and reliability standards"
            ],
            "theory": [
                "Preparing for deployment means transforming development code into production-ready assets. This includes building optimized JavaScript bundles, minifying CSS, compressing images, and removing development tools like source maps and debug logs. Build tools like Webpack, Vite, and Next.js handle this automatically with production mode configurations that tree-shake unused code and optimize assets.",
                "Dependency management separates development and production packages. Development dependencies (testing frameworks, build tools, linters) should never reach production servers. Use package.json devDependencies correctly and install with --production flag or CI/CD tools that automatically exclude dev packages, reducing bundle size by 50-70%.",
                "Environment configuration requires separating development, staging, and production settings. Database URLs, API keys, feature flags, and debug modes must be configured per environment. Never hardcode credentials—use environment variables. Configuration validation at startup prevents runtime failures from missing or invalid settings.",
                "Security hardening removes development conveniences that pose production risks. Disable debug modes, remove test accounts, enable HTTPS-only cookies, set secure headers (CSP, HSTS), update dependencies for security patches, and scan for vulnerabilities. A development server accepting HTTP and exposing error details is dangerous in production.",
                "Performance optimization includes code splitting, lazy loading, CDN integration, database query optimization, and caching strategies. Production builds should compress responses with Gzip/Brotli, serve static assets from CDNs, implement browser caching with proper headers, and preload critical resources. These optimizations reduce load times from seconds to milliseconds."
            ],
            "why": "GitHub deployed broken code in 2012 that took their site down for hours due to inadequate deployment preparation. Proper preparation prevents 90% of deployment failures. Airbnb reduced initial load times by 5 seconds through build optimization, directly increasing bookings. Security breaches from exposed debug endpoints cost companies millions. Deployment preparation isn't overhead—it's protecting revenue, reputation, and user trust.",
            "prompts": {
                "goal": "Create a comprehensive pre-deployment checklist and build configuration for a React e-commerce website",
                "before": "Get my website ready for deployment",
                "after": "I'm deploying a React e-commerce website built with Vite, using Node.js backend, PostgreSQL database, and Stripe payments. Create a complete deployment preparation guide including: 1) Production build configuration with optimization settings, 2) Checklist of required environment variables (database, Stripe keys, JWT secrets), 3) Security hardening steps (headers, HTTPS, cookie settings), 4) Performance optimization checklist (code splitting, lazy loading, image optimization), 5) Dependency audit process, 6) Pre-deployment testing steps. Include specific commands and configuration files for Vite, package.json scripts, and any necessary middleware setup.",
                "resultBefore": "Vague advice like 'build your app' and 'check everything works' without specific steps, commands, or configurations.",
                "resultAfter": "Complete deployment preparation package: 1) Vite production config: vite.config.js with build: {minify: 'terser', terserOptions for tree-shaking, rollupOptions for code splitting, chunkSizeWarningLimit}. 2) Environment variables checklist: DATABASE_URL, STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, JWT_SECRET (32+ chars), SESSION_SECRET, NODE_ENV=production, ALLOWED_ORIGINS. 3) Security hardening: helmet.js middleware with CSP, HSTS, noSniff; cookie settings {secure: true, httpOnly: true, sameSite: 'strict'}; disable Express error details in production; rate limiting with express-rate-limit. 4) Performance optimizations: React.lazy() for route components, image compression with sharp, CDN config for static assets, Gzip compression middleware. 5) Dependency audit: npm audit --production, npm outdated, remove unused packages. 6) Testing steps: npm run build succeeds, all environment variables present, run production build locally with NODE_ENV=production, check bundle sizes (main < 500KB), lighthouse score > 90. Complete package.json scripts: build, test, audit, start:prod."
            },
            "pitfalls": [
                {
                    "title": "Development Dependencies in Production",
                    "description": "Including devDependencies in production bundles bloats size by megabytes and exposes development tools. Always install with --production flag."
                },
                {
                    "title": "Hardcoded Credentials",
                    "description": "Committing API keys or database passwords to repositories leads to security breaches. Always use environment variables and .gitignore sensitive files."
                },
                {
                    "title": "No Build Testing",
                    "description": "Deploying without testing the production build locally causes runtime errors that don't appear in development mode. Always test builds before deployment."
                },
                {
                    "title": "Missing Error Handling",
                    "description": "Detailed error messages helpful in development expose sensitive info in production. Configure generic error responses for production environments."
                }
            ],
            "keywords": [
                {
                    "word": "Build Optimization",
                    "meaning": "Process of transforming development code into production-ready assets through minification, tree-shaking, and bundling",
                    "usage": "Build optimization reduced our JavaScript bundle from 3MB to 400KB by removing unused code"
                },
                {
                    "word": "Tree Shaking",
                    "meaning": "Elimination of unused code from final bundles during build process, reducing file sizes",
                    "usage": "Webpack tree shaking removed 200KB of unused lodash functions from our production build"
                },
                {
                    "word": "Environment Variables",
                    "meaning": "Configuration values stored outside code, allowing different settings per environment without code changes",
                    "usage": "DATABASE_URL environment variable points to different databases in development and production"
                },
                {
                    "word": "Security Hardening",
                    "meaning": "Process of securing applications by removing vulnerabilities, setting secure defaults, and adding protective layers",
                    "usage": "Security hardening includes enabling HTTPS, setting CSP headers, and disabling debug endpoints"
                },
                {
                    "word": "Code Splitting",
                    "meaning": "Breaking JavaScript bundles into smaller chunks loaded on-demand, reducing initial load time",
                    "usage": "Code splitting loads the admin panel only when admins log in, saving 500KB on initial page load"
                },
                {
                    "word": "Production Mode",
                    "meaning": "Application configuration optimized for performance and security in live environments, opposite of development mode",
                    "usage": "Running in production mode disables verbose logging and enables response compression"
                }
            ],
            "resources": [
                {
                    "title": "The Twelve-Factor App - Deployment Best Practices",
                    "url": "https://12factor.net/"
                },
                {
                    "title": "Vite Build Production Guide",
                    "url": "https://vitejs.dev/guide/build.html"
                },
                {
                    "title": "OWASP Deployment Security Checklist",
                    "url": "https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html"
                }
            ],
            "notes": "Create a deployment checklist document and review it before every deployment. Automate checks where possible using scripts. Test the production build locally before deploying. Keep deployment documentation updated as your stack evolves."
        },
        {
            "id": "WP-DP-02",
            "title": "Generating Dockerfile",
            "summary": "Master creating optimized Dockerfiles for websites, understanding multi-stage builds, layer caching, and containerization best practices for consistent deployments across environments.",
            "objectives": [
                "Write optimized Dockerfiles using multi-stage builds to minimize image sizes",
                "Implement Docker layer caching strategies for faster builds",
                "Configure Docker containers for development and production environments"
            ],
            "theory": [
                "Docker containers package applications with all dependencies into portable images that run identically across environments. A Dockerfile defines how to build images using instructions: FROM specifies base image (node:18-alpine), WORKDIR sets working directory, COPY adds files, RUN executes commands (npm install), and CMD starts the application. Each instruction creates a layer, and Docker caches unchanged layers for faster builds.",
                "Multi-stage builds optimize image sizes by using multiple FROM statements. First stage builds the application with all development tools, second stage copies only production artifacts to a minimal runtime image. This eliminates build tools and source files from final images, reducing Node.js images from 1GB to 150MB by using builder stage with full Node, then copying built files to alpine image.",
                "Layer caching significantly speeds up builds by reusing unchanged layers. Order Dockerfile instructions from least to most frequently changing: base image, system dependencies, package.json, npm install, then application code. Copy package.json separately before COPY . to cache npm install even when code changes. Poor ordering rebuilds everything on every file change.",
                "Production Dockerfiles require security and performance considerations. Run containers as non-root users, use specific image tags (node:18.17-alpine) not latest, set NODE_ENV=production, exclude unnecessary files with .dockerignore, and scan images for vulnerabilities using docker scan. Alpine images reduce attack surface and size compared to full Debian images.",
                "Docker Compose orchestrates multi-container applications, defining services (web app, database, redis) in docker-compose.yml. It manages networking, volumes for data persistence, environment variables, and service dependencies. Development uses docker-compose with hot-reload volumes, production uses separate compose files with production configurations and health checks."
            ],
            "why": "Docker eliminates 'works on my machine' problems that plague deployments. Spotify, PayPal, and Netflix use Docker for consistent deployments across thousands of servers. A properly containerized app deploys to any cloud provider without changes. Images are portable between development laptops and production Kubernetes clusters. Multi-stage builds save hundreds of dollars monthly in registry storage and deployment bandwidth costs.",
            "prompts": {
                "goal": "Generate an optimized multi-stage Dockerfile for a Next.js application with production and development configurations",
                "before": "Create a Dockerfile for my Next.js app",
                "after": "Create an optimized Dockerfile for a Next.js 14 application with these requirements: multi-stage build (dependencies, builder, runner), use Node 18 Alpine images, implement layer caching for npm install, run as non-root user, include .dockerignore file, support both development and production builds, final image under 200MB, include health check. Also provide a docker-compose.yml for local development with hot-reload and PostgreSQL database. Explain each Dockerfile instruction and optimization decision.",
                "resultBefore": "Single-stage Dockerfile copying everything, installing all dependencies, 800MB+ image size, running as root, no caching optimization.",
                "resultAfter": "Optimized multi-stage Dockerfile: 1) Dependencies stage: FROM node:18-alpine, WORKDIR /app, COPY package*.json, RUN npm ci --only=production (cache layer). 2) Builder stage: FROM node:18-alpine, COPY package*.json, RUN npm ci (includes devDependencies), COPY . ., RUN npm run build (only rebuilds when code changes). 3) Runner stage: FROM node:18-alpine, ENV NODE_ENV=production, USER node, COPY --from=builder --chown=node:node /app/.next ./.next, COPY --from=dependencies /app/node_modules ./node_modules, CMD [\"npm\", \"start\"]. Final image: 180MB. .dockerignore: node_modules, .git, .next, .env.local. docker-compose.yml with web service (build context, volumes for hot-reload, environment variables) and postgres service. Explanation: Multi-stage separates build-time and runtime, Alpine reduces size by 400MB, npm ci uses package-lock for reproducible installs, non-root user improves security, layer ordering optimizes cache hits."
            },
            "pitfalls": [
                {
                    "title": "Copying node_modules",
                    "description": "Including node_modules in COPY instructions bloats images and breaks cross-platform compatibility. Always npm install in container and .dockerignore node_modules."
                },
                {
                    "title": "Using latest Tag",
                    "description": "Base images tagged 'latest' change unpredictably, breaking builds. Use specific version tags like node:18.17-alpine for reproducible builds."
                },
                {
                    "title": "Running as Root",
                    "description": "Default root user in containers increases security risks. Always create and switch to non-root user in production containers."
                },
                {
                    "title": "No Layer Caching",
                    "description": "Copying source code before dependencies reinstalls npm packages on every code change. Copy package.json first, install, then copy code."
                }
            ],
            "keywords": [
                {
                    "word": "Dockerfile",
                    "meaning": "Text file containing instructions to build a Docker image, defining base image, dependencies, and startup command",
                    "usage": "Our Dockerfile installs Node.js dependencies and builds the application in a reproducible environment"
                },
                {
                    "word": "Multi-Stage Build",
                    "meaning": "Docker build using multiple FROM statements to separate build and runtime environments, reducing final image size",
                    "usage": "Multi-stage build reduced our image from 1.2GB to 200MB by separating build tools from runtime"
                },
                {
                    "word": "Layer Caching",
                    "meaning": "Docker's reuse of unchanged image layers to speed up builds by skipping redundant operations",
                    "usage": "Layer caching speeds builds from 5 minutes to 30 seconds by reusing npm install results"
                },
                {
                    "word": "Base Image",
                    "meaning": "Starting point for Docker images defined by FROM instruction, providing OS and runtime environment",
                    "usage": "We use node:18-alpine base image for small size and Node.js 18 runtime"
                },
                {
                    "word": "Docker Compose",
                    "meaning": "Tool for defining and running multi-container applications using YAML configuration files",
                    "usage": "Docker Compose starts our app, database, and Redis cache together with one command"
                },
                {
                    "word": ".dockerignore",
                    "meaning": "File listing paths to exclude from Docker build context, similar to .gitignore",
                    "usage": ".dockerignore prevents copying node_modules and .git into Docker images, reducing build time"
                }
            ],
            "resources": [
                {
                    "title": "Docker Best Practices - Official Documentation",
                    "url": "https://docs.docker.com/develop/dev-best-practices/"
                },
                {
                    "title": "Multi-Stage Build Guide",
                    "url": "https://docs.docker.com/build/building/multi-stage/"
                },
                {
                    "title": "Node.js Docker Best Practices - Snyk",
                    "url": "https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/"
                }
            ],
            "notes": "Start with official Node images, then optimize. Use Alpine variants for smaller sizes. Keep .dockerignore updated. Pin all dependency versions for reproducibility. Scan images for vulnerabilities before deploying. Document environment variables in Dockerfile comments."
        },
        {
            "id": "WP-DP-03",
            "title": "CI/CD for Websites",
            "summary": "Implement automated CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins for testing, building, and deploying websites with zero-downtime releases and automatic rollbacks.",
            "objectives": [
                "Create automated CI/CD pipelines that test, build, and deploy on every commit",
                "Implement staging and production deployment workflows with manual approval gates",
                "Configure automated testing, security scanning, and deployment notifications"
            ],
            "theory": [
                "Continuous Integration (CI) automatically builds and tests code on every commit, catching bugs before they reach production. GitHub Actions, GitLab CI, and Jenkins watch repositories for changes, trigger workflows defined in YAML files, run test suites, and report results. If tests fail, the build is marked failed and code doesn't deploy. This prevents broken code from reaching users.",
                "Continuous Deployment (CD) automatically deploys passing builds to staging or production environments. Workflows define deployment steps: build Docker image, push to registry, update Kubernetes deployments, or trigger Vercel deploys. Production deployments often require manual approval or deploy only from main branch. Staging deploys automatically on every merge for testing before production.",
                "Pipeline stages typically follow: 1) Install dependencies, 2) Lint code for style issues, 3) Run unit and integration tests, 4) Build production assets, 5) Security scan dependencies, 6) Build and push Docker images, 7) Deploy to staging, 8) Run smoke tests, 9) Manual approval gate, 10) Deploy to production. Each stage outputs artifacts used by subsequent stages.",
                "Environment-specific workflows manage multiple deployment targets. Feature branches deploy to preview environments for testing, develop branch deploys to staging, main/master deploys to production. Environment variables, secrets, and configurations differ per environment. GitHub Environments enable environment-specific secrets, required reviewers, and deployment protections like passing status checks.",
                "Deployment strategies minimize downtime and risk. Blue-green deployments maintain two identical environments, switching traffic between them. Rolling updates gradually replace old versions. Canary releases deploy to small user percentages first. Feature flags decouple deploys from releases, enabling instant rollbacks by toggling flags. Health checks verify deployments succeeded before marking complete."
            ],
            "why": "Amazon deploys code every 11.7 seconds using CI/CD, shipping features faster than competitors. Netflix deploys thousands of times daily with zero downtime. Manual deployments are error-prone—humans forget steps, enter wrong commands, or deploy wrong versions. Automated CI/CD reduces deployment failures by 80%, enables rapid rollbacks, and frees developers from tedious deployment tasks. Companies without CI/CD waste hours on manual deploys and suffer more production incidents.",
            "prompts": {
                "goal": "Create a complete GitHub Actions CI/CD pipeline for a full-stack website with automated testing, staging, and production deployments",
                "before": "Set up CI/CD for my website",
                "after": "Create a complete GitHub Actions CI/CD pipeline for a full-stack website (React frontend, Node.js backend, PostgreSQL) with these features: run tests on every pull request, deploy to staging environment on merges to develop branch, deploy to production on merges to main with manual approval, build and push Docker images, run security scans with npm audit, send Slack notifications on deployment success/failure, implement environment-specific configurations. Provide: 1) Complete .github/workflows/ci.yml for testing, 2) .github/workflows/deploy-staging.yml, 3) .github/workflows/deploy-production.yml, 4) Environment setup instructions for GitHub secrets, 5) Deployment status checks and rollback procedure.",
                "resultBefore": "Basic workflow that runs npm test without deployment, security scanning, or environment management. No staging/production separation.",
                "resultAfter": "Complete CI/CD pipeline with three workflows: 1) ci.yml: Triggers on pull requests, runs lint (eslint), unit tests (jest), integration tests, builds frontend and backend, uploads coverage to Codecov, runs npm audit fix --dry-run for security. 2) deploy-staging.yml: Triggers on push to develop, builds Docker images (docker/build-push-action), pushes to Docker Hub, deploys to staging server via SSH, runs smoke tests against staging URL, posts Slack notification. 3) deploy-production.yml: Triggers on push to main, requires manual approval (environment: production with required_reviewers), builds images with production tags, deploys to production with rolling update strategy, runs health checks, posts Slack with deployment details and rollback command. GitHub Secrets: DOCKER_USERNAME, DOCKER_PASSWORD, STAGING_SSH_KEY, PROD_SSH_KEY, SLACK_WEBHOOK. Environment-specific variables in GitHub Environments (staging/production). Rollback: git revert commit, push to main, or kubectl rollout undo deployment/web-app. Status checks required before production deploy: tests pass, security scan clean, staging deployed successfully."
            },
            "pitfalls": [
                {
                    "title": "No Test Stage",
                    "description": "Deploying without running tests defeats CI/CD purpose. Always run full test suite before allowing deployments, blocking deploys on test failures."
                },
                {
                    "title": "Secrets in Code",
                    "description": "Hardcoding API keys or passwords in workflow files exposes credentials. Use GitHub Secrets for sensitive values, never commit them."
                },
                {
                    "title": "No Rollback Plan",
                    "description": "Automated deployments without rollback procedures leave teams stranded during incidents. Document and test rollback commands before incidents occur."
                },
                {
                    "title": "Deploying on Every Commit",
                    "description": "Deploying production on every commit creates chaos. Use branch protections—production deploys only from main, staging from develop."
                }
            ],
            "keywords": [
                {
                    "word": "CI/CD",
                    "meaning": "Continuous Integration/Continuous Deployment - automated building, testing, and deployment of code changes",
                    "usage": "Our CI/CD pipeline automatically tests and deploys code within 10 minutes of merging pull requests"
                },
                {
                    "word": "Pipeline",
                    "meaning": "Automated workflow of stages processing code from commit to deployment, including build, test, and deploy steps",
                    "usage": "The pipeline runs linting, tests, builds, and deploys sequentially, failing fast on any errors"
                },
                {
                    "word": "Workflow",
                    "meaning": "YAML configuration file defining automation steps triggered by repository events like pushes or pull requests",
                    "usage": "Our GitHub Actions workflow triggers on pull requests to run tests before merging"
                },
                {
                    "word": "Environment",
                    "meaning": "Isolated deployment target with specific configuration, typically development, staging, and production",
                    "usage": "Staging environment mirrors production but uses test database and payment sandbox"
                },
                {
                    "word": "Artifact",
                    "meaning": "File produced by build process (compiled code, Docker image, bundle) passed between pipeline stages",
                    "usage": "Build stage produces Docker image artifact consumed by deployment stage"
                },
                {
                    "word": "Approval Gate",
                    "meaning": "Manual checkpoint in pipeline requiring human approval before proceeding to next stage",
                    "usage": "Production deployments pause at approval gate requiring manager confirmation before proceeding"
                }
            ],
            "resources": [
                {
                    "title": "GitHub Actions Documentation",
                    "url": "https://docs.github.com/en/actions"
                },
                {
                    "title": "GitLab CI/CD Tutorial",
                    "url": "https://docs.gitlab.com/ee/ci/quick_start/"
                },
                {
                    "title": "CI/CD Best Practices - CircleCI",
                    "url": "https://circleci.com/blog/ci-cd-best-practices/"
                }
            ],
            "notes": "Start simple—automate testing first, then staging deploys, finally production. Keep workflows in version control. Use branch protections requiring successful CI before merging. Monitor pipeline performance and optimize slow stages. Document deployment process for team members."
        },
        {
            "id": "WP-DP-04",
            "title": "Deploying to Vercel / Netlify",
            "summary": "Deploy modern websites to Vercel and Netlify platforms with automatic builds, previews, serverless functions, and CDN distribution for optimal performance and developer experience.",
            "objectives": [
                "Deploy static sites and frameworks (Next.js, React, Vue) to Vercel/Netlify with Git integration",
                "Configure serverless functions for backend logic without managing servers",
                "Implement preview deployments for every pull request and branch"
            ],
            "theory": [
                "Vercel and Netlify are platforms optimizing deployment of frontend applications and static sites. They integrate with Git repositories, automatically building and deploying on every push. No server management required—push code to GitHub, platforms detect frameworks (Next.js, React, Vue), build projects, and deploy to global CDN. Updates propagate to users within minutes without downtime or manual steps.",
                "Preview deployments create unique URLs for every pull request and branch, enabling testing changes before merging. Each preview is isolated with its own environment, allowing parallel development without conflicts. Teams review features at preview URLs, run automated tests against them, and get feedback before production. Vercel creates URLs like project-git-feature-branch.vercel.app automatically.",
                "Serverless functions eliminate backend servers for simple APIs. Place JavaScript/TypeScript files in /api directory, and platforms create HTTP endpoints. Functions handle form submissions, API proxying, authentication, and data fetching without managing Node.js servers. They scale automatically, only charge for execution time, and deploy with frontend code in one atomic deployment.",
                "Build configuration customizes deployments through vercel.json or netlify.toml files. Configure build commands (npm run build), output directories (dist or .next), environment variables, redirects, headers, and custom domains. Platforms auto-detect common frameworks but configurations override defaults for complex setups or monorepos selecting specific packages.",
                "Edge networks distribute applications globally. Vercel and Netlify deploy to 100+ edge locations worldwide, serving users from nearest data centers. Static assets cache at edge, serverless functions run near users. This reduces latency from seconds to milliseconds—a user in Tokyo gets content from Asia data centers, not US servers. Combined with optimizations like automatic image optimization and compression."
            ],
            "why": "Over 1 million developers use Vercel and Netlify because they eliminate DevOps overhead while providing enterprise-grade performance. Hulu rebuilt their website on Next.js/Vercel, reducing load times 50%. Netlify hosts 3+ million sites with 99.99% uptime. These platforms enable small teams to achieve performance previously requiring dedicated DevOps engineers and infrastructure investments. Free tiers support indie developers and startups before scaling to paid plans.",
            "prompts": {
                "goal": "Deploy a Next.js e-commerce site to Vercel with serverless API routes, environment variables, and custom domain",
                "before": "Deploy my Next.js site to Vercel",
                "after": "Deploy a Next.js 14 e-commerce website to Vercel with these requirements: GitHub repository integration with automatic deployments, preview deployments for pull requests, serverless API routes for product search and checkout (/api/products, /api/checkout), environment variables for Stripe API keys and database URL, custom domain (shop.example.com), redirect www to non-www, enable automatic image optimization, configure caching headers. Provide: 1) Step-by-step Vercel deployment setup from GitHub, 2) vercel.json configuration file, 3) Serverless function examples for product API, 4) Environment variables setup (development vs production), 5) Custom domain configuration with DNS settings, 6) Preview deployment workflow explanation.",
                "resultBefore": "Basic 'connect GitHub repo and click deploy' without configuration, environment variables, serverless functions, or custom domain setup.",
                "resultAfter": "Complete Vercel deployment guide: 1) Setup: Login to Vercel, click 'New Project', import GitHub repo, Vercel auto-detects Next.js, configure build settings (build command: npm run build, output: .next), click Deploy. 2) vercel.json: {\"rewrites\": [{\"source\": \"/api/:path*\", \"destination\": \"/api/:path*\"}], \"redirects\": [{\"source\": \"https://www.shop.example.com/:path*\", \"destination\": \"https://shop.example.com/:path*\", \"permanent\": true}], \"headers\": [{\"source\": \"/(.*)\", \"headers\": [{\"key\": \"Cache-Control\", \"value\": \"public, max-age=31536000, immutable\"}]}]}. 3) Serverless functions: /api/products/[id].js: export default async function handler(req, res) { const {id} = req.query; const product = await db.products.findById(id); res.json(product); }. 4) Environment Variables: In Vercel dashboard Settings → Environment Variables, add STRIPE_SECRET_KEY (Production), STRIPE_PUBLISHABLE_KEY (Production + Preview), DATABASE_URL (different for production/preview). Local: .env.local. 5) Custom domain: Vercel Settings → Domains, add shop.example.com, configure DNS with CNAME record pointing to cname.vercel-dns.com, automatic SSL. 6) Preview workflow: Create PR → Vercel bot comments with preview URL → test changes → merge → auto-deploy to production."
            },
            "pitfalls": [
                {
                    "title": "Missing Environment Variables",
                    "description": "Forgetting to set production environment variables causes runtime errors. Always configure all required variables in Vercel/Netlify dashboard before deploying."
                },
                {
                    "title": "Incorrect Build Settings",
                    "description": "Wrong build command or output directory fails deployments. Verify framework detection or manually configure build settings matching your project."
                },
                {
                    "title": "Serverless Function Timeouts",
                    "description": "Free tier functions timeout after 10 seconds. Long-running tasks (video processing, large data imports) need different architecture or paid plans."
                },
                {
                    "title": "No Preview Environment Variables",
                    "description": "Using production API keys in preview deployments creates billing issues. Set preview-specific variables pointing to test/sandbox services."
                }
            ],
            "keywords": [
                {
                    "word": "Serverless Function",
                    "meaning": "Backend code running on-demand without managing servers, scaling automatically per request",
                    "usage": "Our /api/checkout serverless function processes payments without running a dedicated backend server"
                },
                {
                    "word": "Preview Deployment",
                    "meaning": "Unique deployment URL created for each pull request or branch, enabling testing before production",
                    "usage": "Preview deployments let stakeholders test new features at custom URLs before merging code"
                },
                {
                    "word": "Edge Network",
                    "meaning": "Global distribution network serving content from data centers closest to users for minimal latency",
                    "usage": "Vercel's edge network reduced page load times from 3 seconds to 400ms for international users"
                },
                {
                    "word": "Git Integration",
                    "meaning": "Automatic connection between Git repository and deployment platform, triggering builds on commits",
                    "usage": "Git integration automatically deploys our site whenever we push to the main branch"
                },
                {
                    "word": "Automatic SSL",
                    "meaning": "Free HTTPS certificates automatically provisioned and renewed for custom domains",
                    "usage": "Vercel's automatic SSL secured our domain with HTTPS within minutes of adding it"
                },
                {
                    "word": "Atomic Deployment",
                    "meaning": "Deployment updating all files simultaneously, preventing users from seeing mixed old/new content",
                    "usage": "Atomic deployments ensure users never see broken states during updates"
                }
            ],
            "resources": [
                {
                    "title": "Vercel Documentation - Deployments",
                    "url": "https://vercel.com/docs/deployments/overview"
                },
                {
                    "title": "Netlify Docs - Get Started",
                    "url": "https://docs.netlify.com/get-started/"
                },
                {
                    "title": "Serverless Functions Guide - Vercel",
                    "url": "https://vercel.com/docs/functions/serverless-functions"
                }
            ],
            "notes": "Start with free tier to learn. Both platforms offer generous free tiers. Use preview deployments for all features. Configure different environment variables for preview vs production. Monitor usage to avoid surprise bills. Consider Netlify for static sites, Vercel for Next.js apps."
        },
        {
            "id": "WP-DP-05",
            "title": "Hosting with Custom Domains",
            "summary": "Configure custom domains for websites including DNS setup, SSL certificates, subdomain management, and domain migration strategies for professional web presence.",
            "objectives": [
                "Configure DNS records (A, CNAME, MX) to point custom domains to hosting providers",
                "Set up SSL certificates for HTTPS with automatic renewal",
                "Manage subdomains, redirects, and multiple domains for single applications"
            ],
            "theory": [
                "Custom domains provide professional branding instead of default hosting URLs like myapp.vercel.app. Registrars (GoDaddy, Namecheap, Cloudflare) sell domains; you configure DNS records to point domains to hosting providers. A records point to IP addresses (traditional servers), CNAME records point to hostnames (Vercel/Netlify), TXT records verify ownership. Changes propagate globally within 24-48 hours but often within minutes.",
                "DNS record types serve different purposes: A records map domains to IPv4 addresses (example.com → 192.0.2.1), AAAA for IPv6, CNAME aliases one domain to another (www.example.com → example.com), MX routes email, TXT contains verification codes for services. Most web hosting uses A records for root domains and CNAME for www subdomains pointing to hosting platforms.",
                "SSL/TLS certificates encrypt traffic between browsers and servers, displaying padlock icons and enabling HTTPS. Modern hosting platforms (Vercel, Netlify, Cloudflare Pages) provide free automatic SSL via Let's Encrypt. After adding custom domain, platforms provision certificates within minutes and auto-renew every 90 days. Manual certificate management requires Certificate Authority, private keys, and renewal tracking—automated solutions preferred.",
                "Subdomain strategies organize applications: www for main site, blog for content, api for backend, app for web application, cdn for static assets. Each subdomain can point to different services or servers. Root domain (example.com) and www subdomain (www.example.com) should redirect to one canonical version to avoid duplicate content penalties. Configure one as primary, redirect the other.",
                "Domain migration involves transferring domains between registrars or pointing existing domains to new hosting. Unlock domain at current registrar, obtain transfer authorization code, initiate transfer at new registrar (takes 5-7 days), update DNS records to point to new hosting. Always backup DNS records before changes. Use low TTL (time-to-live) values during migrations for quick rollback if issues occur."
            ],
            "why": "Custom domains build brand trust—78% of users won't trust websites without custom domains. example.netlify.app looks unprofessional; example.com builds credibility. HTTPS is mandatory—browsers flag HTTP sites as 'Not Secure', Google penalizes HTTP sites in search rankings, and many APIs refuse HTTP connections. Professional businesses need custom domains with SSL. Domain migration enables switching hosting providers without changing brand URLs.",
            "prompts": {
                "goal": "Configure a custom domain with SSL for a website hosted on Netlify, including www redirect and subdomain for API",
                "before": "Add my domain to my Netlify site",
                "after": "Configure custom domain 'mystore.com' for Netlify-hosted website with these requirements: root domain (mystore.com) as primary, redirect www.mystore.com to root, subdomain api.mystore.com points to separate API server at IP 203.0.113.10, email uses Google Workspace (MX records), enable automatic SSL for all domains. Provide: 1) Complete DNS record configuration with record types and values, 2) Step-by-step Netlify domain setup, 3) SSL certificate configuration, 4) Verification steps to confirm everything works, 5) Troubleshooting common DNS issues. Assume domain registered with Namecheap.",
                "resultBefore": "Vague instructions like 'add domain in Netlify settings and update DNS' without specific records, values, or SSL setup.",
                "resultAfter": "Complete domain configuration: 1) DNS Records at Namecheap: A record for @ (root) → Netlify's load balancer IP (104.198.14.52), CNAME for www → yoursite.netlify.app, A record for api → 203.0.113.10, MX records for email (Google Workspace): Priority 1 → aspmx.l.google.com, Priority 5 → alt1.aspmx.l.google.com, TXT record for SPF: v=spf1 include:_spf.google.com ~all. 2) Netlify setup: Dashboard → Domain Settings → Add custom domain → enter mystore.com → Netlify detects DNS records → Add www.mystore.com as domain alias → Configure redirect from www to root under Redirects. 3) SSL: Netlify auto-provisions Let's Encrypt certificate for mystore.com and www.mystore.com within 24 hours (usually 10 minutes) → Verify at https://mystore.com (padlock icon) → Enable 'Force HTTPS' to redirect HTTP to HTTPS. 4) Verification: dig mystore.com (should show Netlify IP), dig www.mystore.com (should CNAME to netlify), visit https://mystore.com (loads site with padlock), visit http://www.mystore.com (redirects to https://mystore.com). 5) Troubleshooting: DNS not resolving → wait up to 48 hours for propagation, check records with dig or nslookup. SSL not working → verify domain points to Netlify before requesting certificate. www not redirecting → check Netlify redirect rules."
            },
            "pitfalls": [
                {
                    "title": "Forgetting DNS Propagation Time",
                    "description": "DNS changes don't apply instantly. Expecting immediate results causes confusion. Wait 24-48 hours for full propagation, though often works within hours."
                },
                {
                    "title": "Wrong Record Types",
                    "description": "Using A record when CNAME required (or vice versa) prevents proper routing. Root domains need A records; subdomains typically use CNAME."
                },
                {
                    "title": "Not Redirecting www and Root",
                    "description": "Allowing both www.example.com and example.com creates duplicate content. Choose one primary version and redirect the other."
                },
                {
                    "title": "Expired SSL Certificates",
                    "description": "Manual SSL certificates expire without renewal. Use automatic renewal (Let's Encrypt via hosting platforms) to avoid downtime from expired certificates."
                }
            ],
            "keywords": [
                {
                    "word": "DNS",
                    "meaning": "Domain Name System - translates human-readable domain names to IP addresses that computers use",
                    "usage": "DNS records configure mystore.com to point to our Netlify hosting server's IP address"
                },
                {
                    "word": "A Record",
                    "meaning": "DNS record mapping a domain name directly to an IPv4 address",
                    "usage": "A record points api.mystore.com to our API server at IP address 203.0.113.10"
                },
                {
                    "word": "CNAME Record",
                    "meaning": "DNS record creating an alias from one domain to another domain name",
                    "usage": "CNAME record makes www.mystore.com an alias pointing to mystore.netlify.app"
                },
                {
                    "word": "SSL/TLS Certificate",
                    "meaning": "Digital certificate enabling HTTPS encryption between browsers and servers, verified by Certificate Authorities",
                    "usage": "Let's Encrypt SSL certificate encrypts all traffic to mystore.com, shown by browser padlock"
                },
                {
                    "word": "Subdomain",
                    "meaning": "Additional level before main domain, creating distinct sections like blog.example.com or api.example.com",
                    "usage": "We use api.mystore.com subdomain for backend and www.mystore.com for main website"
                },
                {
                    "word": "TTL",
                    "meaning": "Time To Live - duration DNS records are cached before checking for updates, typically 300-86400 seconds",
                    "usage": "Setting TTL to 300 seconds during migration allows quick rollback if issues occur"
                }
            ],
            "resources": [
                {
                    "title": "Cloudflare Learning Center - DNS",
                    "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
                },
                {
                    "title": "Let's Encrypt - Free SSL Certificates",
                    "url": "https://letsencrypt.org/getting-started/"
                },
                {
                    "title": "Google Domains - DNS Basics",
                    "url": "https://support.google.com/domains/answer/3290309"
                }
            ],
            "notes": "Use Cloudflare for free DNS management and CDN benefits. Document all DNS records before making changes. Use online tools (whatsmydns.net) to check DNS propagation globally. Keep domain registration and hosting separate for flexibility. Enable WHOIS privacy to protect personal information."
        },
        {
            "id": "WP-DP-06",
            "title": "Environment Variables",
            "summary": "Manage environment-specific configurations using environment variables for API keys, database URLs, and feature flags across development, staging, and production environments securely.",
            "objectives": [
                "Implement environment variables for separating configuration from code",
                "Secure sensitive credentials using secret management systems",
                "Configure different variable values per environment (dev, staging, production)"
            ],
            "theory": [
                "Environment variables store configuration outside source code, enabling same codebase to run in multiple environments with different settings. Database URLs differ between development (localhost) and production (cloud), API keys differ for test and live modes, debug flags enable in development but disable in production. Applications read variables at runtime via process.env in Node.js or import.meta.env in Vite.",
                "The Twelve-Factor App methodology mandates strict separation of config from code. Never hardcode API keys, passwords, or environment-specific URLs in source files. Config belongs in environment variables, making code portable across environments. Changing database server shouldn't require code changes—just update DATABASE_URL variable. This enables automated deployments and reduces configuration errors.",
                "Environment variable management uses .env files locally and platform secrets in production. During development, .env files store variables (loaded by dotenv library), but never commit .env to git—use .env.example as template showing required variables without values. Production uses platform-specific secrets: Vercel Environment Variables, GitHub Actions Secrets, AWS Secrets Manager, Kubernetes Secrets.",
                "Variable naming conventions improve clarity: PREFIX variables by category (DATABASE_URL, STRIPE_API_KEY, REDIS_URL), use SCREAMING_SNAKE_CASE, explicitly indicate environment (NODE_ENV=production), mark sensitive variables clearly. Document required variables in README or .env.example. Validate variables at application startup to fail fast if missing critical config.",
                "Security best practices include: rotate secrets regularly, use different keys per environment (never share production keys with staging), grant minimal access (developers don't need production keys), encrypt secrets at rest, audit access logs, use secret scanning tools (git-secrets) to prevent accidental commits. Compromised credentials require immediate rotation and incident response."
            ],
            "why": "Capital One suffered a breach exposing 100 million customers due to misconfigured access credentials. Proper environment variable management prevents credential leaks. Uber was fined $148 million for exposing database credentials in GitHub, enabling hackers to access 57 million records. Environment variables enable secure, flexible deployments. Companies deploy same code to hundreds of environments—variables make this possible without code changes or security risks.",
            "prompts": {
                "goal": "Set up environment variable management for a full-stack app across local development, staging, and production with secure secrets",
                "before": "Use environment variables in my app",
                "after": "Configure environment variables for a MERN stack app (MongoDB, Express, React, Node) across three environments: local development, staging (on Render), production (on Vercel). Variables needed: MongoDB URL, JWT secret, Stripe API keys (test/live), SendGrid API key, OAuth client ID/secret, and feature flags. Provide: 1) .env.example file template, 2) .env file for local development, 3) Configuration for Vercel environment variables with environment-specific values, 4) Security best practices for secret rotation, 5) Code to validate required variables at startup, 6) Instructions for team members to set up local environment.",
                "resultBefore": "Hardcoded API keys in source code or single .env file without environment separation. No validation, no documentation, keys committed to git.",
                "resultAfter": "Complete environment variable system: 1) .env.example: MONGODB_URL=, JWT_SECRET=, STRIPE_PUBLISHABLE_KEY=, STRIPE_SECRET_KEY=, SENDGRID_API_KEY=, OAUTH_CLIENT_ID=, OAUTH_CLIENT_SECRET=, NODE_ENV=, FEATURE_NEW_CHECKOUT=. 2) .env (local, gitignored): MONGODB_URL=mongodb://localhost:27017/myapp, JWT_SECRET=dev-secret-change-in-production, STRIPE_PUBLISHABLE_KEY=pk_test_..., STRIPE_SECRET_KEY=sk_test_..., NODE_ENV=development, FEATURE_NEW_CHECKOUT=true. 3) Vercel Production variables: MONGODB_URL=mongodb+srv://prod.mongodb.net/myapp, JWT_SECRET=<64-char random string>, STRIPE_PUBLISHABLE_KEY=pk_live_..., STRIPE_SECRET_KEY=sk_live_..., NODE_ENV=production, FEATURE_NEW_CHECKOUT=false. Preview/Staging gets test keys and staging database. 4) Security: Rotate JWT_SECRET quarterly, separate Stripe test/live keys, never log sensitive variables, use 1Password for team secret sharing. 5) Validation code: const requiredEnvVars = ['MONGODB_URL', 'JWT_SECRET', 'STRIPE_SECRET_KEY']; requiredEnvVars.forEach(envVar => { if (!process.env[envVar]) { throw new Error(`Missing required environment variable: ${envVar}`); } }); 6) Team setup: git clone, copy .env.example to .env, fill in local MongoDB URL and obtain dev API keys from team password manager, npm install dotenv, npm run dev."
            },
            "pitfalls": [
                {
                    "title": "Committing .env Files",
                    "description": "Accidentally committing .env files to git exposes secrets publicly. Always add .env to .gitignore and use .env.example for templates."
                },
                {
                    "title": "Using Production Keys Locally",
                    "description": "Testing with live API keys causes real charges or data modifications. Always use test/sandbox keys in development and staging environments."
                },
                {
                    "title": "No Variable Validation",
                    "description": "Missing environment variables cause runtime crashes in production. Validate all required variables at application startup to fail fast with clear errors."
                },
                {
                    "title": "Oversharing Secrets",
                    "description": "Granting all developers production access increases risk. Limit production secret access to senior engineers and use read-only keys where possible."
                }
            ],
            "keywords": [
                {
                    "word": "Environment Variable",
                    "meaning": "Configuration value stored outside code, accessible at runtime via system environment",
                    "usage": "DATABASE_URL environment variable changes between localhost development and production cloud database"
                },
                {
                    "word": "Secret",
                    "meaning": "Sensitive credential like API key or password requiring encryption and access control",
                    "usage": "Stripe secret keys are stored as encrypted secrets in Vercel, never in source code"
                },
                {
                    "word": "dotenv",
                    "meaning": "Library loading environment variables from .env files into process.env for local development",
                    "usage": "dotenv package loads variables from .env file when running app locally"
                },
                {
                    "word": ".env.example",
                    "meaning": "Template file listing required environment variables without values, safe to commit to version control",
                    "usage": ".env.example documents required variables for new team members without exposing secrets"
                },
                {
                    "word": "Secret Rotation",
                    "meaning": "Regular practice of changing passwords and API keys to limit damage from potential compromises",
                    "usage": "We rotate database passwords quarterly following secret rotation best practices"
                },
                {
                    "word": "Feature Flag",
                    "meaning": "Boolean environment variable enabling/disabling features without code deployment",
                    "usage": "FEATURE_NEW_CHECKOUT=true enables new checkout flow without deploying new code"
                }
            ],
            "resources": [
                {
                    "title": "The Twelve-Factor App - Configuration",
                    "url": "https://12factor.net/config"
                },
                {
                    "title": "dotenv Documentation",
                    "url": "https://github.com/motdotla/dotenv"
                },
                {
                    "title": "AWS Secrets Manager Best Practices",
                    "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html"
                }
            ],
            "notes": "Document all required environment variables in README.md. Use strong random strings for secrets (64+ characters). Never log environment variables. Use secret scanning tools (GitGuardian, TruffleHog) to detect accidental commits. Consider vaults (HashiCorp Vault) for enterprise secret management."
        },
        {
            "id": "WP-DP-07",
            "title": "SSL & Security Setup",
            "summary": "Implement comprehensive website security including SSL/TLS configuration, security headers (CSP, HSTS), protection against common attacks (XSS, CSRF), and security best practices.",
            "objectives": [
                "Configure SSL/TLS certificates with strong cipher suites and HTTPS enforcement",
                "Implement security headers (CSP, HSTS, X-Frame-Options) protecting against common attacks",
                "Set up additional security measures including rate limiting, CSRF tokens, and input validation"
            ],
            "theory": [
                "SSL/TLS certificates establish encrypted connections between browsers and servers, protecting data in transit from eavesdropping. Modern hosting automatically provisions certificates via Let's Encrypt, but configuration matters: disable old TLS 1.0/1.1 protocols (use TLS 1.2+), prefer strong cipher suites (AES-256-GCM), enable HTTPS-only cookies, redirect all HTTP to HTTPS. SSL Labs tests (ssllabs.com) grade configurations—A+ rating requires perfect configuration.",
                "Content Security Policy (CSP) headers prevent XSS attacks by restricting resource loading sources. CSP defines allowed sources for scripts, styles, images, and frames. 'Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com' only allows scripts from same origin and cdn.example.com, blocking injected malicious scripts. Start with permissive policy in report-only mode, monitor violations, gradually tighten. CSP eliminates most XSS vulnerabilities.",
                "HTTP Strict Transport Security (HSTS) forces browsers to always use HTTPS, preventing SSL stripping attacks. 'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload' tells browsers to only connect via HTTPS for 1 year, including all subdomains. HSTS preload list hardcodes domain in browsers, protecting even first visit. Other critical headers: X-Frame-Options prevents clickjacking, X-Content-Type-Options prevents MIME sniffing.",
                "Cross-Site Request Forgery (CSRF) protection validates that requests originate from your site, not malicious sites. Generate unique tokens per session, include in forms/AJAX requests, validate server-side before processing. Modern frameworks (Next.js, Django) include CSRF protection by default. Without CSRF tokens, attackers create malicious pages that submit forms to your site using victim's session.",
                "Input validation and sanitization prevent injection attacks. Never trust user input—validate data types, lengths, and formats server-side. Sanitize HTML input to remove <script> tags, parameterize SQL queries to prevent SQL injection, use ORM libraries that escape inputs automatically. Rate limiting prevents brute force attacks (limit login attempts to 5/minute). Together these form defense-in-depth security."
            ],
            "why": "Equifax breach exposed 147 million people due to missing security patches. British Airways fined £20 million for security failure. HTTPS is mandatory—Google Chrome marks HTTP sites as 'Not Secure', browsers block powerful APIs (geolocation, camera) on HTTP, and search rankings penalize HTTP. Proper security headers prevent 90% of web attacks. Security isn't optional—it's regulatory requirement (GDPR, PCI-DSS) and user expectation.",
            "prompts": {
                "goal": "Configure comprehensive security for an Express.js website including SSL, security headers, CSRF protection, and rate limiting",
                "before": "Make my website secure",
                "after": "Implement complete security for an Express.js e-commerce site with these requirements: force HTTPS with strong SSL config, implement CSP allowing only trusted script sources, enable HSTS with preload, prevent clickjacking, add CSRF protection to forms, rate limit login and API endpoints, validate and sanitize all inputs, secure cookies, add security audit logging. Provide: 1) Express.js middleware configuration with helmet.js, 2) CSP configuration allowing app scripts and trusted CDNs, 3) CSRF implementation, 4) Rate limiting setup, 5) Secure cookie configuration, 6) SSL testing checklist and expected SSL Labs score.",
                "resultBefore": "Generic 'use HTTPS' advice without implementation details, headers, CSRF, rate limiting, or validation.",
                "resultAfter": "Complete security implementation: 1) Helmet.js middleware: const helmet = require('helmet'); app.use(helmet({ contentSecurityPolicy: { directives: { defaultSrc: [\"'self'\"], scriptSrc: [\"'self'\", \"cdn.stripe.com\", \"'unsafe-inline'\"], styleSrc: [\"'self'\", \"fonts.googleapis.com\"], imgSrc: [\"'self'\", \"data:\", \"*.cloudinary.com\"], connectSrc: [\"'self'\", \"api.stripe.com\"] } }, hsts: { maxAge: 31536000, includeSubDomains: true, preload: true } })); 2) HTTPS redirect middleware: app.use((req, res, next) => { if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`); else next(); }); 3) CSRF with csurf: const csrf = require('csurf'); app.use(csrf({ cookie: { secure: true, httpOnly: true, sameSite: 'strict' } })); Include CSRF token in forms: <input type='hidden' name='_csrf' value='{{csrfToken}}'>. 4) Rate limiting: const rateLimit = require('express-rate-limit'); const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: 'Too many login attempts' }); app.post('/login', loginLimiter, loginHandler); 5) Secure cookies: app.use(session({ secret: process.env.SESSION_SECRET, cookie: { secure: true, httpOnly: true, sameSite: 'strict', maxAge: 3600000 }, resave: false, saveUninitialized: false })); 6) Input validation: const { body, validationResult } = require('express-validator'); app.post('/register', [body('email').isEmail().normalizeEmail(), body('password').isLength({min: 8})], (req, res) => { const errors = validationResult(req); if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()}); }); SSL Testing: Run SSL Labs test expecting A+ rating with TLS 1.2+, no weak ciphers, HSTS enabled."
            },
            "pitfalls": [
                {
                    "title": "Overly Permissive CSP",
                    "description": "Using 'unsafe-inline' or wildcard sources (*) in CSP defeats its purpose. Start strict and allow specific sources only as needed."
                },
                {
                    "title": "Missing CSRF on State-Changing Requests",
                    "description": "Forgetting CSRF tokens on POST/PUT/DELETE routes enables attack vectors. Protect all state-changing endpoints, not just forms."
                },
                {
                    "title": "Client-Side Validation Only",
                    "description": "Validating inputs only in JavaScript allows attackers to bypass by manipulating requests. Always validate server-side."
                },
                {
                    "title": "Weak Session Secrets",
                    "description": "Using short or default session secrets enables session hijacking. Generate 64+ character random secrets and rotate regularly."
                }
            ],
            "keywords": [
                {
                    "word": "SSL/TLS",
                    "meaning": "Cryptographic protocols encrypting data transmitted between browsers and servers, enabling HTTPS",
                    "usage": "TLS 1.3 encrypts all traffic to our website, protecting user data from interception"
                },
                {
                    "word": "CSP",
                    "meaning": "Content Security Policy - HTTP header restricting sources from which browsers can load resources",
                    "usage": "CSP header prevents XSS attacks by blocking execution of unauthorized scripts"
                },
                {
                    "word": "HSTS",
                    "meaning": "HTTP Strict Transport Security - header forcing browsers to only use HTTPS connections",
                    "usage": "HSTS protects against SSL stripping by telling browsers to never connect via HTTP"
                },
                {
                    "word": "CSRF",
                    "meaning": "Cross-Site Request Forgery - attack tricking users into submitting unauthorized requests",
                    "usage": "CSRF tokens validate that form submissions originate from our site, not attacker sites"
                },
                {
                    "word": "XSS",
                    "meaning": "Cross-Site Scripting - injection attack inserting malicious scripts into web pages",
                    "usage": "Input sanitization and CSP headers protect against XSS attacks injecting JavaScript"
                },
                {
                    "word": "Rate Limiting",
                    "meaning": "Restricting number of requests per time period to prevent abuse and brute force attacks",
                    "usage": "Rate limiting allows only 5 login attempts per 15 minutes, preventing password guessing"
                }
            ],
            "resources": [
                {
                    "title": "OWASP Top Ten Web Application Security Risks",
                    "url": "https://owasp.org/www-project-top-ten/"
                },
                {
                    "title": "Mozilla Web Security Guidelines",
                    "url": "https://infosec.mozilla.org/guidelines/web_security"
                },
                {
                    "title": "Helmet.js - Express Security Middleware",
                    "url": "https://helmetjs.github.io/"
                }
            ],
            "notes": "Security is continuous, not one-time setup. Regularly update dependencies (npm audit), monitor security advisories, conduct penetration testing, implement logging for security events. Use security scanning tools (Snyk, SonarQube). Test security headers with securityheaders.com."
        },
        {
            "id": "WP-DP-08",
            "title": "Website Monitoring & Logs",
            "summary": "Implement comprehensive monitoring, logging, and alerting systems for websites using APM tools, error tracking, uptime monitoring, and log aggregation for proactive issue detection.",
            "objectives": [
                "Set up application performance monitoring (APM) tracking response times, errors, and user experience",
                "Implement structured logging with log aggregation and analysis tools",
                "Configure uptime monitoring and alerting for proactive incident response"
            ],
            "theory": [
                "Application Performance Monitoring (APM) tracks website health in real-time, measuring response times, error rates, throughput, and resource usage. Tools like New Relic, Datadog, and Sentry instrument applications, collecting metrics and traces. They identify slow endpoints, memory leaks, and errors before users complain. APM dashboards show: average response time (should be <200ms), error rate (should be <1%), requests per minute, and database query performance.",
                "Error tracking captures unhandled exceptions and errors, providing stack traces, user context, and reproduction steps. Sentry automatically catches JavaScript errors in browsers and Node.js errors on servers, alerting teams via Slack/email. Error tracking shows: error frequency, affected users, browser/OS versions, and release versions introducing bugs. This transforms 'something's broken' bug reports into actionable debugging information.",
                "Logging provides audit trails and debugging information by recording application events. Structured logging uses JSON format with consistent fields: timestamp, severity (error/warn/info/debug), message, user_id, request_id, and custom context. Log aggregation tools (Datadog, Elasticsearch/Kibana, Splunk) collect logs from all servers, enabling searches like 'show all errors for user X in last hour'. Logs are essential for debugging production issues.",
                "Uptime monitoring pings websites every 1-5 minutes from multiple global locations, alerting immediately when sites go down. Services like Pingdom, UptimeRobot, and BetterUptime monitor HTTP endpoints, checking for 200 status codes and specific content. They detect issues before user complaints and provide uptime statistics (99.9% = 43 minutes downtime/month). Configure alerts to SMS, Slack, and PagerDuty for 24/7 on-call teams.",
                "Alerting strategies balance signal and noise. Alert on symptoms (users can't checkout) not causes (CPU at 50%), set thresholds based on SLAs (alert if error rate > 1% for 5 minutes), use escalation (Slack → email → SMS → PagerDuty), implement on-call rotations. Alert fatigue from too many alerts leads to ignoring critical issues. Good alerts are actionable, urgent, and infrequent—aim for <5 alerts per week."
            ],
            "why": "Amazon loses $220,000 per minute of downtime. Monitoring enabled Cloudflare to detect and mitigate a DDoS attack within 3 seconds. Stripe's detailed logging allows debugging payment issues affecting millions in transactions. Without monitoring, issues discovered by angry customers instead of alerts. Effective monitoring reduces MTTR (Mean Time To Recovery) from hours to minutes, directly impacting revenue and customer satisfaction. Every serious production website needs comprehensive monitoring.",
            "prompts": {
                "goal": "Set up complete monitoring stack for a Next.js e-commerce site including APM, error tracking, logs, and uptime monitoring",
                "before": "Add monitoring to my website",
                "after": "Implement comprehensive monitoring for a Next.js e-commerce site (5000 daily users, $10K daily revenue) with these requirements: track frontend and backend performance, capture all JavaScript errors with user context, log all checkout flow events, monitor uptime from 3 global locations with <5 minute response, alert on: site down, error rate >2%, checkout success rate <95%, API response time >1 second. Budget: $50/month. Provide: 1) APM setup (Vercel Analytics or alternative), 2) Error tracking configuration (Sentry), 3) Structured logging implementation, 4) Uptime monitoring setup (UptimeRobot), 5) Alert configuration for critical metrics, 6) Dashboard recommendations.",
                "resultBefore": "Basic suggestion to 'use Sentry' without configuration, metrics, logging strategy, or uptime monitoring.",
                "resultAfter": "Complete monitoring stack: 1) APM: Vercel Analytics (built-in) tracks Web Vitals (LCP, FID, CLS), page load times, and API routes. Free with Vercel. Alternative: Datadog APM ($15/month) for detailed traces. 2) Error tracking: Sentry (free tier 5K errors/month). Setup: npm install @sentry/nextjs, npx @sentry/wizard -i nextjs. Configure sentry.client.config.js and sentry.server.config.js with DSN, environment (production), release tracking (Git SHA), and user context (id, email). Enable source maps upload for stack traces. 3) Logging: Winston logger with JSON format: const logger = winston.createLogger({ format: winston.format.json(), transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'app.log' })] }); logger.info('Checkout completed', { user_id, order_id, total }); Ship logs to Datadog ($10/month for 500MB) or free Logtail. 4) Uptime: UptimeRobot (free tier 50 monitors, 5-min interval). Monitor https://mystore.com, https://mystore.com/api/health, https://mystore.com/checkout. Check from US, Europe, Asia locations. 5) Alerts: Sentry → Slack on new errors, email on error spike >100/hour. UptimeRobot → SMS + email when down. Vercel → alert if P99 latency >2s. Custom alert: CloudWatch alarm if checkout success rate <95% (calculate from logs). 6) Dashboard: Vercel dashboard for performance, Sentry dashboard for errors, Datadog custom dashboard showing: orders/hour, checkout funnel, API latencies, error rates by endpoint. Total cost: ~$25/month (Datadog logs + custom metrics)."
            },
            "pitfalls": [
                {
                    "title": "Logging Sensitive Data",
                    "description": "Logging passwords, credit cards, or PII violates privacy and security. Always sanitize logs removing sensitive fields before storing."
                },
                {
                    "title": "Alert Fatigue",
                    "description": "Too many non-critical alerts cause teams to ignore all alerts, missing real incidents. Set thresholds carefully and alert only on actionable issues."
                },
                {
                    "title": "No Log Retention Policy",
                    "description": "Storing logs forever incurs excessive costs and compliance issues. Define retention periods (30-90 days) and automatically delete old logs."
                },
                {
                    "title": "Ignoring Monitoring Costs",
                    "description": "Monitoring tools scale pricing with volume. Unlimited logging or tracing can cost thousands monthly. Monitor your monitoring spend and set budgets."
                }
            ],
            "keywords": [
                {
                    "word": "APM",
                    "meaning": "Application Performance Monitoring - tracking application health, performance, and user experience metrics",
                    "usage": "APM shows our checkout API response time increased to 2 seconds, indicating database issues"
                },
                {
                    "word": "Error Tracking",
                    "meaning": "Automated capture and analysis of application errors with stack traces and user context",
                    "usage": "Sentry error tracking alerted us to a payment bug affecting 50 users within minutes"
                },
                {
                    "word": "Structured Logging",
                    "meaning": "Logging in consistent JSON format enabling automated parsing and analysis",
                    "usage": "Structured logs let us query 'show all checkout errors for user_id=123' instantly"
                },
                {
                    "word": "Uptime Monitoring",
                    "meaning": "Automated service checking website availability from multiple locations at regular intervals",
                    "usage": "Uptime monitoring detected our outage within 2 minutes and sent SMS alerts"
                },
                {
                    "word": "Alert",
                    "meaning": "Automated notification sent when metrics exceed thresholds or systems fail",
                    "usage": "We received a PagerDuty alert when error rate spiked above 5% for 3 consecutive minutes"
                },
                {
                    "word": "MTTR",
                    "meaning": "Mean Time To Recovery - average time taken to restore service after an incident",
                    "usage": "Good monitoring reduced our MTTR from 45 minutes to 8 minutes by enabling faster diagnosis"
                }
            ],
            "resources": [
                {
                    "title": "Sentry Documentation - Error Tracking",
                    "url": "https://docs.sentry.io/platforms/javascript/guides/nextjs/"
                },
                {
                    "title": "Datadog APM - Getting Started",
                    "url": "https://docs.datadoghq.com/tracing/"
                },
                {
                    "title": "Google SRE Book - Monitoring Distributed Systems",
                    "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
                }
            ],
            "notes": "Start with free tiers: Sentry free, UptimeRobot free, Vercel Analytics free. Add paid tools as traffic grows. Configure alerts to escalate properly. Review dashboards weekly to identify trends. Practice incident response using monitoring tools before real incidents occur."
        },
        {
            "id": "WP-DP-09",
            "title": "Scaling & Performance Tuning",
            "summary": "Optimize website performance and implement scaling strategies including CDN usage, caching layers, database optimization, horizontal scaling, and load balancing for growing traffic.",
            "objectives": [
                "Implement caching strategies at multiple layers (browser, CDN, application, database)",
                "Configure horizontal scaling and load balancing for handling traffic growth",
                "Optimize database queries, indexes, and implement connection pooling"
            ],
            "theory": [
                "Caching stores expensive computation results for reuse, dramatically improving performance. Browser caching (Cache-Control headers) stores static assets locally (images, CSS, JS) avoiding repeated downloads. CDN caching distributes content globally, serving users from nearby edge servers. Application caching (Redis, Memcached) stores database query results and API responses. Cache invalidation is critical—stale caches show outdated content, but aggressive invalidation wastes cache benefits.",
                "Content Delivery Networks (CDNs) cache and serve static assets from edge servers worldwide, reducing latency and origin server load. When Tokyo user requests image, CDN serves from Asia server (50ms) instead of US origin (400ms). CDNs also provide DDoS protection, automatic image optimization, and bandwidth savings. Cloudflare's free tier serves 100GB/month, making CDNs accessible for all websites.",
                "Database optimization prevents bottlenecks as data grows. Add indexes on frequently queried columns (user_id, created_at), use query analysis (EXPLAIN) to identify slow queries, implement connection pooling reusing database connections instead of creating new ones per request, archive old data to separate tables, and use read replicas distributing queries across multiple database servers. A single missing index can slow queries from 10ms to 10 seconds.",
                "Horizontal scaling adds more servers rather than upgrading single server (vertical scaling). Load balancers distribute traffic across multiple application servers, providing redundancy and handling traffic spikes. Stateless applications (storing sessions in Redis, not server memory) enable easy scaling—add server to pool, load balancer automatically routes traffic. Auto-scaling adds/removes servers based on CPU usage or request rate.",
                "Performance budgets prevent bloat: JavaScript bundles under 200KB gzipped, images under 100KB, Time to Interactive under 3 seconds, Core Web Vitals green. Monitor bundle sizes in CI, fail builds exceeding budgets. Use code splitting, lazy loading, tree shaking, and image compression. Performance isn't optional—Google search rankings favor fast sites, 53% of mobile users abandon sites taking over 3 seconds."
            ],
            "why": "Walmart increased revenue 1% for every 100ms of performance improvement—$1 million per year. Pinterest reduced perceived wait times 40% and sign-ups increased 15%. Slow sites cost users and revenue. Black Friday traffic spikes crash unprepared sites—Target lost millions in 2013 due to site crashes. Proper scaling handles traffic growth from 100 to 100,000 users without rewrites. Performance and scaling aren't luxuries—they're competitive advantages.",
            "prompts": {
                "goal": "Create a comprehensive performance and scaling plan for a blog platform expecting growth from 10K to 500K monthly visitors",
                "before": "Make my website handle more traffic",
                "after": "Design a scaling and performance optimization plan for a blog platform currently serving 10K monthly visitors, expecting growth to 500K within 6 months. Current stack: Next.js frontend, Node.js API, PostgreSQL database on single DigitalOcean droplet. Requirements: maintain <2 second page loads globally, handle traffic spikes (5x normal on viral posts), keep costs under $500/month at 500K visitors. Provide: 1) Caching strategy at all layers (browser, CDN, application, database), 2) CDN configuration for static assets, 3) Database optimization plan (indexes, connection pooling, query optimization), 4) Horizontal scaling architecture with load balancing, 5) Performance budget and monitoring setup, 6) Cost breakdown and infrastructure plan.",
                "resultBefore": "Vague advice to 'use caching' and 'add more servers' without specific implementation, costs, or metrics.",
                "resultAfter": "Complete scaling plan: 1) Caching: Browser - serve static assets with Cache-Control: max-age=31536000, immutable for hashed assets (CSS, JS, images). CDN - Cloudflare caches all static assets and page HTML (5 minutes for homepage, 1 hour for old articles). Application - Redis caches popular articles (top 100 read in last 24h), tag pages, and user profiles (TTL: 10 minutes). Database - pg_bouncer connection pooling (100 concurrent connections), query results cached in Redis. 2) CDN: Cloudflare Pro ($20/month) with page rules caching HTML, automatic image optimization (WebP conversion), Brotli compression, Argo smart routing. Configure: Cache Level Aggressive, Browser Cache TTL 1 year for /static/*, Edge Cache TTL 1 hour for articles. 3) Database optimization: Add indexes on posts(published_at DESC, status), posts(author_id), tags(name), post_tags(post_id, tag_id). Implement pg_bouncer (connection pool: 25 pool size, 100 max_client_conn). Archive posts older than 2 years to separate table. Read replica for analytics queries. Expected result: query times <50ms. 4) Horizontal scaling: Migrate to Kubernetes on DigitalOcean (3 node cluster, $120/month). Run 3-10 Next.js app pods behind load balancer (automatic scaling based on CPU >70%). Stateless architecture with sessions in Redis. 5) Performance budget: JavaScript <250KB gzipped, LCP <2.5s, CLS <0.1, FID <100ms. Monitor with Lighthouse CI, fail builds exceeding budgets. 6) Cost breakdown at 500K visitors: DigitalOcean Kubernetes $120/month, PostgreSQL managed database $60/month, Redis managed cache $15/month, Cloudflare Pro $20/month, monitoring $25/month. Total: $240/month. Expect 50GB egress, served by Cloudflare (90% cache hit rate). Performance: Global TTFB <200ms (CDN), page load <2s (caching + code splitting)."
            },
            "pitfalls": [
                {
                    "title": "Premature Optimization",
                    "description": "Optimizing before identifying bottlenecks wastes time. Profile and measure first, then optimize the actual bottlenecks, not assumed ones."
                },
                {
                    "title": "No Cache Invalidation Strategy",
                    "description": "Aggressive caching without invalidation shows stale content to users. Plan cache invalidation triggers for content updates from day one."
                },
                {
                    "title": "Stateful Applications",
                    "description": "Storing sessions in server memory prevents horizontal scaling. Use external session stores (Redis) for stateless servers."
                },
                {
                    "title": "Ignoring Database Limits",
                    "description": "Application scales to 100 servers but single database becomes bottleneck. Scale databases with read replicas, connection pooling, and query optimization."
                }
            ],
            "keywords": [
                {
                    "word": "CDN",
                    "meaning": "Content Delivery Network - distributed servers caching and serving content from locations near users",
                    "usage": "CDN reduced page load times from 3 seconds to 400ms for international users"
                },
                {
                    "word": "Horizontal Scaling",
                    "meaning": "Adding more servers to handle load instead of upgrading single server (vertical scaling)",
                    "usage": "Horizontal scaling lets us handle traffic spikes by automatically adding servers"
                },
                {
                    "word": "Load Balancer",
                    "meaning": "Service distributing incoming traffic across multiple servers for performance and redundancy",
                    "usage": "Load balancer distributes requests evenly across 5 application servers"
                },
                {
                    "word": "Connection Pooling",
                    "meaning": "Reusing database connections instead of creating new ones for each request, improving performance",
                    "usage": "Connection pooling reduced database connection overhead from 50ms to 1ms per query"
                },
                {
                    "word": "Read Replica",
                    "meaning": "Copy of database synchronized from primary, used for read queries to distribute load",
                    "usage": "Read replicas handle analytics queries, preventing them from slowing down production database"
                },
                {
                    "word": "Performance Budget",
                    "meaning": "Limits on resource sizes and load times enforced during development to prevent performance degradation",
                    "usage": "Performance budget prevents JavaScript bundle from exceeding 200KB, maintaining fast load times"
                }
            ],
            "resources": [
                {
                    "title": "Web.dev - Performance Best Practices",
                    "url": "https://web.dev/explore/fast"
                },
                {
                    "title": "Cloudflare CDN Documentation",
                    "url": "https://developers.cloudflare.com/cache/"
                },
                {
                    "title": "Database Scaling Patterns",
                    "url": "https://www.aosabook.org/en/distsys.html"
                }
            ],
            "notes": "Measure before optimizing—use Lighthouse, WebPageTest, and APM tools. Implement caching layer by layer. Start with CDN and browser caching (easy wins), then application caching. Scale database before application—database is typically first bottleneck. Monitor costs as you scale—cloud bills can spiral unexpectedly."
        }
    ]
}

const webDevModule7 = {
    courseTitle: 'Web Development',
    moduleNumber: 7,
    moduleName: 'Assets & Creative Prompts (Website Branding)',
    totalLessons: 9,
    lessons: [
        {
            id: 'WP-AS-01',
            lessonCode: 'wp-as-01',
            title: 'Website Logo Design Prompts',
            summary: 'Learn how to write effective AI prompts for generating professional website logos, understanding design principles like color theory, typography, and symbolism to create brand-aligned visual identities.',
            objectives: [
                'Write detailed AI image prompts that produce professional, brand-consistent logo designs',
                'Understand logo design principles including color psychology, typography, and scalability',
                'Generate multiple logo variations (icon-only, wordmark, combination mark) for different use cases'
            ],
            theory: [
                'A logo is the visual cornerstone of a brand, communicating personality, values, and industry in a single mark. Logos fall into types: wordmarks (text-only like Google), lettermarks (initials like IBM), icon marks (symbol-only like Apple), combination marks (icon + text), and emblems (text inside icon like Starbucks). Each serves different contexts — icons work for app icons, wordmarks for documents.',
                'Color psychology deeply influences logo effectiveness. Blue conveys trust and professionalism (used by banks and tech companies). Green signals growth and nature (health and eco brands). Red creates urgency and passion (food and retail). Yellow radiates optimism (entertainment). Black communicates luxury and authority. Understanding this helps you prompt for colors matching your brand personality.',
                'Typography in logos must balance readability with personality. Serif fonts (like Times) feel traditional and trustworthy. Sans-serif (like Helvetica) feel modern and clean. Script fonts feel elegant or casual. Display fonts feel unique but reduce readability. When prompting for logos, specify font style to align with brand tone — a law firm needs different typography than a kids toy brand.',
                'Scalability is critical for logos — they must look perfect from a 16px favicon to a billboard. Simple designs with minimal detail scale better than complex ones. Logos should work in single color (black or white) for printing and embossing. When generating AI logos, request vector-style, clean, minimal designs without gradients or tiny details that disappear at small sizes.',
                'Effective logo prompts include: style descriptor (minimalist, geometric, vintage), industry context (tech startup, organic bakery), color palette (2-3 colors max), typography guidance (bold sans-serif), mood (professional, playful), and format (transparent background, horizontal layout). Vague prompts produce generic results; specific prompts produce usable logos aligned with brand identity.'
            ],
            why: 'Airbnb rebranded with a carefully designed logo (the Bélo symbol) representing belonging — their research showed a logo communicating values increased brand recognition 30%. Startups spend $5,000-$50,000 on professional logo design. AI prompt skills enable individuals and small teams to create professional logos in hours at near-zero cost. A strong logo builds brand recognition, and AI-generated options provide starting points for iteration without expensive design agency fees.',
            prompts: {
                goal: 'Generate a professional, scalable logo for a fintech startup called "NovaPay" targeting young professionals',
                before: 'Create a logo for my payment app called NovaPay',
                after: 'Create a minimalist vector-style logo for a fintech startup called "NovaPay". Design requirements: combination mark with a clean geometric icon (abstract N shape or upward arrow suggesting growth/speed) paired with the wordmark "NovaPay" in a modern bold sans-serif font. Color palette: deep navy blue (#1A2B4A) as primary with electric blue accent (#0066FF). Style: flat design, professional, trustworthy yet innovative, no gradients, no shadows. The icon should work standalone as an app icon. Background: transparent. Layout: horizontal version with icon to the left of text. The design should feel at home alongside Stripe, Revolut, and Wise branding.',
                resultBefore: 'Generic clipart-style dollar sign with "NovaPay" in default system font. No brand personality, not scalable, looks unprofessional.',
                resultAfter: 'Clean minimalist logo with geometric N-arrow icon in navy/blue, professional bold wordmark, works at any size from 16px favicon to large format, transparent background ready for use on both light and dark surfaces, distinct enough to stand out in fintech space.'
            },
            pitfalls: [
                { title: 'Too Many Design Elements: Requesting complex logos with gradients, multiple colors, and detailed illustrations creates logos that fail at small sizes and are hard to reproduce consistently.' },
                { title: 'No Brand Context: Generic prompts without industry, audience, or personality context produce generic logos that could belong to any business.' },
                { title: 'Ignoring Scalability: AI logos often look great large but break at favicon size. Always test generated logos at 16px, 32px, 64px, and large format.' },
                { title: 'Copyright Assumptions: AI-generated logos may resemble existing brands. Always reverse-image search results and check trademark databases before using.' }
            ],
            keywords: [
                { word: 'Combination Mark', meaning: 'Logo type pairing a graphic icon with the brand name text for maximum recognition', usage: 'We use a combination mark logo so the icon works alone on app icons while the full version appears on our website' },
                { word: 'Wordmark', meaning: 'Logo consisting only of styled brand name text without any graphic icon', usage: 'Google uses a wordmark logo where the colorful stylized text is the entire brand identity' },
                { word: 'Vector Style', meaning: 'Design based on mathematical shapes (not pixels) that scales to any size without quality loss', usage: 'Requesting vector-style logos ensures crisp results whether used on business cards or billboards' },
                { word: 'Color Psychology', meaning: 'The study of how colors influence emotions, decisions, and brand perception', usage: 'We chose blue in our logo using color psychology — it signals trust for our financial services audience' },
                { word: 'Negative Space', meaning: 'The empty space around and within a design element, often used cleverly in logos', usage: 'The FedEx logo uses negative space to hide an arrow between the E and x letters' },
                { word: 'Brand Mark', meaning: 'The standalone graphic icon portion of a logo system used independently from the wordmark', usage: 'Our brand mark (the N icon) is used as the app icon and profile picture across social platforms' }
            ],
            resources: [
                { title: 'Logo Design Principles - Canva Design School', url: 'https://www.canva.com/learn/logo-design/' },
                { title: 'Midjourney Logo Prompting Guide', url: 'https://www.midjourney.com/showcase' },
                { title: 'Adobe Color - Color Psychology Tool', url: 'https://color.adobe.com/create/color-wheel' }
            ],
            notes: 'AI logos are starting points, not final products. Iterate with 5-10 prompt variations. Use generated concepts as briefs for designers. Tools: Midjourney, DALL-E, Adobe Firefly, Canva AI. Always export logos in SVG format for scalability. Build a logo system (multiple variants) not just one version.'
        },
        {
            id: 'WP-AS-02',
            lessonCode: 'wp-as-02',
            title: 'Hero Image Generation',
            summary: 'Master creating compelling hero images for website headers using AI generation, understanding composition, visual hierarchy, and how hero images communicate brand story to first-time visitors.',
            objectives: [
                'Craft AI prompts generating hero images with proper composition, focal points, and text overlay space',
                'Match hero image style (photography, illustration, abstract) to brand personality and audience',
                'Optimize generated hero images for web performance while maintaining visual impact'
            ],
            theory: [
                'Hero images are the first visual impression visitors experience, appearing prominently at the top of websites. They must communicate brand identity, product value, and emotional tone within 3 seconds before users scroll. Effective hero images combine compelling visuals with space for headline text overlay — typically left or center, with uncluttered areas allowing readable text without background interference.',
                'Composition principles guide hero image effectiveness. The rule of thirds places focal points at intersection lines rather than center, creating visual interest. Leading lines guide viewer eyes toward key elements. Depth (foreground/midground/background) creates dimension. For hero images specifically, leaving 40-60% of space clean (sky, blurred background, flat color areas) accommodates text without legibility issues.',
                'AI hero image generation requires specifying: subject (person using product, abstract concept, lifestyle scene), mood (energetic, serene, professional), lighting style (soft natural light, dramatic studio, golden hour), color palette matching brand colors, aspect ratio (typically 16:9 or wider for full-width headers), and camera perspective (eye level, slightly above, wide angle). Each specification directs generation toward usable results.',
                'Photography versus illustration styles serve different brand personalities. Photorealistic images feel authentic and relatable, ideal for lifestyle brands, services, and products needing human connection. Illustrations feel creative, friendly, and memorable — great for SaaS, apps, and brands targeting younger audiences. Abstract patterns and gradients feel modern and tech-forward. Choose style matching your brand voice.',
                'Color harmony between hero images and website design creates professional cohesion. Request images with dominant colors matching brand palette — a blue-primary brand needs hero images where blue tones dominate. Specify if image will use color overlay (gradient tint applied in CSS), allowing freedom in generating while maintaining brand consistency. Dark images need light text; light images need dark text for accessibility.'
            ],
            why: 'Dropbox increased conversions 10% by changing their hero image to show actual people using the product rather than abstract illustrations. Basecamp A/B tested hero images and found lifestyle photography converted 32% better than product screenshots. Hero images take up 50-80% of above-the-fold screen real estate — they are the most important visual on any website. The right hero image immediately communicates "this is for you" to target audiences.',
            prompts: {
                goal: 'Generate a hero image for a mindfulness meditation app targeting busy working professionals aged 25-40',
                before: 'Create a hero image for a meditation app',
                after: 'Create a wide-format hero image (16:9 ratio) for a mindfulness meditation app. Scene: A peaceful professional woman in her mid-30s sitting in a bright, minimal modern home office space during golden morning light, eyes closed in a meditative expression, wearing casual professional attire (not workout clothes). Atmosphere: calm, aspirational, warm. Color palette: soft warm whites, muted sage greens, gentle golden light tones. Style: premium lifestyle photography aesthetic, shallow depth of field blurring background, cinematic quality. The left third of the image should be relatively open/uncluttered to allow white text overlay. No phone or app screens in the image. Mood: "peaceful productivity" — successful but grounded. Aspect ratio: 1920x1080px.',
                resultBefore: 'Stock-photo-looking image of someone cross-legged in generic yoga pose on a mat, cool blue tones, center-composed with no space for text overlay.',
                resultAfter: 'Warm, aspirational lifestyle image showing relatable working professional in a beautiful calm space, golden light, space for text overlay on left, premium feel matching the app pricing, immediately communicates "this is for someone like me" to target audience.'
            },
            pitfalls: [
                { title: 'No Text Overlay Space: Generating fully-composed images with subjects centered leaves no room for headline text. Always specify open space regions for text placement.' },
                { title: 'Wrong Aspect Ratio: Generating square or portrait images for landscape hero sections creates cropping issues. Specify exact dimensions (1920x600px) matching design needs.' },
                { title: 'Mismatched Brand Tone: A professional law firm using playful illustrated heroes or a children brand using dark dramatic photography creates brand confusion.' },
                { title: 'File Size Neglect: High-resolution hero images at 5MB+ severely impact page load speed. Always optimize to under 200KB using WebP format after generation.' }
            ],
            keywords: [
                { word: 'Hero Image', meaning: 'Large prominent banner image displayed at the top of a web page, creating first visual impression', usage: 'Our hero image shows the product in use, immediately communicating value to new visitors' },
                { word: 'Above the Fold', meaning: 'Content visible on screen without scrolling, the most valuable real estate on any web page', usage: 'The hero image fills above-the-fold space, ensuring every visitor sees our key visual message' },
                { word: 'Depth of Field', meaning: 'Photography technique blurring background while subject stays sharp, adding professional quality', usage: 'Shallow depth of field in the hero image focuses attention on the subject while softening distracting background' },
                { word: 'Golden Hour', meaning: 'Photography term for the warm, soft light in the first/last hour of sunlight, creating premium aesthetic', usage: 'Specifying golden hour lighting gives the hero image a warm, aspirational quality matching our lifestyle brand' },
                { word: 'Color Overlay', meaning: 'Semi-transparent color layer applied over an image in CSS to improve text readability and brand consistency', usage: 'We apply a 40% blue gradient overlay on hero images to ensure white text remains readable' },
                { word: 'Aspect Ratio', meaning: 'Proportional relationship between image width and height (16:9, 4:3, 21:9)', usage: 'Hero images use 21:9 cinematic aspect ratio for a wide, immersive banner effect' }
            ],
            resources: [
                { title: 'Hero Image Best Practices - Nielsen Norman Group', url: 'https://www.nngroup.com/articles/image-focused-design/' },
                { title: 'DALL-E 3 Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/images' },
                { title: 'Squoosh - Web Image Optimization Tool', url: 'https://squoosh.app/' }
            ],
            notes: 'Generate 5-10 variations per prompt, then select the best. Use tools: Midjourney, Adobe Firefly, DALL-E 3, Stable Diffusion. Always check for AI artifacts (extra fingers, distorted text, weird edges) before using. Test hero images across mobile, tablet, and desktop breakpoints — a great desktop hero can look terrible cropped on mobile.'
        },
        {
            id: 'WP-AS-03',
            lessonCode: 'wp-as-03',
            title: 'Icon Set Creation',
            summary: 'Design cohesive icon sets for websites using AI tools and icon libraries, ensuring visual consistency in style, weight, and metaphor across all interface icons for better user experience.',
            objectives: [
                'Generate consistent icon sets using AI prompts with unified style, weight, and visual language',
                'Select and customize icons from libraries (Heroicons, Lucide, Font Awesome) for project needs',
                'Implement SVG icons optimally in web projects for performance and scalability'
            ],
            theory: [
                'Icons are visual shortcuts communicating functionality and content instantly, reducing cognitive load on users. A shopping cart immediately means "buy", a magnifying glass means "search", a bell means "notifications." Effective icon sets maintain visual consistency: same stroke weight, same corner radius style (sharp or rounded), same level of detail, and same design metaphor (outlined vs filled). Inconsistent icons create visual noise and confusion.',
                'Icon styles fall into distinct categories: outline icons use strokes without fill (clean, modern feel used by Apple), solid/filled icons use filled shapes (heavier, used for active states), duotone uses two tones (premium feel), flat icons use solid colors without depth. Choosing one style and using it exclusively throughout a project creates professional cohesion. Mixing styles looks unprofessional and confuses visual hierarchy.',
                'AI icon generation requires extreme specificity: style (line icon, flat icon, isometric), stroke weight (1px, 2px, bold), corner style (sharp corners, rounded corners with 2px radius), color (single color for flexibility), background (transparent), size (consistent at 24x24px or 48x48px), and concept. Each icon in a set should feel like it was drawn by the same hand with identical constraints.',
                'Popular icon libraries save time and ensure professional quality. Heroicons (1600+ icons, designed by Tailwind team), Lucide React (1000+ consistent icons), Font Awesome (16,000+ icons, industry standard), Phosphor Icons (6000+ icons in 6 weights), Material Icons (Google\'s icon system). These provide SVG and React components usable immediately, with consistent visual language baked in.',
                'SVG icons are preferred for web over PNG/JPG because they scale infinitely without quality loss, can be styled with CSS (color changes on hover), have tiny file sizes (typical icon < 1KB), and can be animated. Inline SVG allows CSS styling; external SVG files allow caching. Icon sprites bundle multiple icons into one file reducing HTTP requests. React icon components provide the cleanest developer experience.'
            ],
            why: 'Airbnb\'s icon redesign (AirIcons) improved task completion by 23% by making functionality clearer. Icons reduce reading time — users scan icons 3x faster than reading labels. A consistent icon set signals design quality, increasing user trust in the product. Google\'s Material Icons standardized icon metaphors across millions of apps, creating visual language billions recognize. Well-designed icons are invisible when they work — users just understand what to do.',
            prompts: {
                goal: 'Create a consistent 10-icon set for a project management SaaS dashboard in outline style',
                before: 'Create icons for my project management app',
                after: 'Create a set of 10 UI icons for a project management SaaS dashboard in a consistent outline style. Icons needed: 1) Dashboard/Home, 2) Projects/Folder, 3) Tasks/Checklist, 4) Team/People, 5) Calendar/Schedule, 6) Analytics/Chart, 7) Settings/Gear, 8) Notifications/Bell, 9) Messages/Chat, 10) Time Tracking/Clock. Style requirements: pure outline design with 2px stroke weight, rounded line caps and joins, 24x24px grid, 2px padding from edges (20x20px drawing area), no fill, single color (will be colored with CSS), minimal detail suitable for small sizes, consistent corner radius of 2px throughout all icons. Each icon should feel designed by the same person with identical visual weight.',
                resultBefore: 'Inconsistent set mixing flat, filled, and outline styles at different sizes, some with detail lost at small sizes, different stroke weights creating uneven visual weight.',
                resultAfter: 'Cohesive 10-icon set with identical stroke weight, corner radius, and padding. Each icon immediately recognizable at 16px, 24px, and 48px. Professional quality matching Heroicons or Lucide style, can be colored with CSS for hover and active states.'
            },
            pitfalls: [
                { title: 'Inconsistent Visual Weight: Mixing thin and thick stroke icons or filled and outline styles in the same project creates visual chaos. Establish style rules and stick to them.' },
                { title: 'Too Much Detail: Intricate icons with many small elements look great at large sizes but become unreadable at 16-24px. Test every icon at actual usage size.' },
                { title: 'PNG Instead of SVG: Using rasterized icon images instead of SVG prevents color theming, looks blurry on retina screens, and adds unnecessary file size.' },
                { title: 'Ignoring Metaphor Clarity: Clever or abstract icons that require explanation fail their purpose. Test icons with 5 people — if they misidentify purpose, redesign.' }
            ],
            keywords: [
                { word: 'SVG', meaning: 'Scalable Vector Graphics — XML-based image format for icons that scales perfectly at any size and can be styled with CSS', usage: 'SVG icons allow us to change icon color on hover using simple CSS without any image editing' },
                { word: 'Stroke Weight', meaning: 'The thickness of lines in an outlined icon, measured in pixels, determining visual heaviness', usage: 'All icons in our set use 2px stroke weight ensuring consistent visual weight across the dashboard' },
                { word: 'Icon Sprite', meaning: 'Single SVG file containing multiple icons referenced by ID, reducing HTTP requests', usage: 'Icon sprite bundles all 50 app icons into one file, loading all icons in a single request' },
                { word: 'Metaphor Clarity', meaning: 'How immediately and universally an icon communicates its intended meaning without labels', usage: 'The trash can icon has high metaphor clarity — users worldwide immediately understand it means delete' },
                { word: 'Outline Style', meaning: 'Icon design approach using only strokes/borders without fill, creating a clean lightweight appearance', usage: 'Outline style icons give our dashboard a modern, minimal feel compared to heavy filled alternatives' },
                { word: 'Icon Grid', meaning: 'Consistent canvas size (typically 24x24px) with padding guidelines ensuring all icons feel the same size', usage: 'Using a 24x24px icon grid with 2px padding ensures consistent visual sizing across all icons' }
            ],
            resources: [
                { title: 'Heroicons - Beautiful Hand-Crafted SVG Icons', url: 'https://heroicons.com/' },
                { title: 'Lucide Icons - Open Source Icon Set', url: 'https://lucide.dev/' },
                { title: 'Icon Design Guide - Figma', url: 'https://www.figma.com/resource-library/what-is-icon-design/' }
            ],
            notes: 'Use existing icon libraries (Heroicons, Lucide) before generating from scratch — they\'re professionally designed and free. Only generate custom icons for unique brand needs. SVG optimize all icons using SVGO before production (reduces file size 60-80%). Build an icon component in React/Vue that accepts size and color props for consistent implementation.'
        },
        {
            id: 'WP-AS-04',
            lessonCode: 'wp-as-04',
            title: 'Background Patterns & Textures',
            summary: 'Create and implement engaging background patterns and textures for websites, using AI generation, CSS techniques, and pattern libraries to add visual depth without competing with content.',
            objectives: [
                'Generate seamless tileable patterns using AI prompts for web background use',
                'Implement backgrounds using CSS patterns as alternatives to image-heavy approaches',
                'Balance decorative backgrounds with content readability and performance requirements'
            ],
            theory: [
                'Background patterns add visual interest and brand texture without overwhelming content. Subtle patterns at low opacity create depth and sophistication — a faint geometric grid behind a hero, a soft watercolor texture behind testimonials. The key word is subtle: patterns exist to support content, never compete with it. Rule of thumb: if you notice the pattern before the content, it\'s too strong.',
                'Pattern types serve different design contexts. Geometric patterns (grids, dots, lines, triangles) feel modern and structured — popular in tech and SaaS brands. Organic patterns (watercolor, paper texture, fabric) feel warm and handcrafted — popular in artisan, wellness, and lifestyle brands. Abstract gradients feel futuristic and premium — popular in fintech and design tools. Illustrated patterns feel playful and memorable — popular in B2C and children\'s products.',
                'AI pattern generation requires specifying seamlessness — patterns must tile perfectly with no visible edges where repeats meet. Key prompts: "seamless repeating pattern", "tileable texture", "no edge artifacts", correct color palette, scale (small subtle repeat vs large bold repeat), and application context. Generate at high resolution (at least 1000x1000px) for flexibility in scaling down.',
                'CSS-based patterns eliminate image HTTP requests entirely, using pure CSS gradients and shapes. CSS background-image with repeating-linear-gradient or radial-gradient creates dot grids, line patterns, and geometric backgrounds. These are infinitely scalable, render instantly, and weigh 0 bytes as images. Libraries like Hero Patterns (heropatterns.com) provide 100+ ready-made CSS patterns customizable to any color.',
                'Performance considerations balance visual impact with load speed. CSS patterns: 0KB additional load. SVG patterns: 1-5KB. PNG patterns: vary by size but can reach 50-200KB+ if not optimized. WebP patterns: 60% smaller than PNG. Techniques: use CSS whenever possible, compress images aggressively, use pattern as CSS background-image (enables caching), apply via CSS rather than HTML img tags, consider base64 encoding small patterns directly in CSS.'
            ],
            why: 'Stripe\'s website uses a subtle animated gradient mesh background that has been widely praised and copied — it communicates technical sophistication without overwhelming the product messaging. Apple uses clean white backgrounds with occasional subtle textures to make products pop. GitHub added a subtle dot pattern to their landing page and A/B testing showed it increased visual engagement by 18%. Proper background patterns make interfaces feel crafted and intentional rather than bare.',
            prompts: {
                goal: 'Generate a seamless background pattern for a yoga and wellness brand website in earthy organic tones',
                before: 'Create a background pattern for my wellness website',
                after: 'Create a seamless tileable background pattern for a yoga and wellness brand website. Style: organic hand-drawn botanical elements — subtle leaf shapes, delicate botanical line drawings, scattered watercolor-style botanical marks. Colors: warm earthy tones only — sage green (#7D9B76), warm sand (#D4B896), soft terracotta (#C17F5E) on an off-white cream background (#FAF7F0). The pattern should be very subtle and soft, appearing at approximately 20% visual weight so it supports content rather than dominates. Repeat: small-to-medium scale (elements should be 30-60px when displayed). Style: hand-illustrated, organic, slightly imperfect (not mechanical). Output: 800x800px seamless tile with no visible seam edges when tiled. The pattern should feel like premium artisan paper or high-end wellness packaging.',
                resultBefore: 'Obvious, high-contrast pattern that competes with text content, visible tile seams, doesn\'t feel cohesive with wellness brand aesthetic.',
                resultAfter: 'Delicate botanical tile at low opacity creating elegant depth, seamless tiling with no visible edges, earthy color palette perfectly matching brand identity, subtle enough that content remains primary focus while adding premium textured feel.'
            },
            pitfalls: [
                { title: 'Visible Tile Seams: Patterns with edges that don\'t match create obvious repeat lines. Always test tiling by placing pattern side-by-side and checking for seams.' },
                { title: 'High Contrast Patterns: Dark or bright patterns behind text destroy readability. Keep patterns subtle (10-30% opacity) or confined to areas without text.' },
                { title: 'Large File Sizes: Unoptimized pattern images at 2MB+ significantly slow page load. Compress to under 50KB using WebP, or replace with CSS-based patterns.' },
                { title: 'Wrong Scale: Patterns too small (microscopic texture) or too large (one element per screen) look unintentional. Test at actual browser size before finalizing.' }
            ],
            keywords: [
                { word: 'Seamless Pattern', meaning: 'Repeating design where edges match perfectly when tiled, creating continuous texture without visible seams', usage: 'Our seamless botanical pattern tiles across the entire page background without any visible edges' },
                { word: 'Tileable Texture', meaning: 'Image designed to repeat horizontally and vertically, covering any surface area regardless of screen size', usage: 'A 400x400px tileable texture covers a full 4K screen by repeating 50 times in each direction' },
                { word: 'CSS Background Pattern', meaning: 'Background designs created entirely with CSS gradients, requiring zero image files', usage: 'We replaced a 100KB dot grid image with a CSS radial-gradient pattern that loads instantly' },
                { word: 'Pattern Opacity', meaning: 'Transparency level applied to background patterns controlling how much they interfere with content', usage: 'Setting pattern opacity to 15% keeps it subtle enough to not compete with foreground text' },
                { word: 'Organic Pattern', meaning: 'Non-geometric pattern mimicking natural forms (leaves, watercolor, wood grain) creating warmth and humanity', usage: 'Organic watercolor patterns are perfect for the wellness brand because they feel handcrafted and natural' },
                { word: 'SVG Pattern', meaning: 'Pattern defined using SVG XML, scaling infinitely and often embedded directly in CSS', usage: 'SVG dot patterns scale perfectly on retina screens and compress to under 1KB' }
            ],
            resources: [
                { title: 'Hero Patterns - Free SVG Background Patterns', url: 'https://heropatterns.com/' },
                { title: 'CSS Pattern Generator - Magicpattern', url: 'https://www.magicpattern.design/tools/css-backgrounds' },
                { title: 'Subtle Patterns - Free Tileable Backgrounds', url: 'https://www.toptal.com/designers/subtlepatterns/' }
            ],
            notes: 'Start with Hero Patterns or CSS generators before generating from scratch. Most brands need subtle patterns, not dramatic ones. Always test patterns behind actual website content, not in isolation. Build a pattern component with controllable opacity and color props for easy adjustment.'
        },
        {
            id: 'WP-AS-05',
            lessonCode: 'wp-as-05',
            title: 'Illustrations for Sections',
            summary: 'Create and integrate custom illustrations for website sections using AI generation, understanding illustration styles that enhance storytelling, explain concepts, and differentiate brands visually.',
            objectives: [
                'Generate on-brand illustrations for features, empty states, error pages, and marketing sections',
                'Develop a consistent illustration style guide maintaining visual cohesion across all artwork',
                'Integrate illustrations effectively with web layouts for maximum visual impact and performance'
            ],
            theory: [
                'Illustrations are powerful storytelling tools that simplify complex concepts, inject personality, and create emotional connections unavailable through photography. A SaaS feature illustration can visualize abstract software capabilities; an empty state illustration transforms frustrating no-data states into moments of delight. Unlike photos, illustrations can show impossible scenarios, abstract concepts, and brand-specific visual worlds.',
                'Illustration styles create distinct brand personalities. Flat design (bold colors, no shadows) feels modern and corporate — used by Google, Mailchimp early branding. Isometric illustration shows 3D objects from consistent angles — popular in tech and productivity tools. Character illustration uses consistent human figures — excellent for storytelling and empathy. Abstract geometric uses shapes and colors to represent concepts — popular in fintech and analytics brands.',
                'Style consistency across all illustrations is non-negotiable. Define a style guide before generating: color palette (exact hex values), stroke style (outlined or filled), character features (if using people), shadow approach (flat or subtle), texture level (clean or textured), and composition style (centered subject or scene). Generate all illustrations within the same session with the same parameters to ensure visual cohesion.',
                'Context-specific illustration types serve different website needs. Hero illustrations explain main value proposition on landing pages. Feature illustrations support each feature section, visualizing benefits. Empty state illustrations appear when no data exists (empty shopping cart, no notifications), replacing blank screens with engaging moments. Error page illustrations (404, 500) maintain brand personality during frustrating experiences. Onboarding illustrations guide new users through setup steps.',
                'Illustration integration with web layouts requires planning. Illustrations work best as SVG for scalability and CSS styling flexibility. Consider how illustrations interact with text — do they illustrate the headline or complement it? Account for responsive behavior: full illustrations on desktop may need to crop or stack on mobile. Use illustrations to create visual flow directing users toward CTAs. Overly complex illustrations compete with content rather than supporting it.'
            ],
            why: 'Slack\'s custom illustration library (drawn by Alice Lee) became so recognizable that their brand was instantly identifiable without logos. Notion\'s custom illustrations helped position them as the "anti-enterprise" tool, communicating approachability that attracted 30 million users. Mailchimp\'s illustration system by Mike Perry remains one of the most celebrated brand assets in SaaS — it turned a boring email tool into a beloved personality-driven product. Distinctive illustrations are competitive advantages that competitors can\'t simply copy.',
            prompts: {
                goal: 'Generate a feature section illustration for a cloud storage app showing collaboration between team members',
                before: 'Create an illustration for my cloud storage feature',
                after: 'Create a flat design illustration for a cloud storage application feature section, depicting seamless team collaboration. Scene: 3 diverse team members (different genders and skin tones) working together around a stylized floating cloud interface — one person on laptop sharing files, one on mobile reviewing documents, one at desktop managing folders — all connected by subtle flowing lines or dots suggesting data flow. Style: modern flat illustration, bold and friendly, geometric shapes, minimal detail. Colors: primary brand blue (#2563EB), coral accent (#F97316), light purple (#7C3AED), soft gray (#94A3B8) on white background. Character style: simple geometric faces (no detailed facial features), rounded shapes, same height proportions. The illustration should feel like it belongs alongside Linear, Notion, or Loom marketing pages. No text in the illustration. 16:9 landscape orientation for section placement.',
                resultBefore: 'Generic stock-illustration-looking graphic with characters in awkward poses, wrong colors, too much detail, doesn\'t feel cohesive with modern SaaS aesthetic.',
                resultAfter: 'Clean, modern flat illustration matching brand colors, diverse team representation, clear collaboration story, geometric style consistent with premium SaaS product positioning, ready for feature section placement.'
            },
            pitfalls: [
                { title: 'Inconsistent Style Across Pages: Generating illustrations with different prompts results in varying styles. Create a style reference and reuse same parameters for every illustration in the project.' },
                { title: 'Overly Complex Scenes: Detailed illustrations with many elements confuse rather than clarify. One illustration should communicate one idea clearly.' },
                { title: 'Not Planning for Responsive: A landscape desktop illustration may need a portrait version for mobile. Design illustration compositions that work at multiple aspect ratios.' },
                { title: 'Heavy File Sizes: Complex illustrations exported as PNG can reach 2-5MB. Always export illustrations as optimized SVG where possible, or WebP under 200KB.' }
            ],
            keywords: [
                { word: 'Flat Design', meaning: 'Illustration style using solid colors without gradients, shadows, or 3D effects for a clean modern look', usage: 'Flat design illustrations give our SaaS product a modern, approachable feel popular with tech-savvy users' },
                { word: 'Isometric', meaning: 'Illustration style showing 3D objects at consistent 30-degree angles, creating depth without perspective distortion', usage: 'Isometric illustrations let us show our software\'s database architecture in an engaging visual way' },
                { word: 'Empty State', meaning: 'UI state when there is no content to display, an opportunity to use illustrations to maintain engagement', usage: 'Our empty state illustration shows a friendly character with a magnifying glass when search returns no results' },
                { word: 'Style Guide', meaning: 'Documentation defining visual rules (colors, shapes, character styles) ensuring all illustrations feel cohesive', usage: 'Our illustration style guide specifies exact colors and character proportions used across 50+ website illustrations' },
                { word: 'Character System', meaning: 'Consistent set of illustrated human figures with defined proportions and personality used across all illustrations', usage: 'Our character system features the same illustrated team in different scenarios across all onboarding screens' },
                { word: 'Visual Flow', meaning: 'How illustrations guide viewer eye movement toward key content or calls to action', usage: 'Our hero illustration directs visual flow using character gaze angle pointing toward the signup button' }
            ],
            resources: [
                { title: 'unDraw - Free Open-Source Illustrations', url: 'https://undraw.co/' },
                { title: 'Storyset - Customizable Free Illustrations', url: 'https://storyset.com/' },
                { title: 'Illustration Trend Guide - Dribbble', url: 'https://dribbble.com/stories/2023/01/18/web-design-trends-2023' }
            ],
            notes: 'unDraw and Storyset provide free color-customizable illustrations — start there before generating custom ones. Use illustrations strategically, not on every page. Too many illustrations dilute their impact. Build illustration variants (light/dark mode) if your site supports both. SVG illustrations can be partially animated with CSS for extra delight.'
        },
        {
            id: 'WP-AS-06',
            lessonCode: 'wp-as-06',
            title: 'Social Media Preview Images',
            summary: 'Create effective Open Graph and Twitter Card images for social media sharing, ensuring websites display compelling previews when shared on social platforms through proper meta tags and image design.',
            objectives: [
                'Design compelling OG images for website pages, blog posts, and product pages',
                'Implement Open Graph and Twitter Card meta tags correctly for proper social preview display',
                'Automate OG image generation for dynamic content like blog posts and user profiles'
            ],
            theory: [
                'Open Graph (OG) images appear when links are shared on social media platforms — Facebook, Twitter, LinkedIn, Slack, iMessage. Without proper OG images, platforms display random screenshots or blank previews, destroying click-through rates. A well-designed OG image with compelling visuals and clear text can increase social click-through rates by 300-600%. Every page of a website should have a purpose-designed OG image.',
                'OG image specifications: recommended size 1200x630px (standard), minimum 200x200px, maximum file size 8MB (keep under 500KB), Facebook and Twitter read og:image meta tag. Twitter Cards specifically use twitter:card (summary_large_image for big images), twitter:image, twitter:title, and twitter:description. LinkedIn reads og:image. Getting tags right ensures proper display across all platforms.',
                'OG image design principles differ from regular web design. Text must be large enough to read as a small thumbnail (20-30% of links shown very small). Include brand identity (logo, colors) prominently. Communicate page purpose clearly within 2 seconds. Use high contrast text on backgrounds. Avoid cluttered designs — simple, bold OG images outperform complex ones. Template consistency across pages builds brand recognition.',
                'Dynamic OG image generation automates custom images for variable content. Blog posts need unique OG images per article; e-commerce products need product-specific OG images; user profiles need personalized previews. Tools: Cloudinary (image transformation APIs), Vercel/Satori (JSX to SVG to PNG), NextJS og:image API, or screenshot services (Puppeteer, Playwright). Dynamic generation eliminates manually creating OG images for hundreds of posts.',
                'Testing and debugging OG implementations is essential. Facebook Debugger (developers.facebook.com/tools/debug) shows exactly how Facebook reads your page. Twitter Card Validator (cards-dev.twitter.com/validator) tests Twitter previews. LinkedIn Post Inspector (linkedin.com/post-inspector) tests LinkedIn previews. These tools reveal missing tags, wrong dimensions, and caching issues. Always test on all major platforms before launching.'
            ],
            why: 'Buffer increased social click-through rate by 4x after implementing custom OG images for all blog posts. Clearbit saw 300% more link shares after launching their auto-generated OG images for company profiles. GitHub generates unique OG images for every repository showing repo stats and contributor graphs — these are viewed millions of times daily and serve as powerful marketing assets. Without OG images, your content is invisible in social feeds saturated with visual content.',
            prompts: {
                goal: 'Create a template OG image design and implementation plan for a tech blog with automated per-post generation',
                before: 'Create social media preview images for my blog',
                after: 'Design an Open Graph image template for a tech blog called "DevInsights" and implement automatic per-post generation. OG image design requirements (1200x630px): Left section (60% width): Large post title text (max 2 lines, 52px bold sans-serif, white text), author name and read time below (20px, gray text), subtle gradient overlay from dark navy (#0F172A) to transparent. Right section (40% width): Abstract tech-themed illustration or code snippet visual. Bottom bar: DevInsights logo + website URL in brand color. Background: dark navy (#0F172A) with subtle code/grid pattern at 10% opacity. Provide: 1) Complete OG image design specification, 2) HTML meta tags for blog posts, 3) Next.js API route for dynamic OG image generation using @vercel/og, 4) Testing steps using Facebook Debugger, 5) Fallback strategy when dynamic generation fails.',
                resultBefore: 'Generic OG image showing just the blog website URL with no post-specific content, blue Twitter card with only text and site name.',
                resultAfter: 'Branded per-post OG images with post title, author, and brand identity automatically generated for each article. Click-through rate improvement of 200-400% compared to generic previews. Consistent brand presence across thousands of social shares.'
            },
            pitfalls: [
                { title: 'Wrong Image Dimensions: OG images at wrong sizes get cropped unexpectedly on different platforms. Always use 1200x630px standard and test on each platform.' },
                { title: 'Missing Twitter-Specific Tags: Twitter partially ignores og: tags and requires twitter: specific tags. Always include both og:image and twitter:image meta tags.' },
                { title: 'Caching Issues: Social platforms aggressively cache OG images. When images change, use Facebook Debugger to force cache refresh — platforms may show old images for weeks.' },
                { title: 'Tiny Text in OG Images: Text readable in Figma becomes unreadable at thumbnail size. Use minimum 32px bold text and test images at actual thumbnail size (200x105px).' }
            ],
            keywords: [
                { word: 'Open Graph', meaning: 'Protocol defining meta tags controlling how web pages display when shared on social media platforms', usage: 'Open Graph og:image tag tells Facebook which image to show when our blog post is shared' },
                { word: 'Twitter Card', meaning: 'Twitter\'s specific meta tag system controlling how links appear in tweets with titles, descriptions, and images', usage: 'Twitter Card summary_large_image type displays our blog post OG image prominently in tweets' },
                { word: 'OG Image', meaning: 'Specific image displayed when a webpage URL is shared on social media, controlled by og:image meta tag', usage: 'Custom OG images increased our article click-through rate from Twitter by 340%' },
                { word: 'Dynamic OG Generation', meaning: 'Automated system creating unique OG images for each page or post without manual design work', usage: 'Dynamic OG generation creates custom preview images for all 500 blog posts automatically' },
                { word: 'Meta Tag', meaning: 'HTML tag in page head section providing information to social platforms, search engines, and browsers', usage: 'Meta og:title tag tells platforms what headline to display when our page is shared' },
                { word: 'Social Preview', meaning: 'Rich link preview displayed on social platforms showing image, title, and description from linked webpage', usage: 'A compelling social preview with custom OG image drives significantly more link clicks than plain URL' }
            ],
            resources: [
                { title: 'Open Graph Protocol Documentation', url: 'https://ogp.me/' },
                { title: 'Vercel @vercel/og - Dynamic OG Image Generation', url: 'https://vercel.com/docs/functions/og-image-generation' },
                { title: 'Facebook Sharing Debugger Tool', url: 'https://developers.facebook.com/tools/debug/' }
            ],
            notes: 'Implement OG images before launch — retrofitting is painful. Use Vercel OG or Cloudinary for dynamic generation — it\'s worth the setup time. Test on all platforms: Facebook, Twitter, LinkedIn, WhatsApp, Slack. Template consistency matters more than perfect design for each image. Track OG image click-through in analytics to measure impact.'
        },
        {
            id: 'WP-AS-07',
            lessonCode: 'wp-as-07',
            title: 'Favicon & App Icon Generation',
            summary: 'Create complete favicon and app icon sets for websites and Progressive Web Apps, covering all required sizes, formats, and meta tag implementations for browsers, mobile devices, and app stores.',
            objectives: [
                'Generate favicon sets covering all required sizes from 16px to 512px for browsers and devices',
                'Create Apple Touch Icons, Android icons, and PWA manifest icons for mobile and PWA support',
                'Implement favicon meta tags correctly for cross-browser and cross-device compatibility'
            ],
            theory: [
                'Favicons are small brand identity icons appearing in browser tabs, bookmarks, history, and search results. Modern websites require multiple favicon sizes and formats for different contexts: 16x16px for browser tabs, 32x32px for browser shortcuts, 180x180px for Apple Touch Icon, 192x192px for Android Chrome, 512x512px for PWA splash screens. Missing sizes cause platforms to upscale small icons, resulting in blurry, unprofessional appearances.',
                'Favicon design requires extreme simplicity. A logo that works at 200px often fails at 32px — too much detail becomes unreadable noise. Most successful favicons use first letter(s), simplified brand mark, or a single distinctive shape. Remove all text except initials, eliminate fine details, increase contrast significantly. The favicon should be recognizable when viewed as 16-20px thumbnail among 30+ browser tabs.',
                'Format requirements by platform: ICO format (multi-size container) for legacy browser support, PNG for modern browsers and touch icons, WebP for newer Android, SVG for modern desktop browsers (scalable, supports dark mode adaptation). The ICO format packages 16x16, 32x32, and 48x48 into one file. Modern approach: provide PNG sizes + SVG, with ICO only for backward compatibility with older Windows browsers.',
                'Progressive Web App (PWA) icons require additional specifications. Manifest.json icons array specifies sizes (72, 96, 128, 144, 152, 192, 384, 512px), all in PNG. Maskable icons require artwork in center 80% of canvas, allowing OS to apply circular or squircle masks (Android, iOS). Purpose: "any maskable" handles both contexts. Missing or improperly sized PWA icons prevent app store listings and cause display issues.',
                'The favicon implementation stack in HTML head: link rel="icon" for standard favicon (multiple sizes), link rel="apple-touch-icon" for iOS home screen, meta name="theme-color" for browser UI color, link rel="manifest" for PWA. Tools automate this: realfavicongenerator.net generates all sizes and provides complete HTML code from one source image, eliminating manual size creation and tag writing.'
            ],
            why: 'Studies show 38% of users expect favicon in browser tabs — its absence signals unfinished or untrustworthy sites. Progressive Web Apps without proper icons cannot be added to home screens, blocking a key user acquisition channel. Google uses favicon in search results — a distinctive favicon increases click-through rates in mobile search. Stripe, Linear, and Notion each have immediately recognizable favicons that build brand recognition across millions of browser tabs daily.',
            prompts: {
                goal: 'Generate a complete favicon and app icon suite for a productivity app called "FocusFlow" with wave logo mark',
                before: 'Create a favicon for my app',
                after: 'Design a complete favicon and app icon system for a productivity app called "FocusFlow". Brand: The icon concept is a stylized wave/flow shape representing focused energy and smooth workflow. Requirements: Create master icon design (1024x1024px, safe zone 800x800px, transparent PNG): abstract wave shape formed by two overlapping smooth curves suggesting flow and focus, in gradient from teal (#0D9488) to blue (#2563EB), rounded corners on overall icon shape (20px radius), no text, works at any size from 16px to 1024px. The design must remain recognizable at 16px — simplify to single bold wave stroke if needed. Also provide: design rules for maskable version (artwork within center 80%), color adaptation for dark/light backgrounds, ICO bundling requirements. The final result should feel professional alongside Notion, Linear, and Todoist app icons.',
                resultBefore: 'Complex logo design that looks decent at 200px but becomes unidentifiable pixel noise at 16px browser tab size.',
                resultAfter: 'Bold, simple wave mark with strong contrast, clearly recognizable at 16px tab size, scalable to 1024px store icon, maskable version ready for Android adaptive icons, complete size set generated from master artwork.'
            },
            pitfalls: [
                { title: 'Too Much Detail at Small Sizes: Logos designed for large formats fail at 16-32px. Design favicons specifically for tiny sizes with simplified, high-contrast versions.' },
                { title: 'Missing Required Sizes: Providing only a single favicon.ico misses Apple Touch Icon, Android icons, and PWA manifest icons. Use favicon generators to create complete sets.' },
                { title: 'No Maskable Icon: Android applies circular/squircle masks to app icons — without maskable versions, important parts of the icon get cropped off.' },
                { title: 'Incorrect Meta Tag Implementation: Wrong paths, missing sizes, or incorrect rel attributes cause browsers to ignore favicon files. Use realfavicongenerator.net for correct code.' }
            ],
            keywords: [
                { word: 'Favicon', meaning: 'Small icon displayed in browser tabs, bookmarks, and search results representing a website', usage: 'Our wave favicon is instantly recognizable in browser tabs helping users locate our app quickly' },
                { word: 'Apple Touch Icon', meaning: '180x180px PNG icon displayed when iOS users add website to home screen', usage: 'Apple Touch Icon ensures our app looks native on iPhone home screens, not a blurry screenshot' },
                { word: 'PWA Manifest', meaning: 'JSON file defining Progressive Web App settings including icons, name, and display preferences', usage: 'PWA manifest specifies all icon sizes allowing FocusFlow to be installed as a native-like app' },
                { word: 'Maskable Icon', meaning: 'PWA icon with artwork in center 80% of canvas, allowing OS to apply its icon shape mask safely', usage: 'Maskable icons ensure our wave logo is visible when Android crops icons into circle shapes' },
                { word: 'ICO Format', meaning: 'Windows icon container format bundling multiple PNG sizes into one file for browser compatibility', usage: 'favicon.ico bundles 16px, 32px, and 48px versions covering all legacy browser requirements' },
                { word: 'Theme Color', meaning: 'Meta tag value setting browser UI color (address bar, tab bar) on mobile devices', usage: 'Theme color #0D9488 makes the Android browser address bar match our app\'s teal brand color' }
            ],
            resources: [
                { title: 'Real Favicon Generator - Complete Favicon Set Generator', url: 'https://realfavicongenerator.net/' },
                { title: 'PWA Icon Requirements - Google Developers', url: 'https://web.dev/articles/add-manifest' },
                { title: 'Favicon.io - Favicon Generator', url: 'https://favicon.io/' }
            ],
            notes: 'Always use realfavicongenerator.net — it handles all edge cases automatically. Upload a 1024x1024px PNG master image for best results. Test favicons in browser tabs at actual size before finalizing. Check PWA icons using Chrome DevTools Lighthouse audit. Update favicons in all environments simultaneously to avoid browser cache serving old icons.'
        },
        {
            id: 'WP-AS-08',
            lessonCode: 'wp-as-08',
            title: 'Image Optimization for Web',
            summary: 'Master web image optimization including format selection, compression techniques, responsive images, lazy loading, and modern image serving strategies to maximize performance without sacrificing visual quality.',
            objectives: [
                'Select optimal image formats (WebP, AVIF, SVG) for different content types and browser support',
                'Implement responsive images using srcset and picture elements for different screen sizes',
                'Configure lazy loading, CDN delivery, and automated optimization pipelines for production'
            ],
            theory: [
                'Image optimization is the single highest-impact performance improvement for most websites — images typically account for 60-80% of page weight. An unoptimized website with 5MB of images becomes a fast site with proper compression, right formats, and lazy loading bringing images to 500KB or less. The goal is serving the smallest image that looks good on the user\'s specific device and screen resolution.',
                'Image format selection dramatically impacts file size. JPEG: best for photographs (lossy, 80% quality usually excellent, 60-70% size reduction). PNG: best for graphics, logos, screenshots with transparency (lossless, use when you need sharp edges). WebP: 25-35% smaller than JPEG/PNG, supports transparency and animation, supported by 96%+ browsers. AVIF: 50% smaller than JPEG, excellent quality, newer browser support. SVG: best for icons and illustrations (vector, any size, tiny files).',
                'Responsive images prevent serving 2000px-wide photos to mobile phones with 400px screens. The srcset attribute provides multiple image sizes, letting browsers download the appropriate size. The sizes attribute tells browsers how wide the image will display. The picture element enables art direction — showing different crops on mobile vs desktop (portrait hero on mobile, landscape on desktop).',
                'Lazy loading defers loading off-screen images until users scroll near them. Native lazy loading (loading="lazy" attribute) works in all modern browsers with zero JavaScript. Images below the fold never load for users who don\'t scroll there, saving bandwidth. Critical above-the-fold images should NOT be lazy loaded — use loading="eager" or omit attribute on hero images to ensure fast initial paint.',
                'Automated optimization pipelines prevent manual processing bottlenecks. Next.js Image component automatically resizes, optimizes, and converts to WebP/AVIF, caches results. Sharp (Node.js library) processes images programmatically. Cloudinary and Imgix provide on-the-fly optimization via URL parameters (image.jpg?w=800&f=webp&q=80). CDN-level optimization serves WebP to supporting browsers while providing JPEG fallback for older browsers automatically.'
            ],
            why: 'Google uses image optimization as a significant ranking factor — slow image-heavy sites rank lower in search. Pinterest\'s image optimization reduced page load time from 15.6 seconds to 6.9 seconds on mobile, increasing search engine traffic 15%. Alibaba found each 100ms improvement in page load increased conversions 0.5%. Images are the primary bottleneck on most websites. Every kilobyte saved translates to faster loads, better Core Web Vitals scores, and ultimately more customers.',
            prompts: {
                goal: 'Create a complete image optimization strategy for an e-commerce website with product photos, category banners, and user-uploaded content',
                before: 'Optimize images on my e-commerce website',
                after: 'Create a comprehensive image optimization strategy for an e-commerce Next.js website with these image types: 1) Product photos (user uploads, varying sizes, 500+ images), 2) Category hero banners (1920x600px, 20 banners), 3) Brand logos (merchant logos, PNG with transparency), 4) Thumbnails in product listings (shown at 300x300px). Provide: 1) Format recommendations per image type (AVIF/WebP/PNG) with fallbacks, 2) Next.js Image component configuration for product photos with proper sizes prop for responsive serving, 3) Upload pipeline for user-submitted product images using Sharp for server-side processing (resize to max 1200px, convert to WebP, generate 300px thumbnail), 4) Lazy loading strategy (which images to lazy vs eager load), 5) CDN caching configuration, 6) Expected before/after file size comparison.',
                resultBefore: 'All images served as original JPEG uploads at full resolution (2-10MB each), no lazy loading, same image served to all device sizes, page weight 15MB+.',
                resultAfter: 'Product images: 2MB JPEG → 120KB WebP (94% reduction). Thumbnails: auto-generated 300px WebP at 12KB each. Hero banners: 800KB JPEG → 85KB AVIF. Total page weight: 15MB → 800KB. Load time improvement: 12 seconds → 1.8 seconds on 4G mobile. Core Web Vitals LCP moves from 8.2s to 1.4s. Lazy loading saves 70% of bandwidth for users who don\'t scroll full product pages.'
            },
            pitfalls: [
                { title: 'Lazy Loading Above-the-Fold Images: Applying lazy loading to hero images and top-of-page content delays LCP score. Only lazy load images that start off-screen.' },
                { title: 'Serving Oversized Images: Displaying a 100x100px thumbnail from a 2000x2000px source image wastes 99% of bandwidth. Always serve images at or near display size.' },
                { title: 'Forgetting retina/HiDPI: Regular images look blurry on retina screens. Use srcset with 2x versions or serve 2x images slightly compressed to balance quality and size.' },
                { title: 'No Width/Height Attributes: Missing width and height on img tags causes layout shift (poor CLS score) as images load and push content down.' }
            ],
            keywords: [
                { word: 'WebP', meaning: 'Modern image format by Google providing 25-35% better compression than JPEG/PNG with wide browser support', usage: 'Converting product images to WebP reduced our page weight from 8MB to 2MB' },
                { word: 'srcset', meaning: 'HTML attribute providing browser multiple image options at different resolutions, enabling responsive image loading', usage: 'srcset serves 400px image to mobile and 1200px to desktop, matching display size' },
                { word: 'Lazy Loading', meaning: 'Deferring image loading until the image approaches the viewport as user scrolls', usage: 'Lazy loading product images below the fold reduced initial page load by 60%' },
                { word: 'Core Web Vitals', meaning: 'Google\'s metrics for user experience: LCP (load), FID (interaction), CLS (stability) — images impact all three', usage: 'Image optimization improved our LCP Core Web Vital from 4.2s to 1.8s, boosting search rankings' },
                { word: 'AVIF', meaning: 'Newest image format offering 50% better compression than JPEG with excellent quality, increasingly supported by modern browsers', usage: 'AVIF reduced our hero banner from 800KB to 150KB while maintaining identical visual quality' },
                { word: 'Sharp', meaning: 'High-performance Node.js image processing library for resizing, converting, and optimizing images programmatically', usage: 'Sharp processes user uploads automatically, converting to WebP and generating thumbnails on upload' }
            ],
            resources: [
                { title: 'Web.dev - Fast Load Times Image Guide', url: 'https://web.dev/fast/#optimize-your-images' },
                { title: 'Squoosh - Browser-Based Image Compression', url: 'https://squoosh.app/' },
                { title: 'Next.js Image Optimization Documentation', url: 'https://nextjs.org/docs/app/building-your-application/optimizing/images' }
            ],
            notes: 'Use Next.js Image component if on Next.js — it handles optimization automatically. Use Squoosh for manual one-off optimization. Set up Sharp for user upload pipelines. Always measure before and after using PageSpeed Insights or WebPageTest. Image optimization is the most impactful performance work with the least code change required.'
        },
        {
            id: 'WP-AS-09',
            lessonCode: 'wp-as-09',
            title: 'Copyright & Licensing Awareness',
            summary: 'Understand intellectual property rights for digital assets including images, fonts, icons, and AI-generated content — learning how to legally source, license, and credit creative assets for websites.',
            objectives: [
                'Identify license types for digital assets (CC, royalty-free, commercial, AI-generated) and their usage permissions',
                'Build a legal asset workflow for sourcing images, fonts, icons, and other creative content',
                'Understand emerging copyright considerations for AI-generated assets and how to protect your own content'
            ],
            theory: [
                'Copyright automatically protects original creative works from the moment of creation — no registration needed. The copyright holder controls reproduction, distribution, and derivative works. Using copyrighted images, fonts, or icons without permission — even on personal websites — is infringement with potential fines of $750-$30,000 per work. "I found it on Google Images" is never a legal defense. Every asset used on a website must have verifiable license permission.',
                'License types define permitted uses. Royalty-Free (RF): pay once, use many times without per-use fees — but doesn\'t mean free, and often restricts commercial use or print quantities. Rights-Managed (RM): licensed for specific use case and duration. Creative Commons (CC): spectrum from CC0 (public domain, use freely) to CC BY-SA (attribution required, share-alike). MIT/Apache: open source software licenses. Always read full license terms, not just the "free" label.',
                'Font licensing is frequently misunderstood. A free personal-use font cannot legally be used on commercial websites. Desktop licenses don\'t include web embedding (which requires webfont license). Some fonts require per-pageview licensing. Google Fonts are free for commercial web use. Adobe Fonts require active Creative Cloud subscription for embedding. Font Squirrel specifically filters for commercial-friendly fonts. Always verify font license includes web embedding rights.',
                'AI-generated image copyright is legally unsettled. US Copyright Office ruled AI-generated images without human creative input are not copyrightable (2023). Some platforms (Adobe Firefly, Shutterstock AI) provide commercial use indemnification — protection if third-party claims infringement. Midjourney terms grant commercial rights to paid subscribers. DALL-E grants broad rights to output. However, AI tools trained on copyrighted images face legal challenges — the landscape is evolving rapidly.',
                'Asset attribution is legally required by many licenses. Creative Commons BY requires crediting the creator. Unsplash requires no attribution technically but recommends it. Pixabay similarly. Record-keeping of asset licenses protects businesses — maintain a spreadsheet of every licensed asset with: source URL, license type, date acquired, and approved use case. If you can\'t prove you have rights, assume you don\'t.'
            ],
            why: 'Getty Images sends automated copyright infringement notices followed by invoices averaging $800-$2,500 per image. A small business owner received a $50,000 lawsuit for using 3 unlicensed stock photos on their website. Music licensing violations on social media videos result in immediate takedowns. The Bored Panda website faced legal action for embedding Instagram photos without permission. Copyright law applies everywhere — revenue size doesn\'t matter. Understanding licensing protects your business legally and financially.',
            prompts: {
                goal: 'Create a comprehensive asset licensing audit and compliant sourcing strategy for a commercial SaaS website',
                before: 'Make sure the images on my website are legal to use',
                after: 'Conduct a copyright compliance audit and create a compliant asset sourcing strategy for a commercial SaaS website. Current assets to audit: hero images from Google Image search, icons from "free icon websites", fonts from various sources, background patterns from a design blog, team photos (self-taken), and AI-generated illustrations from Midjourney. Provide: 1) Audit checklist for verifying license legitimacy of each asset type, 2) Compliant free and paid alternatives for each asset category with specific license types, 3) Font licensing guide for web embedding, 4) AI-generated asset licensing summary per major tool (Midjourney, DALL-E, Adobe Firefly), 5) License documentation template for tracking all assets, 6) Attribution format guide for Creative Commons assets.',
                resultBefore: 'Vague advice to "check the license" without specific sources, license types, AI tool policies, or documentation systems.',
                resultAfter: 'Complete compliance system: 1) Audit checklist: reverse image search every asset, check original source license, verify commercial use permission, confirm web use permission, check attribution requirements. 2) Compliant sources: Photos: Unsplash (free commercial), Pexels (free commercial), Shutterstock ($29/month, commercially safe). Icons: Heroicons (MIT), Lucide (ISC), Font Awesome (free tier, check icon-specific license). Fonts: Google Fonts (SIL Open Font License, web-safe), Fontshare (free commercial). Patterns: Hero Patterns (MIT). 3) Font license matrix: Google Fonts ✓ web commercial, Adobe Fonts ✓ with CC subscription, free personal-use fonts ✗ commercial web. 4) AI policies: Midjourney Pro+ ✓ commercial rights. DALL-E 3 ✓ commercial rights per OpenAI ToS. Adobe Firefly ✓ commercial + indemnification. Midjourney Basic ✗ limited commercial. 5) Asset tracker template: Name, Source URL, License Type, Commercial Use, Web Use, Attribution Required, Date Acquired, Usage Location. 6) Attribution format: "Photo by [Creator] on Unsplash" in footer or image caption.'
            },
            pitfalls: [
                { title: '"Free" Doesn\'t Mean Commercial: Many assets labeled "free" are free for personal use only. Commercial websites — even free products — require commercial-use licenses. Always verify explicitly.' },
                { title: 'Embedding vs Downloading: Some platforms allow embedding content (hotlinking their server) but prohibit downloading and rehosting. Understand usage context of each license.' },
                { title: 'Expiring Licenses: Some licenses (subscriptions, time-limited) expire. Assets used during active subscription may require license renewal or removal when subscription ends.' },
                { title: 'AI Copyright Overconfidence: Assuming AI-generated images are definitely safe is risky. Use platforms with explicit commercial use grants and indemnification protection for business assets.' }
            ],
            keywords: [
                { word: 'Copyright', meaning: 'Automatic legal protection of original creative works giving creators exclusive rights to reproduction and distribution', usage: 'Copyright protects our website\'s original illustrations — others cannot reproduce them without permission' },
                { word: 'Creative Commons', meaning: 'Standardized set of licenses allowing creators to share works with defined permission levels from open to restricted', usage: 'CC BY-SA license lets us use the image if we credit the creator and share derivatives under same terms' },
                { word: 'Royalty-Free', meaning: 'License allowing unlimited use after one-time payment without per-use royalties — does not mean free cost', usage: 'Royalty-free Shutterstock license lets us use images across all marketing materials after one subscription fee' },
                { word: 'Commercial Use', meaning: 'License permission to use assets on websites or materials associated with businesses or generating revenue', usage: 'Commercial use license is required for our SaaS website even if we offer a free product tier' },
                { word: 'Attribution', meaning: 'Crediting the original creator as required by certain licenses, typically "Photo by [Name] on [Platform]"', usage: 'Creative Commons BY license requires attribution text crediting the photographer in our website footer' },
                { word: 'Indemnification', meaning: 'Legal protection provided by some services guaranteeing to defend users against third-party infringement claims', usage: 'Adobe Firefly\'s commercial indemnification protects us if AI training copyright claims arise' }
            ],
            resources: [
                { title: 'Creative Commons License Guide', url: 'https://creativecommons.org/share-your-work/cclicenses/' },
                { title: 'Unsplash License - Free Commercial Photography', url: 'https://unsplash.com/license' },
                { title: 'US Copyright Office - Basics of Copyright', url: 'https://www.copyright.gov/what-is-copyright/' }
            ],
            notes: 'When in doubt, don\'t use it. The cost of a $29/month Shutterstock subscription is far less than a $2,500 copyright violation invoice. Build asset tracking into your workflow from day one. Review assets when license terms change. Consult a lawyer for high-stakes commercial projects. "I didn\'t know" is not a legal defense.'
        }
    ]
};

const webDevModule8 = {
    courseTitle: 'Web Development',
    moduleNumber: 8,
    moduleName: 'AI Tools & Usage',
    totalLessons: 12,
    lessons: [
        {
            id: 'wp-tools-01',
            lessonCode: 'wp-tools-01',
            title: 'Lovable - AI Web App Builder',
            summary: 'Learn how to use Lovable (formerly GPT Engineer) to build, deploy, and iterate on full-stack web applications using natural language, understanding the workflow from prompt to production-ready app.',
            objectives: [
                'Build and deploy a functional web application using Lovable\'s natural language interface',
                'Understand the "Edit" and "Fix" workflow for refining AI-generated code and UI',
                'Integrate external APIs and databases into Lovable-generated projects'
            ],
            theory: [
                'Lovable is an AI-native full-stack development platform that enables users to create complex web applications by describing them in natural language. It combines powerful LLMs with a custom-built code-editing engine and infrastructure. Unlike simple code generators, Lovable manages the entire development lifecycle: initialization, frontend/backend generation, styling (using Tailwind), and deployment to Vercel/Netlify.',
                'The core workflow in Lovable involves an iterative feedback loop. You start with a "System Prompt" or initial description, review the generated app, and then use the "Edit" feature to request specific changes. The AI doesn\'t just regenerate everything; it performs surgical edits to your existing codebase, preserving your logic while adding new features or fixing bugs.',
                'Lovable excels at rapid prototyping and building internal tools. It provides a "Live Preview" that updates as the AI writes code, allowing for immediate visual feedback. It also supports "Image to App" conversion, where you can upload a screenshot or mockup and the AI will build the functional equivalent using high-quality React components.',
                'For database and authentication, Lovable integrates seamlessly with Supabase. You can prompt the AI to create database schemas, setup authentication flows, and manage data without writing manual SQL or complex auth boilerplate. This makes it a true "full-stack" builder suitable for MVP development.',
                'Advanced usage involves understanding "Prompt Refinement". To get the best results, you specify technical requirements (e.g., "Use Lucide icons", "Implement a sidebar with glassmorphism", "Connect to the Stripe API for payments"). The more specific your constraints, the more professional the output.'
            ],
            why: 'Traditional web development for a simple MVP takes 2-4 weeks. With Lovable, developers are building the same functional prototypes in 15-30 minutes. Large companies use Lovable for internal dashboards and marketing pages, while startups use it to test product-market fit without hiring a full dev team. Mastering these "Low-Code/AI-Code" tools is becoming a primary skill for the modern "AI Engineer".',
            prompts: {
                goal: 'Build a comprehensive project management dashboard with task tracking and team collaboration features',
                before: 'Make me a project management app',
                after: 'Build a premium project management dashboard using React and Tailwind CSS. Features: 1) Kanban board for task status (To Do, In Progress, Done) with drag-and-drop visuals. 2) Team directory showing member profiles and current workload. 3) Project timeline/Gantt chart view for milestone tracking. 4) "Smart Search" to filter tasks by priority or assignee. Design: Modern "Linear-style" aesthetic with a dark theme option, sleek typography, and subtle micro-animations on hover. Use Lucide icons throughout. Ensure the app is responsive and has a sidebar navigation structure.',
                resultBefore: 'A basic list of tasks with simple buttons and no styling, lacking any dashboard or collaboration features.',
                resultAfter: 'A professional-grade dashboard with high-fidelity UI, functional Kanban board, sidebar navigation, and a cohesive design system that looks like a custom-built SaaS product.'
            },
            pitfalls: [
                { title: 'Overly Vague Initial Prompts', description: 'Starting with "make a website" results in generic templates. Always provide specific features, styling preferences, and the intended target audience.' },
                { title: 'Ignoring Edge Cases', description: 'AI often misses empty states or error handling unless prompted. Remind the AI to "handle the state when no data is found" or "add validation to the signup form".' },
                { title: 'Neglecting Manual Code Refinement', description: 'While Lovable is powerful, complex logic sometimes needs human review. Use the built-in code editor to refine specific functions if the AI output is suboptimal.' }
            ],
            keywords: [
                { word: 'Full-Stack AI Builder', meaning: 'A tool that generates both frontend UI and backend logic/database connections through AI', usage: 'Lovable is our primary full-stack AI builder for rapid prototyping' },
                { word: 'Supabase Integration', meaning: 'The ability to automatically connect to and manage Supabase for databases and auth', usage: 'We use the Supabase integration to handle user logins and task storage' },
                { word: 'Iterative Editing', meaning: 'The process of refining AI-generated code through sequential natural language requests', usage: 'Iterative editing allowed us to add dark mode to our app in just one prompt' },
                { word: 'Modern Stack', meaning: 'Using industry-standard technologies like React, Tailwind, and Vite', usage: 'Lovable builds everything on a modern stack, ensuring the code is easy to maintain' }
            ],
            resources: [
                { title: 'Lovable Documentation', url: 'https://docs.lovable.dev' },
                { title: 'Building with Supabase & Lovable', url: 'https://supabase.com/blog/supabase-lovable' },
                { title: 'Lovable Showcase - Community Projects', url: 'https://lovable.dev/showcase' }
            ],
            notes: 'Start with a clear vision. If you have a design in mind, upload a screenshot. Don\'t be afraid to ask for "Professional SaaS aesthetics". The AI is very good at following design trends if you mention them (e.g., "minimalist", "Apple-style", "dashboard tech").'
        },
        {
            id: 'wp-tools-02',
            lessonCode: 'wp-tools-02',
            title: 'Bolt.new - Instant Full-Stack Apps',
            summary: 'Explore Bolt.new, a browser-based development environment that allows you to prompt, build, and deploy full-stack WebContainers without local setup.',
            objectives: [
                'Launch a full-stack project in the browser using Bolt.new',
                'Understand the concept of WebContainers and browser-native development',
                'Deploy a Bolt.new project to a live URL with one click'
            ],
            theory: [
                'Bolt.new is powered by StackBlitz WebContainers, allowing Node.js environments to run entirely in the browser. This eliminates the "it works on my machine" problem and allows for instant environment setup. When you prompt Bolt, it doesn\'t just write code—it sets up a real development environment with a terminal, file system, and dev server running in your browser tab.',
                'The platform uses a sophisticated AI agent that can install npm packages, create files, and execute terminal commands. If you ask for a "Next.js app with Prisma", Bolt will run `npx create-next-app`, install Prisma, and configure the initial schema automatically.',
                'One of Bolt\'s unique features is its ability to "see" the terminal output. If a build fails, the AI can read the error logs and automatically apply a fix. This "Self-Healing App" approach makes it incredibly resilient for beginners and fast for pros.',
                'Collaboration is built-in. Since the environment is in the browser, you can share a live URL of your working environment (not just the code) with teammates for instant pair programming or debugging.',
                'Bolt supports a wide range of frameworks including Next.js, Vite, Nuxt, and SvelteKit. It is particularly strong for "full-stack" demos where you need a running API and frontend simultaneously.'
            ],
            why: 'Bolt.new reduces the time from "idea" to "running app" to under 60 seconds. It removes the barrier of local environment configuration, making it the perfect tool for education, rapid experimentation, and building tools on the fly during meetings or brainstorming sessions.',
            prompts: {
                goal: 'Create a real-time collaborative whiteboarding tool',
                before: 'Make a whiteboarding app',
                after: 'Create a full-stack real-time collaborative whiteboarding application using Vite, React, and Supabase for real-time sync. Requirements: 1) Canvas drawing area with brush size and color selection. 2) Undo/Redo functionality. 3) Ability to save and load drawings. 4) Real-time cursor tracking for multiple users on the same board. 5) Export canvas as PNG. Style: Clean, tool-focused UI with a floating toolbar. Use Tailwind CSS for styling.',
                resultBefore: 'A simple HTML canvas with basic drawing logic but no real-time features or persistence.',
                resultAfter: 'A fully functional real-time drawing app with a professional toolbar, multi-user support via Supabase Realtime, and solid persistence logic.'
            },
            pitfalls: [
                { title: 'Browser Resource Limits', description: 'Complex apps can eventually hit browser memory limits since the entire environment runs in the tab. For heavy production apps, you may eventually want to export to a local machine.' },
                { title: 'Limited Offline Support', description: 'Since Bolt is a cloud-based browser tool, it requires a stable internet connection for the AI agent to function and for installing dependencies.' }
            ],
            keywords: [
                { word: 'WebContainers', meaning: 'A browser-based technology that runs Node.js and terminal environments entirely in the browser', usage: 'Bolt.new uses WebContainers to run a real dev server in our browser tab' },
                { word: 'AI Terminal Agent', meaning: 'An AI that can execute shell commands and manage files on your behalf', usage: 'The AI Terminal Agent installed all our project dependencies automatically' },
                { word: 'Self-Healing', meaning: 'The ability of the AI to detect and fix build errors automatically', usage: 'Bolt\'s self-healing feature fixed the broken import error without me asking' }
            ],
            resources: [
                { title: 'Bolt.new Official Site', url: 'https://bolt.new' },
                { title: 'StackBlitz WebContainers Docs', url: 'https://blog.stackblitz.com/posts/introducing-webcontainers/' },
                { title: 'Bolt Community Discord', url: 'https://discord.gg/bolt-new' }
            ],
            notes: 'Use Bolt for "Zero-Config" projects. It\'s the best place to test a new library or idea without cluttering your local machine. If things get too complex for the browser, you can always download the code and continue in Cursor/VS Code.'
        },
        {
            id: 'wp-tools-03',
            lessonCode: 'wp-tools-03',
            title: 'Cursor - AI Code Editor',
            summary: 'Master Cursor, the AI-native code editor that replaces VS Code for modern developers. Learn features like Composer, Chat, and codebase-wide indexing.',
            objectives: [
                'Set up Cursor and index your project for codebase-wide AI context',
                'Use "Composer" (Cmd/Ctrl + I) to build multi-file features from a single prompt',
                'Master @-references to provide the AI with specific context from files, docs, and the web'
            ],
            theory: [
                'Cursor is a fork of VS Code designed around the keyboard and AI. While VS Code has Copilot as a plugin, Cursor has the AI baked into the core of the editor. This allows it to perform actions plugins cannot, such as understanding the relationships between all files in your project and performing "Codebase-wide" refactors.',
                'The "Codebase Indexing" feature is Cursor\'s secret weapon. It creates a local vector embedding of your entire project. When you ask a question like "Where is the auth logic defined?", Cursor doesn\'t just grep; it uses semantic search to find the relevant code, even if the variable names aren\'t an exact match.',
                'Composer (Cmd/Ctrl + I) allows you to describe a change that spans multiple files. For example, "Add a new \'User Role\' field to the database, update the API schema, and add a dropdown to the profile page." Cursor will open all necessary files and apply the changes simultaneously in a side-by-side view.',
                'The "@" symbol in Chat or Composer allows for explicit context control. You can @-reference specific files, folders, your entire codebase, external documentation URLs, or even do a web search to get the latest info on a library.',
                'Cursor also features "Tab-to-Complete" which is significantly more context-aware than standard autocomplete. It predicts not just the next word, but the next block of logic based on the patterns it sees in your current file and project.'
            ],
            why: 'Cursor has become the "standard" editor for AI-first developers. It reduces the "context-switching" cost of looking up documentation or searching for code across large files. Developers using Cursor report 30-50% improvements in coding speed, especially when working in unfamiliar codebases.',
            prompts: {
                goal: 'Refactor a large monolithic component into a clean modular structure',
                before: 'Clean up this file',
                after: 'Using my @codebase context, refactor the `OrderSystem.tsx` component. Instructions: 1) Extract the "Order Summary" logic into its own component. 2) Move the "Payment Validation" logic into a separate utility hook. 3) Standardize the error handling across all functions using our `AppError` class. 4) Ensure all types are strictly defined. Do not change the existing UI behavior, only the underlying code structure.',
                resultBefore: 'Minor changes to variable naming or comments, but the file remains a large mess.',
                resultAfter: 'A perfectly modularized set of files with clear responsibilities, better typing, and improved maintainability across the project.'
            },
            pitfalls: [
                { title: 'Privacy Settings', description: 'By default, Cursor uses cloud-based LLMs. For sensitive work, ensure you check the "Privacy Mode" settings to prevent your code from being used for training.' },
                { title: 'Context Overload', description: 'Giving the AI too much context (e.g., @codebase for a simple 1-line change) can sometimes lead to slower responses or confusion. Use specific @files references for targeted tasks.' }
            ],
            keywords: [
                { word: 'Composer', meaning: 'The multi-file AI editing interface in Cursor', usage: 'I used Composer to add the new API endpoint and the frontend UI in one go' },
                { word: 'Index', meaning: 'A local vector representation of your codebase for semantic AI search', usage: 'Make sure you re-index your codebase after adding large amounts of new code' },
                { word: 'Semantic Search', meaning: 'Searching by meaning rather than just keyword matches', usage: 'Semantic search helped me find the hidden auth logic in seconds' }
            ],
            resources: [
                { title: 'Cursor Official Site', url: 'https://cursor.com' },
                { title: 'Cursor Forum - Tips & Tricks', url: 'https://forum.cursor.com' },
                { title: 'Tutorial: Mastering Cursor AI', url: 'https://cursor.com/how-to-use' }
            ],
            notes: 'Cursor is VS Code + Superpowers. You can keep all your VS Code extensions and themes. The Cmd+K (inline) and Cmd+L (sidebar) shortcuts will quickly become your best friends.'
        },
        {
            id: 'wp-tools-04',
            lessonCode: 'wp-tools-04',
            title: 'Emergent AI',
            summary: 'Learn how to use Emergent AI for autonomous agentic workflows, complex problem solving, and generating entire project structures with minimal oversight.',
            objectives: [
                'Understand the difference between standard LLMs and Emergent agentic systems',
                'Deploy a task-based agent to solve a complex coding challenge',
                'Learn to monitor and steer autonomous AI agents to prevent "rabbit holes"'
            ],
            theory: [
                'Emergent AI refers to systems where AI agents can "reason" and take sequential actions autonomously to achieve a higher-level goal. Unlike a chat model that waits for each turn, Emergent agents can plan, execute, observe results, and self-correct until the task is complete.',
                'These systems typically use an "Agent Loop". Goal -> Plan -> Tool Use -> Result -> Re-plan. In a development context, this might include the agent writing a test, running it, seeing a failure, and then editing the code to fix the failure without user intervention.',
                'The key to working with Emergent systems is "Goal Definition". You aren\'t just prompting for a snippet; you are defining a mission. "Audit my website for SEO issues and fix them all" is a mission that an Emergent agent could handle.',
                'Emergent systems are particularly good at "Boring Tasks"—updating hundreds of files to use a new library version, cleaning up technical debt, or generating comprehensive documentation.',
                'Steering and monitoring are critical. Because agents can be expensive or run into infinite loops (hallucinations), professional usage involves "human-in-the-loop" approval points where the agent pauses for confirmation before taking destructive actions.'
            ],
            why: 'Emergent AI represents the shift from "Copilot" (passive) to "Autopilot" (active). It allows a single developer to perform the work of a whole team by delegating execution tasks to autonomous agents. Agencies are using these to build complete MVPs from simple text briefs.',
            prompts: {
                goal: 'Update a project from React 17 to React 18 across all components',
                before: 'Update React version',
                after: 'You are an autonomous engineering agent. Goal: Update our entire codebase at `@folder` from React 17 to React 18. Plan: 1) Update `package.json` and install dependencies. 2) Update `index.tsx` to use `createRoot`. 3) Search for all uses of `useEffect` or `useMemo` that might be affected by React 18 strict mode and add necessary guards. 4) Run the build and fix any TypeScript or ESLint errors. 5) Provide a summary of all changes.',
                resultBefore: 'The AI might tell you how to update, but you have to do the work file-by-file.',
                resultAfter: 'An agent that scans your project, applies the changes, runs the tests, and presents you with a "ready-to-merge" PR.'
            },
            pitfalls: [
                { title: 'Agent Hallucinations', description: 'Agents can sometimes "hallucinate" tool outputs or get stuck in a loop trying the same broken approach. Always monitor the agent\'s terminal outputs.' },
                { title: 'Scope Creep', description: 'Without strict constraints, an autonomous agent might start "fixing" things you didn\'t ask for. Use specific boundaries in your mission brief.' }
            ],
            keywords: [
                { word: 'Agentic Workflow', meaning: 'An AI process where the model takes multiple steps autonomously to reach a goal', usage: 'The agentic workflow handled our entire database migration automatically' },
                { word: 'Autonomous Agent', meaning: 'An AI that can plan and use tools without constant human instruction', usage: 'Our autonomous agent fixed 50 bug reports overnight' },
                { word: 'Tool Use', meaning: 'The ability of an AI to call external functions like "read_file" or "run_command"', usage: 'Tool use is what separates a chat model from a real developer agent' }
            ],
            resources: [
                { title: 'Introduction to Autonomous Agents', url: 'https://blog.langchain.dev/agents/' },
                { title: 'Agentic Patterns for Developers', url: 'https://www.deeplearning.ai/the-batch/how-agents-are-changing-ai/' }
            ],
            notes: 'Emergent AI is the most "magical" part of the stack. Treat it like a junior developer: give clear missions, but check their work before it goes to production.'
        },
        {
            id: 'wp-tools-05',
            lessonCode: 'wp-tools-05',
            title: 'Replit AI',
            summary: 'Utilize Replit\'s integrated AI to build, test, and host applications entirely in the cloud, leveraging "Replit Agent" for end-to-end development.',
            objectives: [
                'Use Replit Agent to build a full-stack app from scratch in the cloud',
                'Learn how to use "Ghostwriter" for context-aware code suggestions',
                'Deploy and host your Replit projects with zero configuration'
            ],
            theory: [
                'Replit is a Collaborative Browser IDE with heavy AI integration. Its stand-out feature is the "Replit Agent", which acts as a full-time pair programmer that can build entire apps from a single prompt, including setting up databases (PostgreSQL), handling auth, and configuring deployments.',
                'The Replit AI stack includes: 1) Replit Agent (the autonomous builder), 2) Ghostwriter (the inline code completer), 3) AI Chat (for debugging), and 4) Explain Code (for understanding legacy systems).',
                'Replit\'s "Cloud-Native" nature means your AI doesn\'t just have access to files; it has access to a live environment where it can see runtime errors and performance metrics. This leads to extremely high success rates for "deployable" code.',
                'Ghostwriter uses a custom model trained specifically on public Replit code, making it particularly good at "boilerplate" and common web patterns. It understands the "Project Context" better than generic plugins.',
                'Deployment on Replit is integrated. Once your AI builds the app, you can hit "Deploy" and it will be hosted on a sub-domain with SSL, database managed, and secrets handled automatically. This makes it ideal for student projects, hackers, and quick internal tools.'
            ],
            why: 'Replit is the "all-in-one" solution. You don\'t need GitHub, Vercel, or a local IDE. Small teams and individual developers use Replit to go from "zero to live" in record time. It is especially strong for Python (Flask/FastAPI) and Node.js full-stack development.',
            prompts: {
                goal: 'Build a private Discord bot for automated community moderation',
                before: 'Make a Discord bot',
                after: 'Replit Agent: Build a Node.js Discord bot for community moderation. Features: 1) Automatic deletion of messages containing banned words (from a configurable list). 2) "Welcome" messages for new members. 3) Log all moderation actions to a private "mod-log" channel. 4) Use Replit Database to store configuration. 5) Provide a simple commands like `!ban-word add <word>`. Ensure the bot remains online using a "Keep-Alive" heartbeat if necessary.',
                resultBefore: 'Basic bot script that requires significant manual setup, environment variable configuration, and hosting decisions.',
                resultAfter: 'A fully functional bot, hosted 24/7 on Replit, with a persistent database for settings and a live dashboard to monitor performance.'
            },
            pitfalls: [
                { title: 'Vendor Lock-in', description: 'Apps built heavily using Replit-specific features (like Replit DB) can be harder to export to other platforms later. Use standard libraries (like PostgreSQL) for better portability.' },
                { title: 'Resource Throttling', description: 'Free tier Replit apps "sleep" when not in use. For serious production, you must upgrade to a paid plan for "Always-on" hosting.' }
            ],
            keywords: [
                { word: 'Replit Agent', meaning: 'An autonomous AI capable of building and deploying complete applications within Replit', usage: 'The Replit Agent built our entire landing page and database in 5 minutes' },
                { word: 'Ghostwriter', meaning: 'Replit\'s inline AI assistant for code completion and refactoring', usage: 'Ghostwriter completed the entire for-loop before I finished typing the first line' },
                { word: 'Deployment-as-a-Service', meaning: 'Integrated hosting and infrastructure provided within the development tool', usage: 'Replit\'s deployment-as-a-service handled our SSL certificates automatically' }
            ],
            resources: [
                { title: 'Replit AI Documentation', url: 'https://docs.replit.com/ai/overview' },
                { title: 'Replit Agent Tutorials', url: 'https://replit.com/blog/replit-agent' }
            ],
            notes: 'If you want to build and host something in one tab, use Replit. It\'s the fastest way to get a functional API or bot live on the internet.'
        },
        {
            id: 'wp-tools-06',
            lessonCode: 'wp-tools-06',
            title: 'Windsurf',
            summary: 'Learn about Windsurf, the new "Flow-State" AI editor by Codeium. Master its "Cascade" feature for deep codebase understanding and seamless AI collaboration.',
            objectives: [
                'Understand the "Cascade" context engine that powers Windsurf',
                'Enable "Flow-State" coding where the AI anticipates your needs and errors',
                'Use Windsurf for heavy refactoring and large-scale project navigation'
            ],
            theory: [
                'Windsurf is an AI-native IDE created by the Codeium team. Its defining feature is "Cascade", a unified context engine that deeply understands not only your code, but also your terminal, file history, and intent. It aims to eliminate "manual context-providing" entirely.',
                'While other editors focus on "Chat" or "Autocomplete", Windsurf focuses on "Context Flow". It tracks your every move in the editor to build a mental model of what you are working on, so when you ask a question or use an AI feature, it already knows the specific lines and files you care about.',
                'Windsurf features a "Live" mode where the AI can suggest edits as you type, almost like a real-time pair programmer that is always one step ahead. It can see linter errors as they appear and suggest fixes before you even hover over the red underline.',
                'The editor is highly optimized for performance. It uses proprietary models and indexing techniques to provide instantaneous responses even for codebases with millions of lines of code.',
                'Another key feature is its "Integrated Terminal AI". You can ask questions about terminal output or request the AI to "fix the build error shown here" directly from the terminal pane, and it will analyze the logs and the code simultaneously.'
            ],
            why: 'Windsurf is designed for developers who want to stay in "Flow". It minimizes the friction between thinking of a change and seeing it implemented. It is favored by senior engineers who need a powerful, performant editor that understands complex architectural patterns.',
            prompts: {
                goal: 'Improve the performance of a React application with many re-renders',
                before: 'Make this app faster',
                after: 'Windsurf Cascade: Analyze the component tree of our dashboard. Identify the top 3 components causing unnecessary re-renders. Proposed Fixes: 1) Implement `React.memo` where appropriate. 2) Move state down to the lowest possible level. 3) Use `useCallback` for event handlers passed to children. Apply these optimizations to the identified files while preserving all current functionality. Provide a summary of কেন these changes will improve performance.',
                resultBefore: 'Generic advice about React performance without specific code implementation.',
                resultAfter: 'A series of surgical optimizations across several files that significantly reduce render count and improve UI responsiveness, with a clear explanation of the architectural improvements.'
            },
            pitfalls: [
                { title: 'New Ecosystem', description: 'As a newer editor, some niche VS Code plugins might not be perfectly compatible yet, though most standard ones work flawlessly.' },
                { title: 'Learning Curve', description: 'The "Cascade" way of working is different from traditional chat bots. It requires learning to trust the AI\'s contextual awareness rather than over-explaining everything.' }
            ],
            keywords: [
                { word: 'Cascade', meaning: 'Windsurf\'s unified context engine for deep codebase and terminal understanding', usage: 'Cascade already knew which components were slow before I started the performance audit' },
                { word: 'Flow-State Coding', meaning: 'A development experience with minimal friction and maximum AI support', usage: 'Windsurf\'s flow-state features let me finish the feature without leaving the editor for docs' },
                { word: 'Integrated Terminal AI', meaning: 'AI that can read and act upon terminal command results in real-time', usage: 'The integrated terminal AI fixed our deployment script errors in seconds' }
            ],
            resources: [
                { title: 'Windsurf Official Site', url: 'https://codeium.com/windsurf' },
                { title: 'Windsurf Documentation', url: 'https://docs.codeium.com/windsurf' }
            ],
            notes: 'If you want the most "intelligent" and performant editor that feels like a real human engineer sitting next to you, try Windsurf. It is particularly good at multi-step reasoning.'
        },
        {
            id: 'wp-tools-07',
            lessonCode: 'wp-tools-07',
            title: 'ChatGPT - Conversational AI',
            summary: 'Leverage ChatGPT for rapid brainstorming, explaining complex logic, generating creative content, and as a general-purpose coding companion.',
            objectives: [
                'Master "Persona Prompting" to turn ChatGPT into a specialist (Senior Architect, Security Auditor, UX Copywriter)',
                'Use "Advanced Data Analysis" to analyze logs, CSVs, and project folders',
                'Create custom GPTs tailored to your project\'s specific coding standards and documentation'
            ],
            theory: [
                'ChatGPT (OpenAI) remains the most versatile general-purpose AI. For developers, its utility spans from writing regex to designing system architectures. The introduction of "Reasoning Models" (like o1) has significantly improved its ability to solve complex logical problems and write bug-free algorithms.',
                'The "Canvas" feature in ChatGPT is a major upgrade for coders. It provides a side-by-side editing interface where you can write, review, and refine code blocks together. It allows for "Surgical Edits"—you can highlight a specific part of your code and ask the AI to "Fix this specific function" without it rewriting the whole file.',
                'Custom GPTs allow you to upload your project\'s private documentation, style guides, and common patterns. This creates a "Project Expert" that you can chat with to ensure any new code follows your existing standards.',
                'ChatGPT is excellent for "Explainable AI". If you encounter a complex open-source library or a legacy code block, you can paste it in and ask for a "Line-by-line explanation for a beginner". It bridges the gap between expert knowledge and learning.',
                'For non-coding tasks like writing SVG paths, generating realistic mock data, or creating marketing copy for your landing page, ChatGPT is often superior to dedicated code agents because of its vast creative training data.'
            ],
            why: 'While specialized editors like Cursor are better for writing the code, ChatGPT is often the best for *thinking* about the code. It is your architect, your teacher, and your creative director. It is the "Brain" behind most AI development workflows.',
            prompts: {
                goal: 'Design a scalable microservices architecture for a high-traffic e-commerce site',
                before: 'How should I build a big e-commerce site?',
                after: 'Act as a Senior Software Architect. I am building a high-traffic e-commerce platform that needs to handle 10k concurrent users. 1) Propose a microservices architecture using Node.js and Go. 2) Define the boundaries for services (Auth, Catalog, Cart, Payment, Order). 3) Specify the communication protocol between services (gRPC vs REST vs Message Broker). 4) Design a database strategy for global consistency. 5) Provide a high-level diagram description. Focus on scalability, fault tolerance, and security.',
                resultBefore: 'A simple tutorial on how to use Express and MongoDB for a basic store.',
                resultAfter: 'A detailed architectural blueprint with pros and cons, specific technology recommendations, and a roadmap for scaling from MVP to national scale.'
            },
            pitfalls: [
                { title: 'Static Knowledge Cutoff', description: 'Unless using web search, ChatGPT may not know about the very latest library updates or the newest CSS features. Always verify its output for bleeding-edge technologies.' },
                { title: 'The "Friendly Hallucination"', description: 'ChatGPT is so confident that it can sometimes "make up" non-existent library parameters. Always check the official docs if a suggested function doesn\'t work.' }
            ],
            keywords: [
                { word: 'Canvas', meaning: 'A side-by-side interface in ChatGPT for collaborative writing and coding', usage: 'I used the Canvas feature to refactor our payment gateway script' },
                { word: 'Reasoning Models', meaning: 'AI models (like o1) that "think" longer to solve complex logical and mathematical problems', usage: 'The reasoning model found the race condition in our multi-threaded logic' },
                { word: 'Custom GPT', meaning: 'A version of ChatGPT loaded with specific instructions and knowledge for a particular project', usage: 'Our "Prompt Academy GPT" knows our entire syllabus and can generate new lessons' }
            ],
            resources: [
                { title: 'OpenAI Developer Platform', url: 'https://platform.openai.com' },
                { title: 'Prompt Engineering Guide - OpenAI', url: 'https://help.openai.com/en/articles/6654503-how-can-i-maximize-my-results-with-chatgpt' }
            ],
            notes: 'Use ChatGPT as your "Strategic Partner". Ask it "Why should I use this library?" or "What are the security risks of this approach?" before you start coding.'
        },
        {
            id: 'wp-tools-08',
            lessonCode: 'wp-tools-08',
            title: 'Gemini AI & Google AI Studio',
            summary: 'Master Google\'s Gemini models, specifically the massive 2-million-token context window, and use Google AI Studio for prototyping enterprise AI features.',
            objectives: [
                'Leverage the massive context window (1M+ tokens) to analyze entire codebases or long documentation',
                'Use Google AI Studio to prototype and test Gemini API integrations for your own apps',
                'Understand multimodal capabilities—analyzing UI screenshots, video recordings, and code simultaneously'
            ],
            theory: [
                'Gemini is Google\'s family of multimodal AI models. Its unmatched feature is the "Context Window". Gemini 1.5 Pro supports up to 2 million tokens—equivalent to thousands of files or hours of video. This allows you to upload an *entire* monorepo or a 1000-page API manual and ask specific questions about them.',
                'Multimodal integration is native. You can provide Gemini with a recording of your app crashing, along with the source code and the logs, and it can "see" where the UI breaks and correlate it with the line of code responsible.',
                'Google AI Studio is a free (for developers) playground for testing these models. It allows you to tune "System Instructions", set temperature, and then export the code as a ready-to-use API call in Python, Node.js, or Go.',
                'Gemini is deeply integrated into the Google ecosystem. For web developers, this means excellent support for Firebase, Google Cloud, and Flutter. It is the go-to model for Android and Workspace-related development.',
                'The models are divided into: Nano (mobile/on-device), Flash (fast/cheap), and Pro (highly capable/massive context). Choosing the right model for the right task is key to balancing cost and performance.'
            ],
            why: 'Gemini\'s massive context window solves the "AI Fog" problem. Usually, AI only sees a small part of your app. Gemini sees the whole thing at once, allowing for holistic architectural advice and finding "butterfly effect" bugs where a change in file A breaks file Z.',
            prompts: {
                goal: 'Analyze a 500-page legacy technical manual and extract a data migration plan',
                before: 'Help me migrate this old data',
                after: 'I am uploading our entire legacy system manual (PDF) and the current database schema at `@schema`. Goal: 1) Identify every data field that has changed in format. 2) Create a mapping table between the old and new systems. 3) Write a robust Node.js migration script that handles data validation and error logging. 4) Identify any "Zombie Data" that is no longer needed.',
                resultBefore: 'The AI would fail because the manual is too long for its memory.',
                resultAfter: 'A complete, verified migration plan that took 30 seconds to generate from 500 pages of text, ensuring nothing was missed.'
            },
            pitfalls: [
                { title: 'Strict Safety Filters', description: 'Google has very strict AI safety guidelines. Sometimes, legitimate "hacker" tools or security audits can be flagged erroneously. You may need to refine your prompt to be more "academic".' },
                { title: 'Variable Performance', description: 'Because Gemini is multimodal, it can sometimes be slower than text-only models. Use Gemini-Flash for simple tasks and Pro only when the context window is needed.' }
            ],
            keywords: [
                { word: 'Context Window', meaning: 'The amount of information an AI can "remember" and process in a single turn', usage: 'Gemini\'s 2M context window let us analyze our entire 5-year project history' },
                { word: 'Multimodal', meaning: 'The ability to process different types of input (text, image, video, audio) together', usage: 'Multimodal analysis helped Gemini fix the bug by looking at the screen recording' },
                { word: 'Google AI Studio', meaning: 'Google\'s developer tool for testing, tuning, and exporting Gemini API calls', usage: 'I prototyped our new AI chatbot in Google AI Studio before writing any code' }
            ],
            resources: [
                { title: 'Google AI Studio', url: 'https://aistudio.google.com' },
                { title: 'Gemini API Documentation', url: 'https://ai.google.dev/docs' }
            ],
            notes: 'If your project has a lot of files or a very long manual, use Gemini. It\'s the only model that "doesn\'t forget" when things get big.'
        },
        {
            id: 'wp-tools-09',
            lessonCode: 'wp-tools-09',
            title: 'Anti Gravity',
            summary: 'Learn how to use "Antigravity"—your advanced AI coding assistant—to its full potential. Master multi-tool orchestration, filesystem research, and complex implementation planning.',
            objectives: [
                'Understand the "Plan -> Execute -> Verify" workflow of an agentic assistant',
                'Master using Antigravity for codebase-wide refactoring and complex bug hunting',
                'Learn how to effectively "Pair Program" with an AI that has direct terminal and file access'
            ],
            theory: [
                'Antigravity is an agentic AI assistant designed for "Advanced Agentic Coding". Unlike a standard chatbot, it has direct access to your filesystem, terminal, and browser. It doesn\'t just tell you how to code; it performs the work, runs the build, and verifies the result on your behalf.',
                'The core philosophy of Antigravity is "Verification-Driven Development". Every code change should be followed by a verification step—running a test, checking a build status, or viewing the result in a browser. This ensures a high level of correctness and reliability.',
                'Antigravity uses "Tool Orchestration" to solve complex tasks. It can research a bug using `grep_search`, plan a fix, apply it using `multi_replace_file_content`, and then verify it using `run_command`. This sequential reasoning is what makes it "Antigravity"—it lifts the heavy work off your shoulders.',
                'Effective collaboration with Antigravity involves "Context Sharing". By opening relevant files or providing specific paths, you help the agent narrow its focus and act more efficiently. It honors your `.gitignore` and workspace rules, acting like a true member of your team.',
                'Unlike "Black Box" agents, Antigravity is transparent. You can see every command it runs, every file it reads, and every change it makes, allowing you to learn from its process and step in when needed.'
            ],
            why: 'Antigravity is the "Bridge" between AI and your local development environment. It reduces the manual labor of copying and pasting code, searching for files, and running repetitive terminal commands. It allows you to focus on the "What" and "Why", while it handles the "How".',
            prompts: {
                goal: 'Implement a complex multi-step feature across a large project',
                before: 'Help me add a loyalty points system',
                after: 'Antigravity: I want to add a "Loyalty Points" system to my e-commerce project. 1) Research the `Database` and `User` modules to see where points should be stored. 2) Create a migration script to add a `loyalty_points` field. 3) Update the `Order` service to award 10 points for every $1 spent. 4) Create a simple React component to display points on the profile page. 5) Run the tests to ensure no regressions. Provide a plan before you start.',
                resultBefore: 'A list of instructions you have to follow yourself.',
                resultAfter: 'An agent that researches your code, writes the migration, updates the logic, builds the UI, and confirms everything works with a successful test run.'
            },
            pitfalls: [
                { title: 'Over-Reliance on Automation', description: 'While Antigravity is highly capable, siempre review the proposed plans and code changes, especially for mission-critical logic.' },
                { title: 'Vague Missions', description: 'Giving a broad mission without clear boundaries can lead to the agent exploring unnecessary files. Be specific about the modules you want it to focus on.' }
            ],
            keywords: [
                { word: 'Agentic Assistant', meaning: 'An AI that can take actions (reading files, running code) to achieve a goal', usage: 'Antigravity acted as an agentic assistant to refactor our entire API layer' },
                { word: 'Tool Orchestration', meaning: 'The ability of an AI to combine multiple tools in sequence to solve a problem', usage: 'Through tool orchestration, the agent found the bug, fixed it, and verified the fix' },
                { word: 'Verification-Driven', meaning: 'A development approach where every action is followed by a confirmation step', usage: 'Antigravity\'s verification-driven approach caught the syntax error before I did' }
            ],
            resources: [
                { title: 'Antigravity User Guide', url: 'https://antigravity.ai/docs' },
                { title: 'Agentic Coding Best Practices', url: 'https://antigravity.dev/learn' }
            ],
            notes: 'You are talking to Antigravity right now! I am here to help you build, fix, and learn. Treat me as a senior collaborator who is always ready to dive into the code.'
        },
        {
            id: 'wp-tools-10',
            lessonCode: 'wp-tools-10',
            title: 'Grok AI by xAI',
            summary: 'Explore Grok AI, particularly its strengths in real-time information retrieval, coding assistance, and its integration with the X (formerly Twitter) platform.',
            objectives: [
                'Use Grok\'s real-time search to stay updated on the latest library releases and security patches',
                'Leverage Grok\'s unfiltered, creative personality for brainstorming unique app features',
                'Understand "Grok-on-the-Web" vs "Grok-Developer" APIs'
            ],
            theory: [
                'Grok is an AI developed by Elon Musk\'s xAI. Its primary differentiator is its access to real-time data from the X platform, allowing it to know about events, trends, and tech updates as they happen, often before standard training data catch up.',
                'For developers, Grok 2.0 has shown significant improvements in coding benchmarks, rivaling GPT-4 and Claude 3.5. It excels at "unfiltered" technical explanations and solving complex logical puzzles with a less "corporate" tone.',
                'Grok supports massive context windows and multimodal inputs, allowing it to analyze images and documents similarly to Gemini/Claude. Its vision capabilities are particularly sharp for recognizing UI patterns from old or low-quality screenshots.',
                'Integration with the xAI API allows developers to build "Grok-powered" agents that can leverage the model\'s reasoning and real-time knowledge base. It is becoming a popular choice for "Knowledge retrieval" bots.',
                'Grok\'s "Fun Mode" or unique personality often leads to more creative solutions during brainstorming, as it is less prone to the "safe and generic" outputs of some competitors.'
            ],
            why: 'Grok is the "Live Intelligence" model. If you are building an app that needs to know what\'s happening *now*—trending tech stacks, latest vulnerabilities, or market sentiment—Grok is the most effective tool in the stack.',
            prompts: {
                goal: 'Determine the current community sentiment on a new framework and build a demo',
                before: 'Should I use this new framework?',
                after: 'Grok: 1) What is the real-time sentiment on X regarding the new "Signals" API in Angular? 2) Find the 3 most common complaints developers have about it. 3) Write a clean demo component using the Signals API that circumvents those 3 common complaints. 4) Explain how your solution addresses the community\'s concerns.',
                resultBefore: 'Generic advice based on 2-year-old documentation that might be outdated.',
                resultAfter: 'A hyper-current analysis of the dev community\'s thoughts and a "future-proof" code sample that follows the latest best practices.'
            },
            pitfalls: [
                { title: 'Bias & Personality', description: 'Grok can sometimes be opinionated or edge-case-driven. Ensure you cross-reference its technical advice with official documentation for mission-critical code.' },
                { title: 'Availability', description: 'Grok is primarily available to X Premium subscribers, though its API is opening up for broader developer use.' }
            ],
            keywords: [
                { word: 'Real-Time Knowledge', meaning: 'Information retrieved from live sources as events happen', usage: 'Grok\'s real-time knowledge alerted us to the library patch just 10 minutes after release' },
                { word: 'xAI API', meaning: 'The developer interface for integrating Grok models into custom applications', usage: 'We use the xAI API to power our tech news monitoring bot' },
                { word: 'Unfiltered Reasoning', meaning: 'AI logic that is less constrained by standard corporate safety formatting', usage: 'Grok\'s unfiltered reasoning gave us a very direct and honest security audit' }
            ],
            resources: [
                { title: 'xAI Official Page', url: 'https://x.ai' },
                { title: 'Grok Release Notes', url: 'https://x.ai/blog' }
            ],
            notes: 'If you want a "raw" and current take on a technical problem, ask Grok. It\'s particularly good at spotting trends and early-stage bugs in new libraries.'
        },
        {
            id: 'wp-tools-11',
            lessonCode: 'wp-tools-11',
            title: 'AI Tools Comparison & Workflow',
            summary: 'Learn how to build a unified AI-first development workflow by choosing the right tool for each stage of the software development lifecycle.',
            objectives: [
                'Create a customized "AI Tool Map" for your specific development needs (Prototyping, Coding, Testing, Deploying)',
                'Learn to "Chain" tools together (e.g., Brainstorm in ChatGPT -> Build in Lovable -> Refine in Cursor)',
                'Analyze the cost vs performance tradeoffs of various AI subscriptions'
            ],
            theory: [
                'No single AI tool is "the best" for everything. A professional AI developer uses a "Multi-Tool Workflow". This involves understanding the unique strengths of each model and platform. For example: 1) Strategy (ChatGPT/Claude), 2) Rapid Prototyping (Lovable/Replit), 3) Core Coding (Cursor/Windsurf), 4) Deep Context Research (Gemini), 5) Automation (Antigravity).',
                '"Workflow Chaining" is the secret to high-speed development. A common chain: Prompt ChatGPT for an architecture diagram -> Upload diagram to Lovable to generate the first 80% of the app -> Download code and use Cursor to add the custom logic and fix complex bugs -> Use Antigravity to run final tests and deploy.',
                'Selection Criteria: 1) Context Size (Do I need the whole codebase?), 2) Tool Access (Do I need it to run shell commands?), 3) Speed (Do I need instant autocomplete or deep reasoning?), 4) Cost (Is a $20/mo sub worth the time saved?).',
                'The "Cost of Context" is a critical concept. Moving between tools often involves losing "Context". Professional workflows use "Context Injection" techniques: carefully curated READMEs, `.cursorrules` files, and "Context Dumps" to keep different AI tools aligned on the same goals.',
                'The field is moving fast. "Tool Agnosticism" is a virtue—be ready to switch from Tool A to Tool B if a new model update makes it superior. The skill is not just knowing "The Tool", but knowing "The Prompting Logic" that works across all of them.'
            ],
            why: 'Tools are multipliers. A 2x multiplier for 5 unique stages (Planning, UI, Logic, DB, Deploy) turns a single developer into a 32x powerhouse. Building your personal "AI Stack" is the single best investment you can make in your career today.',
            prompts: {
                goal: 'Determine the best tool stack for a specific project type (e.g., a real-time web game)',
                before: 'What tools should I use for my web game?',
                after: 'I am building a high-performance 2D web game using Three.js and persistent multiplayer. Goal: Propose an AI stack. Criteria: 1) Fastest UI prototyping for menus. 2) Best for complex physics engine logic. 3) Best for managing real-time server connections. 4) Best for generating game assets (textures/sounds). 5) Best overall editor for the dev lifecycle. For each stage, justify your choice based on current tool strengths.',
                resultBefore: 'A list of generic game engines like Unity or Godot.',
                resultAfter: 'A modern AI stack: 1) Lovable for the game UI/menus. 2) Cursor + Claude 3.5 for the Three.js physics logic. 3) Replit for the multiplayer backend hosting. 4) Midjourney/ElevenLabs for assets. 5) Antigravity for automated testing and deployment orchestration.'
            },
            pitfalls: [
                { title: 'Subscription Fatigue', description: 'Spending $200/month on 10 different AI tools without using them fully. Start with 1-2 core tools (like Cursor and ChatGPT) and expand only when needed.' },
                { title: 'The "Copy-Paste" Bottleneck', description: 'Inconsistent workflows where you manually copy code between 5 windows. Look for integrated tools like Antigravity that can bridge different environments.' }
            ],
            keywords: [
                { word: 'Multi-Tool Workflow', meaning: 'Using multiple specialized AI tools in sequence to complete a project', usage: 'Our multi-tool workflow reduced development time by 70%' },
                { word: 'Context Injection', meaning: 'The act of providing relevant background info to an AI to ensure it understands the project', usage: 'I used a .cursorrules file for context injection to keep the AI on-brand' },
                { word: 'Tool Agnostic', meaning: 'Focusing on universal AI skills rather than specific software brand loyalty', usage: 'Being tool agnostic allowed us to switch to the better model on day one' }
            ],
            resources: [
                { title: 'AI Developer Stack Comparison - 2024', url: 'https://futuresearch.ai/developer-tools' },
                { title: 'State of AI Development Repo', url: 'https://github.com/steven-tey/awesome-ai-devtools' }
            ],
            notes: 'Experiment! Every developer\'s brain works differently. Some love the "magic" of Replit, others love the "control" of Cursor. Find the stack that feels like an extension of your own mind.'
        },
        {
            id: 'wp-tools-12',
            lessonCode: 'wp-tools-12',
            title: 'Kiro AI',
            summary: 'Discover Kiro AI, a specialized tool for AI-enhanced software documentation, testing, and automated maintenance of large-scale codebases.',
            objectives: [
                'Automate the generation of technical documentation from existing codebases using Kiro',
                'Implement "Self-Documenting" workflows where documentation stays in sync with code changes',
                'Use Kiro for "Code Audits" to find technical debt and documentation gaps'
            ],
            theory: [
                'Kiro AI is designed for the "Maintenance" phase of the software lifecycle. While tools like Lovable focus on "Creation", Kiro focuses on "Understanding" and "Sustaining". It builds deep knowledge maps of legacy codebases.',
                'Kiro\'s stand-out features include "Living Documentation". When you change a function signature, Kiro doesn\'t just update the comment; it updates all related READMEs, API specs, and even onboarding guides across your organization.',
                'The tool performs "Intelligent Auditing". It can scan a project and tell you: "This module is complex and has no tests," or "This API is used by 5 other services but hasn\'t been updated in a year." It provides "Actionable Maintenance" plans.',
                'For large teams, Kiro acts as the "Onboarding Assistant". New developers can ask Kiro "How does the payment flow work?", and it will generate a visual diagram and a step-by-step code walkthrough specifically tailored to that user\'s permission level.',
                'Integration: Kiro links directly with GitHub/GitLab and Slack, providing real-time "Documentation-as-a-Service" where it can comment on PRs that lack sufficient documentation or test coverage.'
            ],
            why: 'Technical debt is the "silent killer" of great projects. Kiro AI keeps codebases healthy and understandable as they grow, ensuring that " tribal knowledge" is converted into shared, searchable documentation. It is the "Librarian" of the AI development world.',
            prompts: {
                goal: 'Audit a legacy project and create an onboarding guide for new developers',
                before: 'Explain this project to me',
                after: 'Kiro: 1) Map the entire architectural structure of this repository. 2) Identify the "Core Business Logic" modules. 3) Generate an "Onboarding Guide" for a Senior Frontend Engineer. The guide should include: File structure overview, how to run the project locally, state management flow, and the most common "gotchas" in the codebase. 4) List 5 areas of highest technical debt.',
                resultBefore: 'A simple list of folders and a "good luck" message.',
                resultAfter: 'A beautiful, hyperlinked onboarding portal that drastically reduces developer setup time and provides a clear roadmap for cleaning up old code.'
            },
            pitfalls: [
                { title: 'Documentation Lag', description: 'If Kiro is not integrated into the CI/CD pipeline, documentation can still fall out of sync. Ensure "Auto-Sync" is enabled.' },
                { title: 'Information Overload', description: 'Kiro can generate *too* much documentation. Use filters to focus only on "Public APIs" or "Critical Logic".' }
            ],
            keywords: [
                { word: 'Living Documentation', meaning: 'Technical docs that automatically update whenever the underlying source code changes', usage: 'Thanks to Kiro, our API docs are never out-of-date' },
                { word: 'Tribal Knowledge', meaning: 'Critical project info only known by a few long-term employees', usage: 'Kiro helped us extract tribal knowledge from our lead architect before they left' },
                { word: 'Code Audit', meaning: 'A comprehensive review of a codebase to identify bugs, debt, and quality issues', usage: 'Kiro\'s weekly code audit found the unused utility functions' }
            ],
            resources: [
                { title: 'Kiro AI - Documentation Platform', url: 'https://kiro.ai' },
                { title: 'The Future of AI Documentation', url: 'https://kiro.ai/blog/living-docs' }
            ],
            notes: 'Invest in Kiro when your project starts to feel "too big to hold in your head". It pays for itself in reduced onboarding time and fewer "debt-induced" bugs.'
        }
    ]
};

// ============================================
// MODULE 9: Version Control & Collaboration with AI
// ============================================
const webDevModule9 = {
    id: 'wp-vc',
    title: 'Version Control & Collaboration with AI',
    lessons: [
        {
            id: 'wp-vc-01',
            title: 'Introduction to Version Control & Git Basics',
            summary: 'Master the fundamentals of Git to track changes, protect your work, and pave the way for team collaboration.',
            objectives: [
                'Understand the core philosophy of distributed version control',
                'Master basic git commands: init, add, commit, push, pull',
                'Learn the difference between Working Directory, Staging Area, and Repo',
                'Create and connect a remote repository on GitHub'
            ],
            theory: [
                'Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. Git is a distributed version control system, meaning every developer has a full copy of the codebase history.',
                'The core workflow involves the "Working Directory" (where you edit), the "Staging Area" (where you prepare changes), and the "Repository" (where changes are permanently stored).',
                'Commits are snapshots of your project at a specific point in time, not just a list of changes. They form a linked history of your project.',
                '"Pushing" sends your local commits to a remote server (like GitHub) to back them up, while "Pulling" updates your local machine with changes from the remote.',
                '.gitignore is a meaningful file that tells Git which files (like sensitive API keys or massive node_modules folders) to ignore and not track.'
            ],
            why: 'Without version control, you are one "Save As" mistake away from losing days of work. Files named "index_final_v2_REAL.html" are a recipe for disaster. Git gives you a time machine—you can undo mistakes, experiment safely without breaking working code, and sync your work across multiple computers. It is the absolute minimum requirement for any professional developer job.',
            prompts: {
                goal: 'Initialize a repo and push to GitHub',
                before: 'How do I use git?',
                after: 'I have a local folder called "MyProject" with some HTML files. I want to: 1. Initialize it as a git repo. 2. Ignore the "node_modules" folder. 3. Commit all files with message "Initial commit". 4. Push it to a new GitHub repo URL (https://github.com/user/repo.git). Provide the exact terminal commands.',
                resultBefore: 'AI gives a generic definition of git.',
                resultAfter: 'AI lists the exact sequence: `git init`, `echo "node_modules" > .gitignore`, `git add .`, `git commit -m "Initial commit"`, `git branch -M main`, `git remote add origin...`, `git push...`.'
            },
            pitfalls: [
                { title: 'Committing Secrets', description: 'Accidentally committing .env files with API keys. Once in git history, they are compromised. Use .gitignore.' },
                { title: 'Nested Repos', description: 'Running `git init` inside a folder that is already a git repo. Causes confusion.' },
                { title: 'Detached HEAD', description: 'Checking out a specific commit instead of a branch. You are in a "limbo" state where commits will be lost.' }
            ],
            keywords: [
                { word: 'Repository', meaning: 'A storage location for your software packages, documentation, or other project files', usage: '"Clone the repository to your machine"' },
                { word: 'Commit', meaning: 'A snapshot of your changes', usage: '"Make a commit after finishing the header"' },
                { word: 'Staging Area', meaning: 'A file (known as the "index") that stores information about what will go into your next commit', usage: '"Add changes to the staging area"' }
            ],
            resources: [
                { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' },
                { title: 'GitHub Learning Lab', url: 'https://lab.github.com/' },
                { title: 'Git Visualizer', url: 'https://git-school.github.io/visualizing-git/' }
            ],
            notes: 'Instructor: Demonstrate "Git Disaster". Delete a critical file, then restore it instantly with `git checkout`. Show valid vs invalid .gitignore patterns.'
        },
        {
            id: 'wp-vc-02',
            title: 'AI-Assisted Commit Messages & Documentation',
            summary: 'Leverage AI to write semantic, professional commit messages and auto-generate documentation from your code changes.',
            objectives: [
                'Write "Semantic" commit messages (Conventional Commits)',
                'Use AI to analyze diffs and generate summaries',
                'Auto-generate changelogs from commit history',
                'Create READMEs and technical docs from code'
            ],
            theory: [
                'A commit message is communication for the future. It should explain "what" changed and "why", not just "how".',
                '"Conventional Commits" is a standard (e.g., "feat: add login", "fix: crash on startup") that allows machines to parse history and generate release notes automatically.',
                'AI tools can analyze your `git diff --staged` (the changes waiting to be committed) and understand exactly what logic changed, generating a perfect summary.',
                'Documentation is often neglected. AI can scan a function or a whole file and generate JSDoc/docstrings explaining parameters and behavior.',
                'A good README is your project\'s landing page. It must include: What it is, How to install, How to use, and Credits.'
            ],
            why: 'Writing "fixed bug" or "updates" as a commit message makes your history useless. When a bug reappears in 6 months, you won\'t know which commit caused it. Semantic commits allow you to pinpoint issues. Documenting code is tedious but essential for teams. AI turns 20 minutes of writing docs into 30 seconds of reviewing auto-generated text, keeping your project professional and maintainable.',
            prompts: {
                goal: 'Generate a semantic commit message',
                before: 'Write a commit message for this',
                after: 'I have modified `auth.js` to add JWT validation and updated `login.html` to show a spinner. Generate a standardized commit message following Semantic Commit guidelines. Include a clear subject line and a bulleted body description.',
                resultBefore: 'AI writes: "Updated auth and login."',
                resultAfter: 'AI writes: "feat(auth): implement JWT validation and loading state\n\n- Add verifyToken function to auth.js\n- Add loading spinner to login UI"'
            },
            pitfalls: [
                { title: 'Blind Acceptance', description: 'Not reading the AI-generated commit message. It might claim you fixed things you didn\'t touch.' },
                { title: 'Verbosity', description: 'AI writing a 3-paragraph essay for a 1-line CSS change. Keep it concise.' },
                { title: 'Sensitive Info', description: 'AI documenting a hardcoded password that should not have been there.' }
            ],
            keywords: [
                { word: 'Semantic Versioning', meaning: 'Versioning system (Major.Minor.Patch) based on change type', usage: '"Bump the minor version for new features"' },
                { word: 'Changelog', meaning: 'A file which contains a curated, chronologically ordered list of notable changes', usage: '"Generate the changelog from commits"' },
                { word: 'Diff', meaning: 'The difference between two versions of a file', usage: '"Read the diff to understand changes"' }
            ],
            resources: [
                { title: 'Conventional Commits', url: 'https://www.conventionalcommits.org/' },
                { title: 'Keep a Changelog', url: 'https://keepachangelog.com/' }
            ],
            notes: 'Instructor: Show a "git log" of a bad project ("fix", "fix", "wip") vs a good project ("feat:...", "style:...") and ask which one they would rather debug.'
        },
        {
            id: 'wp-vc-03',
            title: 'Branch Strategy & Collaboration Workflows',
            summary: 'Learn how teams work in parallel using branching strategies like Gitflow and Trunk-Based Development.',
            objectives: [
                'Understand "Main" vs "Feature" branches',
                'Master the Pull Request (PR) workflow',
                'Resolve simple Merge Conflicts',
                'Choose the right branching strategy for your team'
            ],
            theory: [
                'Branching allows you to diverge from the main line of development and work in isolation. "Main" or "Master" is the production-ready code. You never push directly to Main.',
                '"Feature Branches" are temporary workspaces for specific tasks (e.g., `feature/login-page`). Once done, they are merged back.',
                '"Gitflow" is a strict model with Develop, Release, and Hotfix branches, good for periodic releases. "Trunk-Based Development" is faster, with short-lived branches merging to Main daily.',
                'A "Pull Request" (PR) is a request to merge your branch. It is a checkpoint for code review and automated testing.',
                'Merge Conflicts happen when two people change the same line of code. Git pauses and asks you to pick the "Winner".'
            ],
            why: 'Teams cannot work on the same `index.html` file simultaneously without branches—you would overwrite each other\'s work constantly. Branching keeps work isolated until it is ready. Pull Requests provide a governance layer, ensuring no bad code enters production without a second pair of eyes checking it.',
            prompts: {
                goal: 'Resolve a merge conflict strategy',
                before: 'Help with merge conflict',
                after: 'I have a merge conflict in `styles.css`. My branch changed the header color to Blue. The main branch changed it to Red. I want to keep the Main branch\'s color but keep my new padding changes. How do I edit the conflict markers (`<<<<`, `====`, `>>>>`) to achieve this?',
                resultBefore: 'AI explains generic conflict theory.',
                resultAfter: 'AI shows the exact code block to keep and how to remove the markers.'
            },
            pitfalls: [
                { title: 'Long-Lived Branches', description: 'Keeping a branch open for 2 months. The merge conflict will be impossible. Merge often.' },
                { title: 'Mega-PRs', description: 'Submitting a PR with 50 changes types. It is impossible to review. Keep PRs small.' },
                { title: 'Fear of Conflicts', description: 'avoiding merging because conflicts are scary. Face them early.' }
            ],
            keywords: [
                { word: 'Pull Request', meaning: 'Mechanism for a developer to notify team members that they have completed a feature', usage: '"Open a PR for review"' },
                { word: 'Merge Conflict', meaning: 'Event that takes place when Git is unable to automatically resolve differences', usage: '"Resolve the merge conflict manually"' },
                { word: 'Rebasing', meaning: 'The process of moving or combining a sequence of commits to a new base commit', usage: '"Rebase before merging to update your branch"' }
            ],
            resources: [
                { title: 'Atlassian Git Branching Models', url: 'https://www.atlassian.com/git/tutorials/comparing-workflows' },
                { title: 'GitHub Flow', url: 'https://guides.github.com/introduction/flow/' }
            ],
            notes: 'Instructor: Simulate a live merge conflict. Two students edit the same line of the same file and try to push. Walk through the resolution.'
        },
        {
            id: 'wp-vc-04',
            title: 'Collaborative Development with AI',
            summary: 'Using AI as a constantly available team member for code reviews, explanation, and pair programming.',
            objectives: [
                'Use AI to review Pull Requests for bugs and style',
                'Generate test data for team usage',
                'Explain complex legacy code from teammates',
                'Bridge knowledge gaps between Frontend and Backend devs'
            ],
            theory: [
                'Collaborative development shifts focus from "my code" to "our code". Communication is key.',
                'AI acts as a "Pair Programmer". It can review your code before you open a PR: "Critique this function for performance and readability."',
                'Explaining Code: "Explain this regex my teammate wrote so I can edit it without breaking it."',
                'Mock Data: Frontend devs often wait for Backend devs. AI can "Generate a JSON object of 50 users with realistic names and avatars" so Frontend can keep working (unblocking).',
                'Translation: AI can translate SQL logic (Backend) into TypeScript interfaces (Frontend) to keep teams aligned.'
            ],
            why: 'The biggest bottleneck in teams is waiting—waiting for code review, waiting for APIs, waiting for answers. AI reduces this latency. It gives you an instant second opinion and unblocks you when you don\'t understand shared code. It accelerates the "Onboarding" of new team members by acting as a project encyclopedia.',
            prompts: {
                goal: 'AI Code Review',
                before: 'Review this code',
                after: 'Act as a Senior Developer. Review this React Component PR.\nLook for: 1. Unnecessary re-renders. 2. Accessibility violations. 3. Hardcoded strings. 4. Logic errors.\nBe constructive and suggest code improvements.',
                resultBefore: 'AI says "Looks good!" or finds trivial things.',
                resultAfter: 'AI points out a `useEffect` dependency missing and a missing `aria-label`, preventing bugs before the human review.'
            },
            pitfalls: [
                { title: 'AI Hallucinating Bugs', description: 'AI claiming code is wrong when it uses a valid pattern it doesn\'t know. Verify feedback.' },
                { title: 'Harshness', description: 'AI reviews can feel robotic. Don\'t copy-paste AI critiques directly to teammates without softening the tone.' },
                { title: 'Context Window', description: 'AI might not know the whole project architecture when reviewing one file.' }
            ],
            keywords: [
                { word: 'Code Review', meaning: 'Systematic examination of computer source code', usage: '"Pass the code review before merging"' },
                { word: 'Pair Programming', meaning: 'Two programmers working together at one workstation (or one human + AI)', usage: '"Pair program with AI to solve the logic"' },
                { word: 'Mock Data', meaning: 'Fake data used for testing when real data is unavailable', usage: '"Use mock data for the demo"' }
            ],
            resources: [
                { title: 'Google Engineering Practices - Code Review', url: 'https://google.github.io/eng-practices/review/' },
                { title: 'Mockaroo - Data generator', url: 'https://www.mockaroo.com/' }
            ],
            notes: 'Instructor: Have students "swap" bad code and use AI to understand and fix it, mimicking taking over a legacy ticket.'
        },
        {
            id: 'wp-vc-05',
            title: 'Advanced Git Operations with AI Assistance',
            summary: 'Using AI to navigate complex Git scenarios, recover lost work, and maintain a clean history.',
            objectives: [
                'Understand Rebase vs Merge',
                'Use Cherry-pick to move specific commits',
                'Debug with Git Bisect',
                'Recover "lost" commits with Reflog'
            ],
            theory: [
                'Advanced operations give you surgical control over history.',
                '"Rebase" rewrites commit history to create a linear progression. It moves your branch\'s start point to the tip of main. Cleaner than Merge, but dangerous on shared branches.',
                '"Cherry-pick" allows you to copy the changes from a specific commit on one branch and apply them to another without merging the whole branch.',
                '"Git Bisect" is a binary search tool. You tell it a "Good" commit (no bug) and a "Bad" commit (bug exists). It jumps to the middle. You test. It repeats until it finds the exact commit that broke the code.',
                '"Reflog" records every movement of the HEAD pointer. Even if you "reset --hard" and delete a commit, Reflog knows where it was. It is the "Undo button" for Git.'
            ],
            why: 'Eventually, you will break Git. You will delete the wrong branch or merge the wrong thing. Advanced commands are your safety net. However, their syntax is complex (`git rebase -i HEAD~3`). AI is the perfect guide—it can write the complex command and explain exactly what will happen, reducing the fear of using powerful tools.',
            prompts: {
                goal: 'Recover a deleted branch commmit',
                before: 'I deleted my code help',
                after: 'I accidentally ran `git reset --hard` and lost my last 3 commits. Explain how to use `git reflog` to find the commit hash of my work and how to restore it back to `HEAD`.',
                resultBefore: 'AI says "Use reflog" without steps.',
                resultAfter: 'AI gives step-by-step: "1. Run `git reflog`. 2. Find the line that looks like `moving from...`. 3. Note the hash (e.g., a1b2c3d). 4. Run `git reset --hard a1b2c3d`."'
            },
            pitfalls: [
                { title: 'Rewriting Public History', description: 'Rebasing a branch that others have pulled. It breaks their history. Only rebase local branches.' },
                { title: 'Cherry-pick Duplication', description: 'Cherry-picking creates a new duplicate commit. Use sparingly.' },
                { title: 'The "Scary" Detached Head', description: 'Advanced moves often land you here. Don\'t panic. Checkout a branch to save state.' }
            ],
            keywords: [
                { word: 'Git Rebase', meaning: 'process of moving or combining a sequence of commits to a new base commit', usage: '"Interactive rebase to squash commits"' },
                { word: 'Cherry-pick', meaning: 'Apply the changes introduced by some existing commits', usage: '"Cherry-pick the bug fix to the release branch"' },
                { word: 'Reflog', meaning: 'Reference logs that record when the tips of branches were updated', usage: '"Check reflog to find lost commits"' },
                { word: 'Bisect', meaning: 'Use binary search to find the commit that introduced a bug', usage: '"Git bisect found the breaking change"' }
            ],
            resources: [
                { title: 'Oh Shit, Git!?!', url: 'https://ohshitgit.com/' },
                { title: 'Git Branching - Rebasing', url: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing' }
            ],
            notes: 'Instructor: The "Time Travel" demo. Introduce a bug 50 commits ago. Use `git bisect` to find it live in class.'
        }
    ]
};

// Consolidated Export - Merging all modules into one content map
export const webDevContent = {
    // webDevModule1 Features
    ...webDevModule1.lessons.reduce((acc, lesson, index) => {
        const id = `wp-m1-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule2 Features
    ...webDevModule2.lessons.reduce((acc, lesson, index) => {
        const id = `wp-fe-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule3 Features
    ...webDevModule3.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-ux-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule4 Features
    ...webDevModule4.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-be-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule5 Features
    ...webDevModule5.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-db-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule6 Features
    ...webDevModule6.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-dp-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule7 Features
    ...webDevModule7.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-as-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule8 Features
    ...webDevModule8.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-ai-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {}),

    // webDevModule9 Features
    ...webDevModule9.lessons.reduce((acc, lesson, index) => {
        const code = lesson.lessonCode || lesson.id;
        const id = code ? code.toLowerCase() : `wp-vc-${String(index + 1).padStart(2, '0')}`;
        acc[id] = lesson;
        return acc;
    }, {})
};
