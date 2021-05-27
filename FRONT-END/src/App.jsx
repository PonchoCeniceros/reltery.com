import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import PrivateRoute from "./routing/PrivateRoute";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Routes from "./components/routing/Routes";
import { loadUser } from "./redux/actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
