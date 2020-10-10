import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import './App.css';
// import AboutUS from './pages/about-us/about-us';
// import ContactUs from './pages/contact-us/contact-us';
import CustomNav from './components/shared/navbar/custom-nav';
import Footer from './components/shared/footer/footer';
import Dashboard from "./pages/Dashboard/dashboard";
import Courses from "./pages/courses/courses";
import Tutors from "./pages/tutors/tutors";
import Blog from "./pages/blog/blog";
import Login from "./pages/sign-in/login";
import Registration from "./pages/sign-up/registration";
import { render } from "react-dom";
import { CustomAlert } from "./components/alerts/alerts";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "You are not logged in",
      user: "Guest",
      tutors: [],
      courses: [],
      posts: []
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
  }

  checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("got user from cookie", user)
    if(user){
      this.setState({
        loggedInStatus: "You are logged in",
        user: user.data,
      })
    }
  }

  handleLogout(){
    this.setState({
      loggedInStatus: "You are logged out",
      user: {},
    })
    localStorage.removeItem('user');
    render(<CustomAlert type="info" message="Logged out successfully" />, document.getElementById('info'));
    this.checkLoginStatus()
  }

  handleLogin(data) {
    console.log('data in handleLogin', data)
    this.setState({
      loggedInStatus: "You are logged in",
    })
    console.log('from handleLogin', this.state.user)
    localStorage.setItem('user', JSON.stringify(data));
    this.checkLoginStatus();
    render(<CustomAlert type="success" message="Logged in successfully" />, document.getElementById("info"));
  }

  getTeachers() {
    trackPromise(
      axios
        .get(
          "https://team065a-backend-arch.herokuapp.com/api/v1/teachers")
        .then((response) => {
          console.log("fetched teachers", response.data);
          this.setState({tutors: response.data.data});
          console.log("state", this.state.tutors);
        })
        .catch((error) => {
          console.log("error", error);
    }));
  }

  componentDidMount() {
    this.checkLoginStatus();
    // this.getTeachers();
  }

  render() {
    return (
      <div className="app">
        <header>
          <CustomNav handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} user={this.state.user} />
        </header>
        <div id="info"></div>
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
                )}
              />
             <Route
                exact 
                path={"/sign_up"} 
                render={props => (
                  <Registration {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              <Route
                exact 
                path={"/courses"} 
                render={props => (
                  <Courses {...props}  />
                )}
              />
              <Route
                exact 
                path={"/tutors"} 
                render={props => (
                  <Tutors {...props} getTeachers={this.getTeachers} tutors={this.state.tutors} />
                )}
              />
              <Route
                exact 
                path={"/blog"} 
                render={props => (
                  <Blog {...props}  />
                )}
              />
            </Switch>
          </BrowserRouter>
          </main>
        <Footer />
      </div>
    );
  }
}
