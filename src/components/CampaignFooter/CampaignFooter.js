import React from 'react';
import { browserHistory } from 'react-router';
import { CircleIndicator, BarIndicator } from 'react-indicators';

import './CampaignFooter.scss';

const CampaignFooter = ({step, setActiveState, goLive}) => {
  return (
    <div className="campaign-footer-container">
      <div className="campaign-footer-steps">
        <button type="button" className="text-left btn-footer" onClick={() => step==1?browserHistory.push('/campaigns'):setActiveState(step-1)}>Prev</button>
        <div className="influence-react-indicator" >
          <CircleIndicator progress={step>=1?1:0} stroke="white" strokeWidth={1} fill="white" fillBackground="lightgray" size={20} onClick={() => setActiveState(1)} />
          <BarIndicator progress={step>1?1:0} width={30} color="white" backgroundColor="lightgray" className="footer-progress-bar" />
          <CircleIndicator progress={step>=2?1:0} stroke="white" strokeWidth={1} fill="white" fillBackground="lightgray" size={20} onClick={() => setActiveState(2)} />
          <BarIndicator progress={step>2?1:0} width={30} color="white" backgroundColor="lightgray" className="footer-progress-bar" />
          <CircleIndicator progress={step>=3?1:0} stroke="white" strokeWidth={1} fill="white" fillBackground="lightgray" size={20} onClick={() => setActiveState(3)} />
          <BarIndicator progress={step>3?1:0} width={30} color="white" backgroundColor="lightgray" className="footer-progress-bar" />
          <CircleIndicator progress={step>=4?1:0} stroke="white" strokeWidth={1} fill="white" fillBackground="lightgray" size={20} onClick={() => setActiveState(4)} />
          <BarIndicator progress={step>4?1:0} width={30} color="white" backgroundColor="lightgray" className="footer-progress-bar" />
          <CircleIndicator progress={step>=5?1:0} stroke="white" strokeWidth={1} fill="white" fillBackground="lightgray" size={20} onClick={() => setActiveState(5)} />
        </div>
        <button type="button" className="text-center btn-footer mr-1" onClick={() => step == 5?'':setActiveState(step+1)}>{step == 5?'Finish':'Next'}</button>
        <button type="button" className="btn-right btn-footer ml-1" data-toggle="modal" data-target="#myModallive" onClick={goLive}>Publish</button>
      </div>
    </div>
  );
};

export default CampaignFooter;
