import React from 'react';
import './comments.css'
import CommentItem from "./commentItem/CommentItem";


const Comments = () => {
    return (
        <div className='comments'>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </div>
    );
};

export default Comments;
