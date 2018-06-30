import React from 'react';

const Analytics = ({ renderList }) => {
  return (
    <div className="card-box">
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
