import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonsStyles";
import { toastStyles as Toast } from "./components/toastStyles";

export const theme = extendTheme({
  colors: {
    primary: "#0001FF",
    red: "#E53E3E",
    green: "#48BB78",
    grayTag: "#A0AEC0",
  },

  components: {
    Button,
    Toast,
  },
  fonts: {
    body: "Prompt, Inter, sans-serif",
    heading: "Roboto, Inter, sans-serif",
  },
});
