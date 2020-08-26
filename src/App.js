import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import './App.css';

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/signin' component={ SignInSignUpPage } />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
