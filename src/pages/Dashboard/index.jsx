import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import { useQuestions } from "../../providers/hooks";
import AddQuestion from "../../components/AddQuestion";
import DropDownButton from "../../components/DropDownButton";

import DisplayTags from "../../components/DisplayTags";
import ModalChakra from "../../components/ModalChakra";
import CardDoubtsSkelenton from "../../components/CardDoubtsSkelenton";

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
  const { questions } = useQuestions();
  const [nameSearch, setNameSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
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
      filter.length === 0 ? setNotFound(true) : setNotFound(false);
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
      filter.length === 0 ? setNotFound(true) : setNotFound(false);
      setQuestionFilter(filter);
    } else if (tagSelected.length > 0) {
      const filter =
        questions.filter((ele) =>
          tagSelected.every((e) => ele.tags.includes(e))
        ) || [];
      filter.length === 0 ? setNotFound(true) : setNotFound(false);
      setQuestionFilter(filter);
    } else {
      setQuestionFilter(questions);
    }
  }, [tagSelected, nameSearch]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isMobile ? (
        <Grid h="100vh" templateRows="repeat(8, 1fr)" gap={5}>
          <GridItem rowSpan={1}>
            <Header setNameSearch={setNameSearch} />
          </GridItem>

          <GridItem rowSpan={1} paddingX={"70px"} m="auto" h="100%" w="100%">
            <VStack
              alignItems={"center"}
              spacing={"20px"}
              w="100%"
              margin="auto"
            >
              <AddQuestion />

              <Flex width={"100%"} justifyContent={"space-between"}>
                {isMobile ? (
                  <>
                    <DropDownButton
                      itens={["Data", "Curtidas"]}
                      setArray={setQuestionFilter}
                      array={
                        questionFilter.length > 0 ? questionFilter : questions
                      }
                    />
                    <Button
                      ml="20px"
                      variant={"ButtonBorderedSmall"}
                      onClick={onOpen}
                    >
                      Tags
                    </Button>
                    <ModalChakra isOpen={isOpen} onClose={onClose}>
                      <Center mb="20px">
                        <DisplayTags
                          handleTagClick={handleTagClick}
                          tagsSelected={tagSelected}
                        />
                      </Center>
                    </ModalChakra>
                  </>
                ) : (
                  <>
                    <DropDownButton
                      itens={["Data", "Curtidas"]}
                      setArray={setQuestionFilter}
                      array={
                        questionFilter.length > 0 ? questionFilter : questions
                      }
                    />

                    <DisplayTags
                      handleTagClick={handleTagClick}
                      tagsSelected={tagSelected}
                    />
                  </>
                )}
              </Flex>
            </VStack>
          </GridItem>
          <GridItem
            rowSpan={6}
            sx={scroll}
            overflowY="auto"
            h="100%"
            w="100%"
            paddingRight={"10px"}
          >
            
            {(questionFilter.length > 0 || nameSearch || tagSelected.length > 0
              ? questionFilter
              : questions
            ).map((ele) => (
              <CardDoubts question={ele} key={ele.id} />
            ))}

            {notFound && (
              <Text
                textAlign={"center"}
                color="primary"
                fontWeight="bold"
                fontSize="24px"
              >
                Resultado não encontrado
              </Text>
            )}
            {questions.length === 0 && (
              <CardDoubtsSkelenton amount={[0, 1, 2, 3, 4, 5]} />
            )}
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

              {notFound && (
                <Text
                  textAlign={"center"}
                  color="primary"
                  fontWeight="bold"
                  fontSize="24px"
                >
                  Resultado não encontrado
                </Text>
              )}
              {questions.length === 0 && (
                <CardDoubtsSkelenton amount={[0, 1, 2, 3, 4, 5]} />
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
                      setArray={setQuestionFilter}
                      array={
                        questionFilter.length > 0 ? questionFilter : questions
                      }
                    />
                    <Button ml="20px" variant={"ButtonBorderedSmall"}>
                      Tags
                    </Button>
                  </Flex>
                ) : (
                  <>
                    <DropDownButton
                      itens={["Data", "Curtidas"]}
                      setArray={setQuestionFilter}
                      array={
                        questionFilter.length > 0 ? questionFilter : questions
                      }
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
