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
          <div id="background">
        		<div id="background"><img src="images/background.png"/></div>
        		<div id="layer_2"><img src="images/layer_2.png"/></div>
        		<div id="layer_3"><img src="images/layer_3.png"/></div>
        		<div id="layer_4"><img src="images/layer_4.png"/></div>
        		<div id="WEREDOINGSOMEAWESOME"><img src="images/WEREDOINGSOMEAWESOME.png"/></div>
        		<div id="PLEASECOMEBACKLATER"><img src="images/PLEASECOMEBACKLATER.png"/></div>
        		<div id="Thankyouforbeingpati"><img src="images/Thankyouforbeingpati.png"/></div>
        		<div id="HangOn"><img src="images/HangOn.png"/></div>
        		<div id="fbicon"><img src="images/fbicon.png"/></div>
        		<div id="layer_10"><img src="images/layer_10.png"/></div>
        		<div id="layer_11"><img src="images/layer_11.png"/></div>
        		<div id="layer_12"><img src="images/layer_12.png"/></div>
        		<div id="layer_13"><img src="images/layer_13.png"/></div>
        		<div id="Emailicon"><img src="images/Emailicon.png"/></div>
        		<div id="paper"><img src="images/paper.png"/></div>
        		<div id="pencil"><img src="images/pencil.png"/></div>
        		<div id="Coffee"><img src="images/Coffee.png"/></div>
        	</div>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
