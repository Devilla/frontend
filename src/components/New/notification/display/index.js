import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import LeftView from './left-view'
import RightView from './right-view'
import { fetchOneRules, createRules, updateRules } from 'ducks/rules';
import Tabs from 'components/Template/tab'
import Button from 'components/Template/customButton';

export class Display extends Component{
  constructor(props){
    super(props);
    this.state = {
      hideNotification: false,
      loopNotification: false,
      delayNotification: false,
      closeNotification: false,
      hideAnonymous: false,
      displayNotifications: false,
      initialDelay: 120,
      bulkData:5,
      liveVisitorCount:5,
      recentNumber:5,
      recentConv:5,
      displayTime: 120,
      delayBetween: 120,
      displayPosition: 'Bottom Left',
      popupAnimationIn:'fadeInUp',
      popupAnimationOut:'fadeOutDown',
      sampleDisplay: false,
      animation: 'fadeIn'
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.saveRules = this.saveRules.bind(this);
    this.showNotification = this.showNotification.bind(this);
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
    this.props.handleNextState();
  }

  showNotification() {
    this.setState({sampleDisplay: !this.state.sampleDisplay});
  }

  handleAnimation(value) {
    this.setState({animation: value})
  }

  render(){
    const { handleBackState } = this.props;
    return (
      <div className="plain inner-display" style={{width: '97.5%', background: 'white', padding: '2% 1%'}}>
        <div className="content">
          <Row>
            <Col xs={6}>
              <LeftView
                handleStateChange={this.handleStateChange}
                {...this.state}
              />
           </Col>
            <Col xs={6}>
               <RightView
                 handleStateChange={this.handleStateChange}
                 handleAnimation={this.handleAnimation}
                 {...this.state}
               />
            </Col>
           </Row>
           <Row style={{margin: '0px auto 10%', padding: '5% 5% 5% 0%'}}>
             <Col md={4}>
               <div className=" text-left">
                 <Button bsStyle="primary" icon="chevron-left" onClick={handleBackState}>
                   Back
                 </Button>
               </div>
             </Col>
             <Col md={4}>
               <div className=" text-center">
                 <Button bsStyle="primary" icon="tasks" onClick={this.showNotification}>
                   {this.state.sampleDisplay?'Hide':'Show'} Notification
                 </Button>
               </div>
             </Col>
             <Col md={4}>
               <div className=" text-right">
                <Button bsStyle="primary" icon="chevron-right" onClick={this.saveRules}>
                  Next
                </Button>
               </div>
             </Col>
           </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rules: state.getIn(['rules', 'rule']),
  campaign: state.getIn(['campaign', 'campaign']),
});

const mapDispatchToProps = {
  fetchOneRules,
  createRules,
  updateRules
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
