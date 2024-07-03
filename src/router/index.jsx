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
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/App",
        element: <AppPage />,
      },
      {
        path: "/Form",
        element: <FormPage />,
      },
      {
        path: "/Legend",
        element: <LegendPage />,
      },
      {
        path: "/AboutUs",
        element: <AboutPage />,
      },
      {
        path: "/List",
        element: <ListPage />,
      },
    ],
  },
]);
