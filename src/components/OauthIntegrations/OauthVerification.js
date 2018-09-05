import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import { connect } from 'react-redux';

import { OauthGetAccessToken } from 'ducks/oauth';
import Credentials from 'services/credentials';
import { browserHistory } from 'react-router';
require('dotenv').config();

class OauthVerification extends Component {

  componentDidMount() {
    const {
      location: { query },
      params: { type }
    } = this.props;

    if(type == 'shopify') {
      let requestBody =  Credentials.filter(item => item.name == type)[0];
      requestBody['code'] = query.code;

      const requestURL = `https://${query.shop}/admin/oauth/access_token`;
      const requestDetails = {
        requestURL,
        requestBody,
        shopLink: query.shop,
        trackingId: query.state
      };
      this.props.OauthGetAccessToken(requestDetails, type);
    } else {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    return (
      <Loading strokeWidth="2" style={{height: '700px', width: '10%'}} isLoading={true}/>
    );
  }
}

const mapDispatchToProps = {
  OauthGetAccessToken
};

export default connect(null, mapDispatchToProps, null, { withRef: true })(OauthVerification);
