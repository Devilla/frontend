import React, { Component } from 'react';
import { connect}  from 'react-redux';
import { browserHistory } from 'react-router';
import Loading from 'react-loading-animation';
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
      state: '',
      city: '',
      country: '',
      address: '',
      phoneNumber: '',
      companyName: '',
      profileState: 'edit',
      image: '',
      countryList: [],
      savedtext: 'Save Profile'
    };
  }

  componentWillMount() {
    if (this.props.profile)
      this.setProfile(this.props.profile);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.profile != nextProps.profile)
      this.setProfile(nextProps.profile);
  }

  setProfile = (profile) => {
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName,
      plan: profile.plan,
      state: profile.state,
      city: profile.city,
      country: profile.country,
      address: profile.address,
      phoneNumber: profile.phoneNumber,
      companyName: profile.companyName,
      image: profile.image
    });
  }

  updateProfile = (e) => {
    this.setState({savedtext: 'Saved'});
    e.preventDefault();
    const {
      firstName,
      lastName,
      state,
      city,
      country,
      address,
      phoneNumber,
      companyName,
      image
    } = this.state;
    let profile = {
      id: this.props.profile? this.props.profile._id : null,
      firstName: firstName,
      lastName: lastName,
      state: state,
      city: city,
      country: country,
      address: address,
      phoneNumber: phoneNumber,
      companyName: companyName,
      image: image
    };
    return this.props.updateProfile(profile);
  }

  handleStateChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json')
      .then(res => res.json())
      .then(res => this.setState({countryList : res.Countries}));
    window.scrollTo(0,0);
  }

  getCountryRows = () => {
    return  this.state.countryList.map((data,i)=> (
      <option key={i}  value={data.CountryName}>
        {data.CountryName}
      </option>
    ));
  }

  getStateRows = () => {
    let countryList = this.state.countryList.filter(country => country.CountryName === this.state.country);
    return countryList.map(country => {
      return country.States.map((state, i) => {
        return <option key={i}  value={state.StateName}>
          {state.StateName}
        </option>;
      });
    });
  }

  getCityRows = () => {
    let countryList = this.state.countryList.filter(country => country.CountryName === this.state.country);
    let stateList = countryList.length?countryList[0].States.filter(state => state.StateName === this.state.state):[];
    return stateList.map(state => {
      return state.Cities.map((city, i) => {
        return <option key={i}  value={city}>
          {city}
        </option>;
      });
    });
  }

  showPopupOne = () => {
    return (
      <div>
        <Row className="givemeborder justify-content-around">
          <Col md={6} className="pauseContent">
            <button type="button" className="btn btn-primary waves-effect">
              <i className="mdi mdi-account-minus mr-1"></i>Pause Account
            </button>
            <div className='content'>
              <h3>Recommended:</h3>
              <p>Indefinitely deactivates your account till you activate it again.</p><br/>
              <p>You will be charged just $1.8 month to safeguard your data in our secure vaults</p>
            </div>
          </Col>
          <Col md={6} className="deleteContent">
            <button type="button" className="btn btn-primary waves-effect" >
              <i className="mdi mdi-account-remove mr-1"></i>Delete Account
            </button>
            <div className='content'>
              <h3>Warning: </h3>
              <p>Deletes all your data & saved settings. This action is irreversible </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <button type="button" className="btn btn-outline-primary waves-effect submitaccount">Submit </button>
        </Row>
        <Row className="justify-content-center mb-3 text-desc">An email containing one time code has been sent to your registered email.</Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <input type="number" placeholder="Enter Code here" className="inputcode"/>
          </Col>
          <Col>
            <button type="button" className="btn btn-outline-primary waves-effect confirmaccount" data-dismiss="modal" data-toggle="modal" data-target="#feedbackmodal">Confirm Action </button>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const profile = this.state;
    const { user } = this.props;
    return (
      <Loading className="transition-item profile-transition-container" style={{width: '10%', height: '700px'}} strokeWidth='2' isLoading={!user || !profile}>
        <div className="content fill profile-container">
          <Grid fluid={true}>
            <Col sm={12}>
              <div className="profile-user-box card-box" >
                <Row>
                  <Col sm={2}>
                    <span className="pull-left mr-3"><img src={profile.image?profile.image:'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'} alt="User profile" className="thumb-lg rounded-circle" /></span>
                    <div className=" media-body text-white">
                      <h4 className="mt-1 mb-1 font-18">Username</h4>
                      <p className="text-light mb-0">Country</p>
                    </div>
                  </Col>
                  <Col sm={8}>
                    <div className="card-box tilebox-one text-center  ">
                      <h6 className="text-muted text-uppercase mt-0">Plan Type </h6><h3> {this.props.profile && this.props.profile.plan?this.props.profile.plan.name:null}</h3>
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
                            <FormControl type="number" value={profile.phoneNumber} autoComplete='tel-national' placeholder="Phone Number" id="phoneNumber" onChange={(e) => this.handleStateChange(e)} />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <span className="text-muted font-13 p"><strong>Email :</strong> </span>
                          <FormGroup>
                            <FormControl type="text" value={user.email} autoComplete='email' placeholder="Email Address" id="email" disabled />
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
                            <FormControl componentClass="select" placeholder="States" autoComplete='address-level1' value={profile.state} onChange={(e) => this.setState({state: e.target.value})}>
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
                      <Col md={12} className="profile-buttons">
                        <div className="text-right save">
                          <button type="button" className="btn btn-primary waves-effect" onClick={this.updateProfile}>
                            <i className="mdi mdi-account-settings-variant mr-1"></i>  {this.props.loading ? ( this.state.savedtext
                            )
                              : 'Save Profile'}

                          </button>
                          <button type="button" className="btn btn-primary waves-effect" data-toggle="modal" data-target="#deletemodal">
                            <i className="mdi mdi-settings mr-1"></i>More Options
                          </button>
                        </div>
                      </Col>
                    </form>
                    <div className="modal fade show-modal" id="deletemodal" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content align-modal">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className   ="modal-title">Your Account</h4>
                          </div>
                          <div className="modal-body">
                            {this.showPopupOne()}
                          </div>
                          <div className="modal-footer">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
          <ToastContainer hideProgressBar={true} />
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user']),
  loading: state.getIn(['loading', 'state'])
});

const mapDispatchToProps = {
  fetchProfile,
  updateProfile
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);
