import React, { Component } from 'react';
import { connect }  from 'react-redux';
import Loading from 'react-loading-animation';
import ImageUploader from 'react-images-upload';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

import { forgotPassword } from 'ducks/auth';
import { Modal } from 'components';
import { fetchProfile, updateProfile, submitAccountRequest, submitAccountOtp, clearResponse } from 'ducks/profile';
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
      savedtext: 'Save',
      changePassword : false,
      profileSetting : true,
      otpCode: '',
      errorOtp: '',
      mailSend: false
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
      companyName: companyName
    };
    return this.props.updateProfile(profile);
  }

  handleStateChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    window.scrollTo(0,0);
    if(this.props.user && this.props.user.status)
      this.setState({accountOption: this.props.user.status});
  }

  getCountryRows = () => {
    return  this.state.countryList.map((data,i)=> (
      <option key={i}  value={data.CountryName}>
        {data.CountryName}
      </option>
    ));
  }

  selectAccountOption = (option) => {
    this.setState({accountOption: option, error: false, mailSend: false});
  }

  submitRequest = () => {
    if(!this.state.accountOption)
      return this.setState({ error: true });
    this.props.submitAccountRequest(this.state.accountOption);
    this.setState({mailSend: true});
  }

  submitOtpRequest = () => {
    if(!this.state.otpCode)
      return this.setState({ errorOtp: true });
    this.props.submitAccountOtp({otpCode: this.state.otpCode, type: this.state.accountOption});
  }

  showPopupOne = () => {
    const { accountOption, error, mailSend } = this.state;
    const { user, otp_response } = this.props;

    return (
      <div>
        <Row className="account-pause-content justify-content-around">
          <ul className="nav justify-content-center" style={{width: '100%'}}>
            <li className="nav-item" style={{width: '50%', textAlign: 'center'}} onClick={() => this.selectAccountOption(user && user.status == 'paused'?'running':'pause')}>
              <a className={`nav-link ${(accountOption == 'pause' || accountOption == 'running') ?'active active1':'nav-link-pause'}`}><i className="mdi mdi-account-minus mr-2"></i>{user && user.status == 'paused'?'Resume':'Pause'} Account</a>
            </li>
            <li className="nav-item" style={{width: '50%', textAlign: 'center'}} onClick={() => this.selectAccountOption('delete')}>
              <a className={`nav-link ${(accountOption == 'delete') ?'active active2':'nav-link-delete'}`}><i className="mdi mdi-account-remove mr-2"></i>Delete Account!</a>
            </li>
          </ul>
          {(accountOption == 'pause' || accountOption == 'running') &&
            <Col md={12} className="pauseContent">
              <div className='content'>
                <h3 className="pause-account-heading">Recommended:</h3>
                <p>Indefinitely deactivates your account till you activate it again.</p><br/>
                <p>You will be charged just $3 per month to safeguard your data in our secure vaults.</p>
              </div>
            </Col>
          }
          {accountOption == 'delete' &&
            <Col md={12} className="deleteContent">
              <div className='content'>
                <h3 className="delete-account-heading">Warning! </h3>
                <p className="delete-account-content">Deletes all your data & saved settings. This action is irreversible! </p>
              </div>
            </Col>
          }
        </Row>
        <Row className="justify-content-center mb-3">
          <button type="button" className={`btn btn-outline-primary waves-effect submitaccount ${error?'error-border':''}`} onClick={this.submitRequest}>Submit </button>
        </Row>
        {mailSend &&
          <div>
            <Row className="justify-content-center mb-3 text-desc">An email containing one time code has been sent to your registered email.</Row>
            <Row className="justify-content-center">
              <Col md={4}>
                <input type="number" id="otpCode" placeholder="Enter Code here" className="inputcode" onChange={this.handleStateChange} />
                <HelpBlock>
                  <p className="website-error">{otp_response === false?'Invalid OTP':''}</p>
                </HelpBlock>
              </Col>
              <Col>
                <button type="button" className="btn btn-outline-primary waves-effect confirmaccount" onClick={this.submitOtpRequest}>Confirm Action</button>
              </Col>
            </Row>
          </div>
        }
      </div>
    );
  }

  showProfile() {
    this.setState({profileSetting: true, changePassword: false});
  }

  changePassword() {
    this.setState({profileSetting: false, changePassword: true});
  }

  sendLink = () => {
    const data = {
      'email': this.props.user.email
    };
    this.props.forgotPassword(data);
  }

  componentWillUnmount() {
    this.props.clearResponse();
  }

  onDrop = (image) => {
    var reader = new window.FileReader();
    reader.readAsDataURL(image[0]);
    reader.onload = () => {
      const updatedProfile = {
        id: this.props.profile._id,
        image: reader.result
      };
      this.setState({image: reader.result});
      this.props.updateProfile(updatedProfile);
    };
  }

  render() {
    const profile = this.state;
    const { user } = this.props;

    return (
      <Loading className="transition-item profile-transition-container" style={{width: '10%', height: '700px'}} strokeWidth='2' isLoading={!user || !profile}>

        <div className="fill profile-container">
          <Col md={2}>
            <div className={this.state.profileSetting?'content-tabs active mt-0 mr-3 ml-3 profile-tabs':'content-tabs mt-0 mr-3 ml-3 profile-tabs'} onClick={()=>this.showProfile()} >My Profile</div>
            <div className={this.state.changePassword?'content-tabs active mt-0 mr-3 ml-3 profile-tabs':'content-tabs mt-0 mr-3 ml-3 profile-tabs'} onClick={()=>this.changePassword()} >Change Password</div>
            <div className="content-tabs mt-0 mr-3 ml-3 profile-tabs" data-toggle="modal" data-target="#deletemodal">More Options</div>
          </Col>

          <Col md={10} className="profile-content-contaier">
            {this.state.changePassword?
              <Grid className="change-password-container">
                <Col sm={8} style={{maxWidth: '1069px'}}>
                  <div className="profile-user-box card-box" >
                    <Row>
                      <div className="col-md-8" style={{fontSize: '13px'}}>
                        <div className="intelli-details clearfix">
                          <h5 className="title-h4">Change Password</h5>
                          <div>
                            <a onClick={this.sendLink}>Send Reset Password Link</a>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Grid>
              :''
            }

            {this.state.profileSetting?
              <Grid fluid={true}>
                <Row>
                  <Col sm={7} className="profile-content-col-one">
                    <div className="profile-user-box" >
                      <Row>
                        <Col sm={2}>
                          <span className="pull-left">
                            <img src={profile.image?profile.image:'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'} alt="User profile" className="rounded-circle" />
                            <ImageUploader
                              withIcon={false}
                              buttonText={<i className="fa fa-camera"></i>}
                              onChange={this.onDrop}
                              imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif', '.tif', '.tiff', '.jif', '.jfif', '.jp2', '.jpx', '.j2k', '.j2c', '.fpx', '.pcd']}
                              maxFileSize={52428800}
                              singleImage={true}
                            />
                          </span>
                          <div className=" media-body text-white">
                            <h4 className="mt-2 mb-1 font-16">{user.username}</h4>
                            <p className="text-dark mb-0">{profile && profile.country?profile.country:''}</p>
                          </div>
                        </Col>
                        <Col sm={8}>
                          <div className="card-box tilebox-one text-center  ">
                            <h6 className="text-muted text-uppercase mt-0">Plan Type </h6><h3> {this.props.profile && this.props.profile.plan ?this.props.profile.plan.name:null}</h3>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md={7} className="profile-content-col-one mt-3" style={{ background: '#fff', borderRadius:'5px' }}>
                    <div className="panel-body">
                      <div>
                        <form>
                          <Row className="p-3">
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
                          <Row className="p-3">
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
                          <Row className="p-3">
                            <Col md={6}>
                              <span className="text-muted font-13 p"><strong>Address :</strong> </span>
                              <FormGroup>
                                <FormControl type="text" value={profile.address} autoComplete='address-line2' placeholder="Billing Address" id="address" onChange={(e) => this.handleStateChange(e)} />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Col md={12} className="profile-buttons">
                            <div className="text-right save" style={{marginTop: '0px', marginLeft: '-26px', borderRadius: '8px'}}>
                              <button type="button" className="btn btn-primary waves-effect mb-4" onClick={this.updateProfile}>
                                {this.props.loading ? ( this.state.savedtext
                                )
                                  : 'Save'}

                              </button>
                            </div>
                          </Col>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Grid>
              :''
            }
          </Col>

          <Modal
            id='deletemodal'
            title='Your Account'
            content={this.showPopupOne()}
            style={
              {
                alignModalStyle: {
                  top: '100px'
                }
              }
            }
          />
        </div>
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  user: state.getIn(['auth', 'user']),
  loading: state.getIn(['loading', 'state']),
  otp_response: state.getIn(['profile', 'otp_response'])
});

const mapDispatchToProps = {
  fetchProfile,
  updateProfile,
  submitAccountRequest,
  submitAccountOtp,
  clearResponse,
  forgotPassword
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);
