import React, {useState, useEffect} from 'react';
import { getAllTopics } from '../../api';
import TopicsList from './TopicsList';
import ErrorFetch from './ErrorFetch'

const Topics = () => {

    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        getAllTopics().then((data) => {
          setTopics(data);
          setIsLoading(false)
        }).catch((error) => {
            console.error("Error fetching topics", error);
            setError('Error fetching topics');
            setIsLoading(false)
        })
      }, []);

      if (error) {
        return <ErrorFetch error={error} />; 
      }

    return (
        <div>
            {isLoading? (<p>Topics incoming...</p>) : (
                <TopicsList topics={topics} setTopics={setTopics}/>
            )}
        </div>
    );
};

export default Topics;

