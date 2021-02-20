import React from 'react';
import titleimg from '../assets/other/pp.svg'



const Project = () => {
    return (
        <div className="project">
            <div className="project__image">
                <img src={titleimg} alt="titleimg" width="150px" />
            </div>
            <div className="project__text">
                <div className="project__text__title">
                    <h2>hello world</h2>
                </div>
                <div className="project__text__paragraph">
                    <p>hello world but from another world hello world but i know</p>
                </div>
            </div>
        </div>
    )
}

export default Project