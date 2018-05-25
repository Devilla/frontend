import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Upgrade.css';
import { ComingSoon } from 'components';

class Upgrade extends Component {

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

export default Upgrade;
