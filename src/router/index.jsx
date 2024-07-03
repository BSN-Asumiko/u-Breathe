import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import App from "../pages/AppPage/AppPage.jsx";
import Form from "../pages/FormPage/FormPage.jsx";
import Legend from "../pages/LegendPage/LegendPage.jsx";
import AboutUs from "../pages/AboutPage/AboutPage.jsx";
import List from "../pages/ListPage/ListPage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "pages/",
    element: <Layout />,
    children: [
      {
        path: "1",
        element: <HomePage />,
      },
      {
        path: "2",
        element: <App />,
      },
      {
        path: "3",
        element: <Form />,
      },
      {
        path: "4",
        element: <Legend />,
      },
      {
        path: "5",
        element: <AboutUs />,
      },
      {
        path: "6",
        element: <List />,
      },
    ],
  },
]);
