import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#F6F6F7",
      100: "#eeeeee",
      200: "#d4d4d4",
      300: "#9e9ea7",
      400: "#666665",
      900: "#111111",
    },
    red: {
      600: "#df1545",
    },
    green: {
      600: "#168821",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  sizes: {
    ...chakraTheme.space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.900",
      },
    },
  },
});
