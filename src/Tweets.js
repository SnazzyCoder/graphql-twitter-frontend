import React from 'react'
import TweetCard from './components/TweetCard'

import { getTweets } from './queries/queries'

import { useQuery } from '@apollo/client'

export default function Tweets() {

    const {loading, error, data: tweetsList} = useQuery(getTweets)

    if (loading) {return <p>Waiting for the backend to fire up..</p>}
    if (error) {return <p>Error..</p>}
    
    // return (<p>Got It</p>)
    const tweets = tweetsList.tweets.slice().reverse().map(tweet => {
        return(
            <TweetCard author={tweet.author} title={tweet.title} key={tweet.id} content={tweet.content}>
            </TweetCard>
        )
    })

    return (
        <div id="tweets">
            <h1>Twitter By Mohit</h1>
            <p style={{margin: 0}}>Trial at GraphQL and MongoDB</p>
            {tweets}
        </div>
    )
}
