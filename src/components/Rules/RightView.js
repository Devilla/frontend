import React from 'react';

const RightView = ({
  handleStateChange,
  initialDelay,
  displayTime,
  delayBetween,
  displayPosition
}) => {
  return (
    <div className="col-md-6 pl-5">
      <ul className="text-muted text-left list-unstyled">
        <li>
          <label className="text-muted">
            Initial delay in starting first notification(seconds)
          </label>
          <input
            type="number"
            className="form-control custom-select col-md-3"
            placeholder="Enter Seconds..."
            value={initialDelay}
            onChange={(e) => handleStateChange('initialDelay', e.target.value)}
          />
        </li>
        <li className="mt-4">
          <label className="text-muted">
              Display time for each notification(seconds)
          </label>
          <input
            type="number"
            className="form-control custom-select   col-md-3"
            placeholder="Enter Seconds..."
            value={displayTime}
            onChange={(e) => handleStateChange('displayTime', e.target.value)}
          />
        </li>
        <li className="mt-4 pt-2">
          <label  className="text-muted">
            Delay between subsequent notifications(seconds)  
          </label>
          <input
            type="number"
            className="form-control custom-select col-md-3"
            placeholder="Enter Seconds..."
            value={delayBetween}
            onChange={(e) => handleStateChange('delayBetween', e.target.value)}
          />
        </li>
        <li className="mt-4">
          <label  data-toggle="tooltip" title="Hooray!" className="text-muted">
            Select position for popup notification
          </label>
          <select className="form-control muted-text" value={displayPosition} onChange={(e) => handleStateChange('displayPosition', e.target.value)}>
            <option value="Bottom left">Bottom Left</option>
            <option value="Bottom Right">Bottom Right</option>
            <option value="Bottom Center">Bottom Center</option>
            <option value="Top Left">Top Left</option>
            <option value="Top Right">Top Right</option>
            <option value="Top Center">Top Center</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default RightView;
