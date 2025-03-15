import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import { paths } from "./paths";
import { SecureRoute } from "./components";

const Home = lazy(() => import("@/screens/Home/Home"));
const AuthenticatedScreen = lazy(
  () => import("@/screens/AuthenticatedScreen/AuthenticatedScreen")
);

const createRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<SecureRoute />}>
        <Route
          path={paths.authenticatedScreen}
          element={<AuthenticatedScreen />}
        />
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    )
  );

export default createRouter;
