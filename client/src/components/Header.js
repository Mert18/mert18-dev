import React from 'react';
import '../styles/main.scss';

import linkedin from '../assets/other/link.png';
import github from '../assets/other/git.png'

import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="header__name">
                <h2>Mert Uygur</h2>
            </div>
            <div className="header__navigation">
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
                <NavLink to="/art" activeClassName="selected">Art</NavLink>
                <NavLink to="/posts" activeClassName="selected">Blog</NavLink>
            </div>
        </div>
    )

}

export default Header