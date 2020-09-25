import React from 'react';
import Topic from './Topic';

export default function TopicList({ topics, refreshTopics }) {
    return (
        <div>
            <h4 className="heading mt-5 mb-3">Topics</h4>
            <div className="list-group">
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
