import React from 'react';
import Project from './Project'

import firstbg from '../assets/projects/one.png';

const Projects = () => {
    return (
        <div className="projects">
            <section className="projects__web">
                <div className="projects__web__text">
                </div>
                <div className="projects__web__projects">
                    <Project title="Virtual Library" text="A social media platform for book lovers." background={firstbg} />
                    <Project title="Virtual Library" text="A social media platform for book lovers." background={firstbg} />
                </div>
            </section>
        </div>
    )
}

export default Projects