import { Box, Heading } from "@chakra-ui/react";

import { useQuestions } from "../../../providers/hooks";

const QuestionsTest = () => {
  const { questions } = useQuestions();
  console.log(questions)
  return (
    <Box
      rounded={"lg"}
      boxShadow={"lg"}
      p={5}
      borderRadius="10px"
      align={"center"}
      w="300px"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      color="white"
    >
      {questions
        ? questions.map((res) => (
            <Box align="left" key={res.id}>
              <Heading fontSize={"2xl"} align="center">
                EndPoint Questions
              </Heading>
              <b>Título da Questão:</b> {res.question.title} <br />
              <b>Corpo da Questão:</b> {res.question.body}
              <br />
              <b>Curtidas:</b> {res.question.likes.length}
              <br />
              <b>Tags:</b>
              {res.question.tags.map((tag) => (
                <strong key={tag}> | {tag}</strong>
              ))}

            </Box>
          ))
        : "Sem questões"}
    </Box>
  );
};

export default QuestionsTest;
