import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from "react-animated-css";
import { forgotPassword, clearForgotPasswordError } from 'ducks/auth';
import { HelpBlock } from 'react-bootstrap';

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
      emailError: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
        "email": this.state.email
      };
      this.props.forgotPassword(data);
      this.props.clearForgotPasswordError();
      this.setState({email: '', emailError: ''})
    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password, this.state.authEmail);

    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    return (<div>
      <div className="authpage section innerpage">
        <div className="container">
          <div className="wrapper">
            <Animated className="center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <form onSubmit={this.handleSubmit.bind(this)} method="POST" data-name="Login Form" className="loginfrm">
                <h3 className="dashed pb-5 pt-5 h2 text-left">Forgot your password</h3>
                <div className="section-divider-line"></div>
                <div className="row">
                  <div className="frmcntl pb-2 col-md-7">
                    <h3 className="pb-3">Enter your email address below and we'll send you a link to reset your password.</h3>
                    <div className=" col-md-12 frmcntl pb-4">
                      <input className="field w-input" id="email" name="email" value={this.state.email} onBlur={this.checkEmail.bind(this)} onChange={this.handleEmailChange.bind(this)} placeholder="Email Address" type="email"/>
                      <HelpBlock>
                        <p className="website-error">{this.state.emailError || this.props.error}</p>
                      </HelpBlock>
                    </div>
                    <div className="col-md-5 frmcntl pb-4">
                      <input className="btn btn-primary " type="submit" value="Send reset password email"/>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row pt-5">
                <div className="support col-md-7">
                  <div className="col-md-12">
                    <h4>Trouble logging in?</h4>
                    <a href="#">Contact Support</a>
                  </div>
                </div>
              </div>
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
