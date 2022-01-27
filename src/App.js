import CardDoubts from "./components/CardDoubts";
import { InputChakra } from "./components/InputChakra";
// import ExampleContext from "./pages/ExampleContext"
function App() {
  return <div><CardDoubts />
  
  <InputChakra error={{message: "digite seu nome completo"}} label="adcione seu nome" placeholder="digite seu nome" />
  </div>;
}

export default App;
