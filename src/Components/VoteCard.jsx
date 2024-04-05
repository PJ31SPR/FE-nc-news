// import React, {useState, useContext} from 'react';
// import { patchVotes } from '../../api';
// import UserContext from '../Contexts/UserContext';
// import ErrorFetch from './ErrorFetch';

// const VoteCard = ({ article }) => {
//     const [voteCount, setVoteCount] = useState(article.votes);
//     const [error, setError] = useState(null);
//     const { currentUser } = useContext(UserContext);


//     const handleVote = (vote) => {
//         if (!currentUser.username) {
//             setError('Please log in to vote');
//             return;
//         }

//         patchVotes(article.article_id, vote)
//             .then(() => {
//                 setVoteCount((prevCount) => prevCount + vote);
//             })
//             .catch((error) => {
//                 setError('Error voting, please try again later');
//             });
            
//     };

//     if (error) {
//         return <ErrorFetch error={error} />;
//     }

//     return (
//         <div>
//             <p>Thoughts? Vote Below</p>
//             <p>Votes: {voteCount}</p>
//             <button onClick={() => handleVote(1)}  aria-label="Upvote">+</button>
//             <button onClick={() => handleVote(-1)}  aria-label="Downvote" >-</button>
//         </div>
//     );
// };

// export default VoteCard;

import React, { useState, useContext } from 'react';
import { styled } from '@mui/system';
import { patchVotes } from '../../api';
import UserContext from '../Contexts/UserContext';
import ErrorFetch from './ErrorFetch';

const StyledVoteCard = styled('div')({
    border: '1px solid #ccc', // Add border for card
    borderRadius: '8px', // Add border radius for card
    borderColor: '#ffd700',
    padding: '1rem', // Add padding for content
    marginBottom: '1rem', // Add margin bottom for spacing
    backgroundColor: '#6a287e',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for elevation
});

const StyledButton = styled('button')({
    backgroundColor: '#6a287e', // Plum color
    color: '#fff', // White text color
    border: 'none', // Remove border
    padding: '0.5rem 1rem', // Add padding
    borderRadius: '4px', // Add border radius
    cursor: 'pointer', // Add pointer cursor
    fontFamily: 'Consolas, monospace',
    margin: '0 0.5rem', // Add margin for spacing
    transition: 'background-color 0.3s', // Smooth background color transition
    "&:hover": {
        backgroundColor: "#ffd700", // Yellow color on hover
    },
});

const StyledText = styled('p')({
    color: 'white', // Plum color
    fontFamily: 'Consolas, monospace', // Consolas font family
    marginBottom: '0.5rem', // Add margin bottom for spacing
});


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
        <StyledVoteCard>
            <StyledText>Thoughts? Vote Below</StyledText>
            <StyledText>Votes: {voteCount}</StyledText>
            <StyledButton onClick={() => handleVote(1)} aria-label="Upvote">+</StyledButton>
            <StyledButton onClick={() => handleVote(-1)} aria-label="Downvote">-</StyledButton>
        </StyledVoteCard>
    );
};

export default VoteCard;