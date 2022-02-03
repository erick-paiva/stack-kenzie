import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/users";
import { QuestionProvider } from "./contexts/questions";
import { AnswerProvider } from "./contexts/answers";
import { CommentProvider } from "./contexts/comments";
import { TagProvider } from "./contexts/tags";
import { ThemeProvider } from "./contexts/theme";

const composeProviders =
  (...providers) =>
  (props) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

export const AllProviders = composeProviders(
  ThemeProvider,
  BrowserRouter,
  UserProvider,
  AuthProvider,
  QuestionProvider,
  AnswerProvider,
  CommentProvider,
  TagProvider
);
