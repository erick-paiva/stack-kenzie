import { Flex } from "@chakra-ui/react";
import FormSignIn from "../../components/FormSignIn";
import HeroCall from "../../components/HeroCall";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function SignIn() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {isMobile ? (
        <Flex m="10px">
          <FormSignIn />
        </Flex>
      ) : (
        <Flex alignItems={"center"} mt="50px" w="900px" mx="auto">
          <FormSignIn />
          <HeroCall />
        </Flex>
      )}
    </>
  );
}
