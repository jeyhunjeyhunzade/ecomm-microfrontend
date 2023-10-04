import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "mr",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
