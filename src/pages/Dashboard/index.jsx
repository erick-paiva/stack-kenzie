import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AddAnswer from "../../components/AddAnswer";
import AddComment from "../../components/AddComment";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import ModalChakra from "../../components/Modal";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";

export default function Dashboard() {
  const { questions, getAllQuestions } = useQuestions();
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUpdate(!update);
      getAllQuestions();
    }, 5000);
  }, [update]);

  return (
    <Box as="section">
      <Header />
      <Flex>
        <ModalChakra
          title="Modal pergunta"
          ButtonText="Modal adicionar pergunta"
        >
          <AddQuestion />
        </ModalChakra>
      </Flex>
      <Heading size="small-xl">aaaaaaaaa</Heading>
      <Heading size="xl">aaaaaaaaa</Heading>
      <VStack mt="30px">
        {questions.map((ele) => (
          <Box key={ele.id}>
            <CardDoubts question={ele} />
            <ModalChakra title="Modal pergunta" ButtonText="Modal pergunta">
              <CardDoubts question={ele} />
              <AddComment postId={ele.id} />
              <AddAnswer postId={ele.id} />
            </ModalChakra>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
