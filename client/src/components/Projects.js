import React from 'react';
import Project from './Project'


const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__text">
                <h1>some of my projects</h1>
            </div>

            <div className="projects__projects">
                <div className="col-2">
                    <a href="https://virtual-library-git-master-mert18.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="VIRTUAL LIBRARY" text="A social media platform for book lovers." />
                    </a>

                    <a href="https://tesaduf.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="TESADÜF" text="Tesaduf is an app that recommends random books or movies. It's in Turkish language." />
                    </a>

                    <a href="https://my-js-playground-mert18.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="MERT'S PLAYGROUND" text="This is where I share my fun projects or css and js stuff." />
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Projects