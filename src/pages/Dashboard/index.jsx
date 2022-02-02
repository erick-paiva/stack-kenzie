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
import ModalChakra from "../../components/ModalChakra";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";
import DropDownButton from "../../components/DropDownButton";

import DisplayTags from "../../components/DisplayTags";

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
  const [option, setOption] = useState([]);
  const [nameSearch, setNameSearch] = useState("");

  console.log(questions);
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [tagSelected, setTagSelected] = useState([]);
  // const questionFilter =
  //   questions.filter(
  //     (ele) =>
  //       ele.question.title.toLowerCase().includes(nameSearch.toLowerCase()) ||
  //       ele.question.body.toLowerCase().includes(nameSearch.toLowerCase())
  //   ) || [];

  const [questionFilter, setQuestionFilter] = useState([]);

  useEffect(() => {
    const filtered =
      questions.filter(
        (ele) =>
          ele.question.title.toLowerCase().includes(nameSearch.toLowerCase()) ||
          ele.question.body.toLowerCase().includes(nameSearch.toLowerCase())
      ) || [];
    setQuestionFilter(filtered);
  }, [nameSearch]);

  // useEffect(() => {
  //   if (nameSearch.length > 0) {
  //     setQuestionFilter(filter(questions));
  //   } else {
  //     setQuestionFilter(questions);
  //   }
  // }, [nameSearch]);

  // console.log(nameSearch);
  // console.log(nameSearch.length);
  // console.log(questionFilter);

  // filtro vindo da busca
  // guardar num state os valores vindos da busca
  // filtra as questions para trazer apenas as que tiverem em seu nome
  //ou no body

  // filtro vindo da escolha da tag
  // guardar num state os valores vindos das tags selecionadas
  // adiciona um filtro para mostrar apenas as questions que tiverem a
  // a tag selecionada

  // ordenar

  const handleTagClick = (value) => {
    console.log(questions);
    if (questions.some((e) => e.questions.tags !== value)) {
      setTagSelected([...tagSelected, value]);
    } else {
      setTagSelected(questions.filter((e) => e.questions.tags !== value));
    }
  };

  return (
    <Box>
      <Header setNameSearch={setNameSearch} />

      <Flex
        justifyContent={"center"}
        m={"50px"}
        flexDir={isMobile && "column-reverse"}
        alignItems={isMobile && "center"}
      >
        <Box
          maxWidth={isMobile && "340px"}
          h="75vh"
          w="100%"
          overflowY="auto"
          overflowX="hidden"
          sx={scroll}
        >
          {questionFilter.map((ele, i) => (
            <CardDoubts question={ele} callback={getAllQuestions} key={i} />
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
          maxW="320px"
          h="fit-content"
        >
          <AddQuestion />

          <Box margin={"20px"} w="320px">
            {isMobile ? (
              <Flex>
                <DropDownButton
                  itens={["Data", "Curtidas"]}
                  setOption={setOption}
                />
                <Button ml="20px" variant={"ButtonBorderedSmall"}>
                  Tags
                </Button>
              </Flex>
            ) : (
              <>
                <DropDownButton
                  itens={["Data", "Curtidas"]}
                  setOption={setOption}
                />
                {/* <Heading size={"sm"}>Tags</Heading>
                <Button
                  onClick={() => handleTagClick("JAVASCRIPT")}
                  variant={"TagButton"}
                >
                  JAVASCRIPT
                </Button>
                <Button
                  onClick={() => handleTagClick("Q2")}
                  variant={"TagButton"}
                >
                  Q2
                </Button>
                <Button
                  onClick={() => handleTagClick("REACT")}
                  variant={"TagButton"}
                >
                  REACT
                </Button>
            */}
                <DisplayTags />
              </>
            )}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
