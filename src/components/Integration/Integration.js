import React, { Component } from 'react';
import './Integration.scss';
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
