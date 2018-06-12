import {React} from 'react';
import './PaymentPrice.scss';

const PaymentPrice = ({ planPeriod, planList, handleMonthChange, handleSwitchChange, handleYearChange, externalValue, selectedPlan, handleCheckChange }) => {
  planList = planList.filter(plan => planPeriod == 12 ? plan.interval == 'year' : plan.interval == 'month');
  planList = planList.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <div style={{ width: '100%' }}>
      <div className="price">
        <div className="pricing-row w-row" style={{ width: '100%' }}>
          <div className="w-col">
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
                }} value={externalValue} onChange={handleSwitchChange} />
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
      <div className="row">
        {planList ?
          planList.map((plan) =>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <div style={{ minHeight: '110px' }}>
                  <h3 className="title">{plan.name}</h3>
                  <div className="price-value">${plan.interval === 'year' ? plan.amount / 1200 : plan.amount / 100}
                    <span className="month">Per Month</span>
                  </div>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>{plan.description}</li>
                  </ul>
                  <a className={selectedPlan.id === plan.id ? 'pricingTable-signup-active' : 'pricingTable-signup'} onClick={() => handleCheckChange(true, plan)}>
                    Select
                  </a>
                </div>
              </div>
            </div>
          )
          :
          <div>No Plan to select from.</div>
        }
      </div>
    </div>
  );
};

export default PaymentPrice;
