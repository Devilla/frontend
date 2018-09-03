import React from 'react';
import './analytics.scss';

const Analytics = ({ renderList }) => {
  return (
    <div className="table-responsive analytics-table-container">
      <div className="table table-striped">
        <div className="thead tab-header flex">
          <div className="tr tab-row flex row">
            <div className="th text-center col-md-1 analytics-width-5">#</div>
            <div className="th text-center col-md-3 analytics-width-20">DOMAIN</div>
            <div className="th text-center col-md-2 analytics-width-20">TOTAL VISITORS</div>
            <div className="th text-center col-md-2 analytics-width-15">SIGNUPS</div>
            <div className="th text-center col-md-2 analytics-width-20">CONVERSION %</div>
            <div className="th text-center col-md-2 analytics-width-20">Visualize</div>
          </div>
        </div>
        <div className="tbody tab-body">
          {renderList()}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
