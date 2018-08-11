import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
// import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { loginSuccess } from 'ducks/auth';
import { load, loaded } from 'ducks/loading';
import { LogoInfluence } from 'img';
import { base } from 'services/api';
// import { toast } from 'react-toastify';
// import { Alert, HelpBlock } from 'react-bootstrap';


import './OauthAuthorization.scss';

class OauthAuthorization extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  constructor() {
    super();
  }

  render() {
    return (
      <div className="signin-container" style={{height: '700px', paddingTop: '60px'}}>
        <div className="oauth-authorize">
          <div className="row authorize-row">
            <img src={LogoInfluence}/>
          </div>
          <div className="row authorize-row">
            <div className="authorize-column">
              <hr/>
              <h3>Authorize Application</h3>
              <hr/>
            </div>
          </div>
          <div className="row authorize-row">
            <div className="authorize-column">
              <div className="authorize-info">
                <img src="http://simpleicon.com/wp-content/uploads/user1.png" />
                <div className="authorize-details">
                  <p className="authorize-label">Influence.co</p>
                  <p className="authorize-content">wants to access your account</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row authorize-row">
            <div className="authorize-column">
              <div className="authorize-info">
                <img src="http://simpleicon.com/wp-content/uploads/user1.png" />
                <div className="authorize-details">
                  <p className="authorize-label">Personal user data</p>
                  <p className="authorize-content">Campaign info(Read and Write)</p>
                </div>
                <i className="fa fa-angle-down"/>
              </div>
            </div>
          </div>
          <div className="row authorize-row">
            <div className="authorize-column">
              <hr/>
              <div className="link-authorize">
                <a href={`${base}connect/facebook`}>
                  <div className="col-md-9 col-sm-8 btn btn--icon" to="">
                    <span className="btn__text ">
                      Authorize Influence
                    </span>
                  </div>
                </a>
              </div>
              <div className="authorize-bottom-labels">
                <p className="authorize-content">Authorizing will redirect to </p>
                <p className="authorize-label">https://influence.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  loginSuccess,
  load,
  loaded
};
export default connect(null, mapDispatchToProps)(OauthAuthorization);
