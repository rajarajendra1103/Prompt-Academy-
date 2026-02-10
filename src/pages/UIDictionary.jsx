import React, { useState, useEffect } from 'react';
import {
    Search, Layers, MousePointer2, Eye, Layout,
    Network, Accessibility, ChevronsDown, Box,
    ChevronRight, LayoutList, LayoutGrid, Mouse,
    AppWindow, RefreshCw, Zap, PanelTop, Contrast,
    Moon, Smartphone, Info, CreditCard, Tv,
    ExternalLink, MonitorSmartphone, ArrowRightLeft,
    AlignLeft, Library, Maximize, Type, CheckCircle2,
    CircleDashed, Palette, Type as TypeIcon, Sidebar,
    Table, FormInput, Sliders, ToggleLeft, ListOrdered,
    Image, Play, UserCircle, SearchCode, Database,
    Code2, FileCode2, Terminal as TerminalIcon,
    Bell, List, Columns, Calendar, ListTree, Plus,
    AlignJustify, GalleryVertical, SquareStack, RectangleHorizontal,
    Minus, MousePointerClick, Waypoints, Info as InfoIcon, Tag
} from 'lucide-react';
import './UIDictionary.css';

const UIDictionary = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('ALL');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [displayLimit, setDisplayLimit] = useState(12);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 200) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const elements = [
        {
            name: "Glassmorphism",
            category: "Style & Visual",
            icon: <Layers className="icon-violet" />,
            description: "A design trend characterized by semi-transparent backgrounds, multi-layered approaches, and background blur to create a 'frosted glass' effect.",
            usage: "Use for sidebars or overlay panels to maintain context of the background content.",
            code: "backdrop-filter: blur(20px);",
            tags: ["Frosted Glass", "Depth", "Modern"]
        },
        {
            name: "Micro-interactions",
            category: "Interaction",
            icon: <MousePointer2 className="icon-violet" />,
            description: "Functional animations that provide immediate feedback. Essential for creating a sense of responsiveness.",
            usage: "Use for button clicks, form submissions, or loading states to humanize the interface.",
            tags: ["Haptic feedback", "Dynamic states"]
        },
        {
            name: "Visual Hierarchy",
            category: "Architecture",
            icon: <Eye className="icon-violet" />,
            description: "The strategic arrangement of elements to signal importance. This guides the eye to critical information first.",
            usage: "Use varying font weights and sizes to ensure the most important message is read first.",
            tags: ["Z-Pattern", "Contrast focus"]
        },
        {
            name: "Skeleton Screen",
            category: "Performance",
            icon: <SquareStack className="icon-violet" />,
            description: "A low-fidelity version of a UI that is shown while content is loading, reducing perceived wait time.",
            usage: "Use for data-heavy pages to prevent layout shifts and keep users engaged during loads.",
            tags: ["Loading", "UX", "Perception"]
        },
        {
            name: "Toast Notification",
            category: "Feedback",
            icon: <Bell className="icon-violet" />,
            description: "Small, non-intrusive messages that pop up to provide feedback about an operation.",
            usage: "Use for success messages like 'Profile Updated' or 'Message Sent'.",
            tags: ["Alerts", "Feedback", "Overlay"]
        },
        {
            name: "Stepper",
            category: "UX Pattern",
            icon: <ListOrdered className="icon-violet" />,
            description: "A visual indicator that guides users through a multi-step process.",
            usage: "Perfect for checkout flows, onboarding, or complex form registrations.",
            tags: ["Progress", "Wizard", "Flow"]
        },
        {
            name: "Segmented Control",
            category: "Input",
            icon: <Columns className="icon-violet" />,
            description: "A linear set of two or more segments, each of which functions as a mutually exclusive button.",
            usage: "Use as an alternative to radio buttons when space is limited and options are few.",
            tags: ["Toggle", "Selection", "Switch"]
        },
        {
            name: "Chips",
            category: "Data Display",
            icon: <Tag className="icon-violet" />,
            description: "Compact elements that represent an attribute, text, entity, or action.",
            usage: "Use for categories, tags, or as removable filters in a search interface.",
            tags: ["Filtering", "Metadata", "Pills"]
        },
        {
            name: "Date Picker",
            category: "Form",
            icon: <Calendar className="icon-violet" />,
            description: "A specialized input for selecting dates or date ranges from a calendar view.",
            usage: "Essential for flight bookings, event scheduling, or date-of-birth inputs.",
            tags: ["Input", "Scheduling", "Time"]
        },
        {
            name: "Tree View",
            category: "Structure",
            icon: <ListTree className="icon-violet" />,
            description: "A hierarchical list where items can be expanded to reveal sub-items.",
            usage: "Use for file explorers, organizational charts, or complex category navigation.",
            tags: ["Levels", "Folders", "Nesting"]
        },
        {
            name: "Floating Action Button (FAB)",
            category: "Action",
            icon: <Plus className="icon-violet" />,
            description: "A circular button that floats above the content to perform the primary action of a screen.",
            usage: "Best for 'Compose' in email apps or 'Post' in social media platforms.",
            tags: ["Primary Action", "Mobile", "Z-index"]
        },
        {
            name: "Bottom Sheet",
            category: "Mobile UX",
            icon: <AlignJustify className="icon-violet" />,
            description: "A panel that slides up from the bottom of the screen to reveal more options or information.",
            usage: "Use in mobile apps for share sheets, filters, or additional context menus.",
            tags: ["Overlay", "Mobile Navigation", "Access"]
        },
        {
            name: "Carousel",
            category: "Visual Display",
            icon: <GalleryVertical className="icon-violet" />,
            description: "A slideshow for cycling through a series of content, usually images or cards.",
            usage: "Use on landing pages for hero images or product showcases.",
            tags: ["Slideshow", "Interactive", "Slider"]
        },
        {
            name: "Popover",
            category: "Feedback",
            icon: <RectangleHorizontal className="icon-violet" />,
            description: "A small overlay that appears when an element is clicked, containing additional info or secondary actions.",
            usage: "Use for 'Help' icons or showing details when hovering over a dashboard metric.",
            tags: ["Tooltip", "Overlay", "Detail"]
        },
        {
            name: "Badge",
            category: "Data Display",
            icon: <CheckCircle2 className="icon-violet" />,
            description: "Small visual indicators typically used to show counts, status, or new items.",
            usage: "Use on icons to show unread notifications or cart item counts.",
            tags: ["Status", "Count", "Micro"]
        },
        {
            name: "Divider",
            category: "Structure",
            icon: <Minus className="icon-violet" />,
            description: "A thin line used to group and separate content within a list or page.",
            usage: "Use to break up long blocks of text or separate different sections of a form.",
            tags: ["Separation", "Grouping", "Layout"]
        },
        {
            name: "Context Menu",
            category: "Interaction",
            icon: <MousePointerClick className="icon-violet" />,
            description: "A menu that appears upon a right-click or long-press, showing actions relevant to the specific target.",
            usage: "Use for 'Rename', 'Delete', or 'Download' actions on a file list.",
            tags: ["Action List", "Right Click", "Specific"]
        },
        {
            name: "Scrollspy",
            category: "Navigation",
            icon: <Waypoints className="icon-violet" />,
            description: "A navigation mechanism that automatically highlights the current section as the user scrolls.",
            usage: "Perfect for long one-page documentation or landing pages with multiple sections.",
            tags: ["Sync", "Auto-highlight", "Long-form"]
        },
        {
            name: "Skeuomorphism",
            category: "Visual Concept",
            icon: <Layout className="icon-violet" />,
            description: "Design that mimics physical objects or textures to help users understand digital interactions.",
            usage: "Use for apps targeting users who prefer intuitive, real-world metaphors (like a calculator).",
            code: "box-shadow: inset ...",
            tags: ["Realistic", "Textural"]
        },
        {
            name: "Progressive Disclosure",
            category: "Navigation",
            icon: <Network className="icon-violet" />,
            description: "An interaction pattern where complex data is deferred to secondary screens to reduce cognitive load.",
            usage: "Use in wizard-style forms where users only see the next step after completing the current one.",
            tags: ["Accordion", "Lazy reveal"]
        },
        {
            name: "Affordance",
            category: "Usability",
            icon: <Accessibility className="icon-violet" />,
            description: "Properties of an object that intuitively show users what actions can be performed.",
            usage: "Ensure buttons look 'pushable' and links look 'clickable' to reduce user frustration.",
            code: "cursor: pointer;",
            tags: ["Intuitive", "Interactive"]
        },
        {
            name: "Neumorphism",
            category: "Visual Style",
            icon: <Box className="icon-violet" />,
            description: "A blend between skeuomorphism and flat design using shadows to create an 'extruded' look.",
            usage: "Effective for music player controls or simple dashboard widgets needing a futuristic feel.",
            code: "box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;",
            tags: ["Soft UI", "Tactile", "Shadows"]
        },
        {
            name: "Breadcrumbs",
            category: "Navigation",
            icon: <ChevronRight className="icon-violet" />,
            description: "Secondary navigation system that shows the user's location in a website hierarchy.",
            usage: "Essential for e-commerce sites with deep product categorization (e.g., Electronics > Phones > iPhone).",
            tags: ["Paths", "Wayfinding"]
        },
        {
            name: "Accordion",
            category: "Component",
            icon: <ChevronsDown className="icon-violet" />,
            description: "A vertically stacked list of items that use reveal/hide functionality.",
            usage: "Best for FAQ sections to keep the page clean while providing lots of info.",
            tags: ["Collapsible", "Drawer"]
        },
        {
            name: "Bento Grid",
            category: "Layout",
            icon: <LayoutList className="icon-violet" />,
            description: "A layout style using rectangular compartments of varying sizes to organize content.",
            usage: "Use for portfolio galleries or dashboard overviews to show varied data points visually.",
            tags: ["Modular", "Modern", "Grid"]
        },
        {
            name: "Masonry Layout",
            category: "Layout",
            icon: <LayoutGrid className="icon-violet" />,
            description: "A grid layout based on columns without fixed row heights, popularized by Pinterest.",
            usage: "Best for image blogs or social media feeds with differently sized images.",
            tags: ["Pinterest Style", "Dynamic"]
        },
        {
            name: "Parallax Scrolling",
            category: "Visual Effect",
            icon: <Mouse className="icon-violet" />,
            description: "A technique where background move slower than the foreground, creating depth.",
            usage: "Use on storytelling landing pages to create an immersive, cinematic experience.",
            tags: ["Depth", "Animation", "3D"]
        },
        {
            name: "Modal Window",
            category: "Interaction",
            icon: <AppWindow className="icon-violet" />,
            description: "A dialog box that appears on top, requiring action before returning to the main screen.",
            usage: "Use for critical actions like 'Delete Account' or 'Sign In'.",
            tags: ["Dialog", "Popup", "Overlay"]
        },
        {
            name: "Infinite Scroll",
            category: "UX Pattern",
            icon: <RefreshCw className="icon-violet" />,
            description: "Content loads continuously as the user scrolls, eliminating pagination.",
            usage: "Ideal for social media feeds where users consume content passively.",
            tags: ["Feed", "Lazy Load"]
        },
        {
            name: "Lazy Loading",
            category: "Performance",
            icon: <Zap className="icon-violet" />,
            description: "Loading content only when it enters the viewport to improve load speeds.",
            usage: "Use for all high-resolution images below the fold to save bandwidth.",
            tags: ["Speed", "Optimization"]
        },
        {
            name: "Sticky Header",
            category: "Navigation",
            icon: <PanelTop className="icon-violet" />,
            description: "A navigation bar that remains at the top of the viewport during scroll.",
            usage: "Ensures navigation links are always accessible in long-form content.",
            tags: ["Fixed", "Persistence"]
        },
        {
            name: "Contrast Ratio",
            category: "Accessibility",
            icon: <Contrast className="icon-violet" />,
            description: "Difference in brightness between text and background for readability.",
            usage: "Must meet WCAG standards (e.g., 4.5:1 for normal text) for inclusivity.",
            tags: ["Colors", "Readability"]
        },
        {
            name: "Dark Mode",
            category: "Personalization",
            icon: <Moon className="icon-violet" />,
            description: "A low-light UI theme that uses dark backgrounds to reduce eye strain.",
            usage: "Offer as a user preference for apps used late at night or on OLED screens.",
            tags: ["Themes", "UI/UX"]
        },
        {
            name: "Haptic Feedback",
            category: "Mobile UX",
            icon: <Smartphone className="icon-violet" />,
            description: "Physical vibrations that mimic tactile sensations in digital interfaces.",
            usage: "Use sparingly for important errors or confirmations on mobile devices.",
            tags: ["Tactile", "Mobile"]
        },
        {
            name: "Tooltip",
            category: "Feedback",
            icon: <Info className="icon-violet" />,
            description: "Short descriptive text that appears on hover, providing extra context.",
            usage: "Use for explaining icons that don't have accompanying labels.",
            tags: ["Help", "Context"]
        },
        {
            name: "Card",
            category: "Structure",
            icon: <CreditCard className="icon-violet" />,
            description: "A flexible container for content items, usually with image and text.",
            usage: "Perfect for showing articles, products, or user profiles in a grid.",
            tags: ["Box", "Container"]
        },
        {
            name: "Hero Section",
            category: "Anatomy",
            icon: <Tv className="icon-violet" />,
            description: "The large, visual section at the top of a website grabbing immediate attention.",
            usage: "Use high-impact imagery and a clear CTA to define the site's primary value.",
            tags: ["Landing Page", "Main"]
        },
        {
            name: "Call to Action (CTA)",
            category: "Marketing",
            icon: <ExternalLink className="icon-violet" />,
            description: "Interactive elements designed to prompt an immediate response.",
            usage: "Use action-oriented text like 'Get Started' or 'Buy Now'.",
            tags: ["Conversion", "Buttons"]
        },
        {
            name: "Responsive Design",
            category: "Engineering",
            icon: <MonitorSmartphone className="icon-violet" />,
            description: "Interfaces that adapt fluidly to various screen sizes.",
            usage: "Essential for modern web development to ensure usability on mobile and desktop.",
            tags: ["Mobile First", "Fluid"]
        },
        {
            name: "Z-Pattern",
            category: "UX Design",
            icon: <ArrowRightLeft className="icon-violet" />,
            description: "A layout pattern following the path the eye takes on simple pages.",
            usage: "Best for landing pages with limited text to guide the user towards the CTA.",
            tags: ["Eye Tracking", "Scanning"]
        },
        {
            name: "F-Pattern",
            category: "UX Design",
            icon: <AlignLeft className="icon-violet" />,
            description: "A scanning pattern for content-rich pages where users read horizontally.",
            usage: "Place the most important info in the top rows and left column of text-heavy pages.",
            tags: ["Reading", "Scanning"]
        },
        {
            name: "Design System",
            category: "Architecture",
            icon: <Library className="icon-violet" />,
            description: "A complete set of design standards and reusable components.",
            usage: "Necessary for enterprise teams to maintain brand consistency across multiple products.",
            tags: ["Standardization", "UI Kits"]
        },
        {
            name: "White Space",
            category: "Principles",
            icon: <Maximize className="icon-violet" />,
            description: "Negative space between elements preventing intellectual overload.",
            usage: "Increase padding and margins to make content feel premium and easy to scan.",
            tags: ["Breathing Room", "Minimalism"]
        },
        {
            name: "Typographic Hierarchy",
            category: "Visual",
            icon: <Type className="icon-violet" />,
            description: "Size, weight, and color to show the relative importance of text.",
            usage: "Differentiate clearly between H1, H2, and body text for better reading flow.",
            tags: ["Text", "Clarity"]
        },
        {
            name: "Input Validation",
            category: "Logic",
            icon: <CheckCircle2 className="icon-violet" />,
            description: "Feedback on forms ensuring correct format of user-entered data.",
            usage: "Show errors immediately (inline) rather than waiting for form submission.",
            tags: ["Forms", "Error Handling"]
        }
    ];

    const filteredElements = elements.filter(el => {
        const matchesSearch = el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            el.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLetter = selectedLetter === 'ALL' || el.name.startsWith(selectedLetter);
        return matchesSearch && matchesLetter;
    });

    const isShowingAll = displayLimit >= filteredElements.length;

    const toggleDisplayLimit = () => {
        if (isShowingAll) {
            setDisplayLimit(12);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setDisplayLimit(prev => prev + 12);
        }
    };

    return (
        <div className="dictionary-custom-page">
            <main className="dictionary-main">
                <div className="dictionary-content-wrapper">
                    {/* Header Section */}
                    <div className="dictionary-hero">
                        <h1 className="hero-title">UI Dictionary</h1>
                        <p className="hero-subtitle">
                            The definitive cyber-professional guide to modern digital interfaces. Master the visual architecture and semantic patterns of high-performance design.
                        </p>
                    </div>

                    {/* Search & Navigation Sticky Header */}
                    <div className={`dictionary-controls-sticky ${!isVisible ? 'controls-hidden' : ''}`}>
                        <div className="search-bar-container">
                            <div className="search-input-wrapper">
                                <Search className="search-icon" />
                                <input
                                    className="search-input"
                                    placeholder="Search terminology..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className="kbd-hint">
                                    <kbd className="kbd">CTRL + K</kbd>
                                </div>
                            </div>
                        </div>

                        <div className="alphabet-nav">
                            <button
                                className={`letter-btn ${selectedLetter === 'ALL' ? 'active' : ''}`}
                                onClick={() => setSelectedLetter('ALL')}
                            >
                                ALL
                            </button>
                            {letters.map(letter => (
                                <button
                                    key={letter}
                                    className={`letter-btn ${selectedLetter === letter ? 'active' : ''}`}
                                    onClick={() => setSelectedLetter(letter)}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid Section */}
                    <div className="dictionary-grid">
                        {filteredElements.slice(0, displayLimit).map((el, idx) => (
                            <article key={idx} className="dictionary-card group">
                                <div className="card-header">
                                    <div className="header-top">
                                        {el.icon}
                                        <span className="category-label">{el.category}</span>
                                    </div>
                                    <h3 className="card-title">{el.name}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="preview-container">
                                        <div className="preview-placeholder">
                                            {el.name === "Glassmorphism" && (
                                                <div className="glass-demo">
                                                    <div className="glass-shape"></div>
                                                </div>
                                            )}
                                            {el.name === "Micro-interactions" && (
                                                <div className="interaction-demo">
                                                    <div className="ping-dot"></div>
                                                </div>
                                            )}
                                            {el.name === "Visual Hierarchy" && (
                                                <div className="hierarchy-demo">
                                                    <div className="bar large"></div>
                                                    <div className="bar medium"></div>
                                                    <div className="bar small"></div>
                                                </div>
                                            )}
                                            {el.name === "Affordance" && (
                                                <div className="affordance-demo">
                                                    <div className="button-mock">CLICKABLE</div>
                                                </div>
                                            )}
                                            {!["Glassmorphism", "Micro-interactions", "Visual Hierarchy", "Affordance"].includes(el.name) && (
                                                <div className="generic-preview">
                                                    {el.icon}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="card-description">{el.description}</p>

                                    <div className="usage-section" style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <InfoIcon size={14} /> Professional Usage
                                        </h4>
                                        <p style={{ fontSize: '0.875rem', color: '#cbd5e1', fontStyle: 'italic', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1rem' }}>
                                            "{el.usage}"
                                        </p>
                                    </div>

                                    {el.code && (
                                        <div className="code-snippet">
                                            <code>{el.code}</code>
                                        </div>
                                    )}

                                    {el.tags && (
                                        <div className="tag-container">
                                            {el.tags.map(tag => (
                                                <span key={tag} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Footer Expand Button */}
                    {filteredElements.length > 12 && (
                        <div className="expand-container">
                            <button
                                className={`expand-btn ${isShowingAll ? 'rotate-icon' : ''}`}
                                onClick={toggleDisplayLimit}
                            >
                                <span>{isShowingAll ? 'Collapse Gallery' : 'Expand Glossary'}</span>
                                <ChevronsDown
                                    size={20}
                                    className="bounce"
                                    style={{ transform: isShowingAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
                                />
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default UIDictionary;
