import { GridDisplay } from "../../Component/ProductDisplayGrid/GridDisplay";
import Main from "../../Layout/Main";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import { FormOne } from "./HomeSectionTwo/Component.jsx/FormOne";
import { Green } from "./HomeSectionTwo/Component.jsx/Green";
import { Pages } from "./HomeSectionTwo/Mainpages.jsx/Pages";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <GridDisplay/>
    </Main>
  );
}

export default Home;
