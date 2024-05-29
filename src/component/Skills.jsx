import React from 'react';
import "./skills.css"
const SkillProgressBar = ({ title, progress, subSkills }) => {
    const subSkillList = subSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
    ));

    return (
        <div className="skill-progress">
            <h3>{title}</h3>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="progress-value">{progress}%</span>
            <ul className="sub-skills">{subSkillList}</ul>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { title: 'Front-end (90%)', progress: 90, subSkills: ['ReactJS', 'JavaScript', 'Django', 'Flask', 'Fast API'] },
        { title: 'Backend (75%)', progress: 75, subSkills: ['NodeJS', 'PHP', 'Python', 'Java', 'C#'] },
        { title: 'Database (70%)', progress: 70, subSkills: ['MongoDB', 'MySQL'] },
        { title: 'Extra (90%)', progress: 90, subSkills: ['GitHub', 'MVC Architecture'] },
    ];

    return (
        <div className="skills-container">
            {skills.map((skill, index) => (
                <SkillProgressBar key={index} {...skill} />
            ))}
        </div>
    );
};

export default Skills;
