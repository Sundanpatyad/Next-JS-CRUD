import EditTopicForm from '@/components/EditTopicForm';

async function fetchTopicById(id) {
  try {
    const res = await fetch(`/api/topics/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensures data is fetched fresh each time
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topic: ${res.statusText}`);
    }

    const topicData = await res.json();
    return topicData.topic;

  } catch (error) {
    console.error('Error fetching topic:', error);
    return null;
  }
}

const Page = async ({ params }) => {
  const { id } = params;
  const topic = await fetchTopicById(id);

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
