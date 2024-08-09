import EditTopicForm from '@/app/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch Topic');
    }

    const topicData = await res.json();
    return topicData;

  } catch (error) {
    console.log(error);
    return null;
  }
}

const Page = async ({ params }) => {
  const { id } = params;
  const topicData = await getTopicById(id);

  if (!topicData) {
    return <div>Failed to load topic data.</div>;
  }

  const { title, description } = topicData.topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}

export default Page;
