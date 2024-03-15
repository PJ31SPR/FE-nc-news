import React, {useState, useContext} from 'react';
import { patchVotes } from '../../api';
import UserContext from '../Contexts/UserContext';
import ErrorFetch from './ErrorFetch';

const VoteCard = ({ article }) => {
    const [voteCount, setVoteCount] = useState(article.votes);
    const [error, setError] = useState(null);
    const { currentUser } = useContext(UserContext);


    const handleVote = (vote) => {
        if (!currentUser.username) {
            setError('Please log in to vote');
            return;
        }

        patchVotes(article.article_id, vote)
            .then(() => {
                setVoteCount((prevCount) => prevCount + vote);
            })
            .catch((error) => {
                setError('Error voting, please try again later');
            });
            
    };

    if (error) {
        return <ErrorFetch error={error} />;
    }

    return (
        <div>
            <p>Thoughts? Vote Below</p>
            <p>Votes: {voteCount}</p>
            <button onClick={() => handleVote(1)}  aria-label="Upvote">+</button>
            <button onClick={() => handleVote(-1)}  aria-label="Downvote" >-</button>
        </div>
    );
};

export default VoteCard;

