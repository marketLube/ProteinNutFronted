import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../src/App";
import Home from "../src/Pages/Home/Home";
import { Pages } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Pages";
import { Contactpage } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Contactpage";
import { Contact } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Contact";
import { Myaccount } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Myaccount";
import { Myaccounts } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Myaccounts";
import { Login } from "../src/Pages/Home/HomeSectionTwo/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "homesectiontwo",
        element: <Pages  />,
      },
      {
        path:"Contactpage",
        element: <Contact />,
      },
      {
        path:"Myaccount",
        element: <Myaccounts />,
      },
      {
       path:"login",
       element:<Login/>,
      }
    ],
  },
]);
export default router;
