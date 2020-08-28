import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import FormInput from '../form-input/form-input';
import CustomButton from '../button/custom-button';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            user_type: ''
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
                                <form className="signup-form" onSubmit={this.handleSubmit}>

                                    <FormInput name="full_name"
                                        type="full_name"
                                        value={this.state.full_name}
                                        handleChange={this.handleChange}
                                        label="full name"
                                        required />

                                    <FormInput name="email"
                                        type="email"
                                        value={this.state.email}
                                        handleChange={this.handleChange}
                                        label="Email"
                                        required />

                                        <FormInput name="phone"
                                        type="phone"
                                        value={this.state.phone}
                                        handleChange={this.handleChange}
                                        label="phone number"
                                        required />

                                        <FormInput name="password"
                                        type="password"
                                        value={this.state.password}
                                        handleChange={this.handleChange}
                                        label="password"
                                        required />

                                        <FormInput name="password_confirmation"
                                        type="password_confirmation"
                                        value={this.state.password_confirmation}
                                        handleChange={this.handleChange}
                                        label="confirm password"
                                        required />

                                        {/* <FormInput name="user_type"
                                        type="user_type"
                                        value={this.state.user_type}
                                        handleChange={this.handleChange}
                                        label=""
                                        required /> */}

                                    <div className="btnAccount">
                                    <CustomButton type="submit" > Login </CustomButton>
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