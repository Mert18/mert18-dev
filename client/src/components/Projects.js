import React from 'react';
import Project from './Project'

import firstbg from '../assets/projects/one.png';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__text">
                <h1>some of my projects</h1>
            </div>
            <div className="projects__projects">
                <Project title="Virtual Library" text="A social media platform for book lovers." />
                <Project title="Virtual Library" text="A social media platform for book lovers." />
                <Project title="Virtual Library" text="A social media platform for book lovers." />
                <Project title="Virtual Library" text="A social media platform for book lovers." />
            </div>
        </div>
    )
}

export default Projects