import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { socialLogin } from 'ducks/auth';

class ConnectPage extends React.Component {
  componentDidMount() {
    const {
      match: { params: { provider } },
      location: { search },
    } = this.props;

    const requestURL = `auth/${provider}/callback${search}`;
    this.props.socialLogin(requestURL);
  }

  render() {
    return (
      <div>
        <h1>Retrieving your token and checking its validity</h1>
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
