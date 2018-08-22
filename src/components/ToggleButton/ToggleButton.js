import React from 'react';
import './ToggleButton.scss';

const ToggleButton = () => {
  return (
    <div className="col-sm-5 toggle-custom-button">
      <button type="button" className="btn btn-sm btn-secondary btn-toggle active" data-toggle="button" aria-pressed="true" autoComplete="off">
        <div className="handle"></div>
      </button>
    </div>
  );
};

export default ToggleButton;
