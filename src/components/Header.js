import React from 'react';
import '../styles/main.scss';

import pp from '../assets/pp.svg'
import linkedin from '../assets/link.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header__profile">
                <div className="header__profile__img">
                    <img src={pp} alt="profile pic" width="150px" />
                </div>
                <div className="header__profile__text">
                    <h1>Mert Uyğur</h1>
                    <h2>Front End Developer</h2>
                </div>
            </div>

            <div className="header__navigation">
                <a href="/">Home</a>
                <a href="/">Library</a>
                <a href="/">Projects</a>
                <a href="/">Resources</a>
            </div>
            <div className="header__links">
                <img src={linkedin} alt="linkedin" width="50px" />
            </div>
        </div>
    )
}

export default Header