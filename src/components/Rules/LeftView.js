import React from 'react';
import NotificationView from './NotificationView';

const LeftView = ({
  hideNotification,
  loopNotification,
  delayNotification,
  closeNotification,
  handleStateChange,
  popupAnimationIn,
  popupAnimationOut,
  sampleDisplay,
  displayPosition,
  animation,
  handleAnimation
}) => {
  return (
    <div className="col-md-6 border-right">
      <ul className="text-muted text-left list-unstyled ">
        <li>
          <div className="checkbox checkbox-pink">
            <input id="checkbox6b1" type="checkbox" checked={hideNotification} onChange={(e) => handleStateChange('hideNotification', e.target.checked)} />
            <label htmlFor="checkbox6b1" className="text-muted">
              Hide notifications on mobile
            </label>
          </div>
        </li>
        <li>
          <div className="checkbox checkbox-pink">
            <input id="checkbox6b2" type="checkbox" checked={loopNotification} onChange={(e) => handleStateChange('loopNotification', e.target.checked)} />
            <label htmlFor="checkbox6b2" className="text-muted">
              Loop notifications
            </label>
          </div>
        </li>
        <li>
          <div className="checkbox checkbox-pink">
            <input id="checkbox6b3" type="checkbox" checked={delayNotification} onChange={(e) => handleStateChange('delayNotification', e.target.checked)} />
            <label htmlFor="checkbox6b3" className="text-muted">
              Randomize delay between notifications
            </label>
          </div>
        </li>
        <li>
          <div className="checkbox checkbox-pink">
            <input id="checkbox6b4" type="checkbox" checked={closeNotification} onChange={(e) => handleStateChange('closeNotification', e.target.checked)} />
            <label htmlFor="checkbox6b4" className="text-muted">
              Allow users to close notifications
            </label>
          </div>
        </li>
        <br/>
        <li className="m-t-5">
          <label className="text-muted">
            Select Popup Notification Animation
          </label>
          <select className="custom-select  muted-text" value={popupAnimationIn} onChange={(e) => { handleStateChange('popupAnimationIn', e.target.value); handleAnimation(e.target.value); }}>
            <option value="fadeInUp">Fade in Up</option>
            <option value="fadeInLeft">Fade in Left</option>
            <option value="fadeInBottom">Fade in Bottom</option>
            <option value="fadeInRight">Fade in Right</option>
            <option value="bounceInUp">Bounce in Up </option>
            <option value="bounceInRight">Bounce in Right</option>
            <option value="bounceInLeft">Bounce in Left</option>
            <option value="bounceInBottom">Bounce in Bottom</option>
          </select>
        </li>
        <li className="mt-4">
          <label className="text-muted">
            Select Popout Notification Animation
          </label>
          <select className="custom-select  muted-text" value={popupAnimationOut} onChange={(e) => { handleStateChange('popupAnimationOut', e.target.value); handleAnimation(e.target.value);}}>
            <option value="fadeOutUp">Fade out Up</option>
            <option value="fadeOutLeft">Fade out Left</option>
            <option value="fadeOutBottom">Fade out Bottom</option>
            <option value="fadeOutRight">Fade out Right</option>
            <option value="bounceOutUp">Bounce out Up </option>
            <option value="bounceOutRight">Bounce out Right</option>
            <option value="bounceOutLeft">Bounce out Left</option>
            <option value="bounceOutBottom">Bounce out Bottom</option>
          </select>
        </li>
      </ul>
      <div>
        <NotificationView animation={animation} display={sampleDisplay} position={displayPosition} />
      </div>
    </div>
  );
};

export default LeftView;
