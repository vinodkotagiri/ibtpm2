import Estimates from "../components/Estimates";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import Signup from "../components/Signup";
import AuthView from "../Views/AuthView";
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
    path: '/auth',
    name: 'auth',
    component: AuthView,
    children: [
      {path: 'login', name: 'dashboard', component: Login, index:true},
      { path: 'signup', name: 'settings', component: Signup },
      {path:"*",name:'login',component:Login}
    ]
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]