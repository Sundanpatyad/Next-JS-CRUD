import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    const topicData = await res.json();
    return { props: { topic: topicData.topic } };
  } catch (error) {
    console.error(error);
    return { props: { topic: null } }; // Return null if there's an error
  }
}

const Page = ({ topic }) => {
  if (!topic) {
    return <div>Failed to load topic data.</div>;
  }

  const { id, title, description } = topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}

export default Page;
