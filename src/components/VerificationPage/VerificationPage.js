import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { verifyUser } from 'ducks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'components';
import './VerificationPage.scss';

const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 2000
};

class VerificationPage extends React.Component {
  componentDidMount() {
    const {
      params: { code },
      location: { search },
    } = this.props;
    // const requestURL = `auth/${provider}/callback${search}`;
    this.props.verifyUser(code);
  }

  render() {
    return (
      <div>
        <Spinner loading={true}/>
        <div className="token-container">
          <h1>Verify your account</h1>
        </div>
        <ToastContainer hideProgressBar={true} />
      </div>
    );
  }
}

VerificationPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  verifyUser
};

export default connect(null, mapDispatchToProps)(VerificationPage);
