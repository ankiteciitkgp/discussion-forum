import React, { useState } from 'react';

export default function CommentForm({ currTopic, refreshComments }) {
    const [comment, setComment] = useState('');

    const resetForm = () => {
        setComment('');
    };

    const submitComment = async (e) => {
        if (comment.length < 1) {
            alert("Please write some comment.");
            return;
        }
        e.preventDefault();
        if (window.netlifyIdentity.currentUser() == null) {
            window.netlifyIdentity.open();
            return;
        }
        const name = window.netlifyIdentity.currentUser().user_metadata.full_name;

        try {
            await fetch('/api/dboard/comment/' + currTopic.id, {
                method: 'POST',
                body: JSON.stringify({
                    comment,
                    name
                }),
            });
            resetForm();
            refreshComments();
        } catch (err) {
            alert("An error occured while adding comment");
        }
    };

    return (
        <form className="" onSubmit={submitComment}>
            <div className="row">
                <div className="col">
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
                </div>
                <div className="col-lg-1">
                    <button type="submit" className="btn btn-primary">
                        Comment
                    </button>
                </div>
            </div>
        </form>
    );
}
