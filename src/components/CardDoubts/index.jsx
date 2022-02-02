import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/hooks";
import ImgDefault from "../../assets/imgDefault.svg";
import { api } from "../../services/api";
import DisplayStatus from "../DisplayStatus";
import { BiLike } from "react-icons/bi";
import ModalChakra from "../ModalChakra";
import BasicCardDoubts from "../BasicCardDoubts";
import AddComment from "../AddComment";
import AddAnswer from "../AddAnswer";
import CardComment from "../CardComment";
import Avatar from "../Avatar";
import ModalProfileUsers from "../ModalProfileUsers";
import ContainerBase from "../ContainerBase/Index";

export default function CardDoubts({ question, callback, disable = false }) {
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const [time, setTime] = useState(1000000);
  const [update, setUptade] = useState(true);
  const { user, accessToken } = useAuth();
  const [userCreator, setUserCreator] = useState({});

  const [liked, setLiked] = useState(
    question.question.likes.some((ele) => ele.userId === user.id)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUsers,
    onOpen: onOpenUsers,
    onClose: onCloseUsers,
  } = useDisclosure();

  const [isMobile] = useMediaQuery("(max-width: 900px)");

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
    <ContainerBase
      w="100%"
      onClick={!disable && onOpen}
      onHover={{ cursor: "pointer" }}
    >
      {isMobile ? (
        <Box>
          <Flex justifyContent={"space-between"} mb="20px">
            <Avatar sm userCreator={userCreator} callback={onOpenUsers} />
            <DisplayStatus answers={answers} question={question} likes={question.question?.likes.length} comments={comments.length} />
          </Flex>
          <Box>
            <Heading>{question?.question.title}</Heading>
            <Text fontSize="16px" fontWeight="400" lineHeight="24px">
              {question?.question.body}
            </Text>
            <Flex my="20px" flexWrap="wrap">
              {question?.tags?.map((tag) => (
                <Button key={tag} variant={"TagButton"} mx="5px" mb="5px">
                  {tag}
                </Button>
              ))}
            </Flex>
            <Flex m="auto" w="fit-content">
              {liked ? (
                <Button onClick={(e) => deslike(e)} variant="ButtonFilledSmall">
                  <HStack alignItems={"flex-end"}>
                    <Text>Curtido</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              ) : (
                <Button onClick={(e) => like(e)} variant="ButtonBorderedSmall">
                  <HStack alignItems={"flex-end"}>
                    <Text>Curtir</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              )}
            </Flex>
          </Box>
        </Box>
      ) : (
        <Flex w="100%">
          <Avatar userCreator={userCreator} callback={onOpenUsers} />
          <Box ml="20px" w="full">
            <Heading>{question?.question.title}</Heading>

            <Text fontSize="16px" fontWeight="400" lineHeight="24px">
              {question?.question.body}
            </Text>

            <Flex marginTop="15px" flexWrap="wrap">
              {question?.tags?.map((tags) => (
                <Flex
                  key={tags}
                  border="1px solid"
                  borderColor="grayTag"
                  mr="10px"
                  h="18px"
                  paddingX="10px"
                  alignItems="center"
                  mt="10px"
                >
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    color="grayTag"
                    margin="0"
                  >
                    {tags}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>

          <Box mt="10px">
          <DisplayStatus answers={answers} question={question} likes={question.question.likes.length} comments={comments.length} />
            {liked ? (
              <Button onClick={(e) => deslike(e)} variant="ButtonFilledSmall">
                <HStack alignItems={"flex-end"}>
                  <Text>Curtido</Text> <BiLike fontSize="20px" />
                </HStack>
              </Button>
            ) : (
              <Button onClick={(e) => like(e)} variant="ButtonBorderedSmall">
                <HStack alignItems={"flex-end"}>
                  <Text>Curtir</Text> <BiLike fontSize="20px" />
                </HStack>
              </Button>
            )}
          </Box>
        </Flex>
      )}

      <ModalChakra title={"Modal pergunta"} isOpen={isOpen} onClose={onClose}>
        <Flex flexDirection={"column"}>
          <BasicCardDoubts
            question={question}
            ImgDefault={userCreator}
            deleteQuestion={deleteQuestion}
            answers={answers}
            deslike={deslike}
            like={like}
            likes={question?.question.likes.length}
            comments={comments}
            user={user}
          />
          <Box width={"95%"}>
            <Flex>
              <Box
                maxHeight={"400px"}
                width={"100%"}
                overflowY="auto"
                p={"10px"}
                flexDirection={"column"}
                padding={"10px"}
                justifyContent={"center"}
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
                {user?.coach && <AddAnswer postId={question.id} />}
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-end"}
                  width={"100%"}
                >
                  {!!comments &&
                    comments.map((ele, key) => (
                      <CardComment
                        key={key}
                        question={question}
                        ImgDefault={ImgDefault}
                        deleteQuestion={deleteQuestion}
                        answers={answers}
                        deslike={deslike}
                        like={like}
                        comments={ele.comment}
                        user={ele.userId}
                      />
                    ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <AddComment postId={question.id} />
      </ModalChakra>

      <ModalProfileUsers
        isOpen={isOpenUsers}
        onClose={onCloseUsers}
        user={userCreator}
      />
    </ContainerBase>
  );
}
