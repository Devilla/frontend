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
      isRegistered: false,
      error:''
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value, error: ''});
  };

  // triggers when user leaves the email input field
  handleEmailBlur = event => {
    const value = event.target.value;
    if(!value)
      this.setState({error: 'Email id required'});
    else if (!validateEmail(value))
      this.setState({error: 'Enter a valid Email id'});
  };

  // triggers when user leaves the password input field
  handlePasswordBlur = event => {
    const value = event.target.value;
    if(!value)
      this.setState({error: 'Password required'});
    else if (!validatePassword(value))
      this.setState({error: 'Enter a valid Password'});
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
    if(this.state.password !== this.state.confirmPassword)
      return this.setState({error: 'Password doesnot match'});

    // TODO: Show 'Check email for further instructions.' message on success
    register(this.state.email, this.state.password).then(res => {
        toast.info('Successfull', toastConfig);
        store.dispatch(loginSuccess(res));
        browserHistory.push('/getting-started');
        this.setState({isRegistered: true, error: ''});
    }).catch(err => {
      this.setState({error: err});
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
                <div className="col-md-6 col-lg-6 text-center">
                  <div className="switchable__text">
                  
                    <h3>Your first step towards conversions, Signup here.</h3>
                    <span className=" type--fine-print">Already have an account?&nbsp;
                      <Link to="/login">Sign in</Link>
                    </span>
                    <hr className="short" />
                    <form>
                      <div className="row pl-5">
                        <div className="col-11">
                          <input
                          name="email"
                          value={this.state.email}
                          onBlur={this.handleEmailBlur}
                          onChange={this.handleInputChange}
                          placeholder="Email Address"
                          type="email" />
                        </div>
                        <div className="col-11">
                          <input
                           name="password"
                           maxLength={PASSWORD_MAX_LENGTH}
                           // value={this.state.name}
                           onBlur={this.handlePasswordBlur}
                           onChange={this.handleInputChange}
                           type={this.state.isPasswordShown? 'text': 'password'}
                           placeholder="Password"
                            />
                        </div>
                        <div className="col-12">
                          <input
                           name="confirmPassword"
                           maxLength={PASSWORD_MAX_LENGTH}
                           // value={this.state.name}
                           onBlur={this.handlePasswordBlur}
                           onChange={this.handleInputChange}
                           type={this.state.isPasswordShown? 'text': 'password'}
                           placeholder="Confirm Password" />
                           <HelpBlock>
                             <p className="website-error">{this.state.error}</p>
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
