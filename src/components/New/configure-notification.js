import React, { Component } from 'react';
import {
    Grid, Row, Col
} from 'react-bootstrap';
import Tabs from './Tabs';
import Display from './notification/display'
class ConfigNotification extends Component{
  constructor(){
    super();
    this.state = {

    }
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.activeState = this.activeState.bind(this);
  }

  componentWillMount() {
    this.setActiveState({active: 4});
  }

  activeState(val){
    this.setActiveState(val);
  }

  handleNextState() {
    this.setActiveState({active: 5});
  }

  handleBackState() {
    this.setActiveState({active: 3});
  }

  setActiveState(val) {
    var data = {'tab' : val};
    this.props.callbackFromParent(data);
  }

  render(){
    return (
      <div className="content">
        <Grid fluid>
          <Tabs active="4" callbackFromParent ={this.activeState.bind(this)}/>
          <Row >
            <Display
              handleBackState={this.handleBackState}
              handleNextState={this.handleNextState}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}


export default ConfigNotification;
