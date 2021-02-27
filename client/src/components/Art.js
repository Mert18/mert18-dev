import React from 'react';
import ArtPiece from './ArtPiece'

import waspsvg from '../assets/art/wasp_red.svg'

const Art = () => {
    return (
        <div className="art">
            <div className="art__title">
                <h1>Sometimes I open Adobe Illustrator and try things.</h1>
            </div>
            <div className="art__pieces">
                <ArtPiece image={waspsvg} />
            </div>
        </div>
    )
}

export default Art