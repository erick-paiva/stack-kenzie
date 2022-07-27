import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BlueDot from "../BlueDot";

export default function HeroCall() {
  return (
    <Box w={"310px"} minW={"310px"} m="auto">
      <Heading color={"primary"}>ENCONTRE A RESPOSTA DAS SUAS DÚVIDAS</Heading>
      <VStack pos="relative" spacing={"40px"}>
        <Flex alignItems={"center"} mt={"50px"}>
          <BlueDot />
          <Text w="80%">
            Faça perguntas aos coachs da Kenzie Academy Brasil
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <BlueDot />
          <Text w="80%">
            Comente as postagens dos colegas e ajude a tirar dúvidas
          </Text>{" "}
        </Flex>
        <Flex alignItems={"center"}>
          <BlueDot />
          <Text w="80%">
            Curta as dúvidas mais interessantes para colocar em evidência{" "}
          </Text>{" "}
        </Flex>
      </VStack>
    </Box>
  );
}
