import React from 'react';
import { browserHistory } from 'react-router';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

import './CampaignFooter.scss';

const CampaignFooter = ({step, setActiveState, goLive, campaign, notification, saveConfigure, setDefault}) => {
  const campaignPageCondition = campaign.campaignType !== 'page';

  const handleNextState = (nextStep) => {
    if(campaign && campaign.campaignType == 'page' && nextStep == 3)
      setActiveState(5);
    else
      setActiveState(nextStep);
  };

  const handlePreviousState = (previousStep) => {
    if(campaign && campaign.campaignType == 'page' && previousStep == 4)
      setActiveState(2);
    else
      setActiveState(previousStep);
  };

  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left btn-footer-1" onClick={() => step==1?browserHistory.push('/campaigns'):handlePreviousState(step-1)}>Prev</button>
        <div className="influence-react-indicator" >
          <Steps progressDot size="small" current={step-1}>
            <Step />
            <Step />
            {campaignPageCondition && <Step />}
            {campaignPageCondition && <Step />}
            <Step />
          </Steps>
        </div>
        {notification?
          <div>
            <button type="button" className="text-center btn-footer-2 mr-1" onClick={setDefault}>Default</button>
            <button type="button" className="btn-right btn-footer-3 ml-1" onClick={saveConfigure}>Save</button>
          </div>
          :
          <div>
            <button type="button" className="text-center btn-footer-2 mr-1" onClick={() => step == 5?'':handleNextState(step+1)}>{step == 5?'Finish':'Next'}</button>
            <button type="button" className="btn-right btn-footer-3 ml-1" data-toggle="modal" data-target="#myModallive" onClick={goLive}>Publish</button>
          </div>
        }
      </div>
    </div>
  );
};

export default CampaignFooter;
