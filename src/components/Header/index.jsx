import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/logoKenzieStack.svg";
import imgDefault from "../../assets/imgDefault.svg";
import { InputChakra } from "../InputChakra";
export function Header() {
  return (
    <Flex w="100%" justifyContent="space-between" alignItems="center" h="126px" paddingX="30px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)">
      <Image src={Logo} />

      <Box minW="320px" maxW="100%">

      <InputChakra
        placeholder="Pesquise sua dúvida"
        border="2px solid red"
        defaultBorder="blue"
        h="50px"
      />
      </Box>
      <Image src={imgDefault} h="60px" />
    </Flex>
  );
}
