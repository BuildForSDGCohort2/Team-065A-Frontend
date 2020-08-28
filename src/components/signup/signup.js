import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
// import FormInput from '../form-input/form-input';
// import CustomButton from '../button/custom-button';

class SignUp extends React.Component {
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

                        <div className="col-sm-6 brand">

                            <div className="heading">
                                <h2>QuaTeach</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>

                        <div className="col form">
                            <div className="signup form-peice">
                                <form className="signup-form">

                                    <div className="form-group">
                                        <label id="active" htmlFor="name" className="form__label">Full Name</label>
                                        <input type="text" name="username" id="name" className="name input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div htmlFor="form-group">
                                        <label id="active" htmlFor="email">Email Adderss</label>
                                        <input type="email" name="emailAdress" id="email" className="email input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div className="form-group">
                                        <label id="active" htmlFor="phone">Phone Number - <small>Optional</small></label>
                                        <input type="text" name="phone" id="phone" className="input"></input>
                                    </div>

                                    <div htmlFor="form-group">
                                        <label id="active" htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" className="pass input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div className="form-group">
                                        <label id="active" htmlFor="passwordCon">Confirm Password</label>
                                        <input type="password" name="passwordCon" id="passwordCon" className="passConfirm input"></input>
                                        <span className="error"></span>
                                    </div>

                                    <div className="btnAccount">
                                        <input type="submit" value="Signup Now" id="submit"></input>
                                        <Link to='/sign_in'>I have an account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default SignUp