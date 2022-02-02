import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [oneUser, setOneUser] = useState({});

  useEffect(() => {
    api
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
        setOneUser(response.data);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <UserContext.Provider
      value={{ users, oneUser, setUsers, setOneUser, getAllUsers, getOneUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
