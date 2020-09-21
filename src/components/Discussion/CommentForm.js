import React, { useState } from 'react';

export default function CommentForm({currTopic,refreshComments}) {
    const [comment, setComment] = useState('');

    const resetForm = () => {
        setComment('');
    };

    const submitTopic = async (e) => {
        if (comment.length <1) {
            alert("Please write some comment.");
            return;
        }
        e.preventDefault();
        debugger;
        try {
            await fetch('/api/discussion/' + currTopic.id, {
                method: 'POST',
                body: JSON.stringify({
                    comment
                }),
            });
            resetForm();
            refreshComments();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="" onSubmit={submitTopic}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="comment"
                            value={comment}
                            className="form-control"
                            placeholder="Add your comment here"
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
    );
}
