import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import HomePage from './pages/HomePage.tsx';
import ListEventsPage from "./pages/ListEventsPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ListMealsPage from "./pages/ListMealsPage.tsx";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});


const listEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: ListEventsPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const listMealsPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/meals',
  component: ListMealsPage,
});

export const routeTree = rootRoute.addChildren([indexRoute, listEventsRoute, loginRoute, listMealsPageRoute]);
export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
