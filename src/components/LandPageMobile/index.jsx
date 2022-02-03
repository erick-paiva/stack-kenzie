import { Button, Text, VStack, Box, StackDivider } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
//import { useAuth } from "../../providers/hooks";
//import ContainerBase from "../ContainerBase/Index";
import LogoBlue from "../LogoBlue";
import HeroCall from "../HeroCall";

export default function LandPageMobile({setLoginVisible}) {
  const history = useHistory();

  return (
    <VStack flex="1" spacing={50} align="stretch">
      <LogoBlue />

      <HeroCall />

      <VStack alignItems="flex-start" spacing={4}>
        <Button onClick={() => setLoginVisible(false)} variant={"ButtonFilledBlue"}>
          LOGIN
        </Button>

        <Button
          variant={"ButtonBorderedWhite"}
          onClick={() => history.push("/signup")}
        >
          Cadastre-se
        </Button>
      </VStack>
    </VStack>
  );
}
