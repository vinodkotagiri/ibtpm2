import UnitsConverter from "../components/UnitsConverter";
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
    component: DashboardView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
    // component:UnitsConverter
  }
]