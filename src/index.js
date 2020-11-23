import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./Context/reducer";
import { StateProvider } from "./Context/Stateprovider";
import "./index.css";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
