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
    <Flex h="90vh" justifyContent={"center"} marginY="20px">
      {isMobile && loginVisible ? (
        <Flex alignItems={"center"} w="300px">
          <LandPageMobile setLoginVisible={setLoginVisible} />
        </Flex>
      ) : (
        <>
          {isMobile ? (
            <Flex alignItems={"center"} w="300px">
              <FormSignIn />
            </Flex>
          ) : (
            <Flex alignItems={"center"} w="900px">
              <FormSignIn />
              <HeroCall />
            </Flex>
          )}
        </>
      )}
    </Flex>
  );
}
