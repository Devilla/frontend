import React from 'react';
import  { InstallPixel, CapturePage, DisplayPage, Rules, NotificationSettings } from 'components';
import { browserHistory } from 'react-router';
import mobile from 'is-mobile';

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


        </div>
        <div className="modal fade show-modal" id="myModallive" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content align-modal">
              <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
              </div>
              <div className="modal-body">
                {props.content}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary close-btn" data-dismiss="modal" onClick={ props.path ? () => browserHistory.push(props.path):  ()=> {} }>{props.buttonText}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <button type="button" className="btn btn-outline-primary goliveRight waves-light waves-effect number" data-toggle="modal" data-target="#myModallive" onClick={props.goLive}><i className="fi-location"></i>&nbsp;Go Live</button>

        <ul className="nav nav-pills navtab-bg nav-justified pull-in new-campaign-tab-pills">
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="true" className={`nav-link ${props.activeClass == 1?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => { props.setActiveState(1); props.clearNotification(); }}>
              {!mobile() && '1.'} <i className="fi-mail mr-2"></i> {!mobile()? 'Notifications':''}
            </a>
          </li><li className="arrow-right"></li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 2?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(2)}>
              {!mobile() && '2.'}<i className="fi-cog mr-2"></i> {!mobile()? 'Settings':''}
            </a>
          </li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 3?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(3)}>
              {!mobile() && '3.'}<i className="fi-head mr-2"></i> {!mobile()? 'Capture Leads':''}
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 4?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(4)}>
              {!mobile() && '4.'}<i className="fi-monitor mr-2"></i> {!mobile()? 'Display':''}
            </a>
          </li>
          <li className="nav-item waves-effect text-center">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${props.activeClass == 5?'active pb-2 pt-2':'pb-2 pt-2'}`} onClick={() => props.setActiveState(5)}>
              {!mobile() && '5.'}<i className="fi-download mr-2"></i> {!mobile()? 'Install Pixel':''}
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
