import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BlueDot from "../BlueDot";

export default function HeroCall() {
  return (
    <Box w={"310px"} ml="130px">
      <Heading color={"primary"}>ENCONTRE A RESPOSTA DAS SUAS DÚVIDAS</Heading>
      <VStack pos="relative" spacing={"40px"}>
        <Flex alignItems={"center"} mt={"50px"}>
          <BlueDot />
          <Text w="100%">
            Faça perguntas aos coachs da Kenzie Academy Brasil
          </Text>
        </Flex>
        <Flex alignItems={"center"}>
          <BlueDot />
          <Text w="100%">
            Comente as postagens dos colegas e ajude a tirar dúvidas
          </Text>{" "}
        </Flex>
        <Flex alignItems={"center"}>
          <BlueDot />
          <Text w="100%">
            Comente as postagens dos colegas e ajude a tirar dúvidas
          </Text>{" "}
        </Flex>
        <Box
          h={"160px"}
          w={"5px"}
          bg={"primary"}
          position={"absolute"}
          right="295px"
          top={"40px"}
        />
      </VStack>
    </Box>
  );
}
