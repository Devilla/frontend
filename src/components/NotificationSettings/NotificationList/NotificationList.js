import React from 'react';
import './NotificationList.scss';
// import { PageSpecificPopup } from 'components';


const NotificationList = ({
  notificationList,
  configure,
  handleActivityChange,
  campaign,
  // setNotification,
  // setNewConfig,
  // handleContentChange,
  // selectedSubCampaign
}) => {

  const getNotificationNames = (notificationName) => {
    if(campaign && campaign.campaignType == 'page') {
      if(notificationName === 'Bulk Activity')
        return 'Recent Purchases';
      if(notificationName === 'Live Visitor Count')
        return 'Product Viewers';
      if(notificationName === 'Recent Activity')
        return 'Recent Purchases';
    } else {
      return notificationName;
    }
  };

  const renderNotifications = () => {
    return notificationList.map(notification =>
      <div key={notification._id}
        className={notification.notificationName === 'Review Notification' ? 'col-md-4 notification-box lastbox' : 'col-md-4 notification-box'}>
        <div className=" ribbon-box indi-card">
          <div className="ribbon-two ribbon-two-success">
            <span>
              {
                notification.notificationName === 'Bulk Activity' ?
                  'GROUP'
                  :
                  notification.notificationName === 'Live Visitor Count' ?
                    'LIVE'
                    :
                    notification.notificationName === 'Recent Activity' ?
                      'RECENT'
                      :
                      'REVIEWS'
              }
            </span>
          </div>
          <div className="text-center card-box bx ">

            <div>
              <h4 className={
                notification.notificationName === 'Bulk Activity' ?
                  'bulkColor'
                  :
                  notification.notificationName === 'Live Visitor Count' ?
                    'liveColor'
                    :
                    notification.notificationName === 'Recent Activity' ?
                      'recentColor'
                      :
                      'reviewColor'
              }>{getNotificationNames(notification.notificationName)}</h4>
              <p className="text-muted notification-list-content">
                {
                  notification.notificationName === 'Bulk Activity' ?
                    'Show total visitors'
                    :
                    notification.notificationName === 'Live Visitor Count' ?
                      'Shows live website viewers'
                      :
                      notification.notificationName === 'Recent Activity' ?
                        'Shows recent user conversions'
                        :
                        'Get popup Insights'

                }
              </p>
            </div>
            <div className="toggle-checkbox">
              <input
                className="tgl tgl-ios"
                id={notification._id}
                type="checkbox"
                defaultChecked={notification.activity}
                onChange={(e) => e.target.checked != notification.activity?handleActivityChange(e.target.checked, notification._id, notification.configurationId):null}
              />
              <label className="tgl-btn" htmlFor={notification._id} style={{textAlign:'left'}}>
                <div className="toggle-text">ON</div>
              </label>
            </div>
            {notification.notificationName == 'Review Notification' ?
              <button
                type="button"
                className="btn btn-outline-primary btn-rounded btn-bordered waves-effect w-md waves-light"
                onClick={() => configure(notification,false)}
              >
                Configure
              </button>
              :
              <button
                type="button"
                className="btn btn-outline-primary  btn-rounded btn-bordered waves-effect w-md waves-light"
                onClick={() => configure(notification,true)}
              >
                Configure
              </button>
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <div data-transition-id="notification-list-page">
      {/* <PageSpecificPopup
        handleContentChange={handleContentChange}
        selectedSubCampaign={selectedSubCampaign}
        setNotification={setNotification}
        setNewConfig={setNewConfig}
      /> */}
      <div className="cards-notification">
        <div className="row m-t-50 notification-list">
          {renderNotifications()}
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
