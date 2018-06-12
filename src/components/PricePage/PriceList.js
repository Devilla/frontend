import React, { Component } from 'react';

const PriceList = ({planList, returnRates, externalValue }) => {
  return (
    <div>
      {planList?
        planList.map((plan, index) =>
          <div className={index%2==0?
            'pricing-column w-col w-col-3'
            :
            'last pricing-titlecolumn w-col w-col-3'}
            >
            <div className="pricing-block">
              <div className="pricing-price-wrapper">
                <h2 className="pricing-title">{plan.planName}</h2>
                <h2 className="price pricing-title p1">
                  {returnRates(plan.amount)}
                </h2>
                <h2 className="monthly pricing-title d1">{
                    externalValue
                      ? 'Per month, billed annually'
                      : 'Per month'
                  }</h2>
                <div className="feature-divider section-divider-line"></div>
              </div>
              <ul className="pricing-feature-list w-list-unstyled">
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    <strong>{plan.configs.notification}</strong>
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.visitor}
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.domains}
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.branding}
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.support}
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.customization}
                  </div>
                </li>
                <li className="pricing-feature-list-item">
                  <div className="pricing-feature-text">
                    {plan.configs.integration}
                  </div>
                </li>
              </ul>
              <div className="pricing-button-wrapper">
                <a className="button price-button trial" href="javascript:;">Free Trial</a>
                <a className="button price-button" href="javascript:;">Buy Now</a>
              </div>
            </div>
          </div>
        )
      :
        <div>No Plan to select from.</div>
      }
    </div>
  );
}

export default PriceList;
