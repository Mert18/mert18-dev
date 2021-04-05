import React from 'react';


const Home = () => {
    return (
        <section className="home">
            <div className="home__hero">
                <div className="home__hero__title">
                    <h1>Mert Uygur</h1>
                    <a href="https://github.com/Mert18" target="_blank" rel="noreferrer">
                        <img src="/images/icons8-github.svg" alt="github icon" width="75px" />
                    </a>
                    <a href="https://www.linkedin.com/in/mert-u-8248ab135/" target="_blank" rel="noreferrer">
                        <img src="/images/icons8-linkedin.svg" alt="linkedin icon" width="75px" />
                    </a>
                    <a href="https://twitter.com/mert18dev" target="_blank" rel="noreferrer">
                        <img src="/images/icons8-twitter.svg" alt="twitter icon" width="75px" />
                    </a>

                </div>
            </div>
            <div className="home__art">

            </div>
            <div className="home__blog">
                <div className="home__blog__title">
                    <h2>Latest</h2>
                </div>
                <div className="home__blog__blog">
                    {/* SINGLE BLOGPOST */}
                    <div className="home__blog__blog__blog">
                        <div className="home__blog__blog__blog__title">
                            <h2>Around The World</h2>
                        </div>
                        <div className="home__blog__blog__blog__text">
                            <h3>A time where the time is not allowed.</h3>
                        </div>
                        <div className="home__blog__blog__blog__date">
                            <h4>March 20, 2021</h4>
                        </div>
                    </div>
                    {/* SINGLE BLOGPOST */}

                    {/* SINGLE BLOGPOST */}
                    <div className="home__blog__blog__blog">
                        <div className="home__blog__blog__blog__title">
                            <h2>Around The World</h2>
                        </div>
                        <div className="home__blog__blog__blog__text">
                            <h3>A time where the time is not allowed.</h3>
                        </div>
                        <div className="home__blog__blog__blog__date">
                            <h4>March 20, 2021</h4>
                        </div>
                    </div>
                    {/* SINGLE BLOGPOST */}
                </div>
            </div>

            <div className="home__projects__title">
                <h2>Projects</h2>
            </div>
            <div className="home__projects">

                <div className="project">
                    <div className="project__image">
                        <img src="/images/bg.jpg" alt="bgone" width="450px" />
                    </div>
                    <div className="project__title">
                        <h2>Hunnel Puga</h2>
                    </div>
                    <div className="project__text">
                        <p>leor gama efo buna ego ugi.</p>
                    </div>
                </div>
            </div>
            {/*<TopImage />*/}
        </section>
    )
}

export default Home