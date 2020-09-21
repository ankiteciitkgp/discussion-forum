import React from 'react';
import { useHistory } from "react-router-dom";

export default function Topic({ topic, refreshTopics }) {
    const history = useHistory();
    const markTopicPurchased = async () => {
        try {
            await fetch('/api/topics', {
                method: 'PUT',
                body: JSON.stringify({ ...topic, purchased: true }),
            });
            refreshTopics();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTopic = async () => {
        try {
            await fetch('/api/topics', {
                method: 'DELETE',
                body: JSON.stringify({ id: topic.id }),
            });
            refreshTopics();
        } catch (err) {
            console.error(err);
        }
    };

    const onTopicClick = () => {
        debugger;
        history.push({ //browserHistory.push should also work here
            pathname: "/discussion/" + topic.id,
            state: topic
          }); 
        //window.location = "/discussion";
    }
    return (
        <div className="list-group-item">
            <h4 className="list-group-item-heading" onClick={onTopicClick} >{topic.Topic}</h4>
            {/* <p>
                Tags:{' '}
                {topic.tags &&
                    topic.tags.map((tag) => (
                        <span className="badge badge-primary mr-2">{tag}</span>
                    ))}
            </p> */}
            {/* {!topic.purchased && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markTopicPurchased}
                >
                    Purchased
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteTopic}
            >
                Delete
            </button> */}
        </div>
    );
}
