import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/sign-in/sign-in';
import SignUpPage from './pages/sign-up/sign-up';
import './App.css';
import AboutUS from './pages/about-us/about-us';
import ContactUs from './pages/contact-us/contact-us';
import CustomNav from './components/shared/navbar/custom-nav';
import Footer from './components/shared/footer/footer';

function App() {
  return (
    <div className="">
      <header>
        <CustomNav />
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/sign_in' component={ SignInPage } />
          <Route path='/sign_up' component={ SignUpPage } />
          <Route path='/contact-us' component={ ContactUs } />
          <Route path='/about-us' component={ AboutUS } />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
