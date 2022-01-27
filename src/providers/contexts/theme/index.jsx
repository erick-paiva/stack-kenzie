import { theme } from "../../../theme";
import { ChakraProvider } from "@chakra-ui/react";

export const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
