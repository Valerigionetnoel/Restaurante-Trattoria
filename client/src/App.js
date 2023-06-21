import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

//Importing the Pages and Components:
import Navbar from './components/Navbar';
import Home from './pages/Home';


//For the styled components pluging;
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    orange: '#F19A38',
    darkOrange:'#D5762C',
    navy: '#0F1D2D',
    white: '#FFF',
    offWhite: '#F1F3F6',
    lightGrey: '#BDBBBC',
    darkGrey: '#717B85',
  }
}
//For the apollo server:
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

//Set up the rest of the routes: 
function App() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route index path='/' element={<Home />}></Route>
     </Routes>
     </Router>
    </div>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
