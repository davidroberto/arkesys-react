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
import RandomMealPage from "./pages/RandomMealPage.tsx";
import DisplayMealByIdPage from "./pages/DisplayMealByIdPage.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const rootRoute = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  ),
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


const randomMealPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/random-meal',
  component: RandomMealPage,
});

const displayMealByIdPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/meals/$mealId',
  component: DisplayMealByIdPage,
});


export const routeTree = rootRoute.addChildren([
    indexRoute,
    listEventsRoute,
    loginRoute,
    listMealsPageRoute,
    randomMealPageRoute,
    displayMealByIdPageRoute
]);


export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
