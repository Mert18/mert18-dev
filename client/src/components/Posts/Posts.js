import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return (
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts