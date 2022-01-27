import { createContext, useCallback, useState, useEffect } from "react";
import { api } from "../../../services/api";

const QuestionContext = createContext({});

const QuestionProvider = ({ children }) => {
  const [questions, SetQuestions] = useState([]);

  useEffect(() => {
    api.get("/questions").then((response) => {
      SetQuestions(response.data);
    });
  }, []);

  //Criar uma questão
  const createQuestion = async () => {};

  //Pegar todos as questões
  const getAllQuestions = async () => {};

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
