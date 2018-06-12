import {
  Dashboard,
  Notification,
  Analytics,
  New,
} from 'components';

const appRoutes = [
    { upgrade: true, path: "/new", name: "New", icon: "fi-file-add", component: New },
    { path: "/dashboard", name: "Home", icon: "fi-air-play", component: Dashboard },
    { path: "/campaigns", name: "Campaigns", icon: "fi-layers", component: Notification },
    { path: "/analytics", name: "Analytics", icon: "fi-bar-graph-2", component: Analytics },
    { path: "/integration", name: "Integrations", icon: "fi-command", component: Dashboard },
    { name: "Help", icon: "fi-speech-bubble" },
    { redirect: true }
];

export default appRoutes;
