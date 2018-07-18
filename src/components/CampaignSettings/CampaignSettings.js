import React from 'react';
import  { InstallPixel, CapturePage, DisplayPage, Rules, NotificationSettings } from 'components';
import './CampaignSettings.scss';

const CampaignSettings = (props) => {
  return (
    <div className="col-md-12 tab-notification-container">
      <div className="card-box tab-notification-box">
        <div className="ml-3 mt-1 new-campaign-header">
          <i className="fi-layers mr-2 mt-1"></i>
          <h4 className=" header-title">{props.campaign
            ? props.campaign.websiteUrl
            : 'http://localhost:3000'} {' - '}</h4><p className="textTransform  header-title">{props.campaign
            ? props.campaign.campaignName
            : 'http://localhost:3000'}
          </p>

          <button type="button" className="btn btn-outline-primary goliveRight waves-light waves-effect number" onClick={props.goLive}><i className="fi-location"></i>&nbsp;Go Live</button>

        </div>
        <div className="clearfix"></div>
        <ul className="nav nav-pills navtab-bg nav-justified pull-in new-campaign-tab-pills">
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="true" className={`nav-link ${props.activeClass == 1?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(1)}>
              1.&nbsp;&nbsp; <i className="fi-mail mr-2"></i>Notifications
            </a>
          </li><li className="arrow-right"></li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 2?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(2)}>
              2.&nbsp;&nbsp;<i className="fi-cog mr-2"></i> Settings
            </a>
          </li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 3?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(3)}>
             3.&nbsp;&nbsp;<i className="fi-head mr-2"></i> Capture Leads
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 4?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(4)}>
              4.&nbsp;&nbsp;<i className="fi-monitor mr-2"></i> Display
            </a>
          </li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 5?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(5)}>
              5.&nbsp;&nbsp;<i className="fi-download mr-2"></i> Install Pixel
            </a>
          </li>
        </ul>

        <div className="tab-content p-5">

          <div className={`tab-pane ${props.activeClass == 1?'show active':''}`} id="profile1">
            <NotificationSettings {...props} />
          </div>

          <div className={`tab-pane ${props.activeClass == 2?'show active':''}`} id="messages1">
            <Rules {...props} />
          </div>

          <div className={`tab-pane ${props.activeClass == 3?'show active':''}`} id="settings1">
            <CapturePage {...props} />
          </div>

          <div className={`tab-pane ${props.activeClass == 4?'show active':''}`} id="settings2">
            <DisplayPage {...props} />
          </div>

          <div className={`tab-pane ${props.activeClass == 5?'show active':''}`} id="home1">
            <InstallPixel {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSettings;
