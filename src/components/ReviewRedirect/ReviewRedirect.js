import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reviewRedirect } from 'ducks/configuration';
import { Spinner } from 'components';
import { ToastContainer } from 'react-toastify';
import './ReviewRedirect.scss';

class ReviewRedirect extends React.Component {
  componentDidMount() {
    const {
      params: { provider},
      location: { search},
    } = this.props;
    const requestURL = `integrations/${provider}/callback${search}`;
    console.log(provider,'Provider');
    console.log(search,'Location');
    this.props.reviewRedirect(requestURL);
    console.log(requestURL,'requestURL');
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

ReviewRedirect.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  reviewRedirect
};

export default connect(null, mapDispatchToProps)(ReviewRedirect);
