import React from 'react';
import { browserHistory } from 'react-router';
import { CircleIndicator, BarIndicator } from 'react-indicators';

import './CampaignFooter.scss';

const CampaignFooter = ({step, setActiveState, goLive}) => {
  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left btn-footer-1" onClick={() => step==1?browserHistory.push('/campaigns'):setActiveState(step-1)}>Prev</button>
        <div className="influence-react-indicator" >
          <CircleIndicator className="circle-1" progress={step>=1?1:0} stroke="white" strokeWidth={2} fill="#5bc739" fillBackground="#417ece" size={20} onClick={() => setActiveState(1)} />
          <BarIndicator progress={step>1?1:0} width={120} color="#5bc739" backgroundColor="#417ece" className="footer-progress-bar bar-1" />
          <CircleIndicator className="circle-2" progress={step>=2?1:0} stroke="white" strokeWidth={2} fill="#5bc739" fillBackground="#417ece" size={20} onClick={() => setActiveState(2)} />
          <BarIndicator progress={step>2?1:0} width={120} color="#5bc739" backgroundColor="#417ece" className="footer-progress-bar bar-2" />
          <CircleIndicator className="circle-3" progress={step>=3?1:0} stroke="white" strokeWidth={2} fill="#5bc739" fillBackground="#417ece" size={20} onClick={() => setActiveState(3)} />
          <BarIndicator progress={step>3?1:0} width={120} color="#5bc739" backgroundColor="#417ece" className="footer-progress-bar bar-3" />
          <CircleIndicator className="circle-4" progress={step>=4?1:0} stroke="white" strokeWidth={2} fill="#5bc739" fillBackground="#417ece" size={20} onClick={() => setActiveState(4)} />
          <BarIndicator progress={step>4?1:0} width={120} color="#5bc739" backgroundColor="#417ece" className="footer-progress-bar bar-4" />
          <CircleIndicator className="circle-5" progress={step>=5?1:0} stroke="white" strokeWidth={2} fill="#5bc739" fillBackground="#417ece" size={20} onClick={() => setActiveState(5)} />
        </div>
        <button type="button" className="text-center btn-footer-2 mr-1" onClick={() => step == 5?'':setActiveState(step+1)}>{step == 5?'Finish':'Next'}</button>
        <button type="button" className="btn-right btn-footer-3 ml-1" data-toggle="modal" data-target="#myModallive" onClick={goLive}>Publish</button>
      </div>
    </div>
  );
};

export default CampaignFooter;
