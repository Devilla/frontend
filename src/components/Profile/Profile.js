import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { browserHistory } from 'react-router';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
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
      profileState: 'edit',
      countryList: [],
      selectedCountry: '',
      selectedState: '',
      selectedCity: ''

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
          ? planList.map((plan, i) => {
            return <option key={i} value={plan._id}>{plan.planName}</option>;
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

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json')
      .then(res => res.json())
      .then(res => this.setState({countryList : res.Countries}));
  }

  getCountryRows = () => {
    return  this.state.countryList.map((data,i)=> (
      <option key={i}  value={data.CountryName}>
        {data.CountryName}
      </option>
    ));
  }


  getStateRows = () => {
    let countryList = this.state.countryList.filter(country => country.CountryName === this.state.selectedCountry);
    return countryList.map(country => {
      return country.States.map((state, i) => {
        return <option key={i}  value={state.StateName}>
          {state.StateName}
        </option>;
      });
    });
  }


  getCityRows = () => {
    
  }


  render() {
    // const isDisabled = this.state.profileState === 'edit'
    //   ? true
    //   : false;
    const profile = this.state;


    return (<div className="content fill ">
      <Grid fluid="fluid">
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
                <div className="">
                  <button type="button"   onClick={() => browserHistory.push('/upgrade')} className="btn btn-block btn-info waves-light waves-effect upgrade1">Upgrade</button>
                  <div> <br /></div>
                  <button type="button"   onClick={() => browserHistory.push('/billing-details')} className="btn btn-block btn-info waves-light waves-effect billing1">Billing</button>
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
                        <FormControl type="text" value={profile.firstName} placeholder=""   id="firstName" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Last Name :</strong> </span>
                      <FormGroup>
                        <FormControl type="text" value={profile.lastName} placeholder=""   id="lastName" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Phone :</strong> </span>
                      <FormGroup>
                        <FormControl type="text" value={profile.phoneNumber} placeholder=""   id="phoneNumber" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Email :</strong> </span>
                      <FormGroup>
                        <FormControl type="text" value={profile.email} placeholder=""   id="email" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Address :</strong> </span>
                      <FormGroup>
                        <FormControl type="text" value={profile.address} placeholder=""   id="address" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Country :</strong> </span>
                      <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="select"   onChange={(e) => {this.setState({selectedCountry: e.target.value});}} >
                          {this.getCountryRows()}
                        </FormControl>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>States :</strong> </span>
                      <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="select"    onChange={(e) => {this.setState({selectedState: e.target.value});}}>
                          <option value="select"></option>
                          {this.getStateRows()}
                        </FormControl>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>City :</strong> </span>
                      <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="select"   onChange={(e) => this.handleStateChange(e)} />
                        <option value="select"> </option>
                        {this.getCityRows()}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span className="text-muted font-13 p"><strong>Company :</strong> </span>
                      <FormGroup>
                        <FormControl type="text" value={profile.companyName} placeholder=""   id="companyName" onChange={(e) => this.handleStateChange(e)} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Col md={12}>
                    <div className="text-right">
                      <button type="button" className="btn btn-success waves-effect" onClick={(e) => this.handleEditState(e, this.state.profileState)}>
                        <i className="mdi mdi-account-settings-variant mr-1"></i> Save Profile
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
