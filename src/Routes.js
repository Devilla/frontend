import React from 'react';
import { Router, Route } from 'react-router';
import {
  ForgetPassword,
  Profile,
  BillingDetails,
  ResetPassword,
  Dashboard,
  Notification,
  LoginFlow,
  Integrations,
  Error,
  UpgradeCard,
  UpgradePlan,
  WebsiteHome,
  WebsiteHowItWorks,
  WebsiteIntegrations,
  WebsitePricing,
  WebsiteAbout,
  WebsiteSignIn,
  WebsiteSignUp,
  WebsiteTerms,
  WebsitePolicy,
  WebsiteContact,
  VerificationPage,
  WebsiteDemoPage,
  WebsiteCustStory,
  WebsiteFeature,
  Affiliate,
  AffiliateRegister,
  PopupReview,
  Oauthpage,
  Oauthgenerate,
  DashboardChannel,
  ReviewRedirect,
} from 'components';

import {
  App,
  DashboardContainer,
  ConnectPage,
  AnalyticsContainer,
  NewCampaignContainer
} from 'containers';



const MyRoutes = ({routerHistory}) => (

  <Router history={routerHistory}>

    <Route component={DashboardContainer}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={NewCampaignContainer} />
      <Route path="/campaigns" component={Notification} />
      <Route path="/oauthshow" component={Oauthpage} />
      <Route path="/oauthgenerate" component={Oauthgenerate} />
      <Route path="/channels" component={DashboardChannel} />
      <Route path="/popupreview" component={PopupReview} />
      <Route path="/analytics" component={AnalyticsContainer} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/support" component={Dashboard} />
      <Route path="/upgrade" component={UpgradePlan} />
      <Route path="/profile" component={Profile} />
      <Route path="/card-details" component={UpgradeCard} />
      <Route path="/billing-details" component={BillingDetails} />
      <Route path="/getting-started" component={LoginFlow} />
    </Route>
    <Route exact path="/connect/:provider" component={ConnectPage} />
    <Route exact path="/integrations/:provider/callback/" component={ReviewRedirect} />
    <Route exact path="/verify/:code" component={VerificationPage} />
    <Route component={App}>
      <Route path="/" component={WebsiteHome} />
      <Route path="/how-it-works" component={WebsiteHowItWorks} />
      <Route path="/integration" component={WebsiteIntegrations} />
      <Route path="/pricing" component={WebsitePricing} />
      <Route path="/about" component={WebsiteAbout} />
      <Route path="/login" component={WebsiteSignIn} />
      <Route path="/signup" component={WebsiteSignUp} />
      <Route path="/terms-and-condtions" component={WebsiteTerms} />
      <Route path="/privacy-policy" component={WebsitePolicy} />
      <Route path="/contact" component={WebsiteContact} />
      <Route path="/demopage" component={WebsiteDemoPage} />
      <Route path="/customerStories" component={WebsiteCustStory} />
      <Route path="/featurepage" component={WebsiteFeature} />
      <Route path="/affiliatepage" component={Affiliate} />
      <Route path="/affiliateregister" component={AffiliateRegister} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/reset-password" component={ResetPassword} />

    </Route>
    <Route path="*" component={Error} />
  </Router>
);

export default MyRoutes;
