import {Component} from 'react';
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

    return (<div className="content fill ">
      <Grid fluid="fluid">
        <Row className="inlineclr">
          <Col md={12}>
            <CardHeader title="Profile Page" content={<div className = "profile-container" > <Row>
                <div className="col-md-4">
                  <img className="profilePic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"/>

                  <FormGroup className="userName">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text" value={username} placeholder="Enter username" disabled={true} id="username"/>
                  </FormGroup>
                </div>

                <div className="col-md-2">
                  <FormGroup className="planUp" controlId="formControlsSelect">
                    <ControlLabel>Plan</ControlLabel>{this.plansList()}
                  </FormGroup>
                </div>
                <div className="col-md-2">
                  <div className="profile-over-button">
                    <Button
                      onClick={() => browserHistory.push('/upgrade')}
                      bsStyle="info"
                      pullRight="pullRight"
                      fill="fill"
                      type="button"
                      icon="cloud-upload"
                      disabled={false}
                    >
                      Upgrade Plan
                    </Button>
                  </div>

                  <div className="profile-over-button">
                    <Button
                      onClick={() => browserHistory.push('/billing-details')}
                      bsStyle="info"
                      pullRight="pullRight"
                      fill="fill"
                      type="button"
                      icon="usd"
                      disabled={false}
                    >
                      Billing
                    </Button>
                  </div>
                </div>
              </Row>

              <form>
                <Row>
                  <div className="col-md-1">
                    First Name
                  </div>
                  <div className="col-md-3">
                    <FormGroup>
                      <FormControl type="text" value={profile.firstName} placeholder="" disabled={isDisabled} id="firstName" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                  <div id="lastnm" className="col-md-1">
                    Last Name
                  </div>
                  <div className="col-md-3">
                    <FormGroup>
                      <FormControl type="text" value={profile.lastName} placeholder="" disabled={isDisabled} id="lastName" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-1">
                    Address
                  </div>
                  <div className="col-md-9">
                    <FormGroup>
                      <FormControl type="text" value={profile.address} placeholder="Enter Address" disabled={isDisabled} id="address" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-10">
                    <FormGroup>

                      <FormControl type="text" value={profile.address2} placeholder="" disabled={isDisabled} id="address2" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>

                </Row>
                <Row>
                  <div className="col-md-2">
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Country</ControlLabel>
                      <FormControl type="text" value={profile.country} placeholder="" disabled={isDisabled} id="country" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                  <div className="col-md-2">
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>State</ControlLabel>
                      <FormControl type="text" value={profile.states} placeholder="" disabled={isDisabled} id="states" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                  <div className="col-md-2">
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>City</ControlLabel>
                      <FormControl type="text" value={profile.city} placeholder="" disabled={isDisabled} id="city" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-2">
                    <FormGroup>
                      <ControlLabel>Phone Number</ControlLabel>
                      <FormControl type="text" value={profile.phoneNumber} placeholder="Enter Phone Number" disabled={isDisabled} id="phoneNumber" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                  <div className="col-md-2">
                    <FormGroup>
                      <ControlLabel>Company Name</ControlLabel>
                      <FormControl type="text" value={profile.companyName} placeholder="Enter Company Name" disabled={isDisabled} id="companyName" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                  <div className="col-md-2">
                    <FormGroup>
                      <ControlLabel>Email Address</ControlLabel>
                      <FormControl type="text" value={profile.email} placeholder="Email Address" disabled={isDisabled} id="emailAddress" onChange={(e) => this.handleStateChange(e)}/>
                    </FormGroup>
                  </div>
                </Row>
                <Row>
                  <div className="edit">
                    <Button bsStyle="info" pullRight="pullRight" fill="fill" type="button" icon={this.state.profileState == 'edit'} onClick={(e) => this.handleEditState(e, this.state.profileState)}>
                      {'Edit/Save'}
                    </Button>
                  </div>
                </Row>
                <div className="clearfix"></div>
              </form>
            </div>}/>
          </Col>
        </Row>
      </Grid>
      <ToastContainer hideProgressBar={true}/>
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
