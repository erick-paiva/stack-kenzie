import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import Error404 from "../pages/Error404";

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

const RouteVerifield = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("@StackKenzie:user");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const AllRoutes = () => {
  return (
    <Switch>
      {/* ROTAS VERIFICADAS */}
      {/* <Route exact path="/" component={LeadPage} /> */}
      <RouteVerifield exact path="/" component={SignIn} />
      <RouteVerifield path="/signup" component={SignUp} />

      {/* ROTAS PROTEGIDAS */}
      <RouteProtected path="/dashboard" component={Dashboard} />

      {/* ROTAS NÃO ENCONTRADAS */}
      <Route path="/*" component={Error404} />
    </Switch>
  );
};

export default AllRoutes;
