import { AuthProvider } from "./contexts/auth";
import { QuestionProvider } from "./contexts/questions";

const composeProviders =
  (...providers) =>
  (props) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

//Após importar o provider, adicione ele na função aqui.
export const AllProviders = composeProviders(AuthProvider, QuestionProvider);
//ATENÇÃO => A FUNÇÃO LER O PROVIDER DA DIREITA PARA ESQUERDA.

/* 
Exemplo de como será plubicado:

<AuthProvider>
  <QuestionProvider>
      {children}
  </QuestionProvider>
</AuthProvider>
*/
