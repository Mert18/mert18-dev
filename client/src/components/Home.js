import React from 'react';
import TopImage from './TopImage'
import pp from '../assets/other/pp.png';
import { NavLink } from 'react-router-dom';



const Home = () => {
    return (
        <div className="home">

            <section className="home__profile">
                <div className="home__profile__img">
                    <img src={pp} alt="profile pic" width="150px" draggable="false" />
                </div>
                <div className="home__profile__text">
                    <h1>Mert Uygur</h1>
                    <h2>Computer Engineering Student</h2>
                    <h2>Ankara, Turkey</h2>
                    <h2>Full Stack Developer</h2>
                </div>
            </section>

            <section className="home__blog">
                <div className="home__blog__title">
                    <NavLink to="/posts"><h2>Blog</h2></NavLink>
                </div>
                <div className="home__blog__featuredblog">

                </div>
            </section>

            {/*<TopImage />*/}
        </div>
    )
}

export default Home