import React, {useState} from 'react';
import { patchVotes } from '../../api';

const VoteCard = ({ article }) => {
    
    const [voteCount, setVoteCount] = useState(article.votes);

    const positiveHandler = () => {
     setVoteCount((currentVotes) => {
        return currentVotes + 1
     })
     patchVotes(article.article_id, 1)
    };

   const negativeHandler = () => {
    setVoteCount((currentVotes) => {
        return currentVotes - 1
    })
    patchVotes(article.article_id, -1)
   }

    return (
        <div>
            <p>Thoughts? Vote Below</p>
            <p>Votes: {voteCount}</p>
            <button onClick= {positiveHandler}>+</button>
            <button onClick={negativeHandler}>-</button>
        </div>
    );
};


export default VoteCard;