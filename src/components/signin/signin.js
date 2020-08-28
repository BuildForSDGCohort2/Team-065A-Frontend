import React from 'react';
import { Link } from 'react-router-dom'
import './signin.css';
import FormInput from '../form-input/form-input';
import CustomButton from '../button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
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

        return (
            <div className="container">
                <section id="formHolder">
                    <div className="row">

                        {/* Brand Box */}
                        <div className="col-md-6 brand">

                            <div className="heading">
                                <h2>QuaTeach</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>

                        {/* Form Box */}
                        <div className="col form">
                            <div id="login-form" className="login form-peice">
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <FormInput name="email"
                                        type="email"
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                        label="Email"
                                        required />

                                    <FormInput name="password"
                                        type="password"
                                        value={this.state.password}
                                        handleChange={this.handleChange}
                                        label="Password"
                                        required />

                                    <div className="btnAccount">
                                        <CustomButton type="submit" > Login </CustomButton>
                                        <Link to='./sign_up'>I'm New</Link>
                                    </div>
                                    {/* <div htmlFor="form-group">
                                        <label id="active" htmlFor="email">Email Adderss</label>
                                        <input type="email" name="emailAdress" id="email" className="email input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div htmlFor="form-group">
                                        <label id="active" htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className="pass input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div className="btnAccount">
                                        <input type="submit" value="Signup Now" id="submit"></input>
                                        <Link to='/sign_up'>I have an account</Link>
                                    </div> */}
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
export default SignIn