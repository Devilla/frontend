import React from 'react';
import moment from 'moment';
import { ProgressBar } from 'react-bootstrap';

const HealthTable = ({campaigns}) => {

  const renderCampaignTable = () => {
    return campaigns.map((campaign, i) => {
      return (
        <div className="campaign-td tr" key={i}>
          <div className="td col-md-3 text-center p-1">{campaign.campaignName}</div>
          <div className="td col-md-3 text-center p-1">{campaign.websiteUrl}</div>
          <div className="td col-md-3 text-center p-1 health-col">
            <ProgressBar active bsStyle={campaign.health == 'good'?'info':campaign.health == 'poor'?'warning':'danger'} now={campaign.health == 'good'?100:campaign.health == 'poor'?50:25} key={1} />
          </div>
          <div className="td col-md-3 text-center p-1">{moment(campaign.updatedAt).format('MM/DD/YYYY')}</div>
        </div>
      );
    });
  };

  return (
    <div className="table-responsive">
      <div className="table table-striped mr-5 ml-5" style={{width: '93%'}}>
        <div className="thead flex">
          <div className="tr tab-row">
            <div className="th col-md-3 text-center p-1">CAMPAIGN NAME</div>
            <div className="th col-md-3 text-center p-1">DOMAIN</div>
            <div className="th col-md-3 text-center p-1 pr-3">HEALTH STATUS</div>
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
