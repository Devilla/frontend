import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './Integration.css';
import { ComingSoon } from 'components';

class Integration extends Component {

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

export default Integration;
