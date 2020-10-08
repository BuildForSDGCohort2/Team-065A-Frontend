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
import './App.css';
import AboutUS from './pages/about-us/about-us';
import ContactUs from './pages/contact-us/contact-us';
import CustomNav from './components/shared/navbar/custom-nav';
import Footer from './components/shared/footer/footer';
import axios from 'axios'
import Dashboard from "./pages/Dashboard/dashboard";
import Courses from "./pages/courses/courses";
import Tutors from "./pages/tutors/tutors";
import Blog from "./pages/blog/blog";
import Login from "./pages/sign-in/login";
import Registration from "./pages/sign-up/registration";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios.get("https://authentication-backend-rails.herokuapp.com/logged_in", { withCredentials: true })
      .then(response => {
        // console.log(response.data.data)
        // console.log(response.data.data)
        if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
          
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user
          })
        } else if (!response.data.logged_in & (this.state.loggedInStatus === 'LOGGED_IN')) {
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
    // this.checkLoginStatus();
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      console.log('user found', user)
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user
      })
    }else{
      console.log('user not found')
    }
  }

  // componentDidUpdate(){
  //   this.handleLogin();
  // }

  handleLogout(){
    this.setState({
      loggedInStatus: "NONE",
      user: {}
      })
      localStorage.removeItem('user');
      this.props.history.push('/home');
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
    localStorage.setItem('user', JSON.stringify(data));
  }

  render() {
    return (
      <div className="app">
        <header>
          <CustomNav />
        </header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={"/dashboard"}
                render={props => (
                  <Dashboard {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} user={this.state.user} />
                )}
              />
              <Route exact path='/' component={HomePage} />
              <Route
             exact 
             path={"/sign_in"} 
             render={props => (
               <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
             )}/>
             <Route
             exact 
             path={"/sign_up"} 
             render={props => (
               <Registration {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
             )}/>
              <Route path='/contact-us' component={ContactUs} />
              <Route path='/about-us' component={AboutUS} />
              <Route path='/courses' component={Courses} />
              <Route path='/tutors' component={Tutors} />
              <Route path='/blog' component={Blog} />
            </Switch>
          </BrowserRouter>
          </main>
        <Footer />
      </div>
    );
  }
}
