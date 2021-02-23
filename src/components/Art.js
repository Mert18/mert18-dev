import React from 'react';
import ArtPiece from './ArtPiece'

import waspsvg from '../assets/art/wasp_red.svg'

const Art = () => {
    return (
        <div className="art">
            <ArtPiece image={wasp} />
            <ArtPiece image={waspsvg} />
        </div>
    )
}

export default Art