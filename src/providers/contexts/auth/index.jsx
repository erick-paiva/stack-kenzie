import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../../services/api";
import { useUsers } from "../../hooks";
import { useToast } from "@chakra-ui/react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({});

  const toast = useToast();

  const { users, setUsers } = useUsers();
  const history = useHistory();

  useEffect(() => {
    const accessToken = localStorage.getItem("@StackKenzie:accessToken");
    const user = localStorage.getItem("@StackKenzie:user");

    if (accessToken && user) {
      setAccessToken(accessToken);
      setUser(JSON.parse(user));
    }
  }, []);

  //Função Login
  const signIn = async (email, password) => {
    await api
      .post("/login", { email, password })
      .then((response) => {
        localStorage.setItem(
          "@StackKenzie:accessToken",
          response.data.accessToken
        );
        localStorage.setItem(
          "@StackKenzie:user",
          JSON.stringify(response.data.user)
        );

        setAccessToken(response.data.accessToken);
        setUser(response.data.user);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast({
          title: "Falha no login.",
          description: "Senha ou e-mail errados",
          duration: 3000,
          isClosable: true,
          variant: "error",
          // containerStyle: { background: "red" },
        });
      });
  };

  //Função Cadastrar
  const signUp = async (data) => {
    await api
      .post("/signup", data)
      .then((response) => {
        setUsers([...users, response.data.user]);
        signIn(data.email, data.password);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, user, setUser, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
