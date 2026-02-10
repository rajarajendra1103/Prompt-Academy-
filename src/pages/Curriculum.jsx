import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, PlayCircle, Lock, ChevronLeft } from 'lucide-react';
import { coursesData } from '../data/courses';
import './Curriculum.css';

const Curriculum = () => {
    const { courseId } = useParams();
    const course = coursesData[courseId] || coursesData['web-dev'];

    return (
        <div className="curriculum-page container">
            <div className="curriculum-header">
                <Link to="/courses" className="back-link-curriculum">
                    <ChevronLeft size={16} /> Back to Courses
                </Link>
                <h1 className="gradient-text">{course.title} Curriculum</h1>
                <p>Master {course.title} through a structured, AI-enhanced learning path.</p>
            </div>

            <div className="modules-list">
                {course.modules.map((module, mIdx) => (
                    <div key={module.id} className="module-item glass">
                        <div className="module-info">
                            <span className="module-number">0{mIdx + 1}</span>
                            <h2 className="module-title">{module.title}</h2>
                        </div>

                        <div className="lessons-list">
                            {module.lessons.map((lesson) => (
                                <Link
                                    key={lesson.id}
                                    to={`/lesson/${courseId}/${lesson.id}`}
                                    className="lesson-row"
                                >
                                    <div className="lesson-left">
                                        <PlayCircle size={18} className="icon-play" />
                                        <span className="lesson-name">{lesson.title}</span>
                                    </div>
                                    <ChevronRight size={18} className="chevron" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Curriculum;
