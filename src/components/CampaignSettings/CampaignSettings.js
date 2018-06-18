import React from 'react';
import  { InstallPixel, CapturePage, DisplayPage, Rules, NotificationSettings } from 'components';

import './CampaignSettings.scss';

const CampaignSettings = ({
  activeClass,
  campaign,
  setActiveState,
  goLive,
  elastic,
  verifyPixelStatus,
  handlePixelCopy,
  rules,
  fetchOneRules,
  createRules,
  updateRules,
  configuration,
  configurations,
  notifications,
  fetchNotification,
  createConfiguration,
  fetchConfiguration,
  fetchCampaignConfiguration,
  updateConfiguration,
  clearConfiguration,
  createSuccess
}) => {
  return (
    <div className="col-md-12 tab-notification-container">
      <div className="card-box tab-notification-box">
        <div className="new-campaign-header">
          <h3 className=" m-t-0 m-b-30 new-campaign-header">{campaign
            ? campaign.websiteUrl
            : 'http://localhost:3000'} / {campaign
            ? campaign.campaignName
            : 'http://localhost:3000'}
          </h3>
          <button type="button" className="btn btn-custom  waves-light waves-effect number " onClick={goLive}>Go Live</button>
        </div>
        <div className="clearfix"></div>

        <ul className="nav nav-pills navtab-bg nav-justified pull-in new-campaign-tab-pills">
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 1?'active':''}`} onClick={() => setActiveState(1)}>
              <i className="fi-layers mr-2"></i> Install Pixel
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="true" className={`nav-link ${activeClass == 2?'active':''}`} onClick={() => setActiveState(2)}>
              <i className="fi-mail mr-2"></i>Notifications
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 3?'active':''}`} onClick={() => setActiveState(3)}>
              <i className="fi-box mr-2"></i> Configure
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 4?'active':''}`} onClick={() => setActiveState(4)}>
              <i className="fi-head mr-2"></i> Capture Leads
            </a>
          </li>
          <li className="nav-item waves-effect">
            <a data-toggle="tab" aria-expanded="false" className={`nav-link ${activeClass == 5?'active':''}`} onClick={() => setActiveState(5)}>
              <i className="fi-monitor mr-2"></i> Display
            </a>
          </li>
        </ul>

        <div className="tab-content p-5">
          <div className={`tab-pane ${activeClass == 1?'show active':''}`} id="home1">
            <InstallPixel
              setActiveState={setActiveState}
              campaign={campaign}
              elastic={elastic}
              verifyPixelStatus={verifyPixelStatus}
              handlePixelCopy={handlePixelCopy}
            />
          </div>

          <div className={`tab-pane ${activeClass == 2?'show active':''}`} id="profile1">
            <NotificationSettings
              campaign={campaign}
              configuration={configuration}
              configurations={configurations}
              notifications={notifications}
              fetchNotification={fetchNotification}
              createConfiguration={createConfiguration}
              fetchConfiguration={fetchConfiguration}
              fetchCampaignConfiguration={fetchCampaignConfiguration}
              updateConfiguration={updateConfiguration}
              clearConfiguration={clearConfiguration}
              createSuccess={createSuccess}
              setActiveState={setActiveState}
            />
          </div>

          <div className={`tab-pane ${activeClass == 3?'show active':''}`} id="messages1">
            <Rules
              campaign={campaign}
              rules={rules}
              fetchOneRules={fetchOneRules}
              createRules={createRules}
              updateRules={updateRules}
              setActiveState={setActiveState}
            />
          </div>

          <div className={`tab-pane ${activeClass == 4?'show active':''}`} id="settings1">
            <CapturePage
              campaign={campaign}
              rules={rules}
              setActiveState={setActiveState}
            />
          </div>

          <div className={`tab-pane ${activeClass == 5?'show active':''}`} id="settings2">
            <DisplayPage
              campaign={campaign}
              rules={rules}
              setActiveState={setActiveState}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSettings;
