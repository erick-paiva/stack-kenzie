import { Flex } from "@chakra-ui/react";
import FormSignIn from "../../components/FormSignIn";
import HeroCall from "../../components/HeroCall";

export default function SignIn() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mt="50px"
      mx="auto"
      w={"800px"}
    >
      <FormSignIn />
      <HeroCall />
    </Flex>
  );
}
