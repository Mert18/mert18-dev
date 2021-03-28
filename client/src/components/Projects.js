import React from 'react';
import Project from './Project'


const Projects = () => {
    return (
        <section className="projects">

            <div className="projects__segment">
                <div className="projects__segment__title">
                    <h2>Single Page Applications</h2>
                </div>
                <div className="projects__segment__projects">
                    <a href="https://tesaduf.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="Tesadüf" text="Tesaduf is an app that recommends random books or movies. It's in Turkish language." />
                    </a>

                    <a href="https://philosophy-mert18.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="All About Philosophy" text="A wiki for philosophy lovers." />
                    </a>

                    <a href="https://from-the-heap.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="From The Heap" text="From The Heap is where you can share the songs or movies you like." />
                    </a>


                </div>
            </div>

            <div className="projects__segment">
                <div className="projects__segment__title">
                    <h2>Medium Level</h2>
                </div>
                <div className="projects__segment__projects">
                    <a href="https://virtual-library-git-master-mert18.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="VIRTUAL LIBRARY" text="A social media platform for book lovers." />
                    </a>
                </div>
            </div>

            <div className="projects__segment">
                <div className="projects__segment__title">
                    <h2>High Level</h2>
                </div>

                <div className="projects__segment__projects">
                    <a href="https://sticker-ankara-mert18.vercel.app/" target="_blank" rel="noreferrer">
                        <Project title="Sticker Ankara" text="E-Commerce app for selling stickers only. In Turkish language." />
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Projects