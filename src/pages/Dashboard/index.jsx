import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";
import DropDownButton from "../../components/DropDownButton";
import ModalChakra from "../../components/ModalChakra";

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
        flexDirection={"row-reverse"}
        margin={"5px"}
        height={"250px"}
        justifyContent={"center"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent="space-between"
          padding="40px"
        >
          <ModalChakra
            title="Fazer uma pergunta"
            ButtonText="Fazer uma pergunta"
          >
            <AddQuestion />
          </ModalChakra>
          <DropDownButton padding="10px" itens={["data", "hora"]} />
          <Box margin={"20px"}>
            <Heading size={"sm"}>Tags</Heading>
          </Box>
        </Flex>

        <Box
          h="63vh"
          overflowY="auto"
          m={"10px"}
          sx={{
            "&::-webkit-scrollbar": {
              width: "25px",
            },
            "&::-webkit-scrollbar-track": {
              width: "30px",
              borderRadius: "50px",
            },
            "&::-webkit-scrollbar-thumb": {
              border: "3px solid #0001FF",
              background: "white",
              borderRadius: "50px",
            },
          }}
        >
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
      </Flex>
    </Box>
  );
}
