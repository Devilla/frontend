import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { Animated } from 'react-animated-css';
import { forgotPassword, clearForgotPasswordError } from 'ducks/auth';
import { HelpBlock } from 'react-bootstrap';
import './index.scss';

function validate(password, authEmail) {
  return {
    password: password.length === 0,
    authEmail: authEmail === false
  };
}

class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      authEmail: false,
      emailError: '',
      showemailbtn: false,
      usersemail: ''
    };
  }

  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  handleEmailChange(evt) {
    this.props.clearForgotPasswordError();

    this.setState({email: evt.target.value, emailError: ''});

  }

  checkEmail(evt) {
    var Emailexpr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!Emailexpr.test(evt.target.value)) {
      this.setState({emailError: 'Enter a valid Email id'});
    } else {
      this.setState({authEmail: true, emailError: ''});
    }
  }

  handleSubmit(evt) {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      const data = {
        'email': this.state.email
      };
      let useremail = this.state.email.split('@');
      this.props.forgotPassword(data);
      this.props.clearForgotPasswordError();
      this.setState({email: '', emailError: '',showemailbtn:true, usersemail:useremail[1] });
    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password, this.state.authEmail);

    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { showemailbtn ,usersemail} = this.state;
    return (<div className="forgetpassword-container">
      <div className="authpage section innerpage">
        <div className="container">
          <div className="wrapper">
            <Animated className="center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <form onSubmit={this.handleSubmit.bind(this)} method="POST" data-name="Login Form" className="loginfrm">
                <h3 className="dashed pt-5 h2 text-center">Forgot your password</h3>
                <div className="section-divider-line"></div>
                <div className="row justify-content-center">
                  <div className="frmcntl pb-2 col-md-5">
                    { showemailbtn ?
                      <h3 className="pb-3 lead ml-5">Reset link has been sent to your Email</h3>
                      :
                      <div>
                        <h3 className="pb-3 lead">Enter your email address below and well send you a link to reset your password.</h3>
                        <div className="frmcntl pb-4">
                          <input className="field w-input" id="email" name="email" value={this.state.email} onBlur={this.checkEmail.bind(this)} onChange={this.handleEmailChange.bind(this)} placeholder="Email Address" type="email"/>
                          <HelpBlock>
                            <p className="website-error">{this.state.emailError || this.props.error}</p>
                          </HelpBlock>
                        </div>
                      </div>
                    }
                    <div className="frmcntl pb-4">
                      <input className="btn btn-primary " type="submit" value={showemailbtn? 'Check E-mail' : 'Send reset password email'} onClick={showemailbtn ? () => usersemail : ''}/>
                    </div>
                  </div>
                </div>
              </form>
              <span className="row pt-5 support ">
                <span className="h5 lead">Trouble logging in? <Link to="/contact">Contact Support</Link></span>
              </span>
            </Animated>
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({
  error: state.getIn(['auth', 'forgetError'])
});

const mapDispatchToProps = {
  forgotPassword,
  clearForgotPasswordError
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword);
