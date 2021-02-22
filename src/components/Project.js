import React from 'react';
import titleimg from '../assets/other/pp.svg'



const Project = ({ title, text, image, background }) => {
    return (
        <div className="project">
            <div className="bgimg">
                <img src={background} alt="bgimg" />
            </div>
            <div className="project__image">
                <img src={image} alt="titleimg" width="150px" draggable="false" />
            </div>
            <div className="project__text">
                <div className="project__text__title">
                    <h2>{title}</h2>
                </div>
                <div className="project__text__paragraph">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Project