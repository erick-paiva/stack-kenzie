import { Flex } from "@chakra-ui/react";
import FormSignUp from "../../components/FormSignUp";
import HeroCall from "../../components/HeroCall";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function SignUp() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <>
      {isMobile ? (
        <Flex m="10px">
          <FormSignUp />
        </Flex>
      ) : (
        <Flex alignItems={"center"} mt="50px" w="900px" mx="auto">
          <HeroCall />
          <FormSignUp />
        </Flex>
      )}
    </>
  );
}
