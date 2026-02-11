import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, BookOpen, Library, Layout, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png.png';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Courses', path: '/courses', icon: <BookOpen size={18} /> },
        { name: 'Library', path: '/library', icon: <Library size={18} /> },
        { name: 'UI Dictionary', path: '/dictionary', icon: <Layout size={18} /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="nav-logo group">
                    <div className="logo-icon">
                        <img src={logo} alt="Prompt Academy Logo" className="nav-logo-img" />
                    </div>
                    <span className="logo-text">
                        Prompt<span className="gradient-text">Academy</span>
                    </span>
                </Link>

                <div className="nav-actions">
                    {/* Desktop Nav */}
                    <div className="nav-links-desktop">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-item ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {/* Mobile Toggle */}
                    <button className="nav-toggle-mobile" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`nav-menu-mobile ${isOpen ? 'is-open' : ''}`}>
                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-link-item ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
