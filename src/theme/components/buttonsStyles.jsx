import { blacken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  variants: {
    ButtonFilledBlue: {
      size: "lg",
      variant: "solid",
      bg: "primary",
      color: "white",
      width: "100%",
      margin: "auto",
      _hover: {
        bg: blacken("primary", 40),
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonBorderedWhite: {
      size: "lg",
      width: "100%",
      bg: "transparent",
      color: "primary",
      border: "1px solid",
      borderColor: "primary",
      _hover: {
        transform: "scale(1.02)",
        bg: blacken("white", 5),
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonBorderedSmall: {
      size: "sm",
      bg: "transparent",
      color: "primary",
      border: "1px solid",
      borderColor: "primary",
      width: "100%",
      height: "30px",
      _hover: {
        transform: "scale(1.02)",
        bg: blacken("white", 5),
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    ButtonFilledSmall: {
      size: "sm",
      variant: "solid",
      bg: "primary",
      color: "white",
      maxWidth: "150px",
      width: "100%",
      height: "30px",
      _hover: {
        bg: blacken("primary", 40),
        transform: "scale(1.02)",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
    TagButton: {
      fontSize: "12px",
      size: "sm",
      bg: "transparent",
      color: "gray.300",
      border: "1px solid",
      borderColor: "gray.300",
      width: "fit-content",
      height: "fit-content",
      padding: "4px",
      _hover: {
        transform: "scale(1.02)",
        bg: blacken("white", 5),
        color: "primary",
        borderColor: "primary",
      },
      fontFamily: "Roboto, Inter, sans-serif",
    },
  },
};
