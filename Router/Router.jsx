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
import { Addresses } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Addresses";
import { FormOne } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/FormOne";
import { Bill } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/Bill";
import { HomeLandingSection1 } from "../src/Component/HomeLandingSection1";
import { Navbar } from "../src/Component/Navigation/Navbar";
import { Reels } from "../src/Component/Reelsection/Reels";
import { Swipercomponent } from "../src/Component/Reelsection/Swipercomponent";
import { Cartpage } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/Cartpage";
import { SelectedProduct } from "../src/Pages/Home/HomeSectionTwo/Component.jsx/SelectedProduct";
import { SelectedItem } from "../src/Pages/Home/HomeSectionTwo/Mainpages.jsx/SelectedItem";

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
        path: "addresses",
        element: <Addresses />,
      },
      {
        path: "paymentform",
        element: <FormOne />,
      },
      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "myaccountpage",
        element: <Myaccount />,
      },
      {
        path: "formtwo",
        element: <Contactpage />,
      },
      {
        path: "homesectiontwo",
        element: <Pages />,
      },
      {
        path: "contactpage",
        element: <Contact />,
      },
      {
        path: "myaccount",
        element: <Myaccounts />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "joincommunity",
        element: <Community />,
      },
      {
        path: "naturalcrunchy",
        element: <ProductDisplay />,
      },
      {
        path: "productcontainer",
        element: <ProductContainer />,
      },
      {
        path: "button",
        element: <Buttons />,
      },
      {
        path: "checkoutcard",
        element: <Checkouts />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "productgrid",
        element: <GridDisplay />,
      },
      {
        path: "selecteditem",
        element: <SelectedProduct />,
      },
      {
        path: "homesectioncontent",
        element: <HomeLandingSection1 />,
      },
      {
        path: "naavbar",
        element: <Navbar />,
      },
      {
        path: "reels",
        element: <Swipercomponent />,
      },
      {
        path: "cartpage",
        element: <Cartpage />,
      },
      {
        path: "select",
        element: <SelectedItem />,
      },
    ],
  },
]);
export default router;
