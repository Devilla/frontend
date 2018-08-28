import React from 'react';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';
import { CircleIndicator, BarIndicator } from 'react-indicators';

import './CampaignFooter.scss';

const CampaignFooter = () => {
  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left btn-footer" >Prev</button>
        <div className="influence-react-indicator" >
          <CircleIndicator progress='1' width='80' fillBackground="white" size="30" className="influence-react-indicator-current" />
          <BarIndicator progress='1' width='80' fillBackground="white" size="30" />
          <CircleIndicator progress='0' width='80' fillBackground="white" size="30" />
          <BarIndicator progress='0' width='80' fillBackground="white" size="30" />
          <CircleIndicator progress='1' width='80' fillBackground="white" size="30" />
        </div>
        <button type="button" className="text-center btn-footer mr-1" onClick={this.handleNextButton}>Next</button>
        <button type="button" className="btn-right btn-footer ml-1" onClick={this.goLive}>Publish</button>
      </div>
    </div>
  );
};

export default CampaignFooter;
