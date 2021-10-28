import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import apolloClient from './apollo/clientSetup'
import reduxStore from './redux/store';


// Apollo client fetches remote data
// Redux manages application state
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}> 
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
