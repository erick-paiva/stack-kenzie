import { Flex } from "@chakra-ui/react";
import FormSignUp from "../../components/FormSignUp";
import HeroCall from "../../components/HeroCall";
export default function SignUp() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mt="50px"
      mx="auto"
      w={"800px"}
    >
      <HeroCall />
      <FormSignUp />
    </Flex>
  );
}
