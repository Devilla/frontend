import React,{ Component } from 'react';
import './WebsiteSignupPayment.scss';
// import { Paypal } from 'img';
import  LoginFlow from '../LoginFlow/LoginFlow';


class WebsiteSignupPayment extends Component  {

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
                <div className=" col-md-7 card-link">
                  <div>
                    <LoginFlow />
                  </div>
                </div>

                <div className="vristrue ml-5">
                </div>

                <div className="col-md-4 socio-link">
             
                  <div className="mt--2 ">
                    {/* <img alt="checkout-paypal"  src={Paypal}  className="paypal"/> */}
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input type="hidden" name="hosted_button_id" value="H69GLU3UHJYK4" />
                      <input type="image" src="http://www.useinfluence.co" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                      <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" />
                    </form>
                  
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