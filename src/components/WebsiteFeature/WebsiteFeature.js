import React, { Component } from 'react';
import {
  Campaignsetting,
  FeatureAnalytics,
  AccountsManager,
  InstallinMins,
  MobileReadyIcon,
  UnlimitedCustomize,
  RecentActivityPopup,
  LiveActivityPopup,
  BulkActivityPopup
} from 'img';
import { Link } from 'react-router';
import './WebsiteFeature.scss';

class WebsiteFeature extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {

    return (
      <div className="transition-item WebsiteFeature-container" style={{backgroundColor: '#f5f5f5'}}>
        <div className="main-container" >
          <section className="cover text-center mt-5 mb-5  " data-overlay="0">
            <div className="container  mt-4 mb-5 pb-0 pt-0">
              <div className="row">
                <div className="col-md-10 col-lg-10">
                  <h2 className="main-title">The #1 Powerful Conversion Tool!</h2>
                  <p className="sub-title col-md-12 text-center"> From a team of passionate creators & creative thinkers.</p>
                  <Link className="btn btn--primary type--uppercase" to="#" style={{backgroundColor:'#097fff'}}> <span className="btn__text">Try influence now</span> </Link>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-auto col-md-12" pb-0 mb-0/>
          <section className="row pt-3" style={{backgroundColor: '#f1f1f1'}}>
            <div className="row mt-3 mb-5" style={{width: '100%'}}>
              <div className="col-md-3 p-1">
                <div className="text-center"> <img className="mb-3 feature-icons" alt="Image" src={InstallinMins} /> </div>
                <h3 className="heading-texts3">Install in 5 minutes </h3>
                <p className="heading-texts-sub"> Set it up on your website in minutes </p>
              </div>
              <div className="col-md-3 p-1">
                <div className="text-center"> <img className="mb-3 feature-icons" alt="Image" src={UnlimitedCustomize} /> </div>
                <h3 className="heading-texts3">Unlimited Customizations!</h3>
                <p className="heading-texts-sub"> Set your notification color, style, behaviours <br/> and so much more... </p>
              </div>
              <div className="col-md-3 p-1">
                <div className="text-center"> <img className="mb-3 feature-icons" alt="Image" src={AccountsManager} /> </div>
                <h3 className="heading-texts3">Dedicated Accounts Manager </h3>
                <p className="heading-texts-sub"> Hands on support anytime you need </p>
              </div>
              <div className="col-md-3 p-1">
                <div className="text-center"> <img className="mb-3 feature-icons" alt="Image" src={MobileReadyIcon} /> </div>
                <h3 className="heading-texts3">Mobile Ready </h3>
                <p className="heading-texts-sub"> Display mobile optimized notifications </p>
              </div>
            </div>
          </section>
          <hr className="my-auto col-md-12" pb-0 mb-0/>
          <section className="row mt-5 mb-5 pt-3">
            <div className="col-md-4 analytics-text">
              <h3 className="heading-texts2">Display social proof notifications to your users </h3>
              <p className="heading-texts-sub2">We help you in increasing more sales and leads on your website by display social proof to your visitors and influence them into buying more from you.</p>
              <h4 className="heading-texts text-left" >Recent Activity: </h4>
              <p className="heading-texts-sub text-left"> Recent Activity notifications show recent buying behavior of your customers to your website users. </p>
              <h4 className="heading-texts text-left" >Live visitors:</h4>
              <p className="heading-texts-sub text-left">Live visitors helps you in showing up the total active live users on your web pages.</p>
              <h4 className="heading-texts text-left" >Bulk Activity: </h4>
              <p className="heading-texts-sub text-left">This notification shows the total user activity over a period of time. </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 notification-images">
              <img alt="Live Activity" src={RecentActivityPopup} className="recent-image mb-3" style={{}}/>
              <img alt="Live Activity" src={LiveActivityPopup} className="live-image mb-3" />
              <img alt="Live Activity" src={BulkActivityPopup} className="bulk-image" />
            </div>
          </section>
          <section className="row mt-5 mb-5">
            <div className="col-md-6">
              <img alt="campaign_setting" src={Campaignsetting} className="campaigntype-image" />
            </div>
            <div className="col-md-1 p-0"> </div>
            <div className="col-md-4 pr-3 campaigntype-text">
              <h3 className="heading-texts2">Campaign types - Customized to your business needs: </h3>
              <p className="heading-texts-sub2">Create campaigns that suits your business type.</p>
              <h4 className="heading-texts text-left" >Normal campaigns:</h4>
              <p className="heading-texts-sub text-left"> Create campaigns that are normal and convert best throughout your website. </p>
              <h4 className="heading-texts text-left" >Product campaigns:</h4>
              <p className="heading-texts-sub text-left">Create campaigns for specific products or pages. Useful for multiple product Stores and Ecommerce companies.</p>
            </div>
          </section>
          <section className="row mt-5 mb-5">
            <div className="col-md-4 analytics-text">
              <h3 className="heading-texts2">Analytics Powerhouse! </h3>
              <p className="heading-texts-sub2">See the analytics of your favorite campaigns and optimize then right away.</p>
              <h4 className="heading-texts text-left" >Real Time Website Analytics: </h4>
              <p className="heading-texts-sub text-left"> See the analytics on your dashboard in live real time manner. </p>
              <h4 className="heading-texts text-left" >Conversion Tracking:</h4>
              <p className="heading-texts-sub text-left">Track your conversion metrics with our dedicated analytics section.</p>
            </div>
            <div className="col-md-1 p-0"> </div>
            <div className="col-md-6">
              <img alt="analytics" src={FeatureAnalytics} className="analytics-image" />
            </div>
          </section>
          <section className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            </div>
          </section>
          

        </div>
      </div>
    );
  }
}


export default WebsiteFeature;
