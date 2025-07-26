import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

//ReactJS
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

//Components
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
