import React, {Component} from 'react';
import {Animated} from 'react-animated-css';
import $ from 'jquery';
import Ionicon from 'react-ionicons';
import { css } from 'glamor';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router';
import { toast ,ToastContainer } from 'react-toastify';
function validate(newPassword,verifyPassword, authEmail) {
  return {
    newPassword: newPassword.length === 0,
    verifyPassword: verifyPassword.length === 0,
    authEmail: authEmail===false
  };
}

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000,
  className: 'toast-style'
};


export default class forget extends Component{
  constructor () {
    super();
    this.state = {
      newPassword: '',
      verifyPassword: '',
      authEmail: false
    };

  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
  handlePasswordChange(evt){
    this.setState({newPassword:  evt.target.value});
  }
  handlePasswordverifyChange(evt){
    this.setState({verifyPassword:  evt.target.value});
  }
  handlePasswordAuth(evt){
    if(evt.target.value == ''){
      $('#'+evt.target.id).addClass('has-error');
      toast('Enter your password', toastConfig);
    }else
    {
      $('#'+evt.target.id).removeClass('has-error');
    }
  }
  handlePasswordverifyAuth(evt){
    if(evt.target.value == ''){
      $('#'+evt.target.id).addClass('has-error');
      toast('Enter password again to verify', toastConfig);
    }else
    {
      $('#'+evt.target.id).removeClass('has-error');
      this.setState({
        authEmail: true
      });

    }
  }
  handleSubmit(evt){
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }else{

      evt.preventDefault();
      var token = document.location.href.split('token=')[1];
      const data = {
        'newPassword' :  this.state.newPassword,
        'verifyPassword': this.state.verifyPassword,
        'token': token

      };

      let urls;
      if (process.env.NODE_ENV === 'production')
        urls = `${process.env.REACT_APP_PRODUCTION_URL}auth/reset_password`;
      else if(process.env.NODE_ENV === 'staging')
        urls = `${process.env.REACT_APP_STAGING_URL}auth/reset_password`;
      else
        urls = `${process.env.REACT_APP_DEVELOPMENT_URL}auth/reset_password`;

      axios.post(urls ,data).then(function(response){
        toast.info(response['data']['message'], toastConfig);
      }) .catch(function (error) {
        console.log(error);
        toast.info('Something went wrong..', {
          position: toast.POSITION.LEFT,
          className: css({
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff'
          })
        });
      });

      this.setState({
        newPassword:'',
        verifyPassword: ''
      });
    }
  }
  canBeSubmitted() {
    const errors = validate(
      this.state.newPassword,
      this.state.verifyPassword,
      this.state.authEmail);

    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  render(){
    const errors = validate(
      this.state.newPassword,
      this.state.verifyPassword,
      this.state.authEmail
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const verifyCallback = response => console.log(response);
    return(
      <div>
        <div className="authpage section innerpage">
          <div className="container">
            <div className="wrapper">
              <Animated className="leftwrap center" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST" data-name="Login Form"  className="loginfrm">
                  <h3 className="pt-5 dashed">Reset your password</h3>
                  <div className="section-divider-line"><hr/></div>
                  <div className="pt-2"></div>
                  <Row className="">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="field w-input"
                          id="newPassword"
                          name="newPassword"
                          placeholder="New Password"
                          value={this.state.newPassword}
                          onBlur={this.handlePasswordAuth.bind(this)}
                          onChange = {this.handlePasswordChange.bind(this)}
                          type="password" />
                      </div>
                    </Col><Col md={8}></Col>
                  </Row >
                  <Row className="pt-2">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="field w-input"
                          id="verifyPassword"
                          name="verifyPassword"
                          placeholder="Verify New Password"
                          value={this.state.verifyPassword}
                          onBlur={this.handlePasswordverifyAuth.bind(this)}
                          onChange = {this.handlePasswordverifyChange.bind(this)}
                          type="password" />
                      </div></Col><Col md={8}></Col>
                  </Row>
                  <Row className="pt-4 pb-5">
                    <Col md={4}>
                      <div className="frmcntl">
                        <input className="btn btn--primary color"
                          type="submit"
                          disabled={isDisabled}
                          value="Reset Password Now" />
                      </div></Col><Col md={8}></Col>
                  </Row>
                  <ToastContainer />
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
