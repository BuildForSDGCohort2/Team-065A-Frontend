import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import './App.css';
import AboutUS from './pages/about-us/about-us';
import ContactUs from './pages/contact-us/contact-us';
import CustomNav from './components/shared/navbar/custom-nav';
import Footer from './components/shared/footer/footer';
import Dashboard from "./pages/Dashboard/dashboard";
import Courses from "./pages/courses/courses";
import Tutors from "./pages/tutors/tutors";
import Blog from "./pages/blog/blog";
import Login from "./pages/sign-in/login";
import Registration from "./pages/sign-up/registration";
import { render } from "@testing-library/react";
import { CustomAlert } from "./components/alerts/alerts";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "You are not logged in",
      user: "Guest",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("got user from cookie", user)
    if(user){
      this.setState({
        loggedInStatus: "You are logged in",
        user: user.data,
      })
    }else{
      console.log('You are logged out')
    }
    console.log("current user", this.state.user)
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  handleLogout(){
    this.setState({
      loggedInStatus: "Your are logged out",
      user: {},
    })
    localStorage.removeItem('user');
    render(<CustomAlert type="info" message="Logged out successfully" />, document.getElementById('info'));
  }

  handleLogin(data) {
    console.log('data in handleLogin', data)
    this.setState({
      loggedInStatus: "You are logged in",
      flash: "Logged in successfully!"
    })
    console.log('from handleLogin', this.state.user)
    localStorage.setItem('user', JSON.stringify(data));
    this.checkLoginStatus();
    render(<CustomAlert type="success" message="Logged in successfully" />, document.getElementById("info"));
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
