import React from 'react';
import './signup-login.css';
import FormInput from '../form-input/form-input';
import CustomButton from '../button/custom-button';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }



render() {
  return(
    <div className="container">
        {/* <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span> */}

        <form onSubmit={this.handleSubmit}>

            <FormInput name="email"
             type="email"
              value={this.state.email}
              handleChange={ this.handleChange }
              label="Email"
               required />

            <FormInput name="password"
             type="password"
              value={this.state.password}
              handleChange={ this.handleChange }
              label="Password"
               required />

            <div className="btnAccount">
                <CustomButton type="submit"> Login </CustomButton>
            </div>
        </form>
    </div>
   )
 }
}
export default SignIn