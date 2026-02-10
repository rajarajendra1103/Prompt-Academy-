import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Target, BookOpen, HelpCircle,
    Terminal, AlertTriangle, Key, Youtube, FileText,
    ChevronLeft, ChevronRight, ChevronDown, List, CheckCircle
} from 'lucide-react';
import { webDevContent } from '../data/webDevContent';
import { appDevContent } from '../data/appDevContent';
import { imageVideoContent } from '../data/imageVideoContent';
import { coursesData } from '../data/courses';
import './Lesson.css';

const Lesson = () => {
    const { courseId, lessonId } = useParams();
    const navigate = useNavigate();
    const [expandedModule, setExpandedModule] = useState(null);

    // Scroll to top on lesson change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lessonId]);

    // Fetch correctly based on course
    const allContent = {
        'web-dev': webDevContent,
        'app-dev': appDevContent,
        'image-video': imageVideoContent,
        // Add others as they are created
    };

    const course = coursesData[courseId] || coursesData['web-dev'];
    const courseContent = allContent[courseId] || webDevContent;
    const lessonData = courseContent[lessonId];

    // Find Previous and Next Lessons
    const allLessons = course.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);

    // Find current module and index
    const currentModuleIndex = course.modules.findIndex(m => m.lessons.some(l => l.id === lessonId));
    const currentModule = course.modules[currentModuleIndex];
    const prevModule = currentModuleIndex > 0 ? course.modules[currentModuleIndex - 1] : null;
    const nextModule = currentModuleIndex < course.modules.length - 1 ? course.modules[currentModuleIndex + 1] : null;

    // Auto-expand current module on lesson load
    useEffect(() => {
        if (currentModule) {
            setExpandedModule(currentModule.id);
        }
    }, [currentModule]);

    const toggleModule = (modId) => {
        setExpandedModule(expandedModule === modId ? null : modId);
    };

    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    if (!lessonData) {
        return (
            <div className="lesson-page">
                <div className="container">
                    <Link to={`/curriculum/${courseId}`} className="back-link">
                        <ArrowLeft size={16} /> Back to Curriculum
                    </Link>
                    <div className="error-message glass">
                        <h2>Lesson Not Found</h2>
                        <p>We're still populating the content for this lesson. Please check back soon!</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="lesson-page">
            <div className="container">
                <Link to={`/curriculum/${courseId}`} className="back-link">
                    <ArrowLeft size={16} /> Back to Curriculum
                </Link>

                <header className="lesson-hero">
                    <div className="module-breadcrumbs">
                        <span>{currentModule?.title}</span>
                        <span className="separator">/</span>
                        <span>Lesson {currentModule?.lessons.findIndex(l => l.id === lessonId) + 1} of {currentModule?.lessons.length}</span>
                    </div>
                    <h1 className="lesson-title">{lessonData.title}</h1>
                    <div className="lesson-summary-box">
                        <p className="summary-text"><strong>Summary:</strong> {lessonData.summary}</p>
                    </div>
                </header>

                <div className="lesson-layout">
                    <aside className="lesson-sidebar">
                        <div className="course-nav-card glass">
                            <h3 className="sidebar-title"><List size={18} /> Course Content</h3>
                            <div className="modules-accordion">
                                {course.modules.map((module, mIdx) => (
                                    <div key={module.id} className={`nav-module-item ${expandedModule === module.id ? 'expanded' : ''}`}>
                                        <button
                                            className="nav-module-header"
                                            onClick={() => toggleModule(module.id)}
                                        >
                                            <span className="nav-module-title">Module {mIdx + 1}</span>
                                            {expandedModule === module.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                        </button>

                                        {expandedModule === module.id && (
                                            <div className="nav-lessons-list">
                                                {module.lessons.map((lesson, lIdx) => (
                                                    <Link
                                                        key={lesson.id}
                                                        to={`/lesson/${courseId}/${lesson.id}`}
                                                        className={`nav-lesson-link ${lesson.id === lessonId ? 'active' : ''}`}
                                                    >
                                                        <span className="nav-lesson-idx">{lIdx + 1}.</span>
                                                        <span className="nav-lesson-title">{lesson.title.replace(/^\d+:\s*/, '')}</span>
                                                        {lesson.id === lessonId && <CheckCircle size={14} className="active-icon" />}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="objectives-card glass">
                            <h3 className="sidebar-title"><Target size={18} /> Objectives</h3>
                            <ul>
                                {lessonData.objectives?.map((obj, idx) => (
                                    <li key={idx}>{obj}</li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <main className="lesson-main-content">
                        <section className="lesson-section">
                            <h2 className="section-header"><BookOpen size={22} /> Theory</h2>
                            <div className="theory-content">
                                {Array.isArray(lessonData.theory) ? (
                                    lessonData.theory.map((para, idx) => (
                                        <p key={idx} className="theory-text">{para}</p>
                                    ))
                                ) : (
                                    <p className="theory-text">{lessonData.theory}</p>
                                )}

                                {lessonData.theoryImage && (
                                    <div className="theory-image-container">
                                        <img
                                            src={lessonData.theoryImage.startsWith('http') ? lessonData.theoryImage : `/${lessonData.theoryImage}`}
                                            alt="Theory Visual Aid"
                                            className="theory-image "
                                        />
                                    </div>
                                )}
                            </div>
                        </section>

                        <section className="lesson-section highlight">
                            <h2 className="section-header"><HelpCircle size={22} /> The "Why"</h2>
                            <p className="why-text">{lessonData.why}</p>
                        </section>

                        <section className="lesson-section">
                            <h2 className="section-header"><Terminal size={22} /> Task Prompt</h2>
                            {lessonData.prompts && (
                                <div className="prompt-comparison">
                                    <div className="prompt-box before">
                                        <span className="label">Common Prompt (Avoid)</span>
                                        <code>{lessonData.prompts.before}</code>
                                        {lessonData.prompts.resultBefore && (
                                            <div className="result-preview">
                                                <small>Result: {lessonData.prompts.resultBefore}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="prompt-box after">
                                        <span className="label">Academy Prompt (Better)</span>
                                        <code>{lessonData.prompts.after}</code>
                                        {lessonData.prompts.resultAfter && (
                                            <div className="result-preview">
                                                <small>Result: {lessonData.prompts.resultAfter}</small>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>

                        <section className="lesson-section warning">
                            <h2 className="section-header"><AlertTriangle size={22} /> Pitfall Gallery</h2>
                            <ul className="pitfall-list">
                                {lessonData.pitfalls?.map((pitfall, idx) => (
                                    <li key={idx}>
                                        <strong>{pitfall.title}:</strong> {pitfall.description}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="lesson-section">
                            <h2 className="section-header"><Key size={22} /> Keywords</h2>
                            <div className="keywords-grid">
                                {lessonData.keywords?.map((kw, idx) => (
                                    <div key={idx} className="keyword-item">
                                        <span className="word">{kw.word}</span>
                                        <p className="meaning"><strong>Meaning:</strong> {kw.meaning}</p>
                                        <p className="usage"><strong>Usage:</strong> {kw.usage}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="lesson-section">
                            <h2 className="section-header"><Youtube size={22} /> Resources</h2>
                            <div className="resources-list">
                                {lessonData.resources?.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url || `https://www.youtube.com/results?search_query=${encodeURIComponent(link.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="resource-link glass"
                                    >
                                        <Youtube size={20} />
                                        <span>{link.title} ({link.platform})</span>
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section className="lesson-section notes">
                            <h2 className="section-header"><FileText size={22} /> Instructor Notes</h2>
                            <p className="notes-text">{lessonData.notes}</p>
                        </section>

                        {/* Navigation Buttons */}
                        <div className="lesson-navigation">
                            {prevLesson ? (
                                <Link to={`/lesson/${courseId}/${prevLesson.id}`} className="nav-btn prev glass">
                                    <ChevronLeft size={20} />
                                    <div className="btn-content">
                                        <span className="btn-label">Previous Lesson</span>
                                        <span className="btn-title">{prevLesson.title}</span>
                                    </div>
                                </Link>
                            ) : (
                                prevModule ? (
                                    <Link to={`/lesson/${courseId}/${prevModule.lessons[0].id}`} className="nav-btn prev glass module-nav">
                                        <ChevronLeft size={20} />
                                        <div className="btn-content">
                                            <span className="btn-label">Previous Module</span>
                                            <span className="btn-title">{prevModule.title}</span>
                                        </div>
                                    </Link>
                                ) : <div></div>
                            )}

                            {nextLesson ? (
                                <Link to={`/lesson/${courseId}/${nextLesson.id}`} className="nav-btn next glass">
                                    <div className="btn-content">
                                        <span className="btn-label">Next Lesson</span>
                                        <span className="btn-title">{nextLesson.title}</span>
                                    </div>
                                    <ChevronRight size={20} />
                                </Link>
                            ) : (
                                nextModule ? (
                                    <Link to={`/lesson/${courseId}/${nextModule.lessons[0].id}`} className="nav-btn next glass module-nav">
                                        <div className="btn-content">
                                            <span className="btn-label">Next Module</span>
                                            <span className="btn-title">{nextModule.title}</span>
                                        </div>
                                        <ChevronRight size={20} />
                                    </Link>
                                ) : <div></div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Lesson;

