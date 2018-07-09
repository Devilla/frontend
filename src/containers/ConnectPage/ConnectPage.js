import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { socialLogin } from 'ducks/auth';
import { Spinner } from 'components';
import { ToastContainer } from 'react-toastify';
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
