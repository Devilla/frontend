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
      countryList: ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica','Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Tonga','Trinidad' ,'Tobago','Tunisia','Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)','Yemen','Zambia','Zimbabwe']
      
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

  getCountryRows =() => {
    return this.state.countryList.map((country,i) => (
      <option key={i} value={country}>
        {country}
      </option>
    ));
  }





  render() {
    const isDisabled = this.state.profileState === 'edit'
      ? true
      : false;
    const profile = this.state;

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
        <Row>
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
                        <FormGroup controlId="formControlsSelect">
                          <FormControl componentClass="select" placeholder="select" disabled={isDisabled} onChange={(e) => this.handleStateChange(e)}>
                            <option value="select"></option>
                            {this.getCountryRows()}
                          </FormControl>
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
                <div className="mt-3 ">
                  <button type="button"   onClick={() => browserHistory.push('/upgrade')} className="btn btn-block btn-info waves-light waves-effect upgrade1">Upgrade</button>
                  <div> <br /></div>
                  <button type="button"   onClick={() => browserHistory.push('/billing-details')} className="btn btn-block btn-info waves-light waves-effect billing1">Billing</button>
                </div>
              </Col>
            </Row>

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
