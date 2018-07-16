import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import { Row, Col, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { loginSuccess } from 'ducks/auth';
import { load, loaded } from 'ducks/loading';
import { base } from 'services/api';
import { storeToken } from 'services/Request';
import { Link, browserHistory } from 'react-router';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};

class forget extends Component{
  constructor () {
    super();
    this.state = {
      password: '',
      passwordConfirmation: '',
      passwordError: '',
      commonError: ''
    };
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  handleStateChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
      passwordError: '',
      commonError: ''
    });
  }

  handlePasswordAuth = (evt) => {
    if(evt.target.value == '')
      this.setState({passwordError: 'Enter your password'});
  }

  handlePasswordverifyAuth = (evt) => {
    if(evt.target.value == '')
      this.setState({commonError: 'Verification password required'});
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.load();
    const { password, passwordConfirmation } = this.state;
    const code = this.props.location.query.code;
    if (!password) {
      return this.setState({passwordError: 'Enter new password'});
    } else if(!passwordConfirmation) {
      return this.setState({commonError: 'Enter verification password'});
    } else if(!code) {
      return this.setState({commonError: 'Invalid link'});
    } else {
      const data = {
        'password' :  this.state.password,
        'passwordConfirmation': this.state.passwordConfirmation,
        'code': code
      };

      fetch(base + 'auth/reset-password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => {
        if(res.user && res.jwt) {
          storeToken(res.jwt)
          this.props.loginSuccess(res);
          browserHistory.push('/dashboard');
        } else if(res.error)
          toast.info(res.message, toastConfig);
      });

      this.setState({
        password:'',
        passwordConfirmation: ''
      });
    }
    this.props.loaded();
  }

  render(){
    const { password, passwordConfirmation, passwordError, commonError } = this.state;
    return(
      <div>
        <div className="authpage section innerpage">
          <div className="container">
            <div className="wrapper">
              <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <form onSubmit={this.handleSubmit} method="POST" data-name="Login Form"  className="loginfrm">
                  <h3 className="pt-5 dashed">Reset your password</h3>
                  <div className="section-divider-line"><hr/></div>
                  <div className="pt-2"></div>
                  <Row className="">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="field w-input"
                          id="password"
                          name="password"
                          placeholder="New Password"
                          value={password}
                          onBlur={this.handlePasswordAuth}
                          onChange = {this.handleStateChange}
                          type="password" />
                          {passwordError &&
                            <Alert bsStyle="warning">
                              <strong>{passwordError}</strong>
                            </Alert>
                          }
                      </div>
                    </Col><Col md={8}></Col>
                  </Row>
                  <Row className="pt-2">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="field w-input"
                          id="passwordConfirmation"
                          name="passwordConfirmation"
                          placeholder="Verify New Password"
                          value={passwordConfirmation}
                          onBlur={this.handlePasswordverifyAuth}
                          onChange = {this.handleStateChange}
                          type="password" />
                          {commonError &&
                            <Alert bsStyle="warning">
                              <strong>{commonError}</strong>
                            </Alert>
                          }
                      </div></Col><Col md={8}></Col>
                  </Row>
                  <Row className="pt-4 pb-5">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="btn btn--primary color"
                          type="submit"
                          value="Reset Password Now" />
                      </div></Col><Col md={8}></Col>
                  </Row>
                </form>
                <div className="pt-5 support">
                  <h4>Trouble logging in?</h4>
                  <Link to="/contact"> Talk to our Support</Link>
                </div>
              </Animated>
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

export default connect(null, mapDispatchToProps)(forget);
