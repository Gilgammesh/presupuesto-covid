import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/Index";
import { unregister } from "./serviceWorker";

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));

unregister();
