const PricePage = ({externalValue, handleMonthChange, handleSwitchChange, handleYearChange, planList, returnRates}) => {
  return (
    <div>
      <div className="page-header ">
        <div className="page-header-overlay">
          <div className="centered page-header-container w-container">
            <Animated className="page-header-title subtitle" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
              Simple, honest & affordable pricing
            </Animated>
          </div>
        </div>
        
      </div>
      <div className="section innerpage">
        <div className="container w-container newprice price">
          <div className="pricing-row w-row">
            <div className="w-col filter">
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
          </div>

          <div className="pricing-row w-row">
            <PriceList
              planList={planList}
              returnRates={returnRates}
              externalValue={externalValue}
            />
          </div>
          <div className="pricing-row w-row msg-bb">
            <div className="w-col w-col-12">
              <h3>
                <strong>24 x 7 email support</strong> is included with all the plans.</h3>
            </div>
          </div>
          <div className="pricing-row w-row msg-bb cta">
            <div className="w-col w-col-12">
              <h3>
                <strong>Need a higher traffic plan?</strong>
                <a href="javascript:;" className="btn">Contact us</a>
              </h3>
            </div>
          </div>
          <div className="pricing-row w-row pledge">
            <div className="w-col w-col-4 logo">
              <img src="images/pledge-logo.png"/>
            </div>
            <div className="w-col w-col-8">
              <h6>Your plan gives back</h6>
              <p>We give one dollar to Disabled & Under-Privileged Children Societies for every new plan purchase during your first year of subscription.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section innerpage faq">
        <div className="container  w-container  centered pb-30">
          <h2 className="section-title">Frequently asked questions, answered.</h2>
          <div className="section-divider-line"></div>
          <div className="faqwrap">
            <ul>
              <li>
                <div className="questions">What do you mean by visitors?</div>
                <div className="ans">
                  The billing counts unique visitors as the metric for billing. A unique visitor who visits the website page where the pixel code is installed will be counted as visiting page. A visitor can visit the page multiple times on all the pixelated pages but that will be counted as one unique visit only.
                </div>
              </li>
              <li>
                <div className="questions">But will it work for me?</div>
                <div className="ans">
                  Influence works for all the websites and platforms that are out there. We are rolling out more and more integrations every month so that you can sync them up with your favorite services and marketing tools. You can even see the integrations we have listed on our integrations section.
                </div>
              </li>
              <li>
                <div className="questions">Will Influence work for all the customers on my website?</div>
                <div className="ans">
                  Influence not only works for customer details capturing, but it also works for lead captures, webinar pages and other places where you can capture the customer’s details.
                </div>
              </li>
              <li>
                <div className="questions">Are these notifications legit?</div>
                <div className="ans">
                  When we thought of building this product, we thought of helping brands and customers bring transparency to each other in the nicest possible manner.<br/><br/>
                  If we get to work together and you use our product, all the notifications that you will see on your website will be 100% legit and the data would be the one which your customers would use.

                </div>
              </li>
              <li>
                <div className="questions">Can I cancel it anytime?</div>
                <div className="ans">Yes. You can cancel the subscription whenever you want. If you are in monthly contract you will only be billed on a monthly basis.</div>
              </li>
              <li>
                <div className="questions">What will happen if I get more unique visitors on plan? Will it charge me automatically?
                </div>
                <div className="ans">
                  Once you start inching closer to your traffic limit, we’ll send you notifications before you even actually hit that limit. Once you go above your plan limit we’ll automatically upgrade you for the next plan.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section innerpage moreques">
        <div className="container  w-container  centered pb-30">
          <h3>More questions?</h3>
          <h4>Our <a href="javascript:;">help center</a> is open 24/7</h4>
          <h4>or</h4>
          <h4>Reach out to our global support team.<a href="javascript:;"> We're here to help.</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
