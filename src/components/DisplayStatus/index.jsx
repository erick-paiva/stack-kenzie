import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

function DisplayStatus({ answers, question, likes, comments, m }) {
  return (
    <VStack m={m} spacing="5px" color="primary" alignItems={"flex-start"}>
      <Text
        fontSize="12px"
        fontWeight="700"
        color="white"
        bg={
          answers.some((ele) => ele.postId === question?.id)
            ? "#48BB78"
            : "#E53E3E"
        }
        textAlign="center"
        padding="6px 4px"
        borderRadius="2px"
      >
        {answers.some((ele) => ele.postId === question?.id)
          ? "RESPONDIDO"
          : "SEM RESPOSTA"}
      </Text>
      <Box alignItems={"start"}>
        <Text fontSize="12px">{likes} curtidas</Text>
        <Text fontSize="12px">{comments} comentários</Text>
      </Box>
    </VStack>
  );
}

export default DisplayStatus;
