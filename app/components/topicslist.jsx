'use client'
import React, { useEffect, useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"

const Topicslist = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/topics', { cache: 'no-store' });
                if (!response.ok) {
                    console.error("Error in fetching data");
                    return;
                }
                const data = await response.json();
                setTopics(data);
            } catch (error) {
                console.error('Error fetching topics:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-gray-500">Loading...</div>;
    }
    
    return (
        <div className="container mx-auto mt-8 px-4">
            {topics.length > 0 ? (
                topics.map((t) => (
                    <div key={t.id} className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                        <div className="border-b border-gray-600 pb-4">
                            <h2 className="text-2xl font-semibold mb-2 text-white">{t.title}</h2>
                            <p className="text-gray-400 mb-4">{t.description}</p>
                            <div className="flex justify-end items-center space-x-4">
                                <RemoveBtn id={t._id} />
                                <Link href={`/edittopic/${t._id}`} className="text-blue-400 hover:text-blue-500 flex items-center space-x-1">
                                    <HiPencilAlt size={24} />
                                    <span>Edit</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-gray-400 text-center">No topics available.</div>
            )}
        </div>
    );
}

export default Topicslist;
