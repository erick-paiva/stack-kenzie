import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

function DisplayStatus({ answers, question, likes, comments, m }) {
  const { day, month, year } = question.date;

  return (
    <VStack
      m={m}
      spacing="5px"
      color="primary"
      fontSize="12px"
      alignItems={"flex-start"}
    >
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
        <Text>{likes} curtidas</Text>
        <Text>{comments} comentários</Text>
        <Text>
          {`${day.toString().padStart(2, "0")}/${month
            .toString()
            .padStart(2, "0")}/${year}`}
        </Text>
      </Box>
    </VStack>
  );
}

export default DisplayStatus;
