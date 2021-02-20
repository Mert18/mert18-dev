import React from 'react';
import Project from './Project'

const Projects = () => {
    return (
        <div className="projects">
            <section className="projects__web">
                <div className="projects__web__text">
                    <h1>projects</h1>
                </div>
                <div className="projects__web__projects">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </section>
        </div>
    )
}

export default Projects