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
import { HelpBlock } from 'react-bootstrap';

import './WebsiteSignIn.scss';

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
      isPwdValid: false,
      error: ''
    };
  }
  // Submit form
  handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // TODO: Redirect to dashboard on successfull login.
    login(this.refs.email.value, this.refs.password.value).then(res => {
      store.dispatch(loginSuccess(res));
      this.setState({error: ''});
      toast.info('Successfull');
      browserHistory.push('/dashboard');
    }).catch(err => {
      this.setState({error: err});
    });
  };


  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = validateEmail(this.refs.email.value);
    const isPwdValid = validatePassword(this.refs.password.value);
    this.setState({ [name]: value, isEmailValid, isPwdValid, error: '' });
  };

  // triggers when user leaves the email input field
  handleEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({isEmailValid});
    if (!isEmailValid)
      this.setState({error: 'Enter a valid Email id'});
  };

  // triggers when user leaves the password input field
  handlePasswordBlur = (event) => {
    const value = event.target.value;
    const isPwdValid = validatePassword(value);
    this.setState({isPwdValid});
    if (!isPwdValid)
      this.setState({error: 'Enter a valid Password'});
  };

  togglePasswordShown = () => {
    this.setState({
      isPasswordShown: !this.state.isPasswordShown
    });
  };

  render() {
    const mousepoint ={
      cursor : "pointer"
    }
    return (
      <div className="main-container">
        <section className="switchable switchable--switch bg--secondary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-7 col-lg-5">
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
                        className="field w-input "
                        name="password"
                        ref="password"
                        placeholder="Password"
                        type={this.state.isPasswordShown ? 'text' : 'password'}
                        maxLength={PASSWORD_MAX_LENGTH}
                        value={this.state.name}
                        onBlur={this.handlePasswordBlur}
                        onChange={this.handleInputChange}
                        />
                        <HelpBlock>
                          <p className="website-error">{this.state.error}</p>
                        </HelpBlock>
                      </div>

                      <div className="col-9 frmcntl">
                        <input
                         className="button submit-button w-button btn btn--primary ml-0"
                         type="submit"
                         value="Login"
                         style={mousepoint}
                         disabled={!this.state.isEmailValid || !this.state.isPwdValid}
                          />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            <div className="vristrue">
            </div>

              <div className="col-md-4 col-lg-4">
                <p> <br /></p>
                <div className="mt--2">
                <a href={`${base}connect/facebook`} className="link ">
                  <Link className="btn btn--icon bg--facebook" to="">
                    <span className="btn__text ">
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
