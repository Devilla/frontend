import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { loginSuccess } from 'ducks/auth';
import { load, loaded } from 'ducks/loading';
import { LogoInfluence } from 'img';

import { browserHistory } from 'react-router';
import { base } from 'services/api';
import { toast } from 'react-toastify';
import { Alert, HelpBlock } from 'react-bootstrap';


import './OauthLogin.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class OauthLogin extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isPasswordShown: false,
      isEmailValid: false,
      isPwdValid: false,
      error: '',
      errorEmail: '',
      errorPassword: ''
    };
  }
  
  // Submit form
  handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!this.refs.email.value || !this.refs.password.value)
      this.setState({ error: 'All fields are required' });
    this.props.load();
    // TODO: Redirect to dashboard on successfull login.
    login(this.refs.email.value, this.refs.password.value).then(res => {
      this.props.loginSuccess(res);
      this.setState({ error: '' });
      toast.info('Successfull', toastConfig);
      this.props.loaded();
      browserHistory.push(res.user.path);
      // browserHistory.push('/dashboard');
    }).catch(err => {
      this.props.loaded();
      this.setState({ error: err });
    });
  };


  handleInputChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = validateEmail(this.refs.email.value);
    const isPwdValid = validatePassword(this.refs.password.value);
    this.setState({ [name]: value, isEmailValid, isPwdValid, error: '', errorEmail: '', errorPassword: '' });
  };

  // triggers when user leaves the email input field
  handleEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({ isEmailValid });
    if (!value)
      this.setState({ errorEmail: 'Email id required' });
    else if (!isEmailValid)
      this.setState({ errorEmail: 'Enter a valid Email id' });
  };

  // triggers when user leaves the password input field
  handlePasswordBlur = (event) => {
    const value = event.target.value;
    const isPwdValid = validatePassword(value);
    this.setState({ isPwdValid });
    if (!value)
      this.setState({ errorPassword: 'Password required' });
    else if (!isPwdValid)
      this.setState({ errorPassword: 'Enter a valid Password' });
  };

  togglePasswordShown = () => {
    this.setState({
      isPasswordShown: !this.state.isPasswordShown
    });
  };

  render() {
    const mousepoint = {
      cursor: 'pointer'
    };

    const { error, errorEmail, isPasswordShown, errorPassword, isEmailValid, isPwdValid } = this.state;

    return (
      <div className="signin-container">
        <div className="oauth-login">
          <div className="row login-row">
            <img src={LogoInfluence}/>
          </div>
          <div className="row login-row">
            <div className="login-column">
              <div className="align">

                <p className="lead">
                  <span className="sub-in-title">Dont have an account yet?&nbsp;
                    <Link to="/signup">Sign up</Link>
                  </span>
                </p>
                <form onSubmit={this.handleSubmit} className="loginfrm">
                  <div className="row justify-content-center">
                    {error &&
                  <Alert bsStyle="warning" className="col-md-9 col-sm-9">
                    <strong dangerouslySetInnerHTML={{__html: error}} />
                  </Alert>
                    }
                    <div className="col-md-9 col-sm-8 ">
                      <input
                        id="email"
                        name="email"
                        ref="email"
                        className="field w-input"
                        onBlur={this.handleEmailBlur}
                        onChange={this.handleInputChange}
                        placeholder="Email Address"
                        type="email"
                      />
                      <HelpBlock>
                        <p className="website-error">{errorEmail}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <input
                        id="password"
                        type="password"
                        name="Password"
                        className="field w-input "
                        name="password"
                        ref="password"
                        placeholder="Password"
                        type={isPasswordShown ? 'text' : 'password'}
                        maxLength={PASSWORD_MAX_LENGTH}
                        onBlur={this.handlePasswordBlur}
                        onChange={this.handleInputChange}
                      />
                      <HelpBlock>
                        <p className="website-error">{errorPassword}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-9 col-sm-8 frmcntl">
                      <input
                        className="button submit-button w-button btn btn--primary ml-0"
                        type="submit"
                        value="Login"
                        style={mousepoint}
                        disabled={!isEmailValid || !isPwdValid}
                      />
                    </div>
                    <div><Link to="/forget-password"  style={{padding: '25px'}}>Forgot password?</Link></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row login-row">
            <div className="social-link login-column">
              <p> <br /></p>
              <div>
                <a href={`${base}connect/facebook`} className="link-fb ">
                  <div className="col-md-9 col-sm-8 btn btn--icon bg--facebook" to="">
                    <span className="btn__text ">
                      <i className="socicon socicon-facebook"></i>
                  Login with Facebook
                    </span>
                  </div>
                </a>
                <p></p>
                <a href={`${base}connect/google`} className="link">
                  <div className="col-md-9 col-sm-8 btn btn--icon bg--googleplus link-go" to="">
                    <span className="btn__text">
                      <i className="socicon socicon-google"></i>
                  Login with Google
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  loginSuccess,
  load,
  loaded
};
export default connect(null, mapDispatchToProps)(OauthLogin);