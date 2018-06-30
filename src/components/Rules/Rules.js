import React, { Component } from 'react';
import LeftView from './LeftView';
import RightView from './RightView';
import './Rules.scss';

const initialRules = {
  hideNotification: true,
  loopNotification: true,
  delayNotification: false,
  closeNotification: false,
  hideAnonymous: false,
  displayNotifications: false,
  initialDelay: 1,
  bulkData:5,
  liveVisitorCount:5,
  recentNumber:5,
  recentConv:5,
  displayTime: 5,
  delayBetween: 3,
  displayPosition: 'Bottom Left',
  popupAnimationIn:'fadeInUp',
  popupAnimationOut:'fadeOutDown',
  // sampleDisplay: false,
  animation: 'fadeIn'
};

class Rules extends Component{
  constructor(){
    super();
    this.state = initialRules;
    this.handleStateChange = this.handleStateChange.bind(this);
    this.saveRules = this.saveRules.bind(this);
    this.handleNextState = this.handleNextState.bind(this);
    this.handleBackState = this.handleBackState.bind(this);
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  componentDidMount() {
    if(this.props.campaign)
      this.props.fetchOneRules(this.props.campaign._id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.rules != this.props.rules) {
      this.setRules(nextProps.rules);
    }
  }

  setRules(rules) {
    this.setState({
      hideNotification: rules.hideNotification,
      loopNotification: rules.loopNotification,
      delayNotification: rules.delayNotification,
      closeNotification: rules.closeNotification,
      hideAnonymous: rules.hideAnonymous,
      displayNotifications: rules.displayNotifications,
      initialDelay: rules.initialDelay,
      bulkData: rules.bulkData,
      liveVisitorCount: rules.liveVisitorCount,
      hideAnonymousConversion:rules.hideAnonymousConversion,
      onlyDisplayNotification:rules.onlyDisplayNotification,
      recentNumber:rules.recentNumber,
      recentConv:rules.recentConv,
      displayTime: rules.displayTime,
      delayBetween: rules.delayBetween,
      displayPosition: rules.displayPosition,
      popupAnimationIn : rules.popupAnimationIn,
      popupAnimationOut : rules.popupAnimationOut
    });
  }

  handleStateChange(state, value){
    this.setState({[state]: value});
  }

  saveRules() {
    const rules = !this.props.rules?null:this.props.rules;
    let rule = this.state;
    rule['campaign']=this.props.campaign._id;
    if(rules) {
      rule['id'] = rules._id;
      delete rule['campaign'];
      this.props.updateRules(rule);
    } else {
      this.props.createRules(rule);
    }
    this.handleNextState();
  }


  componentWillUnmount() {
    this.setState({sampleDisplay: false});
    this.props.setActiveState(1);
  }

  handleNextState() {
    this.props.setActiveState(4);
  }

  handleBackState() {
    this.props.setActiveState(2);
  }

  handleAnimation(value) {
    this.setState({animation: value});
  }

  setDefaultRules = () => {
    this.setState(initialRules);
  }

  render() {
    const { sampleDisplay, showNotification } = this.props;
    return (
      <div className="rules-container">
        <div className="text-center  m-t-20">
          <h4 className="lead m-l-100 m-b-30">Settings</h4>
        </div>
        <div className="row m-t-30 m-b-30">
          <LeftView
            sampleDisplay={sampleDisplay}
            handleAnimation={this.handleAnimation}
            handleStateChange={this.handleStateChange}
            {...this.state}
          />
          <RightView
            handleStateChange={this.handleStateChange}
            {...this.state}
          />
        </div>
        <div className="rules-buttons">
          <button type="button" className="btn btn-color waves-light waves-effect number " onClick={this.handleBackState}><i className="icon-arrow-left pr-2"></i>Back</button>
          <button type="button" className="btn btn-color btn-outline-primary waves-light waves-effect number" onClick={showNotification}> Notification </button>
          <button type="button" className="btn btn-color btn-outline-primary waves-light waves-effect number" onClick={this.setDefaultRules}>Set Default</button>
          <button type="button" className="btn btn-color waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.saveRules}>Next<i className="icon-arrow-right pl-2"></i> </button>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Rules;
