import React from 'react';
import './TopicsCard.css';
import { Link } from 'react-router-dom'; 

const TopicsCard = ({ topic }) => {
    
    return (
        <div className="topics-card" >
            <p>{topic.slug}</p>
            <p>{topic.description}</p>
            <Link to={`/articles/topics/${topic.slug}`}> See related articles</Link>
        </div>
    );
};

export default TopicsCard;