import React from 'react';


const Home = () => {
    return (
        <section className="home">
            <div className="home__hero">
                <div className="home__hero__title">
                    <h1>Mert Uygur</h1>
                </div>
                <div className="home__hero__text">
                </div>
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
            {/*<TopImage />*/}
        </section>
    )
}

export default Home