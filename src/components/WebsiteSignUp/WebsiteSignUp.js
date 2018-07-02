import React, { Component } from 'react';
import { Link } from 'react-router';
import {validateEmail, validatePassword, register, PASSWORD_MAX_LENGTH} from 'services/FormUtils';
import { Animated } from'react-animated-css';
import { Alert, HelpBlock } from 'react-bootstrap';
import { store } from 'index.js';
import { load, loaded } from 'ducks/loading';
import { loginSuccess } from 'ducks/auth';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';
import { base } from 'services/api';
import  WebsiteSignupPrice from './WebsiteSignupPrice';
import WebsiteSignupPayment from './WebsiteSignupPayment';


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
      error: '',
      fm1: true,
      fm2: false,
      fm3: false
    };
    this.handleCheckChange=  this.handleCheckChange.bind(this);
  }

  componentWillMount() {
    if(this.props.location && this.props.location.query.email)
      this.setState({email: this.props.location.query.email});
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
      return this.setState({error: 'All fields are required'});
    if(password !== confirmPassword)
      return this.setState({errorConfirmPassword: 'Password doesnot match'});

    store.dispatch(load());
    // TODO: Show 'Check email for further instructions.' message on success
    register(email, password).then(res => {
      toast.info('Successfull', toastConfig);
      store.dispatch(loginSuccess(res));
      store.dispatch(loaded());
      browserHistory.push('/getting-started');
      this.setState({isRegistered: true, error: ''});
    }).catch(err => {
      store.dispatch(loaded());
      this.setState({error: err});
    });
  };

  componentWillUnmount() {
    this.setState({
      username: '',
      email: '',
      password: '',
      error: '',
      errorEmail: '',
      errorPassword: '' ,
      errorConfirmPassword: '',

    });
  }
  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  b1StepHandler = () => {
    this.setState( prevState => ({
      fm1: !prevState.fm1,
      fm2: !prevState.fm2
    }));
  }
  b2StepHandler = () => {
    this.setState( prevState => ({
      fm2: !prevState.fm2,
      fm3: !prevState.fm3
    }));
  }

  handleCheckChange() {
  
    //handle to check the change for the pricing button selection ; PASS IN EVENT 
    this.b2StepHandler();

  }

  render() {
    const { email, isRegistered, error, errorEmail, isPasswordShown, errorPassword,fm1,fm2,fm3} = this.state;
   
    // if registered show 'check mail' message else show the registration form
    const formContent = isRegistered
      ? (<Alert bsStyle='success'>
        Please check your mail for further instructions.
      </Alert>)
      : (
        <div className="signup-container">
          <div className='main-container'>
            <section className='bg--secondary'>
              <div className='container text-center'>
                {fm1 &&
                <div>
                  <h2 className="text-center btn" disabled  > STEP 1</h2>
                  <p className="signuptitle"> &nbsp;&nbsp;Your first step towards conversions.</p>
                
                  <div className='row signuprow give-center-align'>
                    <div className='col-sm-12 col-md-7 col-lg-6 '>
                  
                      <div>
                        <p className="lead">
                          <span className="sub-up-title">Already have an account?&nbsp;
                            <Link to="/login">Sign in</Link>
                          </span>
                        </p>

                        <form className="mt-0">
                          <div className='row justify-content-center'>
                            {error &&
                        <Alert bsStyle='warning'>
                          <strong>{error}</strong>
                        </Alert>
                            }
                           
                            <div className='col-md-9 col-sm-8'>
                              <input
                                name='email'
                                value={email}
                                onBlur={this.handleEmailBlur}
                                onChange={this.handleInputChange}
                                placeholder='Email Address'
                                type='email' />
                              <HelpBlock>
                                <p className='website-error'>{errorEmail}</p>
                              </HelpBlock>
                            </div>
                            <div className='col-md-9 col-sm-8'>
                              <input
                                name='password'
                                maxLength={PASSWORD_MAX_LENGTH}
                                onBlur={this.handlePasswordBlur}
                                onChange={this.handleInputChange}
                                type={isPasswordShown? 'text': 'password'}
                                placeholder='Password'
                              />
                              <HelpBlock>
                                <p className='website-error'>{errorPassword}</p>
                              </HelpBlock>
                            </div>
                            <div className='frmcntl col-md-9 col-sm-8'>
                              <input
                                type='submit'
                                className='button submit-button w-button btn btn--primary ml-0'
                                value='Create Account'
                                disabled={false}
                                onClick={this.b1StepHandler}/>
                            </div>
                            <hr />
                            <div className='col-9'>
                              <span className='lead terms-title'>By signing up, you agree to the&nbsp;
                                <Link to='/terms-and-condtions'>Terms of Service</Link>
                              </span>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="vristrue ml-5">
                    </div>

                    <div className="col-md-4 socio-link">
                      <p> <br /></p>
                      <div className="pos-relative">
                        <a href={`${base}connect/facebook`} className="link-fb ">
                          <div className="btn btn--icon bg--facebook" to="">
                            <span className="btn__text ">
                              <i className="socicon socicon-facebook"></i>
                          Signup with Facebook
                            </span>
                          </div>
                        </a>
                        <p></p>
                        <a href={`${base}connect/google`} className="link">
                          <div className="btn btn--icon bg--googleplus link-go" to="">
                            <span className="btn__text">
                              <i className="socicon socicon-google"></i>
                          Signup with Google
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>}
                {fm2 && 
                  <WebsiteSignupPrice 
                    handleCheckChange={this.handleCheckChange} 
                  />
                }
                {fm3 && 
                  <WebsiteSignupPayment />
                }
              </div>
            </section>
          </div>
        </div>);
    return (

      <div className='authpage section innerpage'>
        <div className='wrapper'>
          <Animated
            className='leftwrap center'

            animationIn='fadeIn'
            animationOut='fadeOut'
            isVisible={true}>
           
            {formContent}
       
            <div className='support'></div>
          </Animated>
        </div>
      </div>
  
    );
  }
}

export default WebsiteSignUp;
