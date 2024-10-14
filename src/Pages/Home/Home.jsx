import { HomeLandingSection1 } from "../../Component/HomeLandingSection1";
import Landingimg from "../../Component/Modelimage/Landingimg";
import { GridDisplay } from "../../Component/ProductDisplayGrid/GridDisplay";
import Main from "../../Layout/Main";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import { Community } from "./HomeSectionTwo/Community";
import { FormOne } from "./HomeSectionTwo/Component.jsx/FormOne";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <GridDisplay />
      <Landingimg />
      <HomeLandingSection1 />
      <Community />
    </Main>
  );
}

export default Home;
