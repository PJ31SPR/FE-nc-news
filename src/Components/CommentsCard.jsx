import React from 'react';

const CommentsCard = ({comment}) => {


    return (
        <div className='comment-card'>
         <p>Posted by: {comment.author} on {comment.created_at}</p>
         <br />
         <p>{comment.body}</p>
         <br />
         <p>Votes: {comment.votes}</p>
        </div>
    );
};

export default CommentsCard;