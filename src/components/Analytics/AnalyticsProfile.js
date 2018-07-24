import React from 'react';


const AnalyticsProfile = ({ handleProfileBack, renderProfileList }) => {
  return (
    <div className="card-box analytics-profile">
      <div className="analytics-header">
        <h4 className="m-t-0 header-title">Analytics/View Profile</h4>
        <button type="button" className="btn btn-primary  waves-light waves-effect number back-btn" style={{borderRadius:'5px'}} onClick={handleProfileBack}>Back</button>
      </div>
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
  );
};

export default AnalyticsProfile;
