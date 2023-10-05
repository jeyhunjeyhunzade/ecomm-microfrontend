import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup" component={Signup}>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
