import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftView from './left-view'
import RightView from './right-view'
import { fetchOneRules, createRules, updateRules } from 'ducks/rules';

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
      displayPosition: 'bottom',
      popupAnimationIn:'fadeInUp',
      popupAnimationOut:'fadeOutDown'
    };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.saveRules = this.saveRules.bind(this);
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

  render(){
    const { handleBackState } = this.props;
    return (
      <div>
        <div className="row m-t-30 m-b-30">
          <LeftView
            handleStateChange={this.handleStateChange}
            {...this.state}
          />
          <RightView
            handleStateChange={this.handleStateChange}
            {...this.state}
          />
        </div>
        <div className="m-t-50 float-right align-install-btn">
          <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={handleBackState}>Previous</button>
          <button type="button" className="btn btn-custom  waves-light waves-effect number ml-2 pl-4 pr-4" onClick={this.saveRules}>Next </button>
        </div>
        <div className="clearfix"></div>
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
