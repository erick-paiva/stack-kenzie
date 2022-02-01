import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";
import DropDownButton from "../../components/DropDownButton";
import ModalChakra from "../../components/ModalChakra";

const scroll = {
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
};

export default function Dashboard() {
  const { questions, getAllQuestions } = useQuestions();
  const [update, setUpdate] = useState(true);
  const [nameSearch, setNameSearch] = useState("");

  const [isMobile] = useMediaQuery("(max-width: 900px)");

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
        justifyContent={"center"}
        m={"50px"}
        flexDir={isMobile && "column-reverse"}
        alignItems={isMobile && "center"}
      >
        <Box w="100%" h="75vh" overflowY="auto" overflowX="hidden" sx={scroll}>
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
            <Text
              textAlign={"center"}
              color="primary"
              fontWeight="bold"
              fontSize="24px"
            >
              Resultado não encontrado
            </Text>
          )}
        </Box>

        <VStack
          alignItems={"flex-start"}
          spacing={"20px"}
          ml={isMobile ? "0px" : "20px"}
          mb="20px"
          mW="320px"
          h="fit-content"
        >
          <AddQuestion />

          <Box margin={"20px"} w="320px">
            <DropDownButton />

            {isMobile ? (
              <Button variant={"ButtonBorderedSmall"}>Tags</Button>
            ) : (
              <>
                <Heading size={"sm"}>Tags</Heading>
                <Button variant={"TagButton"}>JAVASCRIPT</Button>
              </>
            )}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
