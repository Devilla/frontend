import React from 'react';
import './Spinner.scss';

const Spinner = ({ loading }) =>
  <div className="customer-loader" style={{ display: loading ? 'flex' : 'none', width: '100%' }}>
    <div className="sk-wave">
      <div className="sk-rect sk-rect1"></div>
      <div className="sk-rect sk-rect2"></div>
      <div className="sk-rect sk-rect3"></div>
      <div className="sk-rect sk-rect4"></div>
      <div className="sk-rect sk-rect5"></div>
    </div>
  </div>;


export default Spinner;
