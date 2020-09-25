import React from 'react';
import { useHistory } from "react-router-dom";
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';
import '../../styles/comments.css';

export default function Topic({ topic, refreshTopics }) {
    const history = useHistory();

    const onTopicClick = () => {
        history.push({ //browserHistory.push should also work here
            pathname: "/discussion/" + topic.id,
            state: topic
        });
        //window.location = "/discussion";
    }
    return (
        <div className="comment__list"  onClick={onTopicClick} >
            <div className="comment__header">
                <div className="comment__header--name">{topic.name}</div>
                <div className="comment__header--date">{DisplayTimeUtil(topic.createdTime)}</div>
            </div>
            <div className="comment__list--content">{topic.topic}</div>
        </div>
    );
}
