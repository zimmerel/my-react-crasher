import React from "react";
import ReactDOM from "react-dom";
import { BugSplat } from "bugsplat";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import packageJson from "../package.json";

const bugsplat = new BugSplat(
  packageJson.database,
  packageJson.name,
  packageJson.version
);
bugsplat.setDefaultAppKey("key!");
bugsplat.setDefaultDescription("description!");
bugsplat.setDefaultEmail("fred@bugsplat.com");
bugsplat.setDefaultUser("Fred");

window.addEventListener("unhandledrejection", async (rejection) => {
  await bugsplat.post(rejection.reason);
});

window.addEventListener("error", async (event) => {
  if (event.error) {
    await bugsplat.post(event.error);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App bugsplat={bugsplat} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
