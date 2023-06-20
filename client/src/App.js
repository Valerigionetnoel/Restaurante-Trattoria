import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
})
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token')
  return{
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: '',
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
//Set up the apollo provider and the router  here: 
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome</h1>
      </header>
    </div>
  );
}

export default App;
