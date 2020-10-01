import React from 'react';
import Topic from './Topic';

export default function TopicList({ topics, refreshTopics }) {
    return (
        <div>
            <h4 className="heading">Topics</h4>
            <div className="comment__group">
                {topics
                    .map((topic) => (
                        <Topic
                            topic={topic}
                            key={topic.id}
                            refreshTopics={refreshTopics}
                        />
                    ))}
            </div>
        </div>
    );
}
