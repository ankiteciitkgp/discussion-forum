import React from 'react';
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';
import '../../styles/comments.css';

export default function CommentList({ comments, refreshComments, loading }) {
    return (
            <div className="list-group">
                {comments
                    .map((comment,key) => (
                        
                        <div className="comment__list" key={key}>
                            <div className="comment__header">
                                <div className="comment__header--name">{comment.name}</div>
                                <div className="comment__header--date">{DisplayTimeUtil(comment.createdTime)}</div>
                            </div>
                            <div className="comment__list--content">{comment.comment}</div>
                        </div>
                    ))}
            </div>
    );
}
