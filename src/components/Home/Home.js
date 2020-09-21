import React, { useEffect, useState } from 'react';
import '../../App.css';
import TopicList from './TopicList';

export default function Home() {
    const [topics, setTopics] = useState([]);

    const loadTopics = async () => {
        try {
            const res = await fetch('/api/topics');
            const topics = await res.json();
            setTopics(topics);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadTopics();
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Discussion Board</h1>
            <TopicList topics={topics} refreshTopics={loadTopics} />
        </div>
    );
}
