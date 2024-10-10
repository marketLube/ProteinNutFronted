import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../src/App";
import Home from "../src/Pages/Home/Home";
import { Pages } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Pages";
import { Contactpage } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Contactpage";
import { Contact } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Contact";
import { Myaccount } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Myaccount";
import { Myaccounts } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Myaccounts";
import { Login } from "../src/Pages/Home/HomeSectionTwo/Login";
import { Community } from "../src/Pages/Home/HomeSectionTwo/Community";
import { ProductDisplay } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Naturalcrunchy";
import { ProductContainer } from "../src/Component/ProductContainer/ProductContainer";
import { Buttons } from "../src/Component/Button/Buttons";
import { Checkouts } from "../src/Component/Checkout/Checkouts";
import { Counter } from "../src/Component/Counter/Counter";
import { ProductDetails } from "../src/Component/ProductDisplay/ProductDetails";
import { GridDisplay } from "../src/Component/ProductDisplayGrid/GridDisplay";

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
      },
      {
        path:"joincommunity",
        element:<Community/>,
      },
      {
        path:"naturalcrunchy",
        element:<ProductDisplay/>,
      },
      {
        path:"productcontainer",
        element:<ProductContainer/>
      },
      {
        path:"button",
        element:<Buttons/>
      },
      {
        path:"checkoutcard",
        element:<Checkouts/>
      },
      {
        path:"counter",
        element:<Counter/>
      },
      {
        path:"productdetails",
        element:<ProductDetails/>
      },
      {
        path:"productgrid",
        element:<GridDisplay/>
      }
    ],
  },
]);
export default router;
