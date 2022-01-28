import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../hooks";

const QuestionContext = createContext({});

const QuestionProvider = ({ children }) => {
  const [questions, SetQuestions] = useState([]);
  const {accessToken} = useAuth()
  const tokenBearer = {
    Headers : {authorization: `Bearer ${accessToken}`}
  }
  useEffect(() => {
    getAllQuestions()
  }, []);

  //Criar uma questão
  const createQuestion = async (data) => {
    api.post("/questions", data, tokenBearer).then(() => console.log("aee"))
  };

  //Pegar todos as questões
  const getAllQuestions = async () => {
    api.get("/questions").then((response) => {
      SetQuestions(response.data);
    });
  };

  //deletar uma questão
  const deleteQuestion = async () => {};

  return (
    <QuestionContext.Provider
      value={{ questions, createQuestion, getAllQuestions, deleteQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
