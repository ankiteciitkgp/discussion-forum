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
        if (window.netlifyIdentity.currentUser() == null) {
            window.netlifyIdentity.open();
            return;
        }

        const name = window.netlifyIdentity.currentUser().user_metadata.full_name;

        try {
            await fetch('/api/dboard/topic', {
                method: 'POST',
                body: JSON.stringify({
                    topic,
                    name
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
                        <textarea
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
                    <button type="submit" className="btn gs-btn-primary w100">
                        Add Topic
                    </button>
                </div>
            </div>
        </form>
    );
}
