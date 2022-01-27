import { Switch, Route, Redirect } from "react-router-dom";

import ExampleContext from "../pages/ExampleContext";

import { Stack, Text } from "@chakra-ui/react";

const RouteProtected = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("@StackKenzie:user");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const LeadPage = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      color="orange"
    >
      <Text margin="auto" fontSize="10rem" align="center">
        Tela da LeadPage
      </Text>
    </Stack>
  );
};
const SignIn = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      color="purple"
    >
      <Text margin="auto" fontSize="10rem" align="center">
        Tela de Login
      </Text>
    </Stack>
  );
};
const SignUp = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      color="gray"
    >
      <Text margin="auto" fontSize="10rem" align="center">
        Tela de Cadastro
      </Text>
    </Stack>
  );
};
const Dashboard = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      color="green"
    >
      <Text margin="auto" fontSize="10rem" align="center">
        Tela do Dashboard
      </Text>
    </Stack>
  );
};
const PageError = () => {
  return (
    <Stack
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      color="red"
    >
      <Text margin="auto" fontSize="10rem" align="center">
        Tela de Erro 404
      </Text>
    </Stack>
  );
};

const AllRoutes = () => {
  return (
    <Switch>
      {/* PRINCIPAIS ROTAS */}
      <Route exact path="/" component={LeadPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      {/* ROTAS PROTEGIDAS */}
      <RouteProtected path="/dashboard" component={Dashboard} />

      {/* ROTAS NÃO CADASTRADAS */}
      <Route path="/examplecontext" component={ExampleContext} />

      {/* ROTAS NÃO ENCONTRADAS */}
      <Route path="/*" component={PageError} />
    </Switch>
  );
};

export default AllRoutes;
