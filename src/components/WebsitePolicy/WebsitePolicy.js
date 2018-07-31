import React, { Component } from 'react';
import { HelpBlock } from 'react-bootstrap';
import './WebsitePolicy.scss';
import Popup from 'react-popup';
import {
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import 'react-popup/style.css';

class WebsitePolicy extends Component {

  constructor() {
    super();
    this.state = {
      selectedCountry: '',
      countryList: [],
      errorCountry: '',
      random:0
    };
  }
  componentDidMount() {

    window.scrollTo(0,0);
    fetch('https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json')
      .then(res => res.json())
      .then(res => this.setState({countryList : res.Countries}));
  }


  getCountryRows = () => {
    return  this.state.countryList.map((data,i)=> (
      <option key={i}  value={data.CountryName}>
        {data.CountryName}
      </option>
    ));
  }


  handleCountrySelect = (event) => {
    (event.target.value ===  this.state.selectedCountry) ? (
      this.setState({errorCountry:''})
    ) : (
      this.setState({errorCountry:'Please select your Country'})
    );
  }

  renderGDPRform = () => {
    const { errorCountry } = this.state;
    let that =  this;
    Popup.create({
      title: 'Own Your Personal Data',
      content: <div className="popupcontainer row ">
        <FormGroup className="m-auto">
          <Col >
            <span className="text-muted font-13 p lead">What country do you live in ? </span>
            <FormGroup controlId="formControlsSelect">
              <FormControl componentClass="select" autoComplete='country-name' placeholder="Country Name"  onChange={(e) => this.setState({country: e.target.value})} >
                <option value={this.state.selectedCountry}
                  onBlur={this.handleCountrySelect}
                >Select Country</option>
                {this.getCountryRows()}

              </FormControl>
              <HelpBlock>
                <p className="website-error">{errorCountry}</p>
              </HelpBlock>
            </FormGroup>
          </Col>
        </FormGroup>
      </div>,
      buttons: {
        left: [{
          text: 'Cancel',
          className: 'danger',
          action: function () {
            this.handleCountrySelect;
          }
        }],
        right: [ {
          text: 'Save',
          className: 'success',
          action: function () {
            that.handleCountrySelect;

            //hanldes the selected country
            Popup.create({
              title: 'Own Your Personal Data',
              content: <div className="popupcontainer row ">
                <FormGroup className="m-auto">
                  <Col >
                    <div className="text-muted font-13 p lead">We need to verify your identity before you can access your personal information.</div>
                  </Col>
                </FormGroup>
              </div>,
              buttons: {
                right: [{
                  text: 'Use my Email',
                  className: 'success',
                  action: function () {
                    Popup.create({
                      title: 'Own Your Personal Data',
                      content: <div className="popupcontainer row ">
                        <FormGroup className="m-auto">
                          <Col >
                            <div className="text-muted font-13 p lead">We need to verify your identity before you can access your personal information.</div>
                          </Col>
                          <Col className="mb-3">
                            <input type="email"  placeholder="johndoe@example.com" className="mb-4"  id="email" />
                          </Col>
                        </FormGroup>
                      </div>,
                      buttons: {
                        left: [{
                          text : 'Cancel',
                          className: 'danger',
                          action: function() {
                            Popup.close();
                          }
                        }],
                        right: [{
                          text: 'Verify Email',
                          className: 'success',
                          action: function () {
                            Popup.create({
                              title: 'Own Your Personal Data',
                              content: <div className="popupcontainer row ">
                                <FormGroup className="m-auto">
                                  <Col >
                                    <div className="text-muted font-13 p lead">We need to verify your identity before you can access your personal information.</div>
                                  </Col>
                                  <Col className="mb-3">
                                    <input type="number"  placeholder="Enter code"  id="emailcode" />
                                  </Col>
                                </FormGroup>
                              </div>,
                              buttons: {
                                left: [{
                                  text: 'Cancel',
                                  className: 'danger',
                                  action: function () {
                                    //cancel it
                                    Popup.close();
                                  }
                                }],
                                right: [{
                                  text: 'Verify',
                                  className: 'success',
                                  action: function () {
                                    //verify
                                    Popup.close();
                                  }
                                }],
                              }
                            });
                            Popup.close();
                          }
                        }]
                      }
                    });
                    Popup.close();
                  }
                }]
              }
            });
            Popup.close();

          }


        }]
      }
    });

  }

  render() {

    return (
      <div className="websitepolicy-container">
        <div className="main-container">
          <section className="text-center bg--secondary">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8">
                  <h2>Privacy Policy&nbsp;</h2>
                  <p className="lead"> ..... </p>
                </div>
              </div>
            </div>
          </section>
          <section className="text-left text-justify">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="boxed boxed--border boxed--lg lead">

                    <p>Influence is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Influence. By using the service, you agree that the information collected through the use of our service or an
                    integrated service will be processed or used in accordance with the privacy policy and these terms and may be processed in a country
           where it was collected. </p>
                    <p> For the purposes of EU data protection laws ("Data Protection Law"), Influence is data controller (i.e., the company who is responsible  for, and controls the processing of, your personal data). For information about how we collect and use information collected from
          visitors of a Customer website that is running services provided by Influence, please see “Customer Data” below.</p>
                    <br /><br />
                    <h3><b>Data Ownership</b> </h3>
                    <p> You hereby grant us the right to use all data, information, materials or other content uploaded, submitted, posted, transferred,
                      transmitted or otherwise provided or made available to us through the service or an integrated website, including usage reports and  statistics related to the use of the 3rd party website (a) prevent or address service or technical problems, or (b) as may be required by law. By using our service, you acknowledge and agree that we may use your
              data for marketing, survey and statistical usage, setting benchmarks and adding more features to the product to serve you better. The categories of information we collect can include: </p>
                    <ol>
                      <li><b>Information you provide to us directly</b><br />We may collect your information, such as your name and email address when you register for our Service, sign up for our mailing list.</li>
                      <li><b>Information we receive from third-party sites you connect to our Service</b><br />We may receive information about you from third parties and combine that with information we collect through our Service. For example, we may obtain information when you log in through a third-party social network or authentication service, such as LinkedIn, if you apply for a job with us. </li>
                    </ol>
                    <br /><br />
                    <h3><b>Legal basis for processing in the EU </b> </h3>
                    <p> In the EU, the purposes for which we process your personal data are :</p>
                    <p> The provision of personal data by you may be necessary for the performance of any contractual relationship we have with you ,
                  where it is necessary for compliance with our legal obligations laid down by EU law , where in our legitimate interests (provided these are not overridden by your interests and fundamental rights and freedoms - this includes our own legitimate interests and those of other entities and branches in our group of companies) such as:</p>
                    <ul>
                      <li>	to contact you and respond to your requests and enquiries;</li>
                      <li> 	for business administration, including statistical analysis;</li>
                      <li> 	to provide the Services to you; and</li>
                      <li> 	for fraud prevention and detection; and</li>
                      <li> 	to comply with applicable laws, regulations or codes of practices.</li>
                    </ul>

                    <p>We may likewise process your own information based on your unreservedly given, particular, educated and unambiguous assent. You ought to know that you are entitled under Data Protection Law to pull back your assent where that has been given, whenever.  On the off chance that you do this and we have no option legitimate motivation to process your own information, this may affect our
               ability to furnish you with rights to utilize the Services.</p>
                    <br /><br />
                    <h3><b>Customer Data</b> </h3>
                    <p> The customer data at our end is protected and we don’t share it illegally except for the terms and conditions listed in our privacy policy. If you are a visitor of a Customer website that is running services provided by Influence, this section should always be read in sync with the specific Privacy Policy of the Customer website, which will contain further details regarding the processing of your personal data.</p>
                    <p> The Customer may upload data to our Service or we may obtain such data, which may include personal information or data about our Customers’ end users like name and e-mail of the end user when the end user sign up in our customer’s website.  Customer Data (end user’s data) is controlled by our Customers, and any Customer Data that we maintain or process we consider to be strictly private.  We collect and process Customer Data completely on behalf of our Customers, and in accordance with our agreements with the Customers.  We do not mention or disclose Customer Data except as authorized by our Customers and as provided for in our agreements with our Customers.</p>
                    <br /><br />
                    <h3><b>Users control over information</b></h3>
                    <p>Profile Data Sharing <br />You may choose not to share information through the Service, in which case Influence may not be able to provide services to you.
             You may update your account information and preferences at any time inside your account </p>
                    <p>Control communication preferences<br />You can stop receiving promotional email communications from us by clicking on the
             unsubscribe link.  We make every effort to promptly process all unsubscribe requests.  You may not opt out of service-related communications (account verification, transactional communications). You can also contact our Support Desk via email at request to be removed from our mailing list.</p>
                    <p>Modifying or deleting your information<br />If there is any question about modifying, or deleting your information, you can contact us directly at our email support.
            We may not be able to modify or delete your information in all circumstances due to some restrictions. Please note that Influence does  not own or control the Customer Data uploaded to our Service by our Customers, and  we cannot modify or delete Customer Data except at the request of our Customer, or as permitted by our Terms of Services conditions.</p>
                    <br /><br />
                    <h3><b>Indemnification</b> </h3>
                    <p> By using our product, you agree to indemnify, defend and hold us and our team harmless from and against any losses, damages, liabilities, deficiencies, claims, actions, judgements, settlements, interest, awards, penalties, fines, costs or expenses of whatever type incurred in connection with, arising out of or related to:  </p>
                    <ul>
                      <li> Any data provided by you or through your use of the service or use of any integrated website, including any processing of such data by us or on our behalf in accordance with these terms. </li>
                      <li> Any material or info provided by or on behalf of you or your users or,</li>
                      <li> Any allegation of facts that, if true, would constitute your breach of any representations, warranties, covenants or obligations under these Terms.</li>
                    </ul>
                    <br /><br />

                    <h3> <b>Disclaimer of Warranty </b></h3>
                    <p> The service is provided with “as is “exclusive of any warranty whatsoever. We do not make any warranty of any kind, whether expressed, implied, statutory or otherwise, and we specifically disclaim all implied warranties, including any implied warranty of merchantability, fitness for a particular purpose or non-infringement, to the maximum extent permitted by applicable law.</p>
                    <br /><br />
                    <h3><b> Limitation of Liability</b></h3>
                    <p>Our liability with respect to any single incident arising out of or related to these terms or the service will not exceed the amount paid by you here under in the 12 months preceding the incident, provided that in no event will our aggregate liability arise out or related to the these terms or services exceed the total amount paid by you hereunder. </p>
                    <br /><br />
                    <h3><b> Updates to our Privacy Policy </b></h3>
                    <p> Our privacy policy, is covered at www.useinfluence.co or we may update it from time to time. Please check with the latest version to see updated things being covered.When we change the policy in a material manner, we will let you know and update the ‘last modified’ date at the bottom of this page.  If you object to any changes, you may close your account. Continuing to use our Service after we publish changes to this Privacy Policy means that you are consenting to the changes.
                      This privacy policy was last modified on May 31, 2018
                    </p>
                  </div>
                  <div className="col-md-5">
                    <button
                      type="button"
                      name="schedule"
                      className="btn btn--primary col-md-12 ml-0"
                      onClick={this.renderGDPRform} >Own Your Personal Data
                    </button>
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

export default WebsitePolicy;
