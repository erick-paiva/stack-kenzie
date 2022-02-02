import {
  Box,
  Button,
  Flex,
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
  const [nameSearch, setNameSearch] = useState("");
  const [option, setOption] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [tagSelected, setTagSelected] = useState([]);
  const [questionFilter, setQuestionFilter] = useState([]);

  const handleTagClick = (value) => {
    if (!tagSelected.some((e) => e === value)) {
      setTagSelected([...tagSelected, value]);
    } else {
      setTagSelected(tagSelected.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    if (nameSearch && tagSelected.length > 0) {
      const filter =
        questions
          .filter((ele) => tagSelected.every((e) => ele.tags.includes(e)))
          .filter(
            (ele) =>
              ele.question.title
                .toLowerCase()
                .includes(nameSearch.toLowerCase()) ||
              ele.question.body.toLowerCase().includes(nameSearch.toLowerCase())
          ) || [];
      setQuestionFilter(filter);
    } else if (nameSearch) {
      const filter =
        questions.filter(
          (ele) =>
            ele.question.title
              .toLowerCase()
              .includes(nameSearch.toLowerCase()) ||
            ele.question.body.toLowerCase().includes(nameSearch.toLowerCase())
        ) || [];
      setQuestionFilter(filter);
    } else if (tagSelected.length > 0) {
      const filter =
        questions.filter((ele) =>
          tagSelected.every((e) => ele.tags.includes(e))
        ) || [];
      console.log(filter, "filll");
      setQuestionFilter(filter);
    } else {
      setQuestionFilter(questions);
    }
  }, [tagSelected, nameSearch, questions]);

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
          {(questionFilter.length > 0 || nameSearch || tagSelected.length > 0
            ? questionFilter
            : questions
          ).map((ele, i) => (
            <CardDoubts question={ele} callback={getAllQuestions} key={i} />
          ))}

          {questionFilter.length === 0 && nameSearch && (
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
                  option={option}
                  setArray={setQuestionFilter}
                  array={questions}
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
                  option={option}
                  setArray={setQuestionFilter}
                  array={questions}
                />
                <DisplayTags
                  handleTagClick={handleTagClick}
                  tagsSelected={tagSelected}
                />
              </>
            )}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
