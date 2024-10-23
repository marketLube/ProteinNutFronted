import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  return (
    <>
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
