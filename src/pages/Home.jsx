import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Globe, Smartphone, Image as ImageIcon, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const courses = [
        {
            id: 'foundations',
            title: 'Foundations of Prompt Engineering',
            desc: 'Master the core principles of human-AI collaboration.',
            icon: <Terminal className="course-icon" />,
            link: '/curriculum/prompt-foundations'
        },
        {
            id: 'webdev',
            title: 'Web Development',
            desc: 'Build modern websites and web apps using AI prompts.',
            icon: <Globe className="course-icon" />,
            link: '/curriculum/web-dev'
        },
        {
            id: 'appdev',
            title: 'App Development',
            desc: 'Create mobile and desktop applications from scratch.',
            icon: <Smartphone className="course-icon" />,
            link: '/curriculum/app-dev'
        },
        {
            id: 'imagevideo',
            title: 'Image & Video Generation',
            desc: 'Prompt-to-reality for stunning visual content.',
            icon: <ImageIcon className="course-icon" />,
            link: '/curriculum/image-video'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-glow"></div>
                <div className="container hero-container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-left"
                    >
                        <div className="badge">
                            <Sparkles size={16} className="text-neon" />
                            <span>Future of Learning</span>
                        </div>
                        <h1 className="hero-title">
                            Learn to Build <br />
                            Anything with <br />
                            <span className="gradient-text">AI Prompts</span>
                        </h1>
                        <p className="hero-subtitle">
                            Web apps, games, simulations, images, and videos — all from prompts.
                        </p>
                        <div className="hero-actions">
                            <Link to="/courses" className="btn-neon">
                                Start Learning <ArrowRight size={20} />
                            </Link>
                            <Link to="/library" className="btn-glass">
                                Explore Prompts
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="hero-right"
                    >
                        <div className="orb-container">
                            <div className="orb-glow"></div>
                            <div className="orb">
                                <div className="orb-inner"></div>
                                <div className="orb-scan-line"></div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="float-card card-1"
                            >
                                <Code size={18} />
                                <span>/generate_app</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="float-card card-2"
                            >
                                <Zap size={18} />
                                <span>/optimize_logic</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="float-card card-3"
                            >
                                <Sparkles size={18} />
                                <span>/creative_mode</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="float-card card-4"
                            >
                                <Terminal size={18} />
                                <span>npm run dev</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Explore Our <span className="text-neon">Paths</span></h2>
                        <p className="section-desc">Choose your specialty and start building immediately.</p>
                    </div>

                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <Link to={course.link} key={course.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="course-card glass"
                                    style={{ height: '100%' }}
                                >
                                    <div className="course-card-inner">
                                        <div className="icon-wrapper">
                                            {course.icon}
                                        </div>
                                        <h3 className="course-title">{course.title}</h3>
                                        <p className="course-desc">{course.desc}</p>
                                    </div>
                                    <div className="card-glimmer"></div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

