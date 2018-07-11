import React , { Component } from 'react';
import './DashboardChannel.scss';
import {  Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { review } from 'ducks/configuration';
import {
  Facebook,
  Zendesk,
  Google,
  TrustPilot,
  FourSquare,
  G2Crowd,
  TrustRadius,
  Yelp,
  BingPlaces } from 'img';


class DashboardChannel extends Component {
  constructor() {
    super();
    this.state = {
      selectedChannels: [],
      channelContent: [],
      checked: false,
      email:''

    };
  }
  channelfunc = (index) => {
    let res = {};
    switch(true) {
      case /0/.test(index) : res = Facebook; break;
      case /1/.test(index) : res = Zendesk; break;
      case /2/.test(index) : res = Google; break;
      case /3/.test(index) : res = TrustPilot; break;
      case /4/.test(index) : res = FourSquare; break;
      case /5/.test(index) : res = G2Crowd; break;
      case /6/.test(index) : res = TrustRadius; break;
      case /7/.test(index) : res = Yelp; break;
      case /8/.test(index) : res = BingPlaces; break;


    }
    return res;
  }

  componentWillMount() {
    var scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  handleSubmit() {

    const data = {
      'email': this.state.email,
    };

    this.props.review(data);
    //this.props.clearForgotPasswordError();
    //this.setState({email: '', emailError: ''});
  }

  channels = ['Facebook' , 'Zendesk','Google','TrustPilot','FourSquare','G32Crowd','TrustRadius','Yelp','BingPlaces'];

  channelsList = () => {
    return this.channels.map((channelName,i)=> {
      return (

        <Col md={12}  className="bx-shadow" key={i}>
          <img src={this.channelfunc(i)} className="logocompany " />
          <span className="text-muted text-uppercase mt-0  title">{channelName}</span>
          <span className="text-muted btn btn-primary waves-effect  btns" onClick={()=>{browserHistory.push('/oauthshow');}}>Connect&nbsp; <i className="fi-open"></i></span>

        </Col>

      );
    });
  }


  render() {

    return (

      <div className="dashchannel-container">
        <button type="button" className="btn btn-info  addchannel" data-toggle="modal" data-target="#myModal" onClick={this.handleSubmit.bind(this)}><i className="fi-plus"></i>&nbsp;Add Channels</button>
        <div className="modal fade show-modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content align-modal">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Channels</h4>
              </div>
              <div className="modal-body">
                {this.channelsList()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  error: state.getIn(['configuration', 'review'])
});

const mapDispatchToProps = {
  review
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardChannel);
