import React from 'react';
// import 'rc-steps/assets/index.css';
// import 'rc-steps/assets/iconfont.css';
import { CircleIndicator, BarIndicator } from 'react-indicators';

import './CampaignFooter.scss';

const CampaignFooter = () => {
  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left" style={{backgroundColor:'#5ac73a'}} >Prev</button>
        <CircleIndicator progress='10' width='80' fillBackground="white" size="30" />
        <BarIndicator progress='10' width='80' fillBackground="white" size="30" />
        <CircleIndicator progress='10' width='80' fillBackground="white" size="30" />
        <BarIndicator progress='10' width='80' fillBackground="white" size="30" />
        <CircleIndicator progress='10' width='80' fillBackground="white" size="30" />
        <button type="button" className="text-center"  style={{backgroundColor:'#5ac73a'}} onClick={this.handleNextButton}>Next</button>
        <button type="button" className="btn-right" style={{backgroundColor:'#5ac73a'}} onClick={this.goLive}>Publish</button>
      </div>
    </div>
  );
};

export default CampaignFooter;
