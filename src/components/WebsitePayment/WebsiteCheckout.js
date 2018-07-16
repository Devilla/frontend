import React from 'react';
import './WebsiteCheckout.scss';
import  LoginFlow from '../LoginFlow/LoginFlow';

const WebsiteCheckout = ({ selectedPlan, clearSelectedPlan, coupon, couponDetails }) =>  {
  (function() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  })();

  return (
    <div className="websitecheckout-container">
      <div className="main-container">
        <h2 className="text-center btn" disabled  > STEP 3</h2>
        <p className="paytitle"> &nbsp;&nbsp;Create your Account !</p>
        <section className="bg--secondary pt-0">
          <div className="container text-center">
            <div className="row give-center-align">
              <div className=" col-md-12 card-link">
                <div>
                  <LoginFlow
                    coupon={coupon}
                    couponDetails={couponDetails}
                    selectedPlan={selectedPlan}
                    clearSelectedPlan={clearSelectedPlan}
                  />
                </div>
              </div>
              {/* <div className="vristrue ml-5">
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebsiteCheckout;
