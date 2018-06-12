import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <Spinner loading={true}/>
        <div className="token-container">
          <h1>Retrieving your token and checking its validity</h1>
        </div>
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

export default connect(null, mapDispatchToProps)(ConnectPage);
