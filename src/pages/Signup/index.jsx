import { Flex } from "@chakra-ui/react";
import FormSignUp from "../../components/FormSignUp";
import HeroCall from "../../components/HeroCall";
export default function SignUp() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      mt="50px"
      flexWrap={"wrap"}
    >
      <FormSignUp />
      <HeroCall />
    </Flex>
  );
}
