// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import HomePage from './pages/homepage/homepage';
// import SignInPage from './pages/sign-in/sign-in';
// import SignUpPage from './pages/sign-up/sign-up';
// import './App.css';
// import AboutUS from './pages/about-us/about-us';
// import ContactUs from './pages/contact-us/contact-us';
// import CustomNav from './components/shared/navbar/custom-nav';
// import Footer from './components/shared/footer/footer';

// function App() {
//   return (
//     <div className="">
//       <header>
//         <CustomNav />
//       </header>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path='/' component={ HomePage } />
//           <Route path='/sign_in' component={ SignInPage } />
//           <Route path='/sign_up' component={ SignUpPage } />
//           <Route path='/contact-us' component={ ContactUs } />
//           <Route path='/about-us' component={ AboutUS } />
//         </Switch>
//       </BrowserRouter>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/sign-in/sign-in';
import SignUpPage from './pages/sign-up/sign-up';
import './App.css';
import AboutUS from './pages/about-us/about-us';
import ContactUs from './pages/contact-us/contact-us';
import CustomNav from './components/shared/navbar/custom-nav';
import Footer from './components/shared/footer/footer';
import axios from 'axios'
import Dashboard from "./pages/Dashboard/dashboard";
// import Home from "./components/Home/home";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    axios.get("https://authentication-backend-rails.herokuapp.com/logged_in", { withCredentials: true })
      .then(response => {
        console.log(response)
        if (response.data.logged_in && this.state.loggedInStatus == 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user
          })
        } else if (!response.data.logged_in & (this.state.loggedInStatus == 'LOGGED_IN')) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {}
          })
        }
        // console.log('login response', response);
      }).catch(error => {
        console.log('login error', error);
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
      <div className="app">
        <header>
          <CustomNav />
        </header>
        <BrowserRouter>
          <Switch>
            {/* <Route
              exact
              path={"/"}
              render={props => (
                <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
              )}
            /> */}
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route exact path='/' component={HomePage} />
            <Route path='/sign_in' component={SignInPage} />
            <Route path='/sign_up' component={SignUpPage} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/about-us' component={AboutUS} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
