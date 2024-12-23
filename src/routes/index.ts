import Estimates from "../components/Estimates";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import DashboardView from "../Views/DashboardView";
import DetailedView from "../Views/DetailedView";
import HomeView from "../Views/HomeView";

export const routes = [
  {
    path: '/schedule',
    name: 'schedule',
    component: DetailedView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children: [
      {path: 'estimates', name: 'dashboard', component: Estimates, index:true},
      { path: 'settings', name: 'settings', component: Settings },
      {path: 'profile', name: 'profile', component: Profile},
      {path:"*",name:'other',component:Estimates}
    ]
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]