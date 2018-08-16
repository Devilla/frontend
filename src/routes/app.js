import {
  Dashboard,
  Notification,
  Analytics,
  Settings
} from 'components';

const appRoutes = [
  { path: '/dashboard', name: 'Home', icon: 'fa fa-dashboard', component: Dashboard },
  { path: '/campaigns', name: 'Campaigns', icon: 'fa fa-bullhorn', component: Notification },
  { path: '/analytics', name: 'Analytics', icon: 'fi-bar-graph-2', component: Analytics },
  { path: '/settings', name: 'Settings', icon: 'fi-cog', component: Settings },
  { redirect: true }
];

export default appRoutes;
