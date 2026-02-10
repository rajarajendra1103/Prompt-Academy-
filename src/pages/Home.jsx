import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-glow"></div>
                <div className="hero-decoration"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-content"
                    >
                        <div className="badge">
                            <Sparkles size={16} />
                            <span>Prompting <span>Academy</span> 2026</span>
                        </div>
                        <h1 className="hero-title">
                            Master the Craft of <br />
                            <span className="gradient-text">Prompt Engineering</span>
                        </h1>
                        <p className="hero-subtitle">
                            The elite learning platform for AI-driven software development.
                            Build the future of web, apps, and games with precise human-AI collaboration.
                        </p>
                        <div className="hero-actions">
                            <Link to="/courses" className="btn-primary-lg">
                                Explore Courses <ArrowRight size={22} />
                            </Link>
                            <Link to="/library" className="btn-secondary-lg">
                                View Library
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
