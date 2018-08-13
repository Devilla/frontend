import {
  Dashboard,
  Notification,
  Analytics,
  Oauthpage,
  Settings
} from 'components';

const appRoutes = [
  { path: '/dashboard', name: 'Home', icon: 'fi-air-play', component: Dashboard },
  { path: '/campaigns', name: 'Campaigns', icon: 'fi-layers', component: Notification },
  { path: '/analytics', name: 'Analytics', icon: 'fi-bar-graph-2', component: Analytics },
  { path: '/integrations', name: 'Integrations', icon: 'fi-command', component: Dashboard },
  { path: '/oauthshow', name: 'Oauth', icon: 'fi-link', component: Oauthpage },
  { path: '/settings', name: 'Settings', icon: 'fi-cog', component: Settings },
  { redirect: true }
];

export default appRoutes;
