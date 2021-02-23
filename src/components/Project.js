import React from 'react';



const Project = ({ title, text, background }) => {
    return (
        <div className="project">
            <div className="bgimg">
                <img src={background} alt="bgimg" />
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