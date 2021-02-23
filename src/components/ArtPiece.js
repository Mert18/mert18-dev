import React from 'react';

const ArtPiece = ({ image }) => {
    return (
        <div className="artpiece">
            <img src={image} alt="art here" width="512px" draggable="false" />
        </div>
    )
}

export default ArtPiece