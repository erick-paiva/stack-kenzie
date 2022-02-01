import { Box, Flex, useDisclosure, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import ModalChakra from "../../components/Modal";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";

export default function Dashboard() {
  const { questions, getAllQuestions } = useQuestions();
  const [update, setUpdate] = useState(true);
  const [nameSearch, setNameSearch] = useState("");
  const questionFilter = questions.filter(
    (ele) =>
      ele.question.title
        .toLowerCase()
        .includes(nameSearch.toLowerCase()) ||
      ele.question.body
        .toLowerCase()
        .includes(nameSearch.toLowerCase())
  ) || []
  useEffect(() => {
    setTimeout(() => {
      setUpdate(!update);
      getAllQuestions();
    }, 5000);
  }, [update]);

  return (
    <Box as="section">
      <Header setNameSearch={setNameSearch} />
      <Flex>
        <ModalChakra
          title="Modal pergunta"
          ButtonText="Modal adicionar pergunta"
        >
          <AddQuestion />
        </ModalChakra>
      </Flex>

      <VStack mt="30px">
        {!!nameSearch
          ? questionFilter?.map((ele) => (
              <CardDoubts
                question={ele}
                callback={getAllQuestions}
                key={ele.id}
              />
            ))
          : questions.map((ele) => (
              <CardDoubts
                question={ele}
                callback={getAllQuestions}
                key={ele.id}
              />
            ))}
      </VStack>
    </Box>
  );
}
