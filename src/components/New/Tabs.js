import React, { Component } from 'react';
import InstallPixel from './install-pixel';
import CaptureLeads from './CaptureLeads';
import DisplayPage from './DisplayPage';
import ConfigNotification from './configure-notification';
import Notifications from './Notifications/Notifications';
import './Tabs.scss';

class Tabs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeClass: 1
    };
    this.setActiveState = this.setActiveState.bind(this);
  }

  setActiveState(val) {
    this.setState({activeClass: val});
  }

  render(){
    const { activeClass } = this.state;
    return (
      <div className="col-md-12 tab-notification-container">
        <div className="card-box tab-notification-box">
          <h3 className=" m-t-0 m-b-30 new-campaign-header">{this.props.campaign
            ? this.props.campaign.websiteUrl
            : 'http://localhost:3000'} / {this.props.campaign
            ? this.props.campaign.campaignName
            : 'http://localhost:3000'}
          </h3>
          <div className="clearfix"></div>
          <ul className="nav nav-pills navtab-bg nav-justified pull-in new-campaign-tab-pills">
            <li className="nav-item waves-effect text-center">
              <span data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 1?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(1)}>
                <i className="fi-layers mr-2"></i> Install Pixel
              </span>
            </li>
            <li className="nav-item waves-effect text-center">
              <span data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(2)}>
                <i className="fi-mail mr-2"></i>Notifications
              </span>
            </li>
            <li className="nav-item waves-effect text-center">
              <span data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 3?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(3)}>
                <i className="fi-cog mr-2"></i> Settings
              </span>
            </li>
            <li className="nav-item waves-effect text-center">
              <span data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 4?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(4)}>
                <i className="fi-head mr-2"></i> Capture Leads
              </span>
            </li>
            <li className="nav-item waves-effect text-center">
              <span data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 5?'active pb-3 pt-3':'pb-3 pt-3'}`} onClick={() => this.setActiveState(5)}>
                <i className="fi-monitor mr-2"></i> Display
              </span>
            </li>
          </ul>

          <div className="tab-content p-5">
            <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="home1">
              <InstallPixel setActiveState={this.setActiveState} campaign={this.props.campaign}/>
            </div>

            <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="profile1">
              <Notifications setActiveState={this.setActiveState} />
            </div>

            <div className={`tab-pane ${activeClass == 3?'show active':''}`} id="messages1">
              <ConfigNotification setActiveState={this.setActiveState} />
            </div>

            <div className={`tab-pane ${activeClass == 4?'show active':''}`} id="settings1">
              <CaptureLeads setActiveState={this.setActiveState} />
            </div>

            <div className={`tab-pane ${activeClass == 5?'show active':''}`} id="settings2">
              <DisplayPage setActiveState={this.setActiveState} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
