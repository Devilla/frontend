import React from 'react';
import Switch from 'react-flexible-switch';
import './PaymentPrice.scss';

const PaymentPrice = ({
  planPeriod,
  planList,
  handleMonthChange,
  handleSwitchChange,
  handleYearChange,
  externalValue,
  selectedPlan,
  handleCheckChange,
  couponDetails
}) => {

  if(couponDetails) {
    planList = planList.filter(plan => plan.references.service_template_properties.length && plan.references.service_template_properties[0].data.value === couponDetails.code);
  } else {
    planList = planList.filter(plan =>
      (planPeriod == 12 ? plan.interval=='year': plan.interval=='month') &&
      (plan.references.service_template_properties[0].name !== 'coupon')
    );
  }

  planList = planList.sort(function(a, b) {
    return b.id - a.id;
  });

  return (
    <div style={{ width: '100%' }}>
      <div className="price">
        <div className="pricing-row w-row" style={{width:'100%'}}>
          {!couponDetails &&
            <div className="w-col">
              <ul>
                <li>
                  <a href="javascript:;" className={!externalValue?
                    'active'
                    :
                    ''
                  }
                  onClick={handleMonthChange}>Monthly</a>
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
          }
        </div>
      </div>
      <div className="row">
        {planList?
          planList.map((plan) => <div key={plan.id} className="col-md-3 col-sm-6">
            <div className="pricingTable">
              <div style={{ minHeight: '110px' }}>
                <h3 className="title">{plan.name}</h3>
                <div className="price-value">${plan.interval === 'year' ? plan.amount / 1200 : plan.amount / 100}
                  <span className="month">Per Month</span>
                </div>
              </div>
              <div className="pricing-content">
                <ul>
                  <li><div dangerouslySetInnerHTML={{ __html: plan.details }} /></li>
                </ul>
                <a className={selectedPlan.id === plan.id ? 'pricingTable-signup-active' : 'pricingTable-signup'} onClick={() => handleCheckChange(true, plan)}>
                  Select
                </a>
              </div>
            </div>
          </div>)
          :
          <div>No Plan to select from.</div>
        }
      </div>
    </div>
  );
};

export default PaymentPrice;
