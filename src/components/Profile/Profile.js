import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Profile.css';
import { ComingSoon } from 'components';

class Profile extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="content">
        <ComingSoon />
      </div>
    );
  }
}

export default Profile;
