import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { store } from './index.js';

import {
  About,
  CompanyDetails,
  ContactPage,
  ForgetPassword,
  Home,
  Profile,
  HowItWorks,
  LoginPage,
  PricePage,
  PrivacyPage,
  RegisterPage,
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
  WebsiteHome,
  WebsiteAbout
} from 'components';

import {
  App,
  DashboardContainer,
  ConnectPage
} from 'containers';



const MyRoutes = ({routerHistory, store}) => (

  <Router history={routerHistory}>

    <Route component={DashboardContainer}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
      <Route path="/notification" component={Notification} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/integration" component={Integration} />
      <Route path="/support" component={Dashboard} />
      <Route path="/notifications" component={SelectNotification} />
      <Route path="/upgrade" component={Upgrade} />
      <Route path="/profile" component={Profile} />
    </Route>
    <Route path="/getting-started" component={LoginFlow} />
    <Route exact path="/connect/:provider" component={ConnectPage} />
    <Route component={App}>
      <Route path="/" component={WebsiteHome} />
      <Route path="/about" component={WebsiteAbout} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile/company/:token" component={CompanyDetails} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/privacy-policy" component={PrivacyPage} />
      <Route path="/terms-and-condtions" component={TermsPage} />
      <Route path="/privacy-policy" component={PrivacyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/pricing" component={PricePage} />
      <Route path="/forget-password" component={ForgetPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      {/* <Redirect from='price' to="/pricing" /> */}
      <Route path="/how-it-works" component={HowItWorks} />
    </Route>
    <Route path="*" component={Error} />
  </Router>
)

export default MyRoutes;
