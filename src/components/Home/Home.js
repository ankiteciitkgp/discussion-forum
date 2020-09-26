import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import TopicList from './TopicList';
import TopicForm from './TopicForm';
import { ClipLoader } from 'react-spinners';
import NameModal from '../NameModal/NameModal';

export default function Home() {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadTopics = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/dboard/topics');
            const topics = await res.json();
            setTopics(topics);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadTopics();
    }, []);

    return (
        <div className='flex-parent'>
            <div className='ap-root app-bg'>
                <Header title='Discussion Board' />
                <div className='container-fluid'>
                    <TopicForm refreshTopics={loadTopics} />
                    {loading ? <ClipLoader/> : <TopicList topics={topics} refreshTopics={loadTopics} />}
                </div>
            </div>
        </div>
    );
}
