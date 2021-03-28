import React from 'react';
import ArtPiece from './ArtPiece'

import redbird from '../assets/art/redbird.svg'
import carpet from '../assets/art/carpet.svg'


const Art = () => {
    return (
        <div className="art">
            <div className="art__pieces">
                <ArtPiece image={redbird} />
                <ArtPiece image={carpet} />

            </div>
        </div>
    )
}

export default Art