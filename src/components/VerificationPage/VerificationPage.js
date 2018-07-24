import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { verifyUser } from 'ducks/auth';
import { Spinner } from 'components';
import { ToastContainer } from 'react-toastify';
import './VerificationPage.scss';

class VerificationPage extends React.Component {
  componentDidMount() {
    // const {
    //   params: { code }
    // } = this.props;
    // this.props.verifyUser(code);
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
  location: PropTypes ? PropTypes.object.isRequired : null,
  match: PropTypes ? PropTypes.object.isRequired :  null,
};

const mapDispatchToProps = {
  verifyUser
};

export default connect(null, mapDispatchToProps)(VerificationPage);
