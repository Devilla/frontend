import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from 'react-bootstrap';
  import { browserHistory } from 'react-router';
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Button from 'components/Template/customButton';
import {ToastContainer, toast} from 'react-toastify';
import './Billing.css';
import Label from 'react-flexible-switch/lib/Label';
import { fetchProfile, updateProfile } from 'ducks/profile';
class BillingFinal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      plan: '',
      state: '',
      address: '',
      phoneNumber: '',
      companyName: '',
      profileState: 'edit'
    };
    props.fetchProfile();
  }

  plansList() {
    const planList = this.props.planList;
    const profile = this.props.profile?this.props.profile:this.state;
    return (
      <FormControl componentClass="select" placeholder="select" value={profile?profile.plan:null} disabled={true} >
        <option value="select">Select Plan</option>
        {planList ?
          planList.map(plan => {
            return <option value={plan._id}>{plan.planName}</option>
          })
        :
          null
        }
      </FormControl>
    )
  }

  componentWillMount(){
    if(this.props.profile)
      this.setProfile(this.props.profile);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.profile != nextProps.profile)
      this.setProfile(nextProps.profile)
  }

  setProfile(profile) {
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName,
      plan: profile.plan,
      state: profile.state,
      address: profile.address,
      phoneNumber: profile.phoneNumber,
      companyName: profile.companyName
    });
  }

  updateProfile(e) {
    e.preventDefault();
    const { firstName, lastName, state, address, phoneNumber, companyName } = this.state;
    let profile = {
      id: this.props.profile._id,
      firstName: firstName,
      lastName: lastName,
      state: state,
      address: address,
      phoneNumber: phoneNumber,
      companyName: companyName,
    };
    this.props.updateProfile(profile);
    return;
  }

  handleStateChange(e) {
    this.setState({[e.target.id]:e.target.value});
  }

  handleEditState(e, value) {
    if(value == 'save') {
      this.setState({profileState: 'edit'});
      this.updateProfile(e);
    } else {
      this.setState({profileState: 'save'});
    }
  }


     render(){
        return (
            <div className="content fill backgroundclr">
            <Grid fluid="fluid" >
              <Row className="inlineclr">
                <Col md={30}>
                  <CardHeader title="Billing" content={
                      <div className="Billing-container ">
                      <Row>
                      <div className="col-md-4">                                   
                         <strong> Username</strong>
                      </div>                        
                     <div className="col-md-2" >
                       <FormGroup className="planUp" controlId="formControlsSelect">
                          <ControlLabel>Plan</ControlLabel>{this.plansList()}
                        </FormGroup>  
                      </div>
                  <div className="col-md-2">
                <div className="profile-over-button">
                    <Button onClick={browserHistory.push('/Upgrade')} 
                      bsStyle="info"
                      pullRight
                      fill
                      type="button"
                      icon="cloud-upload"
                      disabled={false}
                      >Upgrade
                    </Button>
                    </div>
                    <div className="profile-over-button" >
                    <Button onClick={() => browserHistory.push('/Billing')}
                      bsStyle="info"
                      pullRight
                      fill
                      type="button"
                      icon="usd"
                      disabled={false}
                      >Billing /Payment Details
                    </Button>
                  </div>
                    </div>
                      </Row>
                      <Row>
                          <div className="col-md-2">
                                Joined: Momth, Year
                          </div> 
                          <div className="col-md-2">
                                Billing Cycle: Monthly/Yearly
                          </div>
                          <div className="col-md-2">
                                <Button type="info">Change</Button>
                          </div>
                      </Row>
                      <Row>
                          <div className="col-md-4">
                                Next Payment Due Date: MM/DD/YYYY
                          </div>
                           <div className="col-md-2">
                            Payment Method: 
                            <Button type="info" pullRight icon="credit-card" disabled={true}></Button>
                          </div>

                          <div className="col-md-2">
                        <FormGroup >
                          <FormControl
                            type="text"
                            value=""
                            placeholder="VISA 4*** **** **** 2006"
                            id="Visanumber"
                            onChange={(e) => this.handleStateChange(e)}
                          />
                        </FormGroup>
                      </div>

                      </Row>
                      <Row>
                      <table>
                      <tr>
                          <td><strong> Billing Date</strong></td>
                          <td><strong> Amount </strong></td>
                          <td> <strong>Receipt</strong> </td>
                     </tr>
                     <tr>
                          <td> Month-Date-Year</td>
                          <td> $ </td>
                          <td>
                            <tr>
                     <td id="noBorder">
                     <Button onClick={() => {}} 
                      pullRight
                      icon="file"
                      disabled={false}
                      >
                    </Button> 
                    </td>
                    <td id="noBorder">
                    <Button  onClick={() => {}} 
                      icon="cloud-download"
                      disabled={false}
                      >
                    </Button> 

                      </td>
                    </tr>  
                          </td>
                     </tr>
                     <tr>
                          <td> Month-Date-Year</td>
                          <td> $ </td>
                          <td>
                              <tr>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                   
                                    icon="file"
                                    disabled={false}
                                  >
                                  </Button>
                                </td>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                   
                                    icon="cloud-download"
                                    disabled={false}
                                  >
                                  </Button>

                                </td>
                              </tr>
                            </td>



                     </tr>
                     <tr>
                          <td> Month-Date-Year</td>
                          <td> $ </td> 
                          <td>
                              <tr>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                   
                                    icon="file"
                                    disabled={false}
                                  >
                                  </Button>
                                </td>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                  
                                    icon="cloud-download"
                                    disabled={false}
                                  >
                                  </Button>

                                </td>
                              </tr>
                            </td>

                     </tr>
                     <tr>
                          <td> Month-Date-Year</td>
                          <td> $ </td>
                          <td>
                              <tr>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                    
                                    icon="file"
                                    disabled={false}
                                  >
                                  </Button>
                                </td>
                                <td id="noBorder">
                                  <Button onClick={() => { }}
                                    
                                    icon="cloud-download"
                                    disabled={false}
                                  >
                                  </Button>

                                </td>
                              </tr>
                            </td>
                     </tr>
                     </table>
                     </Row>

                       <div className="col-md-2 marginTop" >
                                <Button icon="share-alt" type="info" >Back To Profile</Button>
                          </div>
                     

                    </div>
                    }/>
            </Col>
          </Row>
        </Grid>

        </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(BillingFinal);