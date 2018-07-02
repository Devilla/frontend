import React, { Component } from 'react';
import './WebsiteSignupPayment.scss';
import { Paypal } from 'img';


class WebsiteSignupPayment extends Component {

  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }
  render() {

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
                   
                    <form className="mt-0" >
                      <div className="row justify-content-center">
                   
                      
                        <div className="col-md-9 col-sm-8 mb-5 ">
                          <input name="name"
                            className="field w-input"
                            placeholder="Name"
                            type="text"
                          />
                       
                        </div>
                      
                        <div className="col-md-9 col-sm-8">
                          <input type="text"
                            name="Card number"
                            className="field w-input "
                            placeholder="Stripe Card Number "
                        
                          />
                     
                        </div>

                        <div className="col-md-9 col-sm-8 frmcntl">
                          <input
                            className="button submit-button w-button btn btn--primary ml-0"
                            type="submit"
                            value="Start FREE trial"
                         
                          />
                        </div>
                      </div>
                    </form>
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
  }
}
export default WebsiteSignupPayment;