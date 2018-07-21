import React from 'react';
import './PricePage.scss';

const PricePage = ({
  planPeriod,
  planList,
  handleMonthChange,
  handleYearChange,
  selectedPlan,
  handleCheckChange,
  couponDetails,
  externalValue,
  monthOpaque,
  yearOpaque
}) => {

  
  if(couponDetails) {
    planList = planList.filter(plan => plan.references.service_template_properties.length && plan.references.service_template_properties[0].data.value === couponDetails.code);
  } else {
    planList = planList.filter(plan =>
      (planPeriod == 1 ? plan.interval=='month': plan.interval=='year') &&
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


  function monthlyPriceHandler () {

    return planList.map((plan, index) =>
      <div key={index} className="col-md-3 col-sm-6">      
        <div className="pricingTable" onClick={handleMonthChange}>
          <div className="price_card text-center"  className={selectedPlan.id === plan.id ? 'makebx' : ''} onClick={() => handleCheckChange(true, plan)}>
            <div className="pricing-header bg-primary">
              <span className="price">${plan.interval === 'month' ? plan.amount / 100 : '' }</span>
              <span className="name">{filterPlanName(plan.name)}</span>
            </div>
            <div className="pricing-content pt-4">
              <ul className="price-features">
                <li><div dangerouslySetInnerHTML={{ __html:  plan.details }} /></li>
              </ul>

            </div>
          </div>
        </div>
      </div>);
  }
  
  function yearlyPriceHandler () {
    return planList.map((plan, index) =>
      <div key={index} className="col-md-3 col-sm-6">
        <div className="pricingTable"  onClick={handleYearChange}>
          <div className="price_card text-center"  className={selectedPlan.id === plan.id ? 'makebx' : ''} onClick={() => handleCheckChange(true, plan)}>
            <div className="pricing-header bg-primary">
              <span className="price">${plan.interval === 'year' ? plan.amount / 100 :  ''}</span>
              <span className="name">{filterPlanName(plan.name)}</span>
            </div>
            <div className="pricing-content pt-4">
              <ul className="price-features">
                <li><div dangerouslySetInnerHTML={{ __html:  plan.details }} /></li>
              </ul>

        

            </div>
          </div>
        </div>
      </div>);
  }
  

  return (
    <div style={{ width: '100%' }}>
      <div className="price">
        <div className="pricing-row w-row" style={{ width: '100%' }}>
          <div className="w-col">
            <span className={!externalValue
              ? 'active btn btn-outline-success waves-light waves-effect mr-2 set-br'
              : 'btn btn-outline-info waves-light waves-effect mr-2 set-br'
            } onClick={handleMonthChange}>Monthly</span>
          </div>
        </div>
      </div>
      <div className={'row'} style={monthOpaque}>
      
        { planList ? 
          monthlyPriceHandler()
          : 
          <div>No Plan to select from.</div> 
        }

      </div>
      <div className="price">
        <div className="pricing-row w-row" style={{ width: '100%' }}>
          <div className="w-col">
            <span className={externalValue
              ? 'active btn btn-outline-success waves-light waves-effect ml-2 set-br'
              : 'btn btn-outline-info waves-light waves-effect ml-2 set-br'
            }
            onClick={handleYearChange}
            >
                  &nbsp;Yearly&nbsp;
            </span>
          </div>
        </div>
      </div>
      <div className={'row'} style={yearOpaque}>
      
        { planList ? 
          yearlyPriceHandler()
          : 
          <div>No Plan to select from.</div> 
        }

      </div>
    </div>
  );
};

export default PricePage;
