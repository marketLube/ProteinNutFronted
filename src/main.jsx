import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import store from "./App/store";
import { Provider } from "react-redux"; // Import Redux Provider
import router from "../Router/Router";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ParallaxProvider>
    <RouterProvider router={router} />
    </ParallaxProvider>
  </Provider>
);
