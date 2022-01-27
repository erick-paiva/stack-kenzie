import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";

const AnswerContext = createContext({});

const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    api.get("/answers").then((response) => {
      setAnswers(response.data);
    });
  }, []);

  //Criar uma questão
  const createAnswer = async (
    accessToken,
    userId,
    { day, month, year, hour, minutes },
    { title, body, userIdLike, tags }
  ) => {};

  //Pegar todos as questões
  const getAllAnswers = async () => {
    api.get("/answers").then((response) => {
      setAnswers(response.data);
    });
  };

  //deletar uma questão
  const deleteAnswer = async () => {};

  return (
    <AnswerContext.Provider
      value={{ answers, createAnswer, getAllAnswers, deleteAnswer }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export { AnswerProvider, AnswerContext };
