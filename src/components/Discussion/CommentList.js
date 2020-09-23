import React from 'react';
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';

export default function CommentList({ comments, refreshComments, loading }) {
    return (
            <div className="list-group">
                {comments
                    .map((comment,key) => (
                        
                        <li className="list-group-item" key={key}>
                            <p className="list-group-item-text">{comment.name} · {DisplayTimeUtil(comment.createdTime)}</p>
                            <p className="list-group-item-heading">{comment.comment}</p>
                        </li>
                    ))}
            </div>
    );
}
