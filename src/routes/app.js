import {
  Dashboard,
  Notification,
  Analytics,
  Oauthpage,
  GettingStarted
} from 'components';

const appRoutes = [
  { path: '/dashboard', name: 'Home', icon: 'fa fa-dashboard', component: Dashboard },
  { path: '/campaigns', name: 'Campaigns', icon: 'fa fa-bullhorn', component: Notification },
  { path: '/analytics', name: 'Analytics', icon: 'fi-bar-graph-2', component: Analytics },
  { path: '/integrations', name: 'Integrations', icon: 'fi-cog', component: Dashboard },
  { path: '/oauthshow', name: 'Oauth', icon: 'fi-link', component: Oauthpage },
  { path: '/getting-started', name: 'Getting Started', icon: 'fi-speech-bubble', component: GettingStarted },
  { redirect: true }
];

export default appRoutes;
