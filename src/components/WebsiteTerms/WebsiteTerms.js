import React, { Component } from 'react';
import './WebsiteTerms.scss';

class WebsiteTerms extends Component {
  componentDidMount() {
    let scrollElm = document.scrollingElement;
    scrollElm.scrollTop = 0;
  }

  render() {
    return (
      <div className="WebsiteTerms-container">
        <div className="main-container">
          <section className="text-center bg--secondary">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <h2>Terms of service&nbsp;</h2>
                  <p className="lead"> ..... </p>
                </div>
              </div>
            </div>
          </section>
          <section className="text-left text-justify pos-left">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="boxed boxed--border boxed--lg lead">

                    <p>Please read these Terms & conditions of using the product carefully before using “ Influence“ operated by “ Target Solutions “. The use of this service is on your acceptance and agreement of the following terms and conditions. These conditions apply to everyone (visitors, users and others who access or use the product)
                    By using the service you agree to bound by these terms. If you disagree with any part of the terms then you may not access the service.</p>

                    <h3>Accounts</h3>
                    <p>When you set up an account with us, you must provide information which is accurate, complete and recent at all times. Failing to do so constitutes a breach of terms and condition, which may result in immediate termination of the services which you have taken up from the company. You are responsible for safeguarding the username and password details for your account. You agree not to disclose your password to any third party entity. You must notify us if you feel your user access details have been hacked or you need help with regarding to your credentials.</p>

                    <h3>Termination Of Services</h3>
                    <p>We may terminate or cut access to the product immediately, without prior notice or liability, for any reason, including limitation if you breach the terms and conditions of the product. Once terminated you will lose the access to the product with immediate effect. You can discontinue using the service in that case.</p>

                    <h3> Subscription, Free Trials, Billing and Cancellation </h3>
                    <p>Recurring Subscription: Your (useinfluence) subscription, which shall start with a free trial, will continue in a recurring billing cycle either month to month or year to year. You should have access to running internet and have a debit/credit card connected to the billing area of the dashboard.
                    We’ll bill either on monthly basis or annual subscription fee for your product usage. If you wish to discontinue using the product you must cancel your subscription before it renews each month in order to avoid billing for the next month’s subscription fees for you payment method.</p>

                    <h3>Offers</h3>
                    <p> We might run promotional offers and offer subscription plans with differential prices on the basis of discounts offered to the customers. Any different terms from those described in the Terms and conditions section shall be disclosed during the sign up process. You can find more details regarding the billing by going to (www.useinfluence.co) and click on the billing section within the product.
                    (Useinfluence) reserves the right to modify, terminate or cancel the subscription services.</p>

                    <h3>Free Trials</h3>
                    <p> Your (Useinfluence) will start with a free trial. Apart from that you will have access to a forever free version as well. The free trial period of other paid plans of your membership will last for about 7 days.
                    The forever free account will give you access to the product for free for lifetime with payment to be asked for it. We will begin the billing only when you shift to a paid version of the product.
                    To view specifics and more information about the billing date you should open the billing dashboard and check it from that section. We will send notification emails to you once you if in case you are exceeded the notifications section and you will be notified to update the card details so that you can have the product up and running for the rest of the month.
                    If you are unable to figure out, you can email us at (support@useinfluence.co). We will continue to bill your payment method on a month to month or year to year basis until you cancel it with us.</p>

                    <h3>Billing</h3>
                    <p>Recurring Billing: By starting to use our services and products you authorize us to charge you on a month to month basis or a year to year basis on subscription fee mentioned to you on the then mentioned current rate, and any other changes will be billed to your attached card.
                    By signing up for the services you also agree that amount may vary month to month or year to year for reasons that may include differing amounts due to offers, discounts, promotions, change in plans and limits, and you authorize us to change your payment methods for such varying amounts, which may be billed monthly or yearly in one or more charges.</p>

                    <h3>Pricing</h3>
                    <p>We at (Useinfluence) reserve the right to keep and make changes to the product pricing depending on the decision of the management team. The price changes of your usage or plan will only change after an intimation email to you.</p>

                    <h3>Subscription Cycle</h3>
                    <p>We will charge you subscription for every month or yearly basis until you cancel your subscription. We automatically deduct payment from your attached Banking/Card details on every month’s new cycle or year if in case of year payments.
                    We hold the rights to change the cycle of your billing given to serve you better on the product.</p>

                    <h3>Refunds</h3>
                    <p>Payments made to “ Useinfluence ” are non refundable and there are no refunds or credits for lesser usage periods. Following any cancellation, however, you will continue to have access to the product till the time you have made the payment for.
                    We may provide refund, discount or other considerations at times in special cases. The amount, time and considerations are solely dependent on the absolute discretion of the the Useinfluence’s management team.</p>

                    <h3>Payment Methods</h3>
                    <p>You can select your payment methods by checking into the billing section of the product. If you payment is not successful from your end, you remain responsible for any uncollected amounts and authorize us to continue billing the payment method as it may be updated.
                    This will also reflect a change in your billing cycle. For some payments the payment method might charge a foreign transaction fees or other transaction charges. Please check with your payment provider for more information.</p>

                    <h3>Cancellation Policy</h3>
                    <p>You can cancel your subscription with us at any time and you can have access to the services of the product till your billing cycle ends with us. We don’t issue refunds or credits back to our users. To cancel you need to go to the billing section and check for cancelling subscription to discontinue using our product.</p>

                    <h3>Governing Law</h3>
                    <p>The terms shall be governed and worked in accordance with the laws of United states. If Any provision of these terms is held invalid by court of law, the remaining provisions of the terms will remain in effect. These terms constitute the entire agreement between us regarding our remain in effect.</p>

                    <h3>Changes</h3>
                    <p>We hold the right, and at our sole discretion, to modify or replace these terms at any given point in time. If you agree to use our product you also agree to the changes that comes with it, you agree to be bound by revised terms.
                    If at point you disagree with it, please stop using our service.</p>

                    <h3>Contact Us</h3>
                    <p>If you feel any queries haven’t been addressed to your satisfaction please reach out to us at admin@useinfluence.co</p>

                    <h3>For Customers</h3>
                    <p>Customer Service Inquiries | support@useinfluence.co</p>
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

export default WebsiteTerms;
