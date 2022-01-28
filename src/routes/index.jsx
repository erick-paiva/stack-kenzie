import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";

const RouteProtected = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("@StackKenzie:user");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const AllRoutes = () => {
  return (
    <Switch>
      {/* PRINCIPAIS ROTAS */}
      {/* <Route exact path="/" component={LeadPage} /> */}
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      {/* ROTAS PROTEGIDAS */}
      <RouteProtected path="/dashboard" component={Dashboard} />

      {/* ROTAS NÃO ENCONTRADAS */}
      {/* <Route path="/*" component={PageError} /> */}
    </Switch>
  );
};

export default AllRoutes;
