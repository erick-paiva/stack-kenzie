import { Box, Heading } from "@chakra-ui/react";

import { useAnswers } from "../../../providers/hooks";

const AnswersTest = () => {
  const { answers } = useAnswers();
  

  return (
    <Box
      rounded={"lg"}
      bg="#F0E68C"
      boxShadow={"lg"}
      p={5}
      borderRadius="10px"
      align={"center"}
      w="300px"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      {answers
        ? answers.map((res) => (
            <Box align="left" key={res.userId}>
              <Heading fontSize={"2xl"} align="center">
                EndPoint Answers
              </Heading>
              <b>Título da Resposta:</b> {res.title} <br />
              <b>Corpo da Resposta:</b> {res.body}
            </Box>
          ))
        : "Sem questões"}
    </Box>
  );
};

export default AnswersTest;
