import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';

import TrailPayment from './TrailPayment';
import { updateUser, checkTokenExists, validateCoupon, clearCouponError } from 'ducks/auth';
import { createProfile, updateProfile } from 'ducks/profile';
import { createPayment } from 'ducks/payment';
import { Spinner } from 'components';

import './LoginFlow.scss';

import { store } from 'index.js';

class LoginFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowStep: 0,
      username: '',
      plan:'',
      stripeToken: {}
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.handleErrorChange = this.handleErrorChange.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
    this.submitCoupon = this.submitCoupon.bind(this);
    this.couponProceed = this.couponProceed.bind(this);
  }

  componentWillMount() {
    this.checkLogin();
    this.updateState(this.props.user, this.props.profile, this.props.plan);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props != nextProps)
      this.updateState(nextProps.user, nextProps.profile, nextProps.plan, nextProps.coupon);
    if(nextProps.profile != this.props.profile && nextProps.profile.plan)
      browserHistory.push('/dashboard');
    if(nextProps.couponDetails != this.props.couponDetails)
      this.props.clearSelectedPlan(nextProps.couponDetails);
  }

  updateState(user, profile) {
    this.setState({
      username: user?user.username:'',
      plan: profile?profile.plan:''
    });
  }

  checkLogin() {
    const cookie = localStorage.getItem('authToken');
    const authToken = cookie?JSON.parse(cookie):null;
    if(authToken)
      store.dispatch(checkTokenExists(authToken));
    else
      return window.location.assign(window.location.origin+'/login');
  }

  handleErrorChange(state, stateName) {
    this.setState({[stateName]:state});
  }

  handleStateChange(state, stateName) {
    this.setState({[stateName]:state});
  }

  submitPayment(data) {
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

  handleCheckChange(checked, value) {
    this.setState({ plan: checked?value:null, couponError: '', cardError: '', nameError: '' });
  }


  submitCoupon(event) {
    event.preventDefault();
    if(!this.state.coupon)
      return this.setState({couponError: 'Enter a valid coupon', cardError: '', nameError: ''});
    this.props.validateCoupon(this.state.coupon);
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      plan:'',
      coupon: '',
      couponError: '',
      cardError: '',
      nameError: ''
    });
    this.props.clearCouponError();
  }

  couponProceed(event) {
    event.preventDefault();
    const { plan } = this.state;
    const { user, couponDetails } = this.props;
    if(!plan)
      return this.setState({cardError: 'Select a plan'});
    const data = {
      amount: plan.amount,
      paymentProvider: null,
      paymentType: null,
      coupon: couponDetails,
      user: user._id,
      plan: plan
    };
    return this.submitPayment(data);
  }

  render() {
    const { couponError, nameError, cardError, coupon, plan } = this.state;
    const { user, profile, couponDetails, couponRequestError } = this.props;
    return (
      <div className="content login-flow">
        {profile?
          <TrailPayment
            couponError={couponError || couponRequestError}
            nameError={nameError}
            cardError={cardError}
            couponDetails={couponDetails}
            coupon={coupon}
            selectedPlan={plan?plan:''}
            user={user}
            profile={profile}
            plan={plan}
            handleErrorChange={this.handleErrorChange}
            handleCheckChange={this.handleCheckChange}
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
  updateUser,
  createProfile,
  updateProfile,
  createPayment,
  validateCoupon,
  clearCouponError
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFlow);
