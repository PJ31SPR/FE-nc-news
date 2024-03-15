import React from 'react';
import './TopicsCard.css';
import { Link } from 'react-router-dom'; 

const TopicsCard = ({ topic }) => {
    
    return (
        <div className="topics-card" role="listitem">
            <h2>{topic.slug}</h2>
            <p>{topic.description}</p>
            <Link to={`/articles/topics/${topic.slug}`} tabIndex="0"> See related articles</Link>
        </div>
    );
};

export default TopicsCard;