import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router';
import HomePage from './pages/HomePage.tsx';
import ListEventsPage from "./pages/ListEventsPage.tsx";

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

export const routeTree = rootRoute.addChildren([indexRoute, listEventsRoute]);
export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
