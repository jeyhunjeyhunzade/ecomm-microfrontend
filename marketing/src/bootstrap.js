import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Marketing Page</h1>, el);
};

//If we're in development and in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  console.log("devRoot: ", devRoot);

  if (devRoot) {
    mount(devRoot);
  }
}

//If we're running through container, then we should export mount function
export { mount };
