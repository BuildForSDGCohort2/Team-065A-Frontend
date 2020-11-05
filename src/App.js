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
import TutorInfo from "./pages/tutor-info/TutorInfo";

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
    this.getCourses = this.getCourses.bind(this);
    this.getPosts = this.getPosts.bind(this);
  }

  checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
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
    this.setState({
      loggedInStatus: "You are logged in",
    })

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
          this.setState({tutors: response.data.data});
        })
        .catch((error) => {
          console.log("error", error);
    }));
  }

  getCourses() {
    trackPromise(
      axios
        .get(
          "https://team065a-backend-arch.herokuapp.com/api/v1/courses")
        .then((response) => {
          this.setState({courses: response.data.data});
        })
        .catch((error) => {
          console.log("error", error);
      }));
  }
  
  getPosts() {
    trackPromise(
      axios
        .get(
          "https://team065a-backend-arch.herokuapp.com/api/v1/posts")
        .then((response) => {
          this.setState({posts: response.data.data});
        })
        .catch((error) => {
          console.log("error", error);
      }));
  }

  componentDidMount() {
    this.checkLoginStatus();
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
              <Route
                exact 
                path={"/"} 
                render={props => (
                  <HomePage {...props} getTeachers={this.getTeachers} getCourses={this.getCourses} getPosts={this.getPosts} tutors={this.state.tutors} courses={this.state.courses} posts={this.state.posts} />
                )}
              />
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
                  <Courses {...props} getCourses={this.getCourses} courses={this.state.courses}   />
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
              path={"/tutors/:info"} 
              render={props => (
                <TutorInfo {...props} getTeachers={this.getTeachers} tutors={this.state.tutors} />
              )}
            />
              <Route
                exact 
                path={"/blog"} 
                render={props => (
                  <Blog {...props} getPosts={this.getPosts} posts={this.state.posts}  />
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
