import React, { Component } from 'react';
import { Link } from "react-router";
import { SignUp } from 'img';
import {validateEmail, validatePassword, register, PASSWORD_MAX_LENGTH} from 'services/FormUtils';
import { Animated } from "react-animated-css";
import { Alert, HelpBlock } from 'react-bootstrap';
import { store } from 'index.js';
import { loginSuccess } from 'ducks/auth';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import { base } from 'services/api';


import './WebsiteSignUp.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class WebsiteSignUp extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword:'',
      isPasswordShown: false,
      isRegistered: false,
      errorPassword: '',
      errorEmail: '',
      errorConfirmPassword: '',
      error: ''
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value, error: '', errorUsername: '', errorEmail: '', errorPassword:'', errorConfirmPassword:''});
  };

  // triggers when user leaves the email input field
  handleEmailBlur = event => {
    const value = event.target.value;
    if(!value)
      this.setState({errorEmail: 'Email id required'});
    else if (!validateEmail(value))
      this.setState({errorEmail: 'Enter a valid Email id'});
  };

  // triggers when user leaves the password input field
  handlePasswordBlur = event => {
    const value = event.target.value;
    if(!value)
      this.setState({errorPassword: 'Password required'});
    else if (!validatePassword(value))
      this.setState({errorPassword: 'Enter a valid Password'});
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
    const { email, password, confirmPassword, username } = this.state;

    if(!email || !password || !confirmPassword || !username)
      return this.setState({error: "All fields are required"});
    if(password !== confirmPassword)
      return this.setState({errorConfirmPassword: 'Password doesnot match'});

    // TODO: Show 'Check email for further instructions.' message on success
    register(email, password).then(res => {
        toast.info('Successfull', toastConfig);
        store.dispatch(loginSuccess(res));
        browserHistory.push('/getting-started');
        this.setState({isRegistered: true, error: ''});
    }).catch(err => {
      this.setState({error: err});
    });
  };

  componentWillUnmount() {
    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      errorUsername: '',
      errorEmail: '',
      errorPassword: '' ,
      errorConfirmPassword: ''
    });
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  } 

  render() {

    const isEmailValid = validateEmail(this.state.email);
    const isPwdValid = validatePassword(this.state.password) && validatePassword(this.state.confirmPassword)  && this.state.confirmPassword===this.state.confirmpassword;
    const isFormValid = isEmailValid && isPwdValid;

    const { isRegistered, error, errorUsername, errorEmail, isPasswordShown, errorPassword, errorConfirmPassword } = this.state;

    // if registered show 'check mail' message else show the registration form
    const formContent = isRegistered
      ? (<Alert bsStyle="success">
        Please check your mail for further instructions.
      </Alert>)
      : (
        <div className="main-container">
          <section className="switchable bg--secondary">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6 text-center">
                  <div className="switchable__text">
                  
                    <h3>Your first step towards conversions, Signup here.</h3>
                    <span className=" type--fine-print">Already have an account?&nbsp;
                      <Link to="/login">Sign in</Link>
                    </span>
                    {error &&
                      <Alert bsStyle="warning">
                      <strong>{error}</strong>
                      </Alert>
                    }
                    <hr className="short" />
                    <form>
                      <div className="row">
                      <div className="col-12">
                          <input type="text"
                           name="username"
                           onChange={this.handleInputChange}
                           onBlur={(e) => !e.target.value?this.setState({errorUsername: "Username required"}):null}
                           placeholder="Your Name" />
                           <HelpBlock>
                             <p className="website-error">{errorUsername}</p>
                           </HelpBlock>
                      </div>
                        <div className="col-12">
                          <input
                          name="email"
                          onBlur={this.handleEmailBlur}
                          onChange={this.handleInputChange}
                          placeholder="Email Address"
                          type="email" />
                          <HelpBlock>
                            <p className="website-error">{errorEmail}</p>
                          </HelpBlock>
                        </div>
                        <div className="col-11">
                          <input
                           name="password"
                           maxLength={PASSWORD_MAX_LENGTH}
                           onBlur={this.handlePasswordBlur}
                           onChange={this.handleInputChange}
                           type={isPasswordShown? 'text': 'password'}
                           placeholder="Password"
                            />
                          <HelpBlock>
                            <p className="website-error">{errorPassword}</p>
                          </HelpBlock>
                        </div>
                        <div className="col-12">
                          <input
                           name="confirmPassword"
                           maxLength={PASSWORD_MAX_LENGTH}
                           onBlur={(e) => !e.target.value?this.setState({errorConfirmPassword: "Confirm Password required"}):null}
                           onChange={this.handleInputChange}
                           type={isPasswordShown? 'text': 'password'}
                           placeholder="Confirm Password" />
                           <HelpBlock>
                             <p className="website-error">{errorConfirmPassword}</p>
                           </HelpBlock>
                        </div>
                        <div className="frmcntl col-12">
                          <input
                          type="submit"
                          className="button submit-button w-button btn btn--primary ml-0"
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
                    <hr className="short"/>
                  
                   <p> <span className=" type--fine-print b">Or Signup using: &nbsp;
                  
                    </span> </p>
                        <div className="">
                        <a href={`${base}connect/facebook`} className="link ">
                          <Link className="btn btn--icon bg--facebook" to="">
                            <span className="btn__text ">
                              <i className="socicon socicon-facebook"></i>
                              Signup using Facebook
                            </span>
                          </Link>
                          </a>
                          <p></p>
                          <a href={`${base}connect/google`} className="link">
                          <Link className="btn btn--icon bg--googleplus" to="">
                            <span className="btn__text">
                              <i className="socicon socicon-google"></i>
                              Signup using Google 
                            </span>
                          </Link>
                          </a>
                        </div>
                    
            
                  </div>
                </div>
                <div className="col-md-8 col-lg-8 pr-0">
                  <img alt="Image" src={ SignUp } />
                </div>
              </div>
              
            </div>
          </section>
        </div>);
    return (
    <div>
      <div className="authpage section innerpage">
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
    );
  }
}

export default WebsiteSignUp;
