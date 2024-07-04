import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AppPage from "../pages/AppPage/AppPage.jsx";
import FormPage from "../pages/FormPage/FormPage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import ListPage from "../pages/ListPage/ListPage.jsx";
import LegendPage from "../pages/LegendPage/LegendPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/app",
        element: <AppPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/legend",
        element: <LegendPage />,
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
    ],
  },
]);
