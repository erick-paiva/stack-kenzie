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
        toast({
          containerStyle: {
            background: "#48BB78",
            color: "whiter",
            borderRadius: "8px",
          },
          title: "Logado com sucesso",
          description: `Bem-vindo ${response.data.user.name}`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          containerStyle: {
            background: "#E53E3E",
            color: "whiter",
            borderRadius: "8px",
          },
          title: "Senha ou email invalidos!",
          description: "Tente ou senha ou email",
          status: "success",
          duration: 2000,
          isClosable: true,
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

  //Update profile
  const updateProfile = async (userId, data) => {
    api.patch(`/users/${userId}`, data, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, user, setUser, signIn, signUp, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
