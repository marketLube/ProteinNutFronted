import GlobalStyles from "./Styles/globalStyles";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer";
import { StyledApp } from "./UI/MainComponents/MainComponents";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const fetchUserProfile = async () => {
    const accessToken =
      "IGQWROR0dWTkdDVUdzLU13MmhiVFlMbm5OQlUxQUdMbmlFcHAzWXk0cWI0MU9Od1FxbDRYbF9EMkJMWHRxN0N3bHV5QU9BcUJMUlowT1pYbC04YWl5YW5UM25FdEEwWXNaazFnYTc5R0NnM2V2QTd3ZAGdCeWpRLW8ZD"; // Replace with your actual token

    const apiURL = `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log("User Profile: ", data);
    } catch (error) {
      console.error("Error fetching Instagram profile", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

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
