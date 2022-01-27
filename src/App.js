import SignUp from "./pages/Signup";
import SignIn from "./pages/SignIn";
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return <>
  <ChakraProvider>
  <SignIn />;
  <SignUp />;
  </ChakraProvider>
  </>
}

export default App;
