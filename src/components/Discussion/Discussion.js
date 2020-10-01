import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Header from '../Header/Header';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Discussion() {
    const [topic, setTopic] = useState({
        "topic": ""
    });

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadComments = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length - 1];
        setLoading(true);
        try {
            const res = await fetch('/api/dboard/comments/' + id);
            const comments = await res.json();
            setComments(comments);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const loadTopic = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length - 1];
        try {
            const res1 = await fetch('/api/dboard/topic/' + id);
            const topic = await res1.json();
            setTopic(topic[0]);

        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        loadComments();
        loadTopic();
    }, []);
    return (
        <div>
            <div className='ap-root'>
                <div className='container-fluid'>
                    <h4 className="mb-5 text-center">{topic.topic}</h4>
                    <CommentForm currTopic={topic} refreshComments={loadComments} />
                    {loading ? <ClipLoader/> : null}
                    <CommentList comments={comments} refreshComments={loadComments} loading={loading} />
                </div>
            </div>
        </div>
    );
}
