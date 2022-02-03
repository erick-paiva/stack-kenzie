import { useToast } from "@chakra-ui/react";
import { createContext, useState, useEffect } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../hooks";

const QuestionContext = createContext({});

const QuestionProvider = ({ children }) => {
  const toast = useToast();
  const [questions, setQuestions] = useState([]);

  const { accessToken } = useAuth();

  const tokenBearer = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  //Criar uma questão
  const createQuestion = async (data) => {
    api.post("/questions", data, tokenBearer).then((resp) => {
      toast({
        containerStyle: {
          background: "#48BB78",
          color: "whiter",
          borderRadius: "8px",
        },
        title: "Sua pergunta foi enviada!",
        description: "Agora é só aguardar a resposta dos facilitadores :)",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      // getAllQuestions();
      setQuestions([...questions, resp.data]);
    });
  };

  //Pegar todos as questões
  const getAllQuestions = async () => {
    api.get("/questions").then((response) => {
      setQuestions(response.data);
    });
  };

  //UpdateQuestion
  const updateQuestion = async (questionId, data) => {
    api
      .patch(`/questions/${questionId}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => getAllQuestions());
  };

  //deletar uma questão
  const deleteQuestion = async (questionId) => {
    api.delete(
      `/questions/${questionId}`,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        createQuestion,
        getAllQuestions,
        updateQuestion,
        deleteQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
