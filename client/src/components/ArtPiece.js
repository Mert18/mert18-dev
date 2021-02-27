import React from 'react';

const ArtPiece = ({ image }) => {
    return (
        <div className="artpiece">
            <div className="artpiece__img">
                <img src={image} alt="art here" width="512px" draggable="false" />
            </div>

            <div className="artpiece__text">
                the wasp
            </div>
        </div>
    )
}

export default ArtPiece