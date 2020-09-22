import React, { useState } from 'react';

export default function TopicForm({ refreshTopics }) {
    const [topic, setTopic] = useState('');

    const resetForm = () => {
        setTopic('');
    };

    const submitTopic = async (e) => {
        if (topic.length < 1) {
            alert("Empty discussion topic.");
            return;
        }
        e.preventDefault();
        try {
            await fetch('/api/topics/', {
                method: 'POST',
                body: JSON.stringify({
                    topic
                }),
            });
            resetForm();
            refreshTopics();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="" onSubmit={submitTopic}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <input
                            type="text"
                            name="topic"
                            value={topic}
                            className="form-control"
                            placeholder="Start a new discussion topic here!"
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <button type="submit" className="btn btn-primary">
                        New Topic
                    </button>
                </div>
            </div>
        </form>
    );
}
