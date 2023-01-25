import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import "@fontsource/open-sans/300.css";
// import "@fontsource/open-sans/400.css";
// import "@fontsource/open-sans/500.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/raleway/300.css";
// import "@fontsource/raleway/400.css";
// import "@fontsource/raleway/500.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/700.css";
// import "@fontsource/raleway/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

// Calling `extendTheme` and passing custom values
const theme = extendTheme({
  colors: {
    primary: "#EEA38B",
    secondary: "#4BA2D3",
  },

  components: {
    Button: {
      variants: {
        primary: {
          bg: "#EEA38B",
          color: "black",
        },
        secondary: {
          bg: "#4BA2D3",
          color: "white",
        },
      },
    },
  },

  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </HelmetProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
