import React, { Component } from 'react';
import { Link } from 'react-router';
import { validateEmail, validatePassword, register, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { Animated } from'react-animated-css';
import { Alert, HelpBlock } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { toast } from 'react-toastify';

import { store } from 'App.js';
import { load, loaded } from 'ducks/loading';
import { loginSuccess } from 'ducks/auth';
import { base } from 'services/api';
import { Spinner } from 'components';

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
  componentDidMount() {
    window.scrollTo(0,0);
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
    const {
      email,
      password
    } = this.state;

    if(!email || !password)
      return this.setState({error: 'All fields are required'});

    store.dispatch(load());
    // TODO: Show 'Check email for further instructions.' message on success
    register(email, password).then(res => {
      toast.info('Successfull', toastConfig);
      store.dispatch(loginSuccess(res));
      store.dispatch(loaded());
      browserHistory.push(res.user.path);
      this.setState({isRegistered: true, error: ''});
    }).catch(err => {
      store.dispatch(loaded());
      this.setState({error: err.msg || err});
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
      errorConfirmPassword: ''
    });
  }

  render() {
    const { email, isRegistered, error, errorEmail, isPasswordShown, errorPassword } = this.state;

    // if registered show 'check mail' message else show the registration form
    const formContent = isRegistered
      ? (<Alert bsStyle='success'>
        Please check your mail for further instructions.
      </Alert>)
      : (
        <div className="signup-container">
          <div className='main-container'>
            <section className="bg">
              <div className='container text-center'>
                <div>
                  <h2 className="text-center btn" disabled  > STEP 1</h2>
                  <p className="signuptitle"> &nbsp;&nbsp;Start Conversions!</p>
                  <Spinner loading={this.props.loading} />
                  <div className='row signuprow give-center-align'>
                    <div className='col-md-12  column-start'>

                      <div className="col-md-6">
                        <p className="lead">
                          <span className="sub-up-title">Already have an account?&nbsp;
                            <Link to="/login">Sign in</Link>
                          </span>
                        </p>
                        <form className="mt-0">
                          <div className='row justify-content-center'>

                            <div className='col-md-9 col-sm-8'>
                              {error &&
                                <Alert bsStyle='warning'>
                                  <strong>{error}</strong>
                                </Alert>
                              }
                              <input
                                id="email"
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
                                id='password'
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
                                onClick={this.handleSubmit}
                              />
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

                      <div className="vristrue">
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>);
    return (
      <div className='transition-item authpage section innerpage'>
        <div className='wrapper'>
          <Spinner loading={this.props.loading} />
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
