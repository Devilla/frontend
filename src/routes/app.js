import {
  Dashboard,
  Notification,
  Analytics,
  New,
} from 'components';

const appRoutes = [
  // { upgrade: true, path: '/new', name: 'New', icon: '', component: New },
  // { path: '/dashboard', name: 'Home', icon: 'pe-7s-home', component: Dashboard },
  // { path: '/profile', name: 'Profile', icon: 'pe-7s-user', component: Profile },
  // { path: '/campaigns', name: 'Campaigns', icon: 'pe-7s-bell', component: Notification },
  // { path: '/analytics', name: 'Analytics', icon: 'pe-7s-graph1', component: Analytics },
  // { path: '/integration', name: 'Integrations', icon: 'pe-7s-display1', component: Dashboard },
  // { name: 'Help', icon: 'pe-7s-call' },
  // { redirect: true }
    { path: "/dashboard", name: "Home", icon: "fi-air-play", component: Dashboard },
    { path: "/campaigns", name: "Campaigns", icon: "fi-layers", component: Notification },
    { path: "/analytics", name: "Analytics", icon: "fi-bar-graph-2", component: Analytics },
    { path: "/integration", name: "Integrations", icon: "fi-command", component: Dashboard },
    // { name: "Help", icon: "fi-speech-bubble" },
    { redirect: true }
];

export default appRoutes;
