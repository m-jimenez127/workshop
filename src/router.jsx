import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ResourcesPage from "./pages/ResourcesPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "404", element: <ErrorPage /> },
      { path: "", element: <Home /> },
      { path: "resources", element: <ResourcesPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

const router = createBrowserRouter(routes);
export default router;
