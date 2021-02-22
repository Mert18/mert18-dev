import React from 'react';
import Project from './Project'

import firstbg from '../assets/projects/one.png';
import firstimg from '../assets/projects/egg.png';

const Projects = () => {
    return (
        <div className="projects">
            <section className="projects__web">
                <div className="projects__web__text">
                </div>
                <div className="projects__web__projects">
                    <Project title="Virtual Library" text="A social media platform for book lovers." image={firstimg} background={firstbg} />

                    <Project title="Virtual Library" text="A social media platform for book lovers." image={firstimg} background={firstbg} />
                </div>
            </section>
        </div>
    )
}

export default Projects