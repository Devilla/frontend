import React from 'react';
import Switch from 'react-flexible-switch';
import './PricePage.scss';

const PricePage = ({
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

  planList = planList.sort(function (a, b) {
    return b.id - a.id;
  });

  function filterPlanName(planName) {
    let res = '';
    switch (true) {
      case /\b(Enterprise)\b/m.test(planName): res = 'Enterprise'; break;
      case /\b(Advanced)\b/m.test(planName): res = 'Advanced'; break;
      case /\b(Small)\b/m.test(planName): res = 'Small'; break;
      case /\b(Startups)\b/m.test(planName): res = 'Startups'; break;
      default: break;
    }
    return res;
  }

  return (
    <div style={{ width: '100%' }}>
      <div className="price">
        <div className="pricing-row w-row" style={{ width: '100%' }}>
          <div className="w-col">
            <ul>
              <li>
                <span className={!externalValue
                  ? 'active btn btn-outline-success waves-light waves-effect mr-2 set-br'
                  : 'btn btn-outline-info waves-light waves-effect mr-2 set-br'
                } onClick={handleMonthChange}>Monthly</span>
              </li>
              <li className="mt-3" style={{ display: 'none' }}>
                <Switch
                  circleStyles={{
                    onColor: '#097fff',
                    offColor: 'grey',
                    diameter: 18
                  }} switchStyles={{
                    width: 50
                  }} value={externalValue} onChange={handleSwitchChange} />
              </li>
              <li>
                <span className={externalValue
                  ? 'active btn btn-outline-success waves-light waves-effect ml-2 set-br'
                  : 'btn btn-outline-info waves-light waves-effect ml-2 set-br'
                }
                onClick={handleYearChange}
                >
                  &nbsp;Yearly&nbsp;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        {planList ?
          planList.map((plan, index) =>
            <div key={index} className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <div className="price_card text-center">
                  <div className="pricing-header bg-primary">
                    <span className="price">${plan.interval === 'year' ? plan.amount / 1000 : plan.amount / 100}</span>
                    <span className="name">{filterPlanName(plan.name)}</span>
                  </div>
                  <div className="pricing-content">
                    <ul className="price-features" style={{ minHeight: '150px' }}>
                      <li><div dangerouslySetInnerHTML={{ __html: plan.details }} /></li>
                    </ul>

                    <a className={selectedPlan.id === plan.id ? 'active btn btn-outline-success waves-light waves-effect mr-2 pricingTable-signup' : 'btn btn-outline-info waves-light waves-effect ml-2 pricingTable-signup'} onClick={() => handleCheckChange(true, plan)}>
                      Select
                    </a>

                  </div>
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

export default PricePage;
