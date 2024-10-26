import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { setIsLoggedIn, setUser } from "./App/generalSlice/generalSlice";

function App() {
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoggedIn(loaderData?.isLoggedIn));
    dispatch(setUser(loaderData?.currentUser));
  }, [loaderData, dispatch]);

  return (
    <>
      <Toaster reverseOrder={false} />
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
