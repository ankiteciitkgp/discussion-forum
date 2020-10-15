import React from 'react';
import { useHistory } from "react-router-dom";
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';
import '../../styles/comments.css';

export default function Topic({ topic, refreshTopics }) {
    const history = useHistory();

    const onTopicClick = () => {
        history.push({ //browserHistory.push should also work here
            pathname: "/discussion/" + topic.fields.id,
            state: topic
        });
        //window.location = "/discussion";
    }
    return (
        <div className="comment__list"  onClick={onTopicClick} >
            <div className="comment__header">
                <div className="comment__header--name">{topic.fields.topic}</div>
                <div className="comment__header--date">{topic.fields.Comments ? topic.fields.Comments.length : 0} 💬</div>
                <div className="comment__header--date">{DisplayTimeUtil(topic.fields.modifiedTime)}</div>
            </div>
            <div className="comment__list--content hide">{topic.name}</div>
        </div>
    );
}
