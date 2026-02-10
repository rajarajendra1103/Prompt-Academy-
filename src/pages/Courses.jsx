import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
    return (
        <div className="courses-page">
            <div className="container">
                <header className="courses-header">
                    <h1 className="gradient-text">All Courses</h1>
                    <p>Choose your path and start your journey into AI-driven creation.</p>
                </header>

                <div className="courses-grid">
                    {availableCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="course-card glass"
                        >
                            <div className={`course-icon-wrapper ${course.color}`}>
                                {course.icon}
                            </div>
                            <div className="course-card-content">
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>
                                <div className="course-stats">
                                    <span>8 Modules</span>
                                    <span>42 Lessons</span>
                                </div>
                                <Link to={`/curriculum/${course.id}`} className="btn-explore">
                                    Explore Curriculum <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const availableCourses = [
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Build modern, responsive web applications with AI pair programming.',
        icon: <Code size={28} />,
        color: 'blue'
    },
    {
        id: 'app-dev',
        title: 'App Development',
        description: 'Create native mobile apps for iOS and Android using intelligent logic.',
        icon: <Cpu size={28} />,
        color: 'purple'
    },

    {
        id: 'image-video',
        title: 'Image & Video Generating',
        description: 'Master the visual language of AI to produce stunning media assets.',
        icon: <ImageIcon size={28} />,
        color: 'pink'
    }
];

export default Courses;
