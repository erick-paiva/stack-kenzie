import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/hooks";
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

export default function CardDoubts({ question, disable = false }) {
  const [answers, setAnswers] = useState([]);
  const [comments, setComments] = useState([]);
  const { user, accessToken } = useAuth();
  const [userCreator, setUserCreator] = useState({});
  const [likes, setLikes] = useState(question.question?.likes);
  const [visible, setVisible] = useState(true);
  const [liked, setLiked] = useState(
    likes.some((ele) => ele.userId === user.id)
  );
  const questionUpdate = {
    userId: question.userId,
    date: question.date,
    id: question.id,
    question: {
      body: question.question.body,
      title: question.question.title,
      likes: likes,
    },
    tags: question.tags,
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUsers,
    onOpen: onOpenUsers,
    onClose: onCloseUsers,
  } = useDisclosure();

  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  const getData = () => {
    api.get(`/answers?postId=${question?.id}`).then((resp) => {
      setAnswers(resp.data);
    });
    api.get(`/comments?postId=${question?.id}`).then((resp) => {
      setComments(resp.data);
    });
    api
      .get(`/questions/${question.id}`)
      .then(({ data }) => setLikes(data.question?.likes));
    api
      .get(`/users/${question.userId}`)
      .then((resp) => setUserCreator(resp.data));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const like = (e) => {
    e.stopPropagation();
    getData();
    const filter = likes.filter((ele) => ele.userId !== user.id);
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
        .then(() => getData())
        .catch((err) => {
          console.log(err);
          setLiked(false);
        });
    }
  };

  const deslike = (e) => {
    e.stopPropagation();
    getData();
    const filter = likes.filter((ele) => ele.userId !== user.id);
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
        .then(() => getData())
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
      .then(() => setVisible(false));
  };
  if (!visible) {
    return <></>;
  }

  return (
    <ContainerBase
      w="100%"
      onClick={!disable && onOpen}
      onHover={{ cursor: "pointer" }}
      m="0px 0px 20px 0px"
    >
      {isMobile ? (
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)">
          <GridItem rowSpan={1} colSpan={3}>
            <Flex justifyContent={"space-between"} mb="20px">
              <Box
                onClick={(e) => {
                  onOpenUsers();
                  e.stopPropagation();
                }}
              >
                <Avatar sm userCreator={userCreator} />
              </Box>
            </Flex>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={5}
            colStart={8}
            display={"flex"}
            alignItems={"flex-end"}
            flexDir={"column"}
          >
            <DisplayStatus
              answers={answers}
              question={questionUpdate}
              likes={likes.length}
              comments={comments.length}
            />
          </GridItem>

          <GridItem rowSpan={2} colSpan={12}>
            <Heading mb="10px" size="lg">
              {question?.question.title}
            </Heading>
            <Text
              noOfLines={4}
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
            >
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
                <Button onClick={(e) => deslike(e)} variant="ButtonLikeOn">
                  <HStack alignItems={"flex-end"}>
                    <Text>Curtiu</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              ) : (
                <Button onClick={(e) => like(e)} variant="ButtonLikeOff">
                  <HStack alignItems={"flex-end"}>
                    <Text>Curtir</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              )}
            </Flex>
          </GridItem>
        </Grid>
      ) : (
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={"center"}>
          <GridItem colSpan={2}>
            <Box
              onClick={(e) => {
                onOpenUsers();
                e.stopPropagation();
              }}
            >
              <Avatar sm userCreator={userCreator} />
            </Box>
          </GridItem>

          <GridItem colSpan={8}>
            <Heading mb="10px" size="lg">
              {question?.question.title}
            </Heading>

            <Text
              noOfLines={4}
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
            >
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
          </GridItem>

          <GridItem colSpan={2}>
            <Center margin={"auto"} flexDirection={"column"}>
              <DisplayStatus
                answers={answers}
                question={questionUpdate}
                likes={likes.length}
                comments={comments.length}
                m={"0 0 10px 0"}
              />

              {liked ? (
                <Button onClick={(e) => deslike(e)} variant="ButtonLikeOn">
                  <HStack alignItems={"center"}>
                    <Text>Curtiu</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              ) : (
                <Button onClick={(e) => like(e)} variant="ButtonLikeOff">
                  <HStack alignItems={"center"}>
                    <Text>Curtir</Text> <BiLike fontSize="20px" />
                  </HStack>
                </Button>
              )}
            </Center>
          </GridItem>
        </Grid>
      )}

      <ModalChakra
        size={isMobile ? "sm" : "4xl"}
        title={questionUpdate.question.title}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Grid autoRows templateColumns={"repeat(12,1fr)"}>
          <GridItem colSpan={12} mb="10px">
            <BasicCardDoubts
              question={questionUpdate}
              ImgDefault={userCreator}
              deleteQuestion={deleteQuestion}
              answers={answers}
              deslike={deslike}
              like={like}
              likes={likes}
              comments={comments}
              user={user}
            />
          </GridItem>
          <GridItem colSpan={8} mb="10px">
            {user?.coach && (
              <AddAnswer postId={question.id} getData={getData} />
            )}
          </GridItem>
          <GridItem colSpan={10} colStart={2} mb="10px">
            {!!answers &&
              answers.map((ele, key) => (
                <CardComment
                  key={key}
                  answerBody={ele.body}
                  user={ele.userId}
                />
              ))}
          </GridItem>
          <GridItem colSpan={8} colStart={3} mb="20px">
            <Box
              maxHeight={"400px"}
              width={"100%"}
              overflowY="auto"
              p={"10px"}
              flexDirection={"column"}
              padding={"10px"}
              justifyContent={"center"}
              sx={scroll}
            >
              {!!comments &&
                comments.map((ele, key) => (
                  <CardComment
                    key={key}
                    comment={ele}
                    user={ele.userId}
                    callback={getData}
                  />
                ))}
            </Box>
          </GridItem>
          <GridItem colSpan={8} colStart={3} mb="10px">
            <AddComment postId={question.id} getData={getData} />
          </GridItem>
        </Grid>
      </ModalChakra>

      <ModalProfileUsers
        isOpen={isOpenUsers}
        onClose={onCloseUsers}
        user={userCreator}
      />
    </ContainerBase>
  );
}
