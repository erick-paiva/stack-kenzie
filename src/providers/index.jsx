import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import { UserProvider } from "./contexts/auth";
import { QuestionProvider } from "./contexts/questions";
import { AnswerProvider } from "./contexts/answers";
import { CommentProvider } from "./contexts/comments";
import { ThemeProvider } from "./contexts/theme";

const composeProviders =
  (...providers) =>
  (props) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

//Após importar o provider, adicione ele na função aqui.
export const AllProviders = composeProviders(
  ThemeProvider,
  BrowserRouter,
  AuthProvider,
  UserProvider,
  QuestionProvider,
  AnswerProvider,
  CommentProvider
);
//ATENÇÃO => A FUNÇÃO LER O PROVIDER DA DIREITA PARA ESQUERDA.

/* 
Exemplo de como será plubicado:

<AuthProvider>
  <QuestionProvider>
      {children}
  </QuestionProvider>
</AuthProvider>
*/
