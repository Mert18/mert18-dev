import React from 'react';

import Moment from 'react-moment';

const Post = ({ post }) => {
    const dateToFormat = post.createdAt;

    return (
        <div className="post">
            <div className="post__title">
                <h1>{post.title}</h1>
            </div>
            <div className="post__text">
                <h3>{post.message}t</h3>
            </div>
            <div className="post__footer">
                <p><Moment>{dateToFormat}</Moment></p>
            </div>
        </div>
    )
}

export default Post