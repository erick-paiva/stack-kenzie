import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuestions } from "../../providers/hooks";
import ImaDefault from "../../assets/imgDefault.svg";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
export default function CardDoubts({question}) {
  const [answers, setAnswers] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()
  const [update, setUptade] = useState(true)

 
  useEffect(() => {
    setTimeout(() => {
      setUptade(!update)
      api.get("/answers").then(resp => setAnswers(resp.data))
      api.get(`/comments?postId=${question?.id}`).then(resp => setComments(resp.data))
    }, 5000);

   
  },[update])

  return (
    <Flex
      minH="200px"
      minW="320px"
      maxW="600px"
      borderRadius="6px"
      alignItems="center"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      padding="15px 20px"
      onClick={() => history}
    >
      <Box as="figure" textAlign="center" >
        <Image src={ImaDefault} />
        <Text as="figcaption" fontSize="14px">Kenzinho</Text>
      </Box>

      <Box padding="0 15px" h="100%" minW="320px">
        <Text fontSize="30px" fontWeight="700" margin="0">
          {question?.question.title}
        </Text>
        <Text fontSize="16px" fontWeight="400" lineHeight="24px">
          {question?.question.body}
        </Text>
        <Flex marginTop="15px">
          {question?.question?.tags.map((ele) => (
            <Flex key={ele} border="1px solid #718096" mr="10px" h="18px" paddingX="10px" alignItems="center">
              <Text fontSize="12px" fontWeight="700" color="#718096" margin="0">{ele}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
        <VStack w="200px" spacing="4" display="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="12px" fontWeight="700" color="white" bg={answers.some(ele => ele.postId === question?.id) ? "#48BB78" : "#E53E3E"} textAlign="center" padding="6px 4px" borderRadius="2px" >{answers.some(ele => ele.postId === question?.id) ? "RESPONDIDO" : "SEM RESPOSTA"}</Text>
            <Text fontSize="14px">{question?.question.likes.length} curtidas</Text>
            <Text fontSize="14px">{comments.length} comentários</Text>
        </VStack>

    </Flex>
  );
}
