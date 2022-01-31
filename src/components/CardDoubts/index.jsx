import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth, useQuestions } from "../../providers/hooks";
import ImgDefault from "../../assets/imgDefault.svg";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import DisplayStatus from "../DisplayStatus";
import ModalQuestion from "../ModalQuestion";
import { FaThumbsUp } from "react-icons/fa";

export default function CardDoubts({ question, callback }) {
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [time, setTime] = useState(0);
  const history = useHistory();
  const [update, setUptade] = useState(true);
  const { user, accessToken } = useAuth();
  const [userCreator, setUserCreator] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUptade(!update);
      api.get("/answers").then((resp) => setAnswers(resp.data));
      api
        .get(`/comments?postId=${question?.id}`)
        .then((resp) => setComments(resp.data));
      setTime(6000);
    }, time);
  }, [update]);
  useEffect(() => {
    api
      .get(`/users/${question.userId}`)
      .then((resp) => setUserCreator(resp.data));
  }, []);

  const like = () => {
    callback();
    api
      .patch(
        `/questions/${question.id}`,
        {
          question: {
            title: question.question.title,
            body: question.question.body,
            likes: [...question.question.likes, { userId: user.id }],
            tags: question.question.tags,
          },
        },

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => callback())
      .catch((err) => console.log(err));
  };

  const deslike = () => {
    callback();
    const filter = question.question.likes.filter(
      (ele) => ele.userId !== user.id
    );
    api
      .patch(
        `/questions/${question.id}`,
        {
          question: {
            title: question.question.title,
            body: question.question.body,
            likes: filter,
            tags: question.question.tags,
          },
        },

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => callback())
      .catch((err) => console.log(err));
  };
  const deleteQuestion = () => {
    api.delete(
      `/questions/${question.id}`,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH="200px"
      // minW="320px"
      // maxW="600px"
      borderRadius="6px"
      alignItems="center"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      padding="15px 20px"
      onClick={() => history}
      boxSize="border-box"
      cursor="pointer"
      justifyContent="space-between"
      width="100%"
    >
      <Box as="figure" textAlign="center">
        <Image
          src={!!userCreator?.image ? userCreator.image : ImgDefault}
          h="80px"
          w="auto"
        />
        <Text as="figcaption" fontSize="14px">
          {userCreator?.name}
        </Text>
      </Box>

      <Box padding="0 15px" h="100%" onClick={onOpen}>
        <Text fontSize="30px" fontWeight="700" margin="0">
          {question?.question.title}
        </Text>
        <Text fontSize="16px" fontWeight="400" lineHeight="24px">
          {question?.question.body}
        </Text>
        <Flex marginTop="15px">
          {question.question?.tags?.map((ele) => (
            <Flex
              key={ele}
              border="1px solid #718096"
              mr="10px"
              h="18px"
              paddingX="10px"
              alignItems="center"
            >
              <Text fontSize="12px" fontWeight="700" color="#718096" margin="0">
                {ele}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>

      <VStack
        // w="200px"
        spacing="4"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        // onClick={onOpen}
      >
        <DisplayStatus answers={answers} question={question} />

        <Text fontSize="14px">{question?.question.likes.length} curtidas</Text>
        <Text fontSize="14px">{comments?.length} comentários</Text>
        {question.question.likes.some((ele) => ele.userId === user.id) ? (
          <Button variant={"ButtonFilledSmall"} onClick={deslike}>
            <HStack alignItems={"baseline"}>
              <Text>Curtido</Text>
              <FaThumbsUp style={{ style: "Regular" }} />
            </HStack>
          </Button>
        ) : (
          <Button variant={"ButtonBorderedSmall"} onClick={like}>
            <HStack alignItems={"baseline"}>
              <Text>Curtir</Text>
              <FaThumbsUp />
            </HStack>
          </Button>
        )}
      </VStack>
      <ModalQuestion
        onClose={onClose}
        isOpen={isOpen}
        title="Modal pergunta"
        question={question}
        ImgDefault={!!userCreator?.image ? userCreator.image : ImgDefault}
        deleteQuestion={deleteQuestion}
        answers={answers}
        deslike={deslike}
        comments={comments}
        like={like}
        user={user}
      />
    </Flex>
  );
}
