import React from 'react';
import { Link }  from 'react-router';

const Analytics = ({ renderList }) => {
  return (
    <div className="card-box">
      <h4 className="m-t-0 header-title"><Link to="/dashboard"><i className="icon-arrow-left mr-3"></i></Link>Analytics</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th className="text-center">DOMAIN</th>
            <th className="text-center">TOTAL VISITORS</th>
            <th className="text-center">SIGNUPS</th>
            <th className="text-center">LIVE STATS</th>
            <th className="text-center">CONVERSION %</th>
            <th className="text-center">Visualize</th>
          </tr>
        </thead>
        <tbody>
          {renderList()}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
