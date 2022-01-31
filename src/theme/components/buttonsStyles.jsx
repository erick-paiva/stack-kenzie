import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  variants: {
    ButtonFilledBlue: {
      size: "lg",
      variant: "solid",
      bg: "primary",
      color: "white",
      w: "315px",
      _hover: {
        bg: whiten("primary", 20),
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonBorderedWhite: {
      size: "lg",
      w: "315px",
      bg: "transparent",
      color: "primary",
      border: "1px solid",
      borderColor: "primary",
      _hover: {
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonBorderedSmall: {
      size: "sm",
      bg: "transparent",
      color: "primary",
      border: "1px solid",
      borderColor: "primary",
      width: "150px",
      _hover: {
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonFilledSmall: {
      size: "sm",
      variant: "solid",
      bg: "primary",
      color: "white",
      width: "150px",
      _hover: {
        bg: whiten("primary", 20),
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
  },
};
