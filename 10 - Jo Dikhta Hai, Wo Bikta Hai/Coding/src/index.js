import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./component/About";
import Work from "./component/Work";
import Error from "./component/Error";
import RestroMenu from "./component/RestroMenu";
import Dummy from "./component/Dummy";

const About = lazy(() => import("./component/About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// this is the router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurent",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading ...</h1>}><About /></Suspense>,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/dummy",
        element: <Dummy />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
