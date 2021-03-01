import React from 'react';
import ArtPiece from './ArtPiece'

import waspred from '../assets/art/wasp/wasp_red.svg'
import waspblue from '../assets/art/wasp/wasp_blue.svg'
import waspgreen from '../assets/art/wasp/wasp_green.svg'

import birdred from '../assets/art/bird/bird_red.svg'
import birdblue from '../assets/art/bird/bird_blue.svg'

const wasp = [waspred, waspblue, waspgreen];
const bird = [birdred, birdblue]

const Art = () => {
    return (
        <div className="art">
            <div className="art__title">
                <h1>Sometimes I open Adobe Illustrator and try things.</h1>
            </div>
            <div className="art__pieces">
                <ArtPiece images={bird} />
                <ArtPiece images={wasp} />

            </div>
        </div>
    )
}

export default Art