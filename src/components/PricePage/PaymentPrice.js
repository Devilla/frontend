import React, { Component } from 'react';
import Switch from 'react-flexible-switch';

const PaymentPrice = ({planList, planPeriod, returnRates, handleMonthChange, handleSwitchChange, handleYearChange, externalValue, selectedPlan, handleCheckChange }) => {
  return (
    <div style={{width:'100%'}}>
      <div className="price">
        <div className="pricing-row w-row" style={{width:'100%'}}>
          <div className="w-col filter">
            <ul>
              <li>
                <a href="javascript:;" className={!externalValue
                    ? 'active'
                    : ''
                  } onClick={handleMonthChange}>Monthly</a>
              </li>
              <li>
                <Switch circleStyles={{
                  onColor: 'blue',
                  offColor: 'blue',
                  diameter: 18
                }} switchStyles={{
                  width: 50
                }} value={externalValue} onChange={handleSwitchChange}/>
              </li>
              <li>
                <a href="javascript:;" className={externalValue
                    ? 'active'
                    : ''
                  }
                onClick={handleYearChange}>Yearly</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{width: '100%', display: 'flex'}}>
        {planList?
          planList.map((plan, index) =>
            <div className="card" style={{ width: '50%', padding: '5%', margin: '0 1%'}}>
              <div className="card-body">
                <h5 className="card-title">{plan.planName}</h5>
                <span className="card-text">
                  {plan.planType}
                </span>
                <p className="card-text">
                  <h5>{returnRates(plan.amount)}</h5>
                </p>
                <input
                  type="radio"
                  value={plan._id}
                  checked={
                    plan._id == selectedPlan ?
                      "checked"
                    :
                      false
                    }
                  id="plan"
                  name="plan"
                  onChange={(e) => handleCheckChange(e.target, e.target.value, plan.amount*planPeriod)}
                />
              </div>
            </div>
          )
        :
          <div>No Plan to select from.</div>
        }
      </div>

    </div>
  );
}

export default PaymentPrice;
