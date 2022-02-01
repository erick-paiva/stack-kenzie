import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(async () => {
    await api
      .post("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  //Função pegar todos os usuários
  const getAllUsers = async () => {
    await api
      .post("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => alert(err.message));
  };

  //Função pegar apens um usuário
  const getOneUser = async (userId) => {
    await api
      .post(`/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <AuthContext.Provider value={{ users, user, getAllUsers, getOneUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
