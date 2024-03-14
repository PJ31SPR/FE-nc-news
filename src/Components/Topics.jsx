import React, {useState, useEffect} from 'react';
import { getAllTopics } from '../../api';
import TopicsList from './TopicsList';

const Topics = () => {

    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getAllTopics().then((data) => {
          setTopics(data);
          setIsLoading(false)
        });
      }, []);

    return (
        <div>
            {isLoading? (<p>Topics incoming...</p>) : (
                <TopicsList topics={topics} setTopics={setTopics}/>
            )}
        </div>
    );
};

export default Topics;

