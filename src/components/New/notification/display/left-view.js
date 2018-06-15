import React from 'react';

const LeftView = ({
  hideNotification,
  loopNotification,
  delayNotification,
  closeNotification,
  hideAnonymous,
  displayNotifications,
  handleStateChange,
  popupAnimationIn,
  popupAnimationOut
}) => {
  return (
    <div className="col-md-6 border-right">
        <h4 className="lead m-b-30 m-t-50">Configure Actions on UI</h4>
        <ul className="text-muted text-left list-unstyled ">
            <li>
                <div className="checkbox checkbox-pink">
                    <input id="checkbox6b1" type="checkbox" checked={hideNotification} onChange={(e) => handleStateChange('hideNotification', e)} />
                    <label htmlFor="checkbox6b1" className="text-muted">
                        Hide notifications on mobile
                    </label>
                </div>
            </li>
            <li>
                <div className="checkbox checkbox-pink">
                    <input id="checkbox6b2" type="checkbox" checked={loopNotification} onChange={(e) => handleStateChange('loopNotification', e)} />
                    <label htmlFor="checkbox6b2" className="text-muted">
                        Loop notifications
                    </label>
                </div>
            </li>
            <li>
                <div className="checkbox checkbox-pink">
                    <input id="checkbox6b3" type="checkbox" checked={delayNotification} onChange={(e) => handleStateChange('delayNotification', e)} />
                    <label htmlFor="checkbox6b3" className="text-muted">
                        Randomize delay between notifications
                    </label>
                </div>
            </li>
            <li>
                <div className="checkbox checkbox-pink">
                    <input id="checkbox6b4" type="checkbox" checked={closeNotification} onChange={(e) => handleStateChange('closeNotification', e)} />
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
                <select className="custom-select  muted-text" value={popupAnimationIn} onChange={(e) => handleStateChange('popupAnimationIn', e.target.value)}>
                    <option value="Fade in Up">Fade in Up</option>
                    <option value="Fade in Left">Fade in Left</option>
                    <option value="Fade in Bottom">Fade in Bottom</option>
                    <option value="Fade in Right">Fade in Right</option>
                    <option value="Bounce in Up">Bounce in Up </option>
                    <option value="Bounce in Right">Bounce in Right</option>
                    <option value="Bounce in Left">Bounce in Left</option>
                    <option value="Bounce in Bottom">Bounce in Bottom</option>


                </select>
            </li>
            <li className="mt-4">

                <label className="text-muted">
                    Select Popout Notification Animation
                </label>
                <select className="custom-select  muted-text" value={popupAnimationOut} onChange={(e) => handleStateChange('popupAnimationOut', e.target.value)}>
                    <option value="Fade out Up">Fade out Up</option>
                    <option value="Fade out Left">Fade out Left</option>
                    <option value="Fade out Bottom">Fade out Bottom</option>
                    <option value="Fade out Right">Fade out Right</option>
                    <option value="Bounce out Up">Bounce out Up </option>
                    <option value="Bounce out Right">Bounce out Right</option>
                    <option value="Bounce out Left">Bounce out Left</option>
                    <option value="Bounce out Bottom">Bounce out Bottom</option>

                </select>
            </li>
        </ul>
    </div>
  );
}

export default LeftView;
