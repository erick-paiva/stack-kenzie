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

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <RouteProtected path="/dashboard" component={Dashboard} />
      <Route path="/*" component={Error404} />
    </Switch>
  );
};

export default AllRoutes;
