import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from 'react-loading-animation';
import { ToastContainer } from 'react-toastify';

import { socialLogin } from 'ducks/auth';
import './ConnectPage.scss';

class ConnectPage extends React.Component {
  componentDidMount() {
    const {
      params: { provider },
      location: { search },
    } = this.props;
    const requestURL = `auth/${provider}/callback${search}`;
    this.props.socialLogin(requestURL);
  }

  render() {
    return (
      <div>
        <Loading strokeWidth="2" style={{height: '700px', width: '10%'}} isLoading={true} />
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

ConnectPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  socialLogin
};

export default connect(null, mapDispatchToProps, null, { withRef: true })(ConnectPage);
