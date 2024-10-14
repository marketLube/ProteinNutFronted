import Main from "../../Layout/Main";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import { FormOne } from "./HomeSectionTwo/Component.jsx/FormOne";
import { Pages } from "./HomeSectionTwo/Mainpages.jsx/Pages";

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <FormOne />
      <Pages />
    </Main>
  );
}

export default Home;
