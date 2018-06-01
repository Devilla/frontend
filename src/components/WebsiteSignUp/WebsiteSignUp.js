import React, { Component } from 'react';
import { Link } from "react-router";
import { SignUp } from 'img';
import {validateEmail, validatePassword, register, PASSWORD_MAX_LENGTH} from 'services/FormUtils';
import { connect } from 'react-redux';
import {Animated} from "react-animated-css";
import Ionicon from 'react-ionicons';
import {css} from 'glamor';
import {Alert} from 'react-bootstrap';
import {store} from 'index.js';
import {loginSuccess, fetchRoles} from 'ducks/auth';
import {browserHistory} from 'react-router';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class WebsiteSignUp extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword:'',
      isPasswordShown: false,
      isRegistered: false
    };
  }


  componentWillMount() {
    store.dispatch(fetchRoles());
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

    // triggers when user leaves the First Name input field
  handleFirstnameBlur = event => {
    const value = event.target.value;

    if (!validateEmail(value))
      toast.error("Enter a valid Email id", toastConfig);

    };

  // triggers when user leaves the email input field
  handleEmailBlur = event => {
    const value = event.target.value;

    if (!validateEmail(value))
      toast.error("Enter a valid Email id", toastConfig);

    };

  // triggers when user leaves the password input field
  handlePasswordBlur = event => {
    const value = event.target.value;

    if (!validatePassword(value))
      toast.error("Enter valid Password!", toastConfig);
    };

  togglePasswordShown = () => {
    this.setState({
      isPasswordShown: !this.state.isPasswordShown
    });
  };

  // Submit form
  handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // TODO: Show 'Check email for further instructions.' message on success
    register(this.state.email, this.state.password).then(res => {

        toast.info('Successfull', toastConfig);
        store.dispatch(loginSuccess(res));
        // window.location.assign(window.location.origin+'/getting-started');
        browserHistory.push('/getting-started');
        this.setState({isRegistered: true});
      // TODO: check response before treating it as successfull
    }).catch(err => {
      toast.error(err, toastConfig);
    });

  };

  render() {




    const isEmailValid = validateEmail(this.state.email);
    const isPwdValid = validatePassword(this.state.password) && validatePassword(this.state.confirmPassword)  && this.state.confirmPassword===this.state.confirmpassword;
    const isFormValid = isEmailValid && isPwdValid;


    // if registered show 'check mail' message else show the registration form
    const formContent = this.state.isRegistered
      ? (<Alert bsStyle="success">
        Please check your mail for further instructions.
      </Alert>)
      : (
        <div className="main-container">
          <section className="switchable bg--secondary">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6">
                  <div className="switchable__text">
                    <h2>Your first step towards conversions, Signup here.</h2>
                    <span>Already have an account?&nbsp;
                      <Link to="/login">Sign in</Link>
                    </span>
                    <hr className="short" />
                    <form>
                      <div className="row">
                      <div className="col-12">
                          <input type="text"
                           name="firstname"
                           value={this.state.firstname}
                           placeholder="Your Name" />
                      </div>
                        <div className="col-12">
                          <input
                          name="email"
                          value={this.state.email}
                          onBlur={this.handleEmailBlur}
                          onChange={this.handleInputChange}
                          placeholder="Email Address"
                          type="email" />
                        </div>
                        <div className="col-12">
                          <input
                           name="password"
                           maxLength={PASSWORD_MAX_LENGTH}
                           value={this.state.name}
                           onBlur={this.handlePasswordBlur}
                           onChange={this.handleInputChange}
                           type={this.state.isPasswordShown? 'text': 'password'}
                           placeholder="Password"
                            />
                        </div>
                        <div className="col-12">
                          <input
                           name="passwordConfirm"
                           maxLength={PASSWORD_MAX_LENGTH}
                           value={this.state.name}
                           onBlur={this.handlePasswordBlur}
                           onChange={this.handleInputChange}
                           type={this.state.isPasswordShown? 'text': 'password'}
                           placeholder="Confirm Password" />
                        </div>
                        <div className="col-12">
                          <div className="input-checkbox">
                            <input type="checkbox" name="agree" id="input-assigned-1" />
                            <label for="input-assigned-1"></label>
                          </div>
                          <span>Remember Me</span>
                        </div>
                        <div className="frmcntl col-12">
                          <input
                          type="submit"
                          className="button submit-button w-button btn btn--primary"
                          value="Create Account"
                          disabled={false}/>
                        </div>
                        <hr />
                        <div className="col-12">
                          <span className="type--fine-print">By signing up, you agree to the&nbsp;
                            <Link to="/terms-and-condtions">Terms of Service</Link>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-8 col-lg-8">
                  <img alt="Image" src={ SignUp } />
                </div>
              </div>
            </div>
          </section>
        </div>);
    return (
    <div>
      <div className="authpage section innerpage">
        <div className="container">
          <div className="wrapper">
            <Animated
            className="leftwrap center"

            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={true}>
              <form
              className="loginfrm"
              onSubmit={this.handleSubmit}>
                {formContent}
              </form>
              <div className="support"></div>
            </Animated>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default WebsiteSignUp;
