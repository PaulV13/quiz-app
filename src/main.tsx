import React from "react";
import { createRoot } from "react-dom/client";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
