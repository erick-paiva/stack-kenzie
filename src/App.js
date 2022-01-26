import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes/route";



function App() {
  return (
   <ChakraProvider>
      <Routes />
    </ChakraProvider>
      
   
  );
}

export default App;
