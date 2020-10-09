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
                <div className="comment__header--name">{topic.topic}</div>
                <div className="comment__header--date">{topic.Comments ? topic.Comments.length : 0} 💬</div>
                <div className="comment__header--date">{DisplayTimeUtil(topic.modifiedTime)}</div>
            </div>
            <div className="comment__list--content hide">{topic.name}</div>
        </div>
    );
}
