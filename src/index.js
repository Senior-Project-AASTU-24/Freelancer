import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId =
  "715184626890-0mfu0g0k0ap9r3oqetcmf8bsqcnu5aoj.apps.googleusercontent.com";
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="715184626890-0mfu0g0k0ap9r3oqetcmf8bsqcnu5aoj.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
