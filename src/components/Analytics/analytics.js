import React from 'react';
import './analytics.scss';

const Analytics = ({ renderList }) => {
  return (
    <div className="table-responsive">
      <div className="table table-striped">
        <div className="thead tab-header flex">
          <div className="tr tab-row flex row">
            <div className="th text-center col-md-1">#</div>
            <div className="th-1 text-center col-md-3">DOMAIN</div>
            <div className="th-2 text-center col-md-2">TOTAL VISITORS</div>
            <div className="th-3 text-center col-md-2">SIGNUPS</div>
            <div className="th-4 text-center col-md-1">LIVE STATS</div>
            <div className="th-5 text-center col-md-2">CONVERSION %</div>
            <div className="th-6 text-center col-md-1">Visualize</div>
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
