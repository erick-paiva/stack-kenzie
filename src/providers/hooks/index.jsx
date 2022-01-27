import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { QuestionContext } from "../contexts/questions";

//Hook useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

//Hook useQuestions
export const useQuestions = () => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error("useQuestion must be used within an AuthProvider");
  }

  return context;
};

//Hook useComments
