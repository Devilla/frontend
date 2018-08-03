import React from 'react';

import SubCampaignFields from './SubCampaignFields';

const SubCampaignList = (props) => {
  return (
    <div>
      {
        props.subcampaigns.map(subcampaign =>
          <div key={subcampaign._id} className="card" onClick={() => props.selectSubCampaign(props.selectedSubCampaign._id == subcampaign._id?null:subcampaign)}>
            <div className="card-header">
              <div className="header-body">
                <div className="name-width">{subcampaign.name}</div>
                <div className="url-width">{subcampaign.productUrl}</div>
                <div className="header-status">
                  Status:
                  <div className="icon-box" style={{background: subcampaign.isActive?'lightgreen':'red'}}></div>
                </div>
                <i className={props.selectedSubCampaign._id == subcampaign._id?'icon-pointer-cursor icon-arrow-up pl-2':'icon-pointer-cursor icon-arrow-down pl-2'}>
                </i>
              </div>
            </div>
            {props.selectedSubCampaign._id == subcampaign._id &&
              <SubCampaignFields
                submitSubCampaign={props.updateSubCampaign}
                {...props}
              />
            }
          </div>
        )
      }
    </div>
  );
};

export default SubCampaignList;
