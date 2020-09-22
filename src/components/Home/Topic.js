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
        <h6 className="list-group-item topic-item" onClick={onTopicClick} >{topic.topic}<span className="float-right">{DisplayTimeUtil(topic.createdTime)}</span></h6>
    );
}
