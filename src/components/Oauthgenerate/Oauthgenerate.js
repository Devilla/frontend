import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, HelpBlock, FormControl } from 'react-bootstrap';
import moment from 'moment';
import { browserHistory }  from 'react-router';

import { validateEmail } from 'services/FormUtils';
import { updateClientOauth, deleteClientOauth } from 'ducks/oauth';
import './Oauthgenerate.scss';

class Oauthpage extends Component {
  constructor() {
    super();
    this.state = {
      clientId: '',
      secret: '',
      clientname: '',
      errorname: '',
      origin: '',
      redirectUri: '',
      errorName: '',
      errorURI: '',
      errorAuthorizedOrigin: ''
    };
  }

  componentDidMount() {
    if(this.props.oauth && this.props.oauth.size != 0)
      this.setOauth(this.props.oauth);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.oauth != this.props.oauth)
      this.setOauth(nextProps.oauth);
  }

  setOauth = (oauth) => {
    this.setState({
      clientId: oauth.clientId,
      secret: oauth.secret,
      name: oauth.name,
      origin: oauth.origin,
      redirectUri: oauth.redirectUri
    });
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
    this.setState({
      [target]: value,
      errorName: '',
      errorURI: '',
      errorAuthorizedOrigin: ''
    });
  }

  submitClientOauth = () => {
    const { name, redirectUri, origin } = this.state;
    let { oauth } = this.props;
    /* eslint-disable */
    var re = /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    /* eslint-disable */

    if(!name)
      return this.setState({errorName: 'Enter a valid name'});
    else if(!origin || !re.test(origin))
      return this.setState({errorAuthorizedOrigin: 'Enter a valid Authorized Origin'});
    else if(!redirectUri || !re.test(redirectUri))
      return this.setState({errorURI: 'Enter a valid Redirect URI'});

    oauth['id'] = oauth._id;
    oauth['name'] = name;
    oauth['redirectUri'] = redirectUri;
    oauth['origin'] = origin;
    delete oauth['_id'];
    this.props.updateClientOauth(oauth);
  }

  deleteClientOauth = (id) => {
    this.props.deleteClientOauth(id);
    browserHistory.push('oauthshow');
  }

  render() {
    const {
      clientId,
      name,
      secret,
      errorName,
      origin,
      errorAuthorizedOrigin,
      redirectUri,
      errorURI
    } = this.state;
    const { oauth } = this.props;
    return (
      <div className="oauthgen-container">
        <div className="content">
          <div className="card-box">
            <span className="header-title h4">Client ID for Web application</span>
            <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=> this.deleteClientOauth(oauth._id)}><i className="ml-3 mdi mdi-delete"></i>&nbsp;DELETE</button>
            {/* <button type="button" className="btn btn-outline-primary  waves-light waves-effect pl-1 float-right h6" onClick={()=>{}}><i className="ml-3 mdi mdi-lock-reset"></i>&nbsp;RESET SECRET</button> */}

            <span className="clearfix"></span>
            <hr/>
            <Row className="mb-4">
              <Col md={12}>
                <div className="clientinfolist">
                  <span className="text h6"> Client ID </span><span className="data">{clientId}</span> <br/>
                  <span className="text h6"> Client Secret </span><span className="data">{secret}</span> <br/>
                  <span className="text h6"> Creation Date </span><span className="data">{moment(oauth.createdAt).format('DD-MM-YYYY')}</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <span className=" h6">Name</span>
                  <p className="text-muted "> Enter clients name.</p>
                  <FormControl
                    type="text"
                    bsClass="form-control"
                    id="name"
                    placeholder="example: Ray-101, John doe"
                    required={true}
                    name="clientname"
                    defaultValue={name}
                    onBlur={this.checkNameBlur}
                    onChange={(e) => this.handleStateChange(e.target.id, e.target.value)}
                  />
                  <HelpBlock>
                    <p className="website-error">{errorName}</p>
                  </HelpBlock>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div  className="inner">
                  <FormGroup >
                    <span className="  h6">Authorized javascript origins</span>
                    <p className="text-muted "> For use with request from a web browser.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control "
                      id="origin"
                      placeholder="https://www.example.com"
                      onBlur={()=>{}}
                      required={true}
                      name="origin"
                      defaultValue={origin}
                      onBlur={this.checkAuthorizedOrigin}
                      onChange={(e) => this.handleStateChange(e.target.id, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{errorAuthorizedOrigin}</p>
                    </HelpBlock>
                  </FormGroup>
                  <FormGroup>
                    <span className="h6">Authorized redirect URIs</span>
                    <p className="text-muted "> For use with request from a web server.</p>
                    <FormControl
                      type="text"
                      bsClass="form-control"
                      id="redirectUri"
                      placeholder="https://www.example.com/callback"
                      required={true}
                      name="redirectUri"
                      defaultValue={redirectUri}
                      onBlur={this.checkURIBlur}
                      onChange={(e) => this.handleStateChange(e.target.id, e.target.value)}
                    />
                    <HelpBlock>
                      <p className="website-error">{errorURI}</p>
                    </HelpBlock>
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <span type="button" className="btn btn-primary waves-effect saveClient" onClick={this.submitClientOauth}>Save</span>
            </Row>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  loading: state.getIn(['loading', 'state']),
  oauth: state.getIn(['oauth', 'oauth'])
});

const mapDispatchToProps = {
  updateClientOauth,
  deleteClientOauth
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Oauthpage);
