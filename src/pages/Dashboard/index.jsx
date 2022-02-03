import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
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
    border: "1px solid rgba(0,0,0,0.08)",
  },
  "&::-webkit-scrollbar-thumb": {
    border: "1px solid #0001FF",
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
      setQuestionFilter(filter);
    } else {
      setQuestionFilter(questions);
    }
  }, [tagSelected, nameSearch, questions]);
  return (
    <>
      {isMobile ? (
        <Grid h="100vh" templateRows="repeat(8, 1fr)" gap={5}>
          <GridItem rowSpan={1}>
            <Header setNameSearch={setNameSearch} />
          </GridItem>

          <GridItem margin="auto" rowSpan={1}>
            <Box maxWidth={isMobile && "85vw"} h="100%" w="100%">
              <VStack
                alignItems={"center"}
                spacing={"20px"}
                maxW="320px"
                margin="auto"
              >
                <AddQuestion />

                <Box margin={"20px"} w="320px">
                  {isMobile ? (
                    <Flex>
                      <DropDownButton
                        itens={["Data", "Curtidas"]}
                        setOption={setOption}
                        setArray={setQuestionFilter}
                        array={questionFilter}
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
                        setArray={setQuestionFilter}
                        array={questionFilter}
                      />
                      <DisplayTags
                        handleTagClick={handleTagClick}
                        tagsSelected={tagSelected}
                      />
                    </>
                  )}
                </Box>
              </VStack>

              <GridItem rowSpan={6}>
                <Box
                  sx={scroll}
                  overflowY="auto"
                  h="60vh"
                  w="100%"
                  paddingRight={"10px"}
                >
                  {(questionFilter.length > 0 ||
                  nameSearch ||
                  tagSelected.length > 0
                    ? questionFilter
                    : questions
                  ).map((ele) => (
                    <CardDoubts question={ele} key={ele.id} />
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
              </GridItem>
            </Box>
          </GridItem>
        </Grid>
      ) : (
        <Grid
          h="100vh"
          templateRows="repeat(8, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={5}
        >
          <GridItem rowSpan={1} colSpan={5}>
            <Header setNameSearch={setNameSearch} />
          </GridItem>

          <GridItem rowSpan={7} colSpan={3} marginLeft={12}>
            <Box
              maxWidth={isMobile && "340px"}
              h="100%"
              w="100%"
              overflowY="scroll"
              sx={scroll}
              paddingRight={3}
            >
              {(questionFilter.length > 0 ||
              nameSearch ||
              tagSelected.length > 0
                ? questionFilter
                : questions
              ).map((ele) => (
                <CardDoubts question={ele} key={ele.id} />
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
          </GridItem>
          <GridItem rowSpan={7} colSpan={1} marginRight={12}>
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
                      setArray={setQuestionFilter}
                      array={questionFilter}
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
                      setArray={setQuestionFilter}
                      array={questionFilter}
                    />
                    <DisplayTags
                      handleTagClick={handleTagClick}
                      tagsSelected={tagSelected}
                    />
                  </>
                )}
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      )}
    </>
  );
}
