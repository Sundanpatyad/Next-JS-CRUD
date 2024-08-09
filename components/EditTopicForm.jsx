'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { URL } from './api';

const EditTopicForm = ({ title, description, id }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newTitle, newDescription, id);
    

    try {
      const res = await fetch(`${URL}/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed To Update Topic");
      }
      router.refresh("/")
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input 
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            type="text"
            placeholder="Topic Title"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input 
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            type="text"
            placeholder="Topic Description"
            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full p-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
