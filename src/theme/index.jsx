import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonsStyles";

export const theme = extendTheme({
  colors: {
    primary: "#0001FF",
    red: "#E53E3E",
    green: "#48BB78",
    grayTag: "#A0AEC0",
  },

  components: {
    Button,
  },
});
