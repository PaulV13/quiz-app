import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
