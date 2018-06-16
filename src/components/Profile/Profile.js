import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import CardHeader from 'components/Template/card-with-header'
import Button from 'components/Template/customButton';
import { fetchProfile, updateProfile } from 'ducks/profile';
import './Profile.scss';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      plan: '',
      states: '',
      city: '',
      country: '',
      address: '',
      address2: '',
      phoneNumber: '',
      companyName: '',
      profileState: 'edit'
    };
    props.fetchProfile();
  }

  plansList() {
    const planList = this.props.planList;
    const profile = this.props.profile
      ? this.props.profile
      : this.state;
    return (<FormControl componentClass="select" placeholder="select" value={profile
      ? profile.plan
      : null} disabled={true}>
      <option value="select">Select Plan</option>
      {
        planList
          ? planList.map(plan => {
            return <option value={plan._id}>{plan.planName}</option>;
          })
          : null
      }
    </FormControl>);
  }

  componentWillMount() {
    if (this.props.profile)
      this.setProfile(this.props.profile);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.profile != nextProps.profile)
      this.setProfile(nextProps.profile);
  }

  setProfile(profile) {
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName,
      plan: profile.plan,
      states: profile.states,
      city: profile.city,
      country: profile.country,
      address: profile.address,
      address2: profile.address2,
      phoneNumber: profile.phoneNumber,
      companyName: profile.companyName
    });
  }

  updateProfile(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      states,
      city,
      country,
      address,
      address2,
      phoneNumber,
      companyName
    } = this.state;
    let profile = {
      id: this.props.profile._id,
      firstName: firstName,
      lastName: lastName,
      states: states,
      city: city,
      country: country,
      address: address,
      address2: address2,
      phoneNumber: phoneNumber,
      companyName: companyName
    };
    this.props.updateProfile(profile);
    return;
  }

  handleStateChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleEditState(e, value) {
    if (value == 'save') {
      this.setState({ profileState: 'edit' });
      this.updateProfile(e);
    } else {
      this.setState({ profileState: 'save' });
    }
  }

  render() {
    // const errors = validate(this.state.username, this.state.plan);
    const isDisabled = this.state.profileState === 'edit'
      ? true
      : false;
    const profile = this.state;
    const username = this.props.user
      ? this.props.user.username
      : null;

    return (<div className="content fill ">
      <Grid fluid="fluid">
        <Row>
          <Col sm={12}>
            <div className="profile-user-box card-box bg-custom" >
              <Row>
                <Col sm={6}>
                  <span className="pull-left mr-3"><img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="User profile" className="thumb-lg rounded-circle" /></span>

                  <div className=" media-body text-white">
                    <h4 className="mt-1 mb-1 font-18">Username</h4>
                    {/* <FormControl type="text" value={username} placeholder="Enter username" disabled={true} id="username"/> */}
                    <p className="text-light mb-0">Country</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="text-right">
                    <button type="button" className="btn btn-success waves-effect" onClick={(e) => this.handleEditState(e, this.state.profileState)}>
                      <i className="mdi mdi-account-settings-variant mr-1"></i> Edit Profile
                   </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
          <Col md={4}>
            <div className="card-box">
              <h4 className="header-title mt-0 m-b-20">Personal Information</h4>
              <div className="panel-body">
                <hr />
                <div className="text-left">
                  <form>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>First Name :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.firstName} placeholder="" disabled={isDisabled} id="firstName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Last Name :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.lastName} placeholder="" disabled={isDisabled} id="lastName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Phone :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.phoneNumber} placeholder="" disabled={isDisabled} id="phoneNumber" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Email :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.email} placeholder="" disabled={isDisabled} id="email" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Address :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.address} placeholder="" disabled={isDisabled} id="address" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>City :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.city} placeholder="" disabled={isDisabled} id="city" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Country :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.country} placeholder="" disabled={isDisabled} id="country" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <span className="text-muted font-13 p"><strong>Company :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.companyName} placeholder="" disabled={isDisabled} id="companyName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>

                  </form>
                </div>
              </div>
            </div>

          </Col>
          <Col md={8}>
            <Row>
              <Col sm={4}>
                <div className="card-box tilebox-one">
                  <i className="icon-badge float-right text-muted"></i>
                  <h6 className="text-muted text-uppercase mt-0">Plan Type :</h6>
                  <form>
                    <FormGroup className="planUp" controlId="formControlsSelect">
                      <ControlLabel>Plan</ControlLabel>{this.plansList()}
                    </FormGroup>
                  </form>
                </div>
              </Col>
              <Col sm={4}>
              </Col>
              <Col sm={4}>
                <div className=" ">
                  <button type="button"   onClick={() => browserHistory.push('/upgrade')} className="btn btn-block btn-success waves-light waves-effect">Upgrade</button>
                  <div> <br /></div>
                  <button type="button"   onClick={() => browserHistory.push('/billing-details')} className="btn btn-block btn-warning waves-light waves-effect">Billing</button>
                </div>
              </Col>
            </Row>


            <div className="card-box">
              <span>
                <h4 className="header-title mt-2 text-custom">
                  Last Login :  mm-dd-yyyy
                    </h4>
              </span>
            </div>
          </Col>
      </Grid>
      <ToastContainer hideProgressBar={true} />
    </div>);
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user']),
  planList: state.getIn(['plan', 'plan'])
});

const mapDispatchToProps = {
  fetchProfile,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
