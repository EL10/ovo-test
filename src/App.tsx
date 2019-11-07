import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { NO_LOGIN_ROUTES } from "./domains/app/routes";

import { IApplicationState } from "./domains/app/root-reducer";

const mapStateToProps = (state: IApplicationState) => ({
  employees: state.employees.employees
});

interface IStateProps {
  employees: object
}

type Props = IStateProps;

class App extends Component<Props> {
  public render() {
    const { employees } = this.props;

    const routes = NO_LOGIN_ROUTES;

    return (
      <Switch>
        {routes.map(({ path, component }, index: number) => (
          <Route
            key={index}
            exact={true}
            path={`/${path}`}
            component={component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(App);
