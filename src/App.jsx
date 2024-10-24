import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyles />
      <StyledApp>
        <Header></Header>
        <Outlet />
        {/* <Footer></Footer> */}
      </StyledApp>
    </>
  );
}

export default App;
