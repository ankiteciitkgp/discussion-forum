import React from 'react';
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';

export default function CommentList({ comments, refreshComments }) {
    return (
            <div className="list-group">
                {comments
                    .map((comment,key) => (
                        <li className="list-group-item" key={key}>
                            {comment.comment}
                            <p className="float-right">{DisplayTimeUtil(comment.createdTime)}</p>
                        </li>
                    ))}
            </div>
    );
}
