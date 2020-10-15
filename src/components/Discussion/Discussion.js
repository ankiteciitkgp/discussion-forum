import React, { useEffect, useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Header from '../Header/Header';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Footer from '../Footer/Footer';

export default function Discussion() {
    const [topic, setTopic] = useState({
        "topic": ""
    });

    const [comments, setComments] = useState([]);
    const [offset, setOffset] = useState();
    const [loading, setLoading] = useState(true);
    const [bottomLoader, setBottomLoader] = useState(false);
    const commentsRef = useRef(comments);
    const offsetRef = useRef(offset);

    commentsRef.current = comments;
    offsetRef.current = offset;

    const loadComments = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length - 1];
        setLoading(true);
        try {
            const res = await fetch('/api/dboard/comments/' + id);
            const cts = await res.json();
            debugger;
            setComments(cts.records);
            setOffset(cts.offset);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const loadMoreComments = async () => {
        const url = window.location.href.split("/");
        const id = url[url.length - 1];
        setBottomLoader(true);
        try {
            debugger;
            let offset = offsetRef.current;
            if (!offset) {
                setBottomLoader(false);
                return;
            }
            const res = await fetch('/api/dboard/comments/' + id, {
                method: 'POST',
                body: JSON.stringify({
                    offset
                }),
            });
            if (res.status=== 200) {
                const cts = await res.json();
                let commentsCurr = commentsRef.current;
                commentsCurr = commentsCurr.concat(cts.records);
                setOffset(cts.offset);
                setComments(commentsCurr);
            }
            setBottomLoader(false);
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

        document.addEventListener('scroll', function () {
            let el = document.scrollingElement;
            if (el.scrollTop + el.clientHeight === el.scrollHeight) {
                loadMoreComments();
            }
        });

    }, []);
    return (
        <div>
            <div className='ap-root'>
                <Header title='Discussion Board' />
                <div className='container-fluid'>
                    <h4 className="topic__heading">{topic.topic}</h4>
                    <CommentForm currTopic={topic} refreshComments={loadComments} />
                    <div className="text-center">{loading ? <ClipLoader/> : null}</div>
                    <CommentList comments={comments} refreshComments={loadComments} loading={loading} />
                    <div className="text-center">{bottomLoader ? <ClipLoader/> : null}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
