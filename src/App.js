import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

import Tweets from './Tweets'
import AddTweet from './components/AddTweet'

const client = new ApolloClient({
  uri: "https://twitter-graphql-backend.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Tweets />
        <AddTweet />
      </div>
    </ApolloProvider>
  );
}

export default App;
