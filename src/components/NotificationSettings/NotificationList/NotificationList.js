import React from 'react';
import './NotificationList.scss';

const NotificationList = ({ notificationList, configure, handleActivityChange}) => {
  const renderNotifications = () => {
    return notificationList.map(notification =>
      <div key={notification._id} className="col-md-4 notification-box">
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
                    'RECENT'
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
                      'recentColor'
                }>{notification.notificationName}</h4>
                <p className="text-muted notification-list-content">
                  {
                    notification.notificationName === 'Bulk Activity' ?
                      'Visitors activity over time.'
                      :
                      notification.notificationName === 'Live Visitor Count' ?
                        'Live visitors.'
                        :
                        'Recent visitors.'
                  }
                </p>
              </div>
              <div className="toggle-checkbox">
                <input
                  className="tgl tgl-ios"
                  id={notification._id}
                  type="checkbox"
                  checked={notification.activity}
                  onChange={(e) => e.target.checked !=notification.activity?handleActivityChange(e.target.checked, notification._id, notification.configurationId):null}
                />
                <label className="tgl-btn" for={notification._id}></label>
              </div>

              <button
                type="button"
                className="btn btn-primary m-t-20 btn-rounded btn-bordered waves-effect w-md waves-light"
                onClick={() => configure(notification)}
              >
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row m-t-50 notification-list">
      {renderNotifications()}
    </div>
  );
};

export default NotificationList;
