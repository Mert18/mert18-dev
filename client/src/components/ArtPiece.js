import React, { useState } from 'react';


const ArtPiece = ({ image }) => {

    return (
        <div className="artpiece" >
            <div className="artpiece__img">
                <img src={image} alt="art one" width="512px" draggable="false" />
            </div>
        </div >
    )
}

export default ArtPiece