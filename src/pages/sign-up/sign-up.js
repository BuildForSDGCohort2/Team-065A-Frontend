// import React from 'react';
// import './sign-up.css';


// const SignUpPage = (props) => {
//   return(
//     <div className="sign-up">

//     </div>
//    );
//  }

// export default SignUpPage;


import React, { Component } from "react";
import axios from 'axios';
import './sign-up.css';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      full_name: '',
      user_type: '',
      registrationErrors: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation, phone, full_name, user_type } = this.state
    axios.post("https://team065a-backend-arch.herokuapp.com/api/v1/sign_up", {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        phone: phone,
        full_name: full_name,
        user_type: user_type,
      }
    },
      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'Success') {
        this.props.handleSuccessfulAuth(response.data)
      }
      console.log('signup response', response);
    }).catch(error => {
      console.log('signup error', error);
    })
    console.log('form submitted')
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={this.state.full_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <label for="user_type">User Type:</label>
          <select
            name="user_type"
            placeholder=''
            value={this.state.user_type}
            onChange={this.handleChange}>
            <option>teachers</option>
            <option>parents</option>
            <option>student</option>
            <option>schools</option>
            <option>others</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
