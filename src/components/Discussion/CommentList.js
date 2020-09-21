import React from 'react';
import Topic from '../Home/Topic';

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
