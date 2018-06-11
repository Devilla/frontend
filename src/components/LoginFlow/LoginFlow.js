import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { updateUser, checkTokenExists } from 'ducks/auth';
import { createProfile } from 'ducks/profile';
import { createPayment } from 'ducks/payment';
import TrailPayment from './TrailPayment';
import './LoginFlow.scss';

class LoginFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      plan:'',
      coupon: '',
      couponError: '',
      cardError: '',
      nameError: ''
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleErrorChange = this.handleErrorChange.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
    this.submitCoupon = this.submitCoupon.bind(this);
  }

  componentWillMount() {
    this.checkLogin();
    this.updateState(this.props.user, this.props.profile, this.props.plan);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps)
      this.updateState(nextProps.user, nextProps.profile, nextProps.plan);
    if(nextProps.profile != this.props.profile)
      browserHistory.push('/dashboard');
  }

  updateState(user, profile, plan) {
    this.setState({
      username: user?user.username:'',
      plan: profile?profile.plan:''
    });
  }

  checkLogin() {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie?JSON.parse(cookie):null;
    if(authToken)
      this.props.checkTokenExists(authToken);
    else
      return window.location.assign(window.location.origin+'/login');
  }

  handleErrorChange(state, stateName) {
    this.setState({[stateName]:state});
  }

  handleStateChange(state, stateName) {
    this.setState({[stateName]:state, couponError: '', cardError: '', nameError: ''});
  }

  submitPayment(data, token) {
    let profile = {};
    profile['user'] = this.props.user._id;
    profile['plan'] = data.plan;
    if(this.state.username != this.props.user.username) {
      let userInfo = {};
      userInfo['id'] = this.props.user._id;
      userInfo['username'] = this.state.username;
      this.props.updateUser(userInfo);
    }
    this.props.createProfile(profile);
    this.props.createPayment(data);
    browserHistory.push('dashboard');
  }

  handleCheckChange(checked, value, state) {
    this.setState({ plan: checked?value:null, couponError: '', cardError: '', nameError: '' })
  }


  submitCoupon(event) {
    event.preventDefault();
    if(!this.state.coupon)
      this.setState({couponError: 'Enter a valid coupon', cardError: '', nameError: ''});
    this.setState({'couponApplied':true});
  }

  render() {
    const { couponError, nameError, cardError, coupon, plan } = this.state;
    const { user, profile } = this.props;
    return (
      <div className="content login-flow">
        <TrailPayment
          couponError={couponError}
          nameError={nameError}
          cardError={cardError}
          coupon={coupon}
          selectedPlan={plan}
          user={user}
          profile={profile}
          plan={plan}
          handleErrorChange={this.handleErrorChange}
          handleCheckChange={this.handleCheckChange}
          handleStateChange={this.handleStateChange}
          handleSubmit={this.submitPayment}
          submitCoupon={this.submitCoupon}
        />
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth','user'])
});

const mapDispatchToProps = {
  updateUser,
  createProfile,
  createPayment,
  checkTokenExists
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFlow);
