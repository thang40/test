import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { initStore } from "../../store";
import { Provider } from "react-redux";
import { ROUTES } from "../../commons/consts";
import { Header } from "../../commons/components";
import { HomePage, Page404Page, LoginPage, UserPage } from "../../pages";
import { withAuth } from "../../HOCs";

const store = initStore();
const EnhancedHeader = withAuth(Header);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <EnhancedHeader />
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
              loading...
            </div>
          }
        >
          <Switch>
            <Route exact path={ROUTES.HOME_ROUTE} component={HomePage} />
            <Route exact path={ROUTES.LOGIN_ROUTE} component={LoginPage} />
            <Route exact path={ROUTES.USER_ROUTE} component={UserPage} />
            <Route component={Page404Page} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
