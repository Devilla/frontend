import React from 'react';
import CampaignType from './CampaignType';
import CampaignInfo from './CampaignInfo';

import './Campaign.scss';

const Campaign = (props) => {
  return (
    <div className="content fill campaign-container">
      {!props.campaignType?
        <CampaignType  handleCampaignType={props.handleCampaignType} />
        :
        <CampaignInfo {...props}/>
      }
    </div>
  );
};

export default Campaign;
