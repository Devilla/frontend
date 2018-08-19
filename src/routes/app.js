import {
  Dashboard,
  Notification,
  Analytics,
  Oauthpage,
  GettingStarted
} from 'components';

const appRoutes = [
  { path: '/dashboard', name: 'Home', icon: 'fi-air-play', component: Dashboard },
  { path: '/campaigns', name: 'Campaigns', icon: 'fi-layers', component: Notification },
  { path: '/analytics', name: 'Analytics', icon: 'fi-bar-graph-2', component: Analytics },
  { path: '/integrations', name: 'Integrations', icon: 'fi-command', component: Dashboard },
  { path: '/oauthshow', name: 'Oauth', icon: 'fi-link', component: Oauthpage },
  { path: '/getting-started', name: 'Resources', icon: 'fi-person', component: GettingStarted },
  { redirect: true }
];

export default appRoutes;
