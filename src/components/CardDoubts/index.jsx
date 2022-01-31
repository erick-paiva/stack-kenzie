import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
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
import { BiLike } from "react-icons/bi";
export default function CardDoubts({ question, callback, disable = false }) {
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [time, setTime] = useState(1000000);
  const history = useHistory();
  const [update, setUptade] = useState(true);
  const { user, accessToken } = useAuth();
  const [userCreator, setUserCreator] = useState({});
  const [liked, setLiked] = useState(
    question.question.likes.some((ele) => ele.userId === user.id)
  );
  const is800px = useBreakpointValue({ base: false, md: true });

  const getData = () => {
    api.get("/answers").then((resp) => setAnswers(resp.data));
    api
      .get(`/comments?postId=${question?.id}`)
      .then((resp) => setComments(resp.data));
  };
  useEffect(() => {
    setTimeout(() => {
      setUptade(!update);
      getData();
      setTime(10000);
    }, time);
  }, [update]);

  useEffect(() => {
    api
      .get(`/users/${question.userId}`)
      .then((resp) => setUserCreator(resp.data));
    getData();
  }, []);

  const like = (e) => {
    e.stopPropagation();
    callback();
    const filter = question.question?.likes.filter(
      (ele) => ele.userId !== user.id
    );
    if (!liked) {
      setLiked(true);
      api
        .patch(
          `/questions/${question.id}`,
          {
            question: {
              title: question.question.title,
              body: question.question.body,
              likes: [...filter, { userId: user.id }],
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
        .catch((err) => {
          console.log(err);
          setLiked(false);
        });
    }
  };

  const deslike = (e) => {
    e.stopPropagation();

    callback();
    const filter = question.question.likes.filter(
      (ele) => ele.userId !== user.id
    );
    if (liked) {
      setLiked(false);
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
        .catch((err) => {
          console.log(err);
          setLiked(true);
        });
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteQuestion = () => {
    onClose();
    api
      .delete(
        `/questions/${question.id}`,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(() => callback());
  };

  return (
    <Flex
      minH="200px"
      // minW="320px"
      // maxW="600px"
      borderRadius="6px"
      alignItems="center"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      padding="15px 20px"
      // onClick={() => history}
      mt="20px"
      boxSize="border-box"
      cursor="pointer"
      justifyContent="space-between"
      width="100%"
      flexDirection={["column", "column", "row"]}
      onClick={!disable && onOpen}
    >
      <Flex
        as="figure"
        w={["100%", "100%", "auto"]}
        textAlign="center"
        flexDirection={["row", "row", "column"]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image
            src={!!userCreator?.image ? userCreator.image : ImgDefault}
            h="80px"
            w="auto"
          />
          <Text as="figcaption" fontSize="14px">
            {userCreator?.name}
          </Text>
        </Box>
        {!is800px && (
          <VStack spacing="2" color="primary">
            <DisplayStatus answers={answers} question={question} />
            <Text fontSize="14px">
              {question?.question.likes.length} curtidas
            </Text>
            <Text fontSize="14px">{comments?.length} comentários</Text>
          </VStack>
        )}
      </Flex>

      <Flex
        paddingX={["0", "0", "15px"]}
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
        w="100%"
      >
        <Heading>{question?.question.title}</Heading>
        <Text fontSize="16px" fontWeight="400" lineHeight="24px">
          {question?.question.body}
        </Text>
        <Flex marginTop="15px" flexWrap="wrap">
          {question?.tags?.map((ele) => (
            <Flex
              key={ele}
              border="1px solid"
              borderColor="grayTag"
              mr="10px"
              h="18px"
              paddingX="10px"
              alignItems="center"
              mt="10px"
            >
              <Text fontSize="12px" fontWeight="700" color="grayTag" margin="0">
                {ele}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <VStack
        // w="200px"
        spacing="4"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        // onClick={onOpen}
      >
        {is800px && (
          <Box color="primary">
            <DisplayStatus answers={answers} question={question} />
            <Text fontSize="14px">
              {question?.question.likes.length} curtidas
            </Text>
            <Text fontSize="14px">{comments?.length} comentários</Text>
          </Box>
        )}

        {liked ? (
          <Button
            onClick={(e) => deslike(e)}
            Button
            variant="ButtonFilledSmall"
          >
            <HStack alignItems={"flex-end"}>
              <Text mr="5px">Curtido </Text> <BiLike fontSize="20px" />
            </HStack>
          </Button>
        ) : (
          <Button onClick={(e) => like(e)} Button variant="ButtonBorderedSmall">
            <HStack alignItems={"flex-end"}>
              <Text mr="5px">Curtir </Text> <BiLike fontSize="20px" />
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
