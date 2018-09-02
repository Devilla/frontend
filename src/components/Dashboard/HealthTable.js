import React from 'react';
import moment from 'moment';

const HealthTable = ({campaigns}) => {

  const renderCampaignTable = () => {
    return campaigns.map((campaign, i) => {
      return (
        <div className="campaign-td tr" key={i}>
          <div className="td col-md-3 text-center p-1">{campaign.campaignName}</div>
          <div className="td col-md-3 text-center p-1">{campaign.websiteUrl}</div>
          <div className="td col-md-3 text-center p-1 health-col">
            <i className={`fa ${campaign.health == 'good'?'fa-check-circle':campaign.health == 'poor'?'fa-exclamation-circle':'fa-times-circle'}`}></i>
            <div>{campaign.health}</div>
          </div>
          <div className="td col-md-3 text-center p-1">{moment(campaign.updatedAt).format('MM/DD/YYYY')}</div>
        </div>
      );
    });
  };

  return (
    <div className="table-responsive">
      <div className="table table-striped">
        <div className="thead flex">
          <div className="tr tab-row">
            <div className="th col-md-3 text-center p-1">CAMPAIGN</div>
            <div className="th col-md-3 text-center p-1">DOMAIN</div>
            <div className="th col-md-3 text-center p-1 pr-3">HEALTH</div>
            <div className="th col-md-3 text-center p-1">CREATED/UPDATED</div>
          </div>
        </div>
        <div className="tbody tab-body">
          {renderCampaignTable()}
        </div>
      </div>
    </div>
  );
};

export default HealthTable;
