import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";

const CommentContext = createContext({});

const CommentProvider = ({ children }) => {
  const [comments, SetComments] = useState([]);

  useEffect(() => {
    api.get("/comments").then((response) => {
      SetComments(response.data);
    });
  }, []);

  //Criar uma questão
  const createComment = async () => {};

  //Pegar todos as questões
  const getAllComments = async () => {
    api.get("/comments").then((response) => {
      SetComments(response.data);
    });
  };

  //deletar uma questão
  const deleteComment = async () => {};

  return (
    <CommentContext.Provider
      value={{ comments, createComment, getAllComments, deleteComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentProvider, CommentContext };
