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
    api.post("/questions", data, tokenBearer).then(() => {
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
      getAllQuestions();
    });
  };

  //Pegar todos as questões
  const getAllQuestions = async () => {
    api.get("/questions").then((response) => {
      setQuestions(response.data);
    });
  };

  //deletar uma questão
  const deleteQuestion = async () => {};

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        createQuestion,
        getAllQuestions,
        deleteQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, QuestionContext };
