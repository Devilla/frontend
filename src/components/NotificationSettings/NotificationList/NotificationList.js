import React from 'react';
import './NotificationList.scss';


const NotificationList = ({ notificationList, configure, handleActivityChange}) => {
  const renderNotifications = () => {
    return notificationList.map(notification =>
      <div key={notification._id}
        className={notification.notificationName === 'Review Notification' ? 'col-md-4 notification-box lastbox' : 'col-md-4 notification-box'}>
        <div className=" ribbon-box bx-shadow">
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
          <div className="text-center card-box bx-shadow ">
            <div className="member-card">
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
                }>{notification.notificationName}</h4>
                <p className="text-muted notification-list-content">
                  {
                    notification.notificationName === 'Bulk Activity' ?
                      'Visitors activity over time.'
                      :
                      notification.notificationName === 'Live Visitor Count' ?
                        'Live visitors.'
                        :
                        notification.notificationName === 'Recent Activity' ?
                          'Recent visitors.'
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
                <label className="tgl-btn" htmlFor={notification._id}></label>
              </div>
              {notification.notificationName == 'Review Notification' ?
                <button
                  type="button"
                  className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light"
                  onClick={() => configure(notification,false)}
                >
                Configure
                </button>
                :
                <button
                  type="button"
                  className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light"
                  onClick={() => configure(notification,true)}
                >
                Configure
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cards-notification">
      <div className="row m-t-50 notification-list">
        {renderNotifications()}
      </div>
    </div>
  );
};

export default NotificationList;
