import React from 'react';


const AnalyticsProfile = ({renderProfileList }) => {
  return (
    <div className="card-box analytics-profile">
      <div className="analytics-header">
        <h4 className="m-t-0 header-title">Customer Identities</h4>
      </div>
      <div className="table-responsive">
        <div className="table table-striped">
          <div className="thead tab-header flex">
            <div className="tr tab-row flex row">
              <div className="th text-center col-md-1">#</div>
              <div className="img th text-center col-md-2">Photo</div>
              <div className="th text-center col-md-1">Name</div>
              <div className="th text-center col-md-4">Email</div>
              <div className="th text-center col-md-1">Location</div>
              <div className="th text-center col-md-1">Country</div>
              <div className="th text-center col-md-1">Sign up on</div>
              <div className="th text-center col-md-1">Action</div>
            </div>
          </div>
          <div className="tbody tab-body">
            {renderProfileList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsProfile;
