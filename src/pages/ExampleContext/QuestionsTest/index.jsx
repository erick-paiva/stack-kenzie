import { Box, Text } from "@chakra-ui/react";

import { useQuestions } from "../../../providers/hooks";

const QuestionsTest = () => {
  const { questions } = useQuestions();

  return (
    <Box
      rounded={"lg"}
      bg="#F0E68C"
      boxShadow={"lg"}
      p={10}
      borderRadius="10px"
      align={"center"}
      w="300px"
    >
      {questions
        ? questions.map((res) => (
            <Box align="left">
              <Text as="h2">EndPoint allThese</Text>
              <b>Título:</b> {res.question.title} <br />
              <b>Criador:</b> {res.question.creator.name}
              <br />
              <b>Curtidas:</b> {res.question.likes} (Erick, kkkk)
              <br />
              <b>Comentários:</b> {res.question.allComments.length}
            </Box>
          ))
        : "Sem questões"}
    </Box>
  );
};

export default QuestionsTest;
