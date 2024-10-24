import { useQuery } from "@tanstack/react-query";
import { HomeLandingSection1 } from "../../Component/HomeLandingSection1";
import Landingimg from "../../Component/Modelimage/Landingimg";
import { GridDisplay } from "../../Component/ProductDisplayGrid/GridDisplay";
import { Reels } from "../../Component/Reelsection/Reels";
import Main from "../../Layout/Main";
import { Green } from "../Green/Green";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import { Community } from "./HomeSectionTwo/Community";
import api from "../../services/api";
import { Parallax } from "react-scroll-parallax";

function Home() {
  // api to fetch the products
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("/products").then((res) => res.data.docs),
  });

  console.log(products);
  return (
    <Main>
      <HomeSectionOne />
      <Green />
      <div style={{ overflow: "hidden" }}>
        <GridDisplay products={products} isLoading={isLoading} error={error} />
        <Landingimg />
      </div>
      <div style={{ backgroundColor: "rgb(254,209,65)" }}>
        <HomeLandingSection1 />
        {/* <Reels /> */}
        <Community />
      </div>
    </Main>
  );
}

export default Home;
