import React from 'react';
import DisplayTimeUtil from '../Utils/DisplayTimeUtil';
import '../../styles/comments.css';

export default function CommentList({ comments, refreshComments, loading }) {
    return (
            <div className="comment__group mt-4">
                {comments
                    .map((comment,key) => (
                        
                        <div className="comment__list" key={comment.id}>
                            <div className="comment__header">
                                <div className="topic-comments">{comment.fields.comment}</div>
                            </div>
                            <div className="comment__footer">
                                <div className="comment__list--author">{comment.fields.name}</div>
                                <div className="comment-sep">.</div>
                                <div className="comments-date mt-2">{DisplayTimeUtil(comment.createdTime)}</div>
                            </div>
                        </div>
                    ))}
            </div>
    );
}
