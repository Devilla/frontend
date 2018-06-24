import React from 'react';
import NotificationView from './NotificationView';
import './Rules.scss';

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

        <li className="m-t-5">
          <label className="text-muted">
            Select Pop-in Animation
          </label>
          <select className="form-control muted-text" value={popupAnimationIn} onChange={(e) => { handleStateChange('popupAnimationIn', e.target.value); handleAnimation(e.target.value); }}>
            <option value="fadeInUp">Fade in Up</option>
            <option value="fadeInLeft">Fade in Left</option>
            <option value="fadeInDown">Fade in Down</option>
            <option value="fadeInRight">Fade in Right</option>
            <option value="bounceInUp">Bounce in Up </option>
            <option value="bounceInRight">Bounce in Right</option>
            <option value="bounceInLeft">Bounce in Left</option>
            <option value="bounceInDown">Bounce in Down</option>
            <option value="slideInUp">Slide in Up</option>
            <option value="slideInDown">Slide in Down</option>
            <option value="slideInLeft">Slide in Left</option>
            <option value="slideInRight">Slide in Right</option>
            <option value="zoomIn">Zoom in</option>
            <option value="zoomInUp">Zoom in Up</option>
            <option value="zoomInDown">Zoom in Down</option>
            <option value="zoomInLeft">Zoom in Left</option>
            <option value="zoomInRight">Zoom in Right</option>
          </select>
        </li>
        <li className="mt-4">
          <label className="text-muted">
            Select Pop-out Animation
          </label>
          <select className="form-control  muted-text" value={popupAnimationOut} onChange={(e) => { handleStateChange('popupAnimationOut', e.target.value); handleAnimation(e.target.value);}}>
            <option value="fadeOutUp">Fade out Up</option>
            <option value="fadeOutLeft">Fade out Left</option>
            <option value="fadeOutDown">Fade out Down</option>
            <option value="fadeOutRight">Fade out Right</option>
            <option value="bounceOutUp">Bounce out Up </option>
            <option value="bounceOutRight">Bounce out Right</option>
            <option value="bounceOutLeft">Bounce out Left</option>
            <option value="bounceOutDown">Bounce out Down</option>
            <option value="slideOutUp">Slide out Up</option>
            <option value="slideOutDown">Slide out Down</option>
            <option value="slideOutLeft">Slide out Left</option>
            <option value="slideOutRight">Slide out Right</option>
            <option value="zoomOut">Zoom out</option>
            <option value="zoomOutUp">Zoom out Up</option>
            <option value="zoomOutDown">Zoom out Down</option>
            <option value="zoomOutLeft">Zoom out Left</option>
            <option value="zoomOutRight">Zoom out Right</option>
          </select>
        </li>


        <li className="ml-1 mt-4">
          <div className="checkbox checkbox-info">
            <input id="checkbox6b1" type="checkbox" checked={hideNotification} onChange={(e) => handleStateChange('hideNotification', e.target.checked)} />
            <label htmlFor="checkbox6b1" className="text-muted">
              Hide notifications on mobile
            </label>
          </div>
        </li>
        <li className="ml-1 mt-4">
          <div className="checkbox checkbox-info">
            <input id="checkbox6b2" type="checkbox" checked={loopNotification} onChange={(e) => handleStateChange('loopNotification', e.target.checked)} />
            <label htmlFor="checkbox6b2" className="text-muted">
              Loop notifications
            </label>
          </div>
        </li>
        <li className="ml-1 mt-4">
          <div className="checkbox checkbox-info">
            <input id="checkbox6b3" type="checkbox" checked={delayNotification} onChange={(e) => handleStateChange('delayNotification', e.target.checked)} />
            <label htmlFor="checkbox6b3" className="text-muted">
               Randomize delay between  notifications
            </label>
          </div>
        </li>
        <li className="ml-1 mt-4">
          <div className="checkbox checkbox-info">
            <input id="checkbox6b4" type="checkbox" checked={closeNotification} onChange={(e) => handleStateChange('closeNotification', e.target.checked)} />
            <label htmlFor="checkbox6b4" className="text-muted">
              Allow users to close notifications
            </label>
          </div>
        </li>
        <br/>
      </ul>
      <div>
        <NotificationView animation={animation} display={sampleDisplay} position={displayPosition} />
      </div>
    </div>
  );
};

export default LeftView;
