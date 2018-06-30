import React, {Component} from 'react';
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
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Button from 'components/Template/customButton';
import {ToastContainer, toast} from 'react-toastify';

import './Profile.scss';
import './Profile.css';
import { fetchProfile, updateProfile } from 'ducks/profile';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
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
            return <option value={plan._id}>{plan.planName}</option>
          })
          : null
      }
    </FormControl>)
  }

  componentWillMount() {
    if (this.props.profile)
      this.setProfile(this.props.profile);
    }
  componentWillReceiveProps(nextProps) {
    if (this.props.profile != nextProps.profile)
      this.setProfile(nextProps.profile)
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

  updateProfile = (e) => {
    this.setState({savedtext: 'Saved'});
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
      id: this.props.profile? this.props.profile._idb : null,
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
      this.setState({profileState: 'edit'});
      this.updateProfile(e);
    } else {
      this.setState({profileState: 'save'});
    }
  }

  render() {
    // const errors = validate(this.state.username, this.state.plan);
    const isDisabled = this.state.profileState == 'edit'
      ? true
      : false;
    const profile = this.state;
    const username = this.props.user
      ? this.props.user.username
      : null;
      
    return (
      <div className="content fill profile-container">
        <Grid fluid={true}>
          <Col sm={12}>
            <div className="profile-user-box card-box" >
              <Row>
                <Col sm={2}>
                  <span className="pull-left mr-3"><img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="User profile" className="thumb-lg rounded-circle" /></span>
                  <div className=" media-body text-white">
                    <h4 className="mt-1 mb-1 font-18">Username</h4>
                    <p className="text-light mb-0">Country</p>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className="card-box tilebox-one text-center  ">
                    <h6 className="text-muted text-uppercase mt-0">Plan Type </h6><h3> {this.props.profile?this.props.profile.plan.name:null}</h3>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="profbtn">
                    <button type="button" onClick={() => browserHistory.push('/upgrade')} className="btn btn-block btn-primary waves-light waves-effect upgrade1">Upgrade</button>
                    <div> <br /></div>
                    <button type="button" onClick={() => browserHistory.push('/billing-details')} className="btn btn-block btn-primary waves-light waves-effect billing1">Billing</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Row>
            <Col md={12}>
              <h4 className="header-title m-b-20">Personal Information</h4>
              <div className="panel-body">
                <hr />
                <div className="text-left">
                  <form>
                    <Row>
                      <Col md={6}>
                        <span className="text-muted font-13 p mt-5"><strong>First Name :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.firstName} autoComplete='given-name' placeholder="First Name" id="firstName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Last Name :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.lastName} autoComplete='family-name' placeholder="Last Name" id="lastName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Phone :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.phoneNumber} autoComplete='tel-national' placeholder="Phone Number" id="phoneNumber" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Email :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.email} autoComplete='email' placeholder="Email Address" id="email" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Address :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.address} autoComplete='address-line2' placeholder="Billing Address" id="address" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Country :</strong> </span>
                        <FormGroup controlId="formControlsSelect">
                          <FormControl componentClass="select" autoComplete='country-name' placeholder="Country Name" value={profile.country} onChange={(e) => this.setState({country: e.target.value})} >
                            <option value={null}>Select Country</option>
                            {this.getCountryRows()}
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>States :</strong> </span>
                        <FormGroup controlId="formfBillinControlsSelect">
                          <FormControl componentClass="select" placeholder="States" autoComplete='address-level1' value={profile.states} onChange={(e) => this.setState({states: e.target.value})}>
                            <option value={null}>Select State</option>
                            {this.getStateRows()}
                          </FormControl>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>City :</strong> </span>
                        <FormGroup controlId="formControlsSelect">
                          <FormControl componentClass="select" autoComplete='address-level2' placeholder="City" value={profile.city} onChange={(e) => this.setState({city: e.target.value})}>
                            <option value={null}>Select City</option>
                            {this.getCityRows()}
                          </FormControl>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <span className="text-muted font-13 p"><strong>Company :</strong> </span>
                        <FormGroup>
                          <FormControl type="text" value={profile.companyName} autoComplete='organization' placeholder="Company Name" id="companyName" onChange={(e) => this.handleStateChange(e)} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}>
                      <div className="text-right save">
                        <button type="button" className="btn btn-primary waves-effect" onClick={this.updateProfile}>
                          <i className="mdi mdi-account-settings-variant mr-1"></i>  {this.props.loading ? ( this.state.savedtext
                          )
                            : 'Save Profile'}

                        </button>
                      </div>
                    </Col>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
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
