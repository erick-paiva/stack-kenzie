
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CardDoubts from "../../components/CardDoubts";
import CreateQuestionButton from "../../components/CreateQuestion button";
import { Header } from "../../components/Header";
import ModalChakra from "../../components/Modal";
import { useQuestions } from "../../providers/hooks";

export default function Dashboard() {
  const { questions, getAllQuestions } = useQuestions();
  const [update, setUpdate] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUpdate(!update);
  //     getAllQuestions()
  //   }, 5000);
  // }, [update]);
  console.log(questions);
  return (
    <Box as="section">
        <Header />
        <Flex>
          <CreateQuestionButton />
        </Flex>
      <VStack mt="30px">
        {questions.map((ele) => (
          <CardDoubts question={ele} key={ele.id} />
        ))}
      </VStack>

      <ModalChakra title="Modal pergunta" buttonName="Modal pergunta">
        <CardDoubts />
        <AddComment />
        <AddAnswer />
      </ModalChakra>
    </Box>

  );
}
