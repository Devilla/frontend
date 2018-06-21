import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Integrations1} from 'img';
import './ComingSoon.scss';

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
          <div>
            <div><img src={Integrations1}/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
