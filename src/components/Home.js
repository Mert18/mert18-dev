import React from 'react';
import Post from './Post.js'
import TopImage from './TopImage'


const Home = () => {
    return (
        <div className="home">
            <div className="container__main__topImage">
                <TopImage />
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Home