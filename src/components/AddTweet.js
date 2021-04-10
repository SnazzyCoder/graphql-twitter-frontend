import React, { useState } from 'react'
import { useMutation } from '@apollo/client/react'
import { addTweet, getTweets } from '../queries/queries'

export default function AddTweet() {

    const [newTweet, setnewTweet] = useState({
        author: "",
        title: "",
        content: "",
    })

    const [ addTweetMutation ] = useMutation(addTweet)


    const formSubmit = (e) => {
        e.preventDefault()
        addTweetMutation({
            variables: {
                author: newTweet.author,
                title: newTweet.title,
                content: newTweet.content
            },
            refetchQueries: [{query: getTweets}]
        })
    }

    return (
        <div id="add-tweet">
            <form onSubmit={(e) => formSubmit(e)}>

                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={(e) => {setnewTweet({...newTweet, title: e.target.value})}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content: </label>
                    <textarea type="text" id="content" onChange={(e) => {setnewTweet({...newTweet, content: e.target.value})}}/>
                </div>

                <div className="form-group">
                    <label htmlFor="author">Tweet As: </label>
                    <input type="text" id="author" onChange={(e) => {setnewTweet({...newTweet, author: e.target.value})}}/>
                </div>

                <button type="submit">Tweet!</button>
            </form>
        </div>
    )
}
