import React from 'react';
import TopicsCard from './TopicsCard';



const TopicsList = ({ topics, SetTopics }) => {
    
    return (
      
            <ul>
                {topics.map((topic) => (
                    <TopicsCard key={topic.slug} topic={topic} SetTopics={SetTopics} />
                ))}
            </ul> 
       
    );
};

export default TopicsList;