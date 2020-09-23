import React from 'react';
import { useHistory } from "react-router-dom";
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';

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
        <li className="list-group-item topic-item"  onClick={onTopicClick} >
            <p className="list-group-item-text">{topic.name} · {DisplayTimeUtil(topic.createdTime)}</p>
            <p className="list-group-item-heading">{topic.topic}</p>
        </li>
    );
}
