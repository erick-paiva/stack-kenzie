import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignupForm from "../pages/Signup/SignUpForm";



const Routes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
  
          <Route exact path="/register">
            <SignupForm />
          </Route>

         
        </Switch>
      </div>
    );
  };
  
  export default Routes;