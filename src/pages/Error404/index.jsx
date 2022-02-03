import { Box, VStack, Image, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "../../assets/logo1.svg";
import ghost from "../../assets/ghost.svg";
import { useHistory } from "react-router-dom";

export default function Error404() {
  const history = useHistory();
  return (
    <Box as="section" p="10px">
      <VStack
        h={["80vh", "80vh"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          bg="#0001FF"
          w="316px"
          h="130px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Logo} w="145px" h="85px" />
        </Box>
        <Stack
          w={["100vw", "75vw"]}
          direction={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={ghost} />
          <Text
            w="100vw"
            fontSize={["35px", "72px"]}
            lineHeight={["100%", "72px"]}
            fontWeight="bold"
            textAlign={["center", "left"]}
          >
            Página não encontrada! Procure um coach.
          </Text>
        </Stack>
        <Button
          variant="ButtonBorderedWhite"
          onClick={history.push("/dashboard")}
        >
          Voltar
        </Button>
      </VStack>
    </Box>
  );
}
