import theme from "./configurations/theme";

import { BrowserRouter } from "react-router";

//ReactJS
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

//MATERIAL DESIGN
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
//Components
import { MantineProvider } from "@mantine/core";

//Components
import App from "./App";
import FetcherLoader from "./components/fetcher-loader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <FetcherLoader />
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
