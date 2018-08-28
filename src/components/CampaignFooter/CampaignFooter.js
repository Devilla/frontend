import React from 'react';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

import './CampaignFooter.scss';

const CampaignFooter = () => {
  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left" style={{backgroundColor:'#5ac73a'}} >Prev</button>
        <Steps progressDot size="small" current={1}>
          <Step title="Notification" />
          <Step title="Rules" />
          <Step title="Capture" />
          <Step title="Display" />
          <Step title="Install" />
        </Steps>
        <button type="button" className="text-center"  style={{backgroundColor:'#5ac73a'}} onClick={this.handleNextButton}>Next</button>
        <button type="button" className="btn-right" style={{backgroundColor:'#5ac73a'}} onClick={this.goLive}>Publish</button>
      </div>
    </div>
  );
};

export default CampaignFooter;
