import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { socialLogin } from 'ducks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'components/Spinner';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

class ConnectPage extends React.Component {
  componentDidMount() {
    console.log(this.props, "=======");
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
        <h1>Retrieving your token and checking its validity</h1>
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
