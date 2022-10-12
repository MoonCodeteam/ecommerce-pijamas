import React from "react";
import ReactDOM from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-27nm349c.us.auth0.com"
      clientId="2Z6gwlwgo2diRDf0Fh5wmM5VUjLxB3Ay"
      redirectUri={window.location.origin}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
