import React, { useEffect, useState } from 'react'
import randomColor from 'randomcolor';




const TopImage = () => {

    const [color, setColor] = useState(randomColor())

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(randomColor())
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <svg width="800" height="300" className="mysvg">
            <path d="M600 300 L800 300 C750 200, 650 200, 500 100 L0 0" fill={randomColor()} />

            <path d="M800 0 L800 300 C750 200, 650 200, 500 100 L0 0" fill={randomColor()} />

            <path d="M800 0 L800 150 C750 200, 650 200, 500 100 L0 0" fill={randomColor()} />

            <path d="M 600 100 C 700 300, 750 300, 600 300 L 0 300 Z" fill={randomColor()} />

            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 700 50 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 750 50 C 700 250, 750 300, 300 200 L 0 0 Z" fill={randomColor()} />
            <path d="M 600 0 C 700 250, 750 300, 300 50 L 0 0 Z" fill={randomColor()} />

            <path d="M 800 0 C 750 150, 750 100, 300 50 L 0 0 Z" fill={randomColor()} />

            <path d="M 750 0 C 650 150, 550 50, 300 50 L 0 0 Z" fill={randomColor()} />

            <path d="M 600 100 C 650 300, 550 250, 600 300 L 0 300 Z" fill={randomColor()} />

            <path d="M 600 100 C 500 300, 550 250, 300 300 L 0 0 Z" fill={randomColor()} />

            <path d="M 650 0 C 700 200, 550 100, 200 140 L 0 0 Z" fill={randomColor()} />

            <path d="M 300 300 C 700 200, 550 100, 200 140 L 0 0 Z" fill={randomColor()} />

            <path d="M 500 300 L 205 300 C 500 100, 550 20, 100 140 L 0 0 Z" fill={randomColor()} />

            <path d="M 600 0 C 100 200, 400 200, 300 100 L0 0 Z" fill={randomColor()} />

            <path d="M 600 50 C 500 200, 400 200, 200 100 L0 0 Z" fill={randomColor()} />

            <path d="M 450 100 C 400 200, 250 450, 100 300 L 20 300, 0 0 Z" fill={randomColor()} />

            <path d="M 300 150 C 400 200, 250 450, 100 300 L 20 300, 0 0 Z" fill={randomColor()} />
            <path d="M 300 0 C 200 50, 250 450, 100 300 L 20 300, 0 0 Z" fill={randomColor()} />
            <path d="M 400 0 C 550 50, 250 150, 100 200 L 0 0 Z" fill={randomColor()} />
            <path d="M 0 0 C 550 50, 250 150, 100 200 L 0 0 Z" fill={randomColor()} />
            <path d="M 100 50 L 150 10 C 300 500, 100 100, 10 200 L 0 0 Z" fill={randomColor()} />
            <path d="M 50 0 L 350 0 C 300 100, 100 50, 30 50 L 0 0 Z" fill={randomColor()} />
            <path d="M 0 0 L 125 0 C 200 200, 150 100, 50 140 L 0 0 Z" fill={randomColor()} />
            <path d="M 0 0 C 150 200, 100 200, 100 300 L 0 300 0 0 Z" fill={randomColor()} />

        </svg>
    )
}

export default TopImage