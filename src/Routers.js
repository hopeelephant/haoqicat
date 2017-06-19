import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import React from 'react';
import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

export default function(){
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="signup" component={Signup}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
  )
}
