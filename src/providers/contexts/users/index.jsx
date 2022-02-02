import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [oneUser, setOneUser] = useState({});

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  //Função pegar todos os usuários
  const getAllUsers = async () => {
    await api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => alert(err.message));
  };

  //Função pegar apens um usuário
  const getOneUser = async (userId) => {
    await api
      .get(`/users/${userId}`)
      .then((response) => {
        setOneUser(response.data);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <UserContext.Provider
      value={{ users, setUsers, oneUser, getAllUsers, getOneUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
