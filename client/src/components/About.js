import React from 'react';
import '../styles/main.scss'

import linux from '../assets/stack/linux.png';
import nodejs from '../assets/stack/node-js.png';
import reactjs from '../assets/stack/react-js.png';
import sass from '../assets/stack/sass.png';

import ill from '../assets/stack/ill.png'


const About = () => {
    return (
        <section className="about">
            <div className="about__stack">
                <div className="about__title">
                    <h1>what is your stack?</h1>
                </div>
                <div className="about__stack__tech">
                    <img src={reactjs} alt="react" width="150px" draggable="false" />
                    <img src={nodejs} alt="nodejs" width="150px" draggable="false" />
                    <img src={sass} alt="sass" width="150px" draggable="false" />
                    <img src={linux} alt="linux" width="150px" draggable="false" />
                </div>
                <div className="about__stack__other">
                    <img src={ill} alt="ill" width="150px" draggable="false" />
                </div>
            </div>

            <div className="about__seriously">
                <div className="about__title">
                    <h1>but seriously, who are you?</h1>
                </div>
                <div className="about__seriously__text">
                    <p>I was born in Hatay - the southernmost city in Turkey -, in March 2000. I am a Sophomore Computer Engineering Student. Interested in web development for one year. I love making websites and applications.</p>
                </div>
            </div>

        </section>
    )
}

export default About