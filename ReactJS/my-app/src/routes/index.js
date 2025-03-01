import { HomePage, FollowingPage, ProfilePage, NotFoundPage } from "../pages";

// Public Routes
const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/following",
    component: FollowingPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
