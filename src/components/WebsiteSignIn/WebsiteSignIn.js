import React, { Component } from 'react';
import { Link } from "react-router";
import { Animated } from "react-animated-css";
import Ionicon from 'react-ionicons';
import { css } from 'glamor';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from '../../services/FormUtils';
import { store } from '../../index.js';
import { loginSuccess } from '../../ducks/auth';
import { browserHistory } from 'react-router';
import SocialLink from './SocialLink';
import { base } from 'services/api';
import { toast } from 'react-toastify';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class WebsiteSignIn extends Component {


  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isPasswordShown: false,
      isEmailValid: false,
      isPwdValid: false
    };
  }
  // Submit form
  handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // TODO: Redirect to dashboard on successfull login.
    login(this.refs.email.value, this.refs.password.value).then(res => {
      store.dispatch(loginSuccess(res));
      toast.info('Successfull', toastConfig);
      browserHistory.push('/dashboard');
    }).catch(err => {
      toast.error(err, toastConfig);
    });
  };


  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = validateEmail(this.refs.email.value);
    const isPwdValid = validatePassword(this.refs.password.value);
    this.setState({ [name]: value, isEmailValid, isPwdValid });
  };

  // triggers when user leaves the email input field
  handleEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({isEmailValid});
    if (!isEmailValid)
      toast.error("Enter a valid Email id", toastConfig);

  };

  // triggers when user leaves the password input field
  handlePasswordBlur = (event) => {
    const value = event.target.value;
    const isPwdValid = validatePassword(value);
    this.setState({isPwdValid});
    if (!isPwdValid)
      toast.error("Enter valid Password!", toastConfig);
  };

  togglePasswordShown = () => {
    this.setState({
      isPasswordShown: !this.state.isPasswordShown
    });
  };

  render() {
    return (
      <div className="main-container">
        <section className="switchable switchable--switch bg--secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="">
                  <h2>Welcome back!</h2>
                  <p className="lead">
                    <span>Don't have an account yet?&nbsp;
                      <Link to="/signup">Sign up</Link>
                    </span>
                  </p>
                  <hr className="short" />
                  <form   onSubmit={this.handleSubmit} className="loginfrm" >
                    <div className="row">
                      <div className="col-9 ">
                        <input name="email"
                        ref="email"
                        className="field w-input"
                        value={this.state.email}
                        onBlur={this.handleEmailBlur}
                        onChange={this.handleInputChange}
                        placeholder="Email Address"
                        type="email"
                        />
                      </div>
                      <div className="col-9">
                        <input type="password"
                        name="Password"
                        className="field w-input"
                        name="password"
                        ref="password"
                        placeholder="Password"
                        type={this.state.isPasswordShown ? 'text' : 'password'}
                        maxLength={PASSWORD_MAX_LENGTH}
                        value={this.state.name}
                        onBlur={this.handlePasswordBlur}
                        onChange={this.handleInputChange}
                        />

                        <Ionicon
                        icon="ios-eye-outline"
                        className="svgicons input"
                        fontSize="35px" color="#999"
                        onClick={this.togglePasswordShown}
                      />
                      </div>
                      <div className="col-12">
                        <div className="input-checkbox">
                          <input
                           type="checkbox"
                            name="agree"
                            id="input-assigned-1" />
                          <label for="input-assigned-1"></label>
                        </div>
                        <span>Remember Me</span>
                      </div>
                      <div className="col-4 frmcntl">
                        <input
                         className="button submit-button w-button btn btn--primary"
                         type="submit"
                         value="Login"
                         disabled={!this.state.isEmailValid || !this.state.isPwdValid}
                          />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3">
                <p> <br /> </p>
                <p> <br /> </p>
                <h3 className="mt--2"> &nbsp; &nbsp; Or, <br />You can </h3>
              </div>
              <div className="col-md-6 col-lg-5">
                <p> <br /></p>
                <p> <br /></p>
                <div className="mt--3">
                <a href={`${base}connect/facebook`} className="link">
                  <Link className="btn btn--icon bg--facebook" to="">
                    <span className="btn__text">
                      <i className="socicon socicon-facebook"></i>
                      Login with Facebook
                    </span>
                  </Link>
                  </a>
                  <p></p>
                  <a href={`${base}connect/google`} className="link">
                  <Link className="btn btn--icon bg--googleplus" to="">
                    <span className="btn__text">
                      <i className="socicon socicon-google"></i>
                      Login with Google
                    </span>
                  </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WebsiteSignIn;
