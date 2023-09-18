import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./component/About";
import Work from "./component/Work";
import Error from "./component/Error";
import RestroMenu from "./component/RestroMenu";
import Dummy from "./component/Dummy";
import userContext from "./utils/userContext";

const About = lazy(() => import("./component/About"));



const AppLayout = () => {
  const [userName, setUserName] = useState();
useEffect(() => {
  const data = {
    name: "Rohit",
  };
  setUserName(data.name);
}, []);
  return (
    <>
      <userContext.Provider value={{userName:userName}}>
        <Header />
        <Outlet />
      </userContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />
          </Suspense>
        ),
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
