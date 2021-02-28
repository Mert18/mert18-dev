import React, { useState } from 'react';


const ArtPiece = ({ images }) => {

    const [image, setImage] = useState(images[0])

    console.log(images)

    return (
        <div className="artpiece" >
            <div className="artpiece__img">
                <img src={image} alt="art one" width="512px" draggable="false" />
            </div>
        </div >
    )
}

export default ArtPiece