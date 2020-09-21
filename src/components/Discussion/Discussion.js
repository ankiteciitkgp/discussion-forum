import React, { useEffect, useState } from 'react';
import '../../App.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Discussion() {
    const [topic, setTopic] = useState({
        "Topic": ""
    });

    const [comments, setComments] = useState([]);

    const loadComments = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length-1];
        try {
            const res = await fetch('/api/discussion/'+id);
            const comments = await res.json();
            setComments(comments);

        } catch (error) {
            console.error(error);
        }
    };

    const loadTopic = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length-1];
        try {
            const res1 = await fetch('/api/topics/'+id);
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
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Discussion</h1>
            <h4 className="mb-5 text-center">{topic.Topic}</h4>
            <CommentList comments={comments} refreshComments={loadComments} />
            <CommentForm currTopic={topic} refreshComments={loadComments}/>
        </div>
    );
}
