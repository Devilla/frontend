import React, { Component } from 'react';
import Switch from 'react-flexible-switch';
import './PaymentPrice.scss';

const PaymentPrice = ({planPeriod, planList, returnRates, handleMonthChange, handleSwitchChange, handleYearChange, externalValue, selectedPlan, handleCheckChange }) => {
  planList = planList.filter(plan => planPeriod == 12 ? plan.interval=='year': plan.interval=='month')
  planList = planList.sort(function(a, b) {
    return b.id - a.id;
  });
  return (
    <div style={{width:'100%'}}>

      <div className="row" 
        style={{color:'white', fontWeight:'Bold'}}
        >
        {planList?
          planList.map((plan, index) =>
            // <div className="row">
              <div className="col-md-3 col-sm-6"  style={{color:'white', fontWeight:'Bold'}}>
                <div className="pricingTable"  style={{backgroundColor:"blue",color:'white', fontWeight:'Bold'}}>
                  <div style={{minHeight: '110px',backgroundColor:"blue", color:'white', fontWeight:'Bold'}}>
                    <h3 className="title" style={{backgroundColor:"blue", color:'white', fontWeight:'Bold'}}>{plan.name}</h3>
                    <div className="price-value" style={{backgroundColor:"blue", color:'white', fontWeight:'Bold'}}>${plan.interval === 'year' ? plan.amount/1200 : plan.amount/100}
                        <span className="month" style={{color:'white', fontWeight:'Bold'}}>Per Month</span>
                    </div>
                  </div>
                  <div className="pricing-content" style={{fontWeight:'Bold'}}>
                      <ul style={{ fontWeight:'Bold'}}>
                          <li style={{fontWeight:'Bold'}}>{plan.description}</li>
                      </ul>
                      <a className={selectedPlan.id === plan.id ? "pricingTable-signup-active" : "pricingTable-signup"} style={{fontWeight:'Bold'}} onClick={(e) => handleCheckChange(true, plan)}>
                        Select
                      </a>
                  </div>
                </div>
              </div>
          )
        :
          <div style={{color:'white', fontWeight:'Bold'}}>No Plan to select from.</div>
        }

      </div>
    </div>
  );
}

export default PaymentPrice;
