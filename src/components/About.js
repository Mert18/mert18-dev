import React from 'react';
import '../styles/main.scss'

import linux from '../assets/stack/linux.png';
import nodejs from '../assets/stack/node-js.png';
import reactjs from '../assets/stack/react-js.png';
import sass from '../assets/stack/sass.png';

import ill from '../assets/stack/ill.png'

import egg from '../assets/other/egg.png'

const About = () => {
    return (
        <div className="about">
            <section className="about__whatiknow">
                <div className="about__whatiknow__web">
                    <div className="about__whatiknow__web__text">
                        <h1>what do you know?</h1>
                    </div>
                    <div className="about__whatiknow__web__tech">
                        <img src={reactjs} alt="react" width="150px" draggable="false" />
                        <img src={nodejs} alt="nodejs" width="150px" draggable="false" />
                        <img src={sass} alt="sass" width="150px" draggable="false" />
                        <img src={linux} alt="linux" width="150px" draggable="false" />
                    </div>
                    <div className="about__whatiknow__web__other">
                        <img src={ill} alt="ill" width="150px" draggable="false" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About