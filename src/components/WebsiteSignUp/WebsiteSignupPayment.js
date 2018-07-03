import React from 'react';
import './WebsiteSignupPayment.scss';
import { Paypal } from 'img';
import  LoginFlow from '../LoginFlow/LoginFlow';


const WebsiteSignupPayment= () =>  {

 
  return (
    <div className="websitesignuppayment-container">
      <div className="main-container">
        <h2 className="text-center btn" disabled  > STEP 3</h2>
        <p className="paytitle"> &nbsp;&nbsp;Create your Account !</p>
        <section className="bg--secondary pt-0">
          <div className="container text-center">
            <div className="row give-center-align">
              <div className="col-sm-12 col-md-7 col-lg-6">
                <div>
                  <LoginFlow />
                </div>
              </div>

              <div className="vristrue ml-5">
              </div>

              <div className="col-md-5  socio-link">
             
                <div className="mt--2 ">
                  <img alt="checkout-paypal"  src={Paypal}  className="paypal"/>
                
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default WebsiteSignupPayment;