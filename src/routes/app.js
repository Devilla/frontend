import {
  Dashboard,
  Notification,
  Analytics,
  Oauthpage,
  GettingStarted,
  Settings
} from 'components';

const appRoutes = [
  { path: '/dashboard', name: 'Home', icon: 'fa fa-dashboard', component: Dashboard },
  { path: '/campaigns', name: 'Campaigns', icon: 'fa fa-bullhorn', component: Notification },
  { path: '/analytics', name: 'Analytics', icon: 'fi-bar-graph-2', component: Analytics },
  { path: '/settings', name: 'Settings', icon: 'fi-cog', component: Settings },
  { path: '/oauthshow', name: 'Oauth', icon: 'fi-link', component: Oauthpage },
  // { path: '/settings', name: 'Oauth', icon: 'fi-link', component: Settings },
  { path: '/getting-started', name: 'Getting Started', icon: 'fi-speech-bubble', component: GettingStarted },
  { redirect: true }
];

export default appRoutes;
