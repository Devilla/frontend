import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './ComingSoon.css';

class ComingSoon extends Component {

  constructor() {
    super();
    this.routeToHome = this.routeToHome.bind(this);
  }

  routeToHome() {
    browserHistory.goBack();
  }

 render() {
   return (
    <div className="coming-soon">
      <div className="content-wrap">
        <div className="shadow-overlay">
          <div className="success_body">
            <h1> Coming Soon. </h1>
            </div>
          <div className="error_button">
            <button type="button" onClick={this.routeToHome}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
   );
 }
}

export default ComingSoon;
