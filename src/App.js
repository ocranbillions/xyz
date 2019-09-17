import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import NotFound from './components/layout/NotFound';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Transactions from './components/dashboard/Transactions';
import PrivateRoute from './components/routing/PrivateRoute';
import Footer from './components/layout/Footer';
import store from './store';
import './App.css';

import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/authActions';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={ SignIn } />
          <Switch>
            <Route exact path="/signup" component={ SignUp } />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/transactions/:accountnumber' component={Transactions} />
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
