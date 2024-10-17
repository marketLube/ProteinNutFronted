import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet } from "react-router-dom";
import { Green } from "./Pages/Home/HomeSectionTwo/Component.jsx/Green";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header></Header>
        <Green/>
        <Outlet />
        <Footer></Footer>
      </StyledApp>
    </>
  );
}

export default App;
