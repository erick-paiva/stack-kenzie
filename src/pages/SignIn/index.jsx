import { Flex } from "@chakra-ui/react";
import FormSignIn from "../../components/FormSignIn";
import HeroCall from "../../components/HeroCall";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function SignIn() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  return (
    <Flex height={"100vh"} justifyContent={"center"}>
      {isMobile ? (
        <Flex m="10px">
          <FormSignIn />
        </Flex>
      ) : (
        <Flex alignItems={"center"} mt="0" w="900px" mx="auto">
          <FormSignIn />
          <HeroCall />
        </Flex>
      )}
    </Flex>
  );
}
