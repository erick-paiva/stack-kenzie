import { createContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("@StackKenzie:accessToken");
    const user = localStorage.getItem("@StackKenzie:user");

    if (accessToken && user) {
      setAccessToken(accessToken);
      setUser(JSON.parse(user));
    }
  }, []);

  const history = useHistory();

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
      .catch((err) => alert(err.message));
  };

  //Função Cadastrar
  const signUp = async (data) => {
    await api
      .post("/signup", data)
      .then(() => {
        signIn(data.email, data.password);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <AuthContext.Provider value={{ accessToken, user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
