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

  console.log(questions)
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [ tagSelected, setTagSelected] = useState([])
  const [questionFilter, setQuestionFilter] = useState([])

  const test = () => {
    const filter = questions.filter(ele => ele.tags.some(ele => ele) )
  }

  const handleTagClick = (value) => {
    if (!tagSelected.some((e) => e === value)) {
      setTagSelected([...tagSelected, value]);
    } else {
      setTagSelected(tagSelected.filter((e) => e !== value));
    }
  };
  useEffect(() => {
    console.log(tagSelected, "aa")
  },[questionFilter, nameSearch,tagSelected])

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
          {(questionFilter.length > 0 ? questionFilter: questions).map((ele, i) => (
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
                <Heading size={"sm"}>Tags</Heading>
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
              </>
            )}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
