import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { store } from './index.js';

import {
  About,
  ForgetPassword,
  Home,
  Profile,
  Billing,
  BillingDetails,
  Payment,
  HowItWorks,
  ResetPassword,
  Sidebar,
  StatsCard,
  TermsPage,
  Dashboard,
  Notification,
  Analytics,
  New,
  LoginFlow,
  SelectNotification,
  Upgrade,
  Integration,
  Error,
  ComingSoon,
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
  AffiliateRegister
} from 'components';

import {
  App,
  DashboardContainer,
  ConnectPage,
  AnalyticsContainer
} from 'containers';





const MyRoutes = ({routerHistory, store}) => (

  <Router history={routerHistory}>

    <Route component={DashboardContainer}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
      <Route path="/campaigns" component={Notification} />
      <Route path="/analytics" component={AnalyticsContainer} />
      <Route path="/integration" component={Integration} />
      <Route path="/support" component={Dashboard} />
      <Route path="/notifications" component={SelectNotification} />
      <Route path="/upgrade" component={UpgradePlan} />
      <Route path="/profile" component={Profile} />
      <Route path="/billing" component={Billing} />
      <Route path="/card-details" component={UpgradeCard} />
      <Route path="/billing-details" component={BillingDetails} />
  	  <Route path="/payment" component={Payment} />
      <Route path="/getting-started" component={LoginFlow} />
    </Route>
    <Route exact path="/connect/:provider" component={ConnectPage} />
    <Route exact path="/verify/:code" component={VerificationPage} />
    <Route component={App}>
      <Route path="/" component={WebsiteHome} />
      <Route path="/how-it-works" component={WebsiteHowItWorks} />
      <Route path="/integrations" component={WebsiteIntegrations} />
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
)

export default MyRoutes;
