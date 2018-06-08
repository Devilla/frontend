// import Dashboard from '../components/Dashboard/Dashboard';
// import Notification from '../components/Notification';
// import Analytics from '../components/Analytics';
// import New from '../components/New';

import {
  Dashboard,
  Notification,
  Analytics,
  New,
  Profile,
  Help
} from 'components'

const appRoutes = [
    { upgrade: true, path: "/new", name: "New", icon: "", component: New },
    { path: "/dashboard", name: "Home", icon: "pe-7s-home", component: Dashboard },
    { path: "/profile", name: "Profile", icon: "pe-7s-user", component: Profile },
    { path: "/campaigns", name: "Campaigns", icon: "pe-7s-bell", component: Notification },
    { path: "/analytics", name: "Analytics", icon: "pe-7s-graph1", component: Analytics },
    { path: "/integration", name: "Integrations", icon: "pe-7s-display1", component: Dashboard },
    { path: "/help" , name: "Help" , icon:"" , component: Help },
    // { path: "/support", name: "Customer Care", icon: "pe-7s-call", component: Dashboard },
    { redirect: true },

];

export default appRoutes;
