import { Text, VStack } from "@chakra-ui/react";
import React from "react";

function DisplayStatus({ answers, question, likes, comments }) {
  return (
    <VStack spacing="2" color="primary">
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
      <Text fontSize="14px">{likes} curtidas</Text>
      <Text fontSize="14px">{comments} comentários</Text>
      </VStack>
  );
}

export default DisplayStatus;
