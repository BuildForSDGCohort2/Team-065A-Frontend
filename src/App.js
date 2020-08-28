import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/sign-in/sign-in';
import SignUpPage from './pages/sign-up/sign-up';
import './App.css';

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/sign_in' component={ SignInPage } />
            <Route path='/sign_up' component={ SignUpPage } />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
