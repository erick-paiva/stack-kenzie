import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AllProviders } from "./providers";
ReactDOM.render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
