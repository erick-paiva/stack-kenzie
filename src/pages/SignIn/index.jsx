import { Flex } from "@chakra-ui/react";
import FormSignIn from "../../components/FormSignIn";
import HeroCall from "../../components/HeroCall";
import { useMediaQuery } from "@chakra-ui/media-query";
import LandPageMobile from "../../components/LandPageMobile";

import { useState } from "react";

export default function SignIn() {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [loginVisible, setLoginVisible] = useState(true);
  return (
    <>
      {isMobile && loginVisible ? (
        <Flex mx="10" mt="50px">
          <LandPageMobile setLoginVisible={setLoginVisible} />
        </Flex>
      ) : (
        <>
          {isMobile ? (
            <Flex alignItems={"center"} mt="50px" w="380px" h="588px" mx="auto">
              <FormSignIn />
            </Flex>
          ) : (
            <Flex alignItems={"center"} mt="50px" w="900px" mx="auto">
              <FormSignIn />
              <HeroCall />
            </Flex>
          )}
        </>
      )}
    </>
  );
}
