import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import TopicList from './TopicList';
import TopicForm from './TopicForm';
import { ClipLoader } from 'react-spinners';
import Footer from '../Footer/Footer';

export default function Home() {
    const [topics, setTopics] = useState([]);
    const [offsetTopics, setOffsetTopics] = useState(null);
    const [loading, setLoading] = useState(true);
    const topicsRef = useRef(topics);
    const offsetTopicsRef = useRef(offsetTopics);
    const [bottomLoader, setBottomLoader] = useState(false);

    topicsRef.current = topics;
    offsetTopicsRef.current = offsetTopics;

    const loadTopics = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/dboard/topics');
            const tps = await res.json();
            setTopics(tps.records);
            setOffsetTopics(tps.offset);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    const loadMoreTopics = async () => {
        setBottomLoader(true);
        try {
            debugger;
            let offset = offsetTopicsRef.current;
            if (!offset) {
                setBottomLoader(false);
                return;
            }
            setOffsetTopics(null);
            const res = await fetch('/api/dboard/topics', {
                method: 'POST',
                body: JSON.stringify({
                    offset
                }),
            });
            if (res.status=== 200) {
                const tps = await res.json();
                let topicsCurr = topicsRef.current;
                topicsCurr = topicsCurr.concat(tps.records);
                setOffsetTopics(tps.offset);
                setTopics(topicsCurr);
            }
            setBottomLoader(false);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        loadTopics();

        document.addEventListener('scroll', function () {
            let el = document.scrollingElement;
            if (el.scrollTop + el.clientHeight === el.scrollHeight) {
                loadMoreTopics();
            }
        });

    }, []);

    return (
        <div className='flex-parent'>
            <div className='ap-root app-bg'>
                <Header title='Discussion Board' />
                <div className='container-fluid'>
                    <TopicForm refreshTopics={loadTopics} />
                    {loading ? <div className="text-center"><ClipLoader /></div> : <TopicList topics={topics} refreshTopics={loadTopics} />}
                    <div className="text-center">{bottomLoader ? <ClipLoader/> : null}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
