import { Text } from "@chakra-ui/react";
import React from "react";

function DisplayStatus({ answers, question }) {
  return (
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
  );
}

export default DisplayStatus;
