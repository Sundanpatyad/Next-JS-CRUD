'use client';

import { useState, useEffect } from 'react';
import EditTopicForm from '@/components/EditTopicForm';

const Page = ({params}) => {
  const {id} = params;
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopicById = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/topics/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch topic: ${res.statusText}`);
        }

        const topicData = await res.json();
        setTopic(topicData.topic);
      } catch (error) {
        console.error('Error fetching topic:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopicById();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!topic) {
    return <div>Failed to load topic data.</div>;
  }

  const { title, description } = topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default Page;