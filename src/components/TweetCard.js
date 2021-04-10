import React from 'react'

export default function TweetCard(props) {
    return (
        <div className="tweet-card">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>By: {props.author}</p>
            {props.children}
        </div>
    )
}
