import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CompaniesPage from "./pages/CompaniesPage";
import ViewResource from "./pages/ViewResource";
import ViewProject from "./pages/ViewProject";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "404", element: <ErrorPage /> },
      { path: "", element: <Home /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "resource/:id", element: <ViewResource /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "project/:id", element: <ViewProject /> },
      { path: "companies", element: <CompaniesPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];
const router = createBrowserRouter(routes);

export default router;
