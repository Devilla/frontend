import React from 'react';


const AnalyticsProfile = ({renderProfileList }) => {
  return (
    <div className="card-box analytics-profile">
      <div className="analytics-header">
        <h4 className="m-t-0 header-title">Analytics/View Profile</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th className="img">Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Country</th>
              <th>Sign up on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderProfileList()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsProfile;
