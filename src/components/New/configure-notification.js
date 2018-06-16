import React, { Component } from 'react';
import Display from './notification/display';

class ConfigNotification extends Component{
  constructor(){
    super();
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
  }

  componentWillUnmount() {
    this.props.setActiveState(1);
  }

  handleNextState() {
    this.props.setActiveState(4);
  }

  handleBackState() {
    this.props.setActiveState(2);
  }

  render() {
    return (
      <Display
        handleBackState={this.handleBackState}
        handleNextState={this.handleNextState}
      />
    );
  }
}


export default ConfigNotification;
