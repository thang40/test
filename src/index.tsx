import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "./commons/components";
import App from "./modules/app/app.module";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
// import LogRocket from "logrocket";
// import setupLogRocketReact from "logrocket-react";
// LogRocket.init("0odhnk/experimental");

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
