import React from 'react';
import art from '../assets/other/pp.svg'

const ArtPiece = () => {
    return (
        <div className="artpiece">
            <img src={art} alt="art here" width="512px" />
        </div>
    )
}

export default ArtPiece