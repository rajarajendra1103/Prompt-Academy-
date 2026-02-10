import React, { useState, useEffect } from 'react';
import { Search, Copy, Terminal, Tag, CheckCircle } from 'lucide-react';
import './PromptLibrary.css';

const PromptLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [copyStatus, setCopyStatus] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    const prompts = [
        {
            id: 1,
            title: "Clean React Component",
            category: "Web Dev",
            prompt: "Create a modern React function component for a profile card. Use functional styling, include props for name, avatar, bio, and social links. Ensure it follows accessibilty best practices and uses Tailwind CSS for responsiveness.",
            tags: ["React", "UI", "Tailwind"]
        },
        {
            id: 2,
            title: "Database Schema Design",
            category: "Backend",
            prompt: "Act as a Senior Database Architect. Design a modular PostgreSQL schema for a project management tool. Include tables for 'Users', 'Workspaces', 'Tasks', and 'Comments'. Ensure proper indexing for query optimization and provide the DDL script.",
            tags: ["SQL", "DB", "Architecture"]
        },
        {
            id: 3,
            title: "Cinematic Image Generation",
            category: "Image Gen",
            prompt: "Hyper-realistic cinematic wide shot of a futuristic metropolis during a neon-lit rainstorm. Cyberpunk aesthetic, volumetric lighting, reflections on wet asphalt, 8k resolution, shot on IMAX 70mm, highly detailed texture.",
            tags: ["Midjourney", "Art", "AI"]
        },
        {
            id: 4,
            title: "Performance Optimization Audit",
            category: "Engineering",
            prompt: "Analyze the provided React codebase and identify bottlenecks. Suggest improvements for rendering performance, including useMemo/useCallback usage, bundle size reduction, and lazy loading strategies.",
            tags: ["Performance", "React", "Optimization"]
        },
        {
            id: 5,
            title: "SEO Meta Tag Generator",
            category: "Marketing",
            prompt: "Act as an SEO Expert. Generate a comprehensive set of meta tags (Title, Description, OpenGraph, Twitter Cards) for a new SaaS landing page targeting 'AI Productivity Tools'. Ensure the copy is high-converting and within character limits.",
            tags: ["SEO", "Meta", "Copywriting"]
        }
    ];

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopyStatus(id);
        setTimeout(() => setCopyStatus(null), 2000);
    };

    const filteredPrompts = prompts.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="dictionary-custom-page"> {/* Reusing the theme-wrapper from UIDictionary */}
            <main className="dictionary-main">
                <div className="dictionary-content-wrapper">
                    {/* Header Section */}
                    <div className="dictionary-hero">
                        <h1 className="hero-title">Prompt Library</h1>
                        <p className="hero-subtitle">
                            The ultimate repository of high-performance technical prompts. Master the art of instruction to unlock production-ready code and cinematic visuals.
                        </p>
                    </div>

                    {/* Search & Navigation Sticky Header */}
                    <div className={`dictionary-controls-sticky ${!isVisible ? 'controls-hidden' : ''}`}>
                        <div className="search-bar-container">
                            <div className="search-input-wrapper">
                                <Search className="search-icon" />
                                <input
                                    className="search-input"
                                    placeholder="Decode your intent (Search prompts...)"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="kbd-hint">
                                    <kbd className="kbd">CTRL + L</kbd>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid Section */}
                    <div className="dictionary-grid" style={{ marginTop: '2rem' }}>
                        {filteredPrompts.map((p) => (
                            <article key={p.id} className="dictionary-card group">
                                <div className="card-header">
                                    <div className="header-top">
                                        <Terminal className="icon-violet" />
                                        <span className="category-label">{p.category}</span>
                                    </div>
                                    <h3 className="card-title">{p.title}</h3>
                                </div>
                                <div className="card-body">
                                    <div className="preview-container" style={{ background: '#000', padding: '1rem', display: 'block', height: 'auto', minHeight: '120px' }}>
                                        <code style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', display: 'block', whiteSpace: 'pre-wrap' }}>
                                            {p.prompt}
                                        </code>
                                    </div>

                                    <div className="flex-row-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                        <div className="tag-container" style={{ flex: 1 }}>
                                            {p.tags.map(tag => (
                                                <span key={tag} className="tag">#{tag}</span>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(p.prompt, p.id)}
                                            className="copy-btn-custom"
                                            style={{
                                                marginLeft: '1rem',
                                                padding: '0.75rem',
                                                borderRadius: '0.75rem',
                                                background: copyStatus === p.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                                                color: copyStatus === p.id ? '#000' : 'var(--text-secondary)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {copyStatus === p.id ? <CheckCircle size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PromptLibrary;
