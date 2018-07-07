import React , { Component } from 'react';
import './Oauthgenerate.scss';
import { Row,Col } from 'react-bootstrap';
import { validateEmail } from 'services/FormUtils';
import { HelpBlock } from 'react-bootstrap';
import moment from 'moment';
import {
  FormGroup,
  FormControl
} from 'react-bootstrap';


class Oauthpage extends Component {
  constructor() {
    super();
    this.state = {
      clientId: '65790-18281682901',
      clientSecret: 'JSKSGDAGD6RHHUIGR',
      clientname: '',
      errorname: '',
      authorizedOrigin: '',
      redirectURI: '',
      errorName: '',
      errorURI: '',
      errorAuthorizedOrigin: ''

    };
  }

  checkNameBlur = (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorName: 'Enter your Name' }) : (
      (isNaN(value)) ? this.setState({errorName: ''}) : this.setState({ errorName: 'Enter a valid Name' })
    );
  }

  checkAuthorizedOrigin = (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorAuthorizedOrigin: 'Enter Authorized Origins' }) : (
      (isNaN(value)) ? this.setState({errorAuthorizedOrigin: ''}) : this.setState({ errorAuthorizedOrigin: 'Enter a valid Authorized Origin' })
    );
  }

  checkURIBlur = (event)=> {
    const value = event.target.value;
    (value === '')?  this.setState({ errorURI: 'Enter Redirect URI' }) : (
      (isNaN(value)) ? this.setState({errorURI: ''}) : this.setState({ errorURI: 'Enter a valid redirect URI' })
    );
  }

  checkEmailBlur = (event) => {
    const value = event.target.value;
    const isEmailValid = validateEmail(value);
    this.setState({ isEmailValid });
    if (!value)
      this.setState({ errorEmail: 'Email id required' });
    else if (!isEmailValid)
      this.setState({ errorEmail: 'Enter a valid Email id' });
  }

  handleStateChange = (target, value) => {
    this.setState({[target]: value});
  }

  getClientInfoList = () => {
    return (
      <div className="clientinfolist">
        <span className="text h6"> Client ID </span><span className="data">{this.state.clientId}</span> <br/>
        <span className="text h6"> Client Secret </span><span className="data">{this.state.clientSecret}</span> <br/>
        <span className="text h6"> Creation Date </span><span className="data">{moment().format('DD-MM-YYYY HH:mm:ss')}</span>
      </div>
    );
  }


  render() {
    return (

      <div className="oauthgen-container">
        <div className="content">
          <div className="card-box">

            <span className="header-title h4">Client ID for Web application</span>
            <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=>{}}><i className="ml-3 mdi mdi-delete"></i>&nbsp;DELETE</button>
            <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=>{}}><i className="ml-3 mdi mdi-lock-reset"></i>&nbsp;RESET SECRET</button>

            <span className="clearfix"></span>
            <hr/>
            <Row className="mb-4">
              <Col md={12}>
                {this.getClientInfoList()}
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className="text-muted h6">Name</span>
                  <FormControl
                    type="text"
                    bsClass="form-control ml-3"
                    id="clientname"
                    placeholder="example: Ray-101, John doe"
                    required={true}
                    name="clientname"
                    value={this.state.clientname}
                    onBlur={this.checkNameBlur}
                    onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                  />
                  <HelpBlock>
                    <p className="website-error">{this.state.errorName}</p>
                  </HelpBlock>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div  className="inner">
                  <FormGroup className="mb-5">
                    <span className="text-muted  h6">Authorized javascript origins</span>
                    <p className="text-muted "> For use with request from a web browser.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control "
                      id="URI"
                      placeholder="https://www.example.com"
                      onBlur={()=>{}}
                      required={true}
                      name="authorizedOrigin"
                      value={this.state.authorizedOrigin}
                      onBlur={this.checkAuthorizedOrigin}
                      onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{this.state.errorAuthorizedOrigin}</p>
                    </HelpBlock>
                  </FormGroup>
                  <FormGroup>
                    <span className="text-muted h6">Authorized redirect URIs</span>
                    <p className="text-muted "> For use with request from a web server.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control"
                      id="redirectURI"
                      placeholder="https://www.example.com/callback"
                      required={true}
                      name="redirectURI"
                      value={this.state.redirectURI}
                      onBlur={this.checkURIBlur}
                      onChange={(e) => this.handleStateChange(e.target.name, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{this.state.errorURI}</p>
                    </HelpBlock>
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <span type="button" className="btn btn-primary waves-effect saveClient">Save</span>
            </Row>
          </div>
        </div>
      </div>

    );
  }
}


export default Oauthpage;
