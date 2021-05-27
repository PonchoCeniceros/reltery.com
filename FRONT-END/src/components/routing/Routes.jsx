import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../pages/dashboard.page";
import EvalFormPage from "../../pages/evalform.page";
import InformationPage from "../../pages/information.page";
import { LandingPage } from "../../pages/landing.page";

import Main from "../../pages/main.component";
import PrivateRoute from "../routing/pivate-route.component";

const Routes = () => {
  return (
    <section className="">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/home" component={Main} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/sendform" component={EvalFormPage} />
        <PrivateRoute exact path="/infopage" component={InformationPage} />
      </Switch>
    </section>
  );
};

export default Routes;
