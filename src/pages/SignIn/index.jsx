import { Flex } from "@chakra-ui/react";
import FormSignIn from "../../components/FormSignIn";
import HeroCall from "../../components/HeroCall";

export default function SignIn() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      mt="50px"
      flexWrap={"wrap"}
    >
      <FormSignIn />
      <HeroCall />
    </Flex>
  );
}
