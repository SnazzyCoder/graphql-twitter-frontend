import { gql } from '@apollo/client'

export const getTweets = gql`
    {
        tweets{
            id
            author
            title
            content
        }
    }
`

export const addTweet = gql`
    mutation($author: String!, $title: String!, $content: String!){
        addTweet(author: $author, title: $title, content: $content){
            id
            title
            content
        }
    }
`