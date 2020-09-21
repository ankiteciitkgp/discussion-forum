import React from 'react';

export default function CommentList({ comments, refreshComments }) {
    return (
        <div>
            <div className="list-group">
                {comments
                    .map((comment) => (
                        <div className="list-group-item">
                            <h6 className="list-group-item-heading" >{comment.comment}</h6>
                        </div>
                    ))}
            </div>
        </div>
    );
}
