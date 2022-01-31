import { Box, Flex, Text } from "@chakra-ui/react";

import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import ModalChakra from "../../components/ModalChakra";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";
import DropDownButton from "../../components/DropDownButton";


export default function Dashboard() {
  const { questions, getAllQuestions } = useQuestions();
  const [update, setUpdate] = useState(true);
  const [nameSearch, setNameSearch] = useState("");
  const questionFilter =
    questions.filter(
      (ele) =>
        ele.question.title.toLowerCase().includes(nameSearch.toLowerCase()) ||
        ele.question.body.toLowerCase().includes(nameSearch.toLowerCase())
    ) || [];
  useEffect(() => {
    setTimeout(() => {
      setUpdate(!update);
      getAllQuestions();
    }, 5000);
  }, [update]);

  return (
    <Box as="section">
      <Header setNameSearch={setNameSearch} />
      <Flex
        justifyContent="space-between"
        h="90px"
        alignItems="center"
        paddingX="30px"
      >
        <DropDownButton itens={["data", "hora"]} />
        <ModalChakra title="Fazer uma pergunta" ButtonText="Fazer uma pergunta">
          <AddQuestion />
        </ModalChakra>
      </Flex>

      <Box h="63vh" overflowY="auto">
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
        {questionFilter.length === 0 && (
          <Text color="primary" fontWeight="bold" fontSize="24px">
            Resultado não encontrado
          </Text>
        )}
      </Box>
    </Box>
  );
}
