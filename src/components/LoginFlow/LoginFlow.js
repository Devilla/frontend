import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';

import TrailPayment from './TrailPayment';
import { updateUser, checkTokenExists, validateCoupon, clearCouponError } from 'ducks/auth';
import { createProfile, updateProfile } from 'ducks/profile';
import { load, loaded } from 'ducks/loading';
import { createPayment } from 'ducks/payment';
import { Spinner } from 'components';

import './LoginFlow.scss';

import { store } from 'App.js';

class LoginFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowStep: 0,
      username: '',
      stripeToken: {}
    };
  }

  componentWillMount() {
    this.checkLogin();
    this.updateState(this.props.user, this.props.selectedPlan);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps)
      this.updateState(nextProps.user, nextProps.selectedPlan);
    if(nextProps.couponDetails != this.props.couponDetails)
      this.props.clearSelectedPlan(nextProps.couponDetails);
  }

  updateState = (user, plan) => {
    this.setState({
      username: user?user.username:'',
      plan: plan?plan:''
    });
  }

  checkLogin = () => {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie?JSON.parse(cookie):null;
    if(authToken)
      store.dispatch(checkTokenExists(authToken));
    else
      return browserHistory.push('/login');
  }

  handleErrorChange = (state, stateName) => {
    this.setState({[stateName]:state});
  }

  handleStateChange = (state, stateName) => {
    if(stateName === 'coupon' && this.props.coupon)
      this.props.clearCoupon();
    this.setState({[stateName]:state});
  }

  submitPayment = (data) => {
    let profile = {
      plan: data.plan,
      uniqueVisitorQouta: Number(data.plan.description),
      uniqueVisitors: 0,
      uniqueVisitorsQoutaLeft: Number(data.plan.description)
    };

    const propsProfile = this.props.profile;

    if(propsProfile) {
      profile['id'] = propsProfile._id;
      profile['route'] = true;
    } else {
      profile['user'] = this.props.user._id;
    }

    if(this.state.username != this.props.user.username) {
      let userInfo = {};
      userInfo['id'] = this.props.user._id;
      userInfo['username'] = this.state.username;
      this.props.updateUser(userInfo);
    }

    const update = propsProfile?true:false;
    this.props.createPayment(data, profile, update);
  }

  submitCoupon = (event) => {
    event.preventDefault();
    if(!this.state.coupon)
      return this.setState({couponError: 'Enter a valid coupon', cardError: '', nameError: ''});
    this.props.validateCoupon(this.state.coupon);
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      coupon: '',
      couponError: '',
      cardError: '',
      nameError: ''
    });
    this.props.clearCouponError();
  }

  couponProceed = () => {
    const { user, couponDetails, selectedPlan } = this.props;
    if(!this.props.selectedPlan)
      return this.setState({cardError: 'Select a plan'});
    const data = {
      amount: selectedPlan.amount,
      paymentProvider: null,
      paymentType: null,
      coupon: couponDetails,
      user: user._id,
      plan: selectedPlan
    };
    return this.submitPayment(data);
  }

  render() {
    const { couponError, nameError, cardError } = this.state;
    const { user, profile, couponRequestError, selectedPlan, load, loaded } = this.props;
    const couponDetails = this.props.couponDetails || this.props.coupon;
    return (
      <div className="content login-flow">
        {profile?
          <TrailPayment
            load={load}
            loaded={loaded}
            couponError={couponError || couponRequestError}
            nameError={nameError}
            cardError={cardError}
            couponDetails={couponDetails}
            user={user}
            profile={profile}
            plan={selectedPlan}
            handleErrorChange={this.handleErrorChange}
            handleStateChange={this.handleStateChange}
            handleSubmit={this.submitPayment}
            submitCoupon={this.submitCoupon}
            couponProceed={this.couponProceed}
          />
          :
          <Spinner loading={true} />
        }
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth','user']),
  couponDetails: state.getIn(['auth', 'coupon']),
  couponRequestError: state.getIn(['auth', 'couponError'])
});

const mapDispatchToProps = {
  load,
  loaded,
  updateUser,
  createProfile,
  updateProfile,
  createPayment,
  validateCoupon,
  clearCouponError
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFlow);
