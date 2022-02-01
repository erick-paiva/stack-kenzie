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
import { useAuth } from "../../providers/hooks";
import ImgDefault from "../../assets/imgDefault.svg";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import DataDisplay from "../DataDisplay";
import { BiLike } from "react-icons/bi";
import ModalChakra from "../ModalChakra";
import BasicCardDoubts from "../BasicCardDoubts";
import AddComment from "../AddComment";
import AddAnswer from "../AddAnswer";
import CardComment from "../CardComment";
import Avatar from "../Avatar";
import ModalProfileUsers from "../ModalProfileUsers";

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenUsers, onOpen:onOpenUsers, onClose:onCloseUsers } = useDisclosure();

  

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
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      padding="15px 20px"
      // onClick={() => history}
      mt="20px"
      boxSize="border-box"
      cursor="pointer"
      justifyContent="space-between"
      width="100%"
      flexDirection={["column", "column", "row"]}
      onClick={!disable && onOpen}
      _hover= {{
        bg: "whiten(primary, 20)",
        transform: "scale(1.02)",
        transition: "0.1s"
      }}
    >
      <Flex
        as="figure"
        w={["100%", "100%", "auto"]}
        textAlign="center"
        flexDirection={["row", "row", "column"]}
        alignItems="center"
        justifyContent="space-between"
      >
         <Avatar userCreator={userCreator} callback={onOpenUsers}  />
        {!is800px && (
            <DataDisplay answers={answers} question={question} />
            
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
            <DataDisplay answers={answers} question={question} likes={question?.question.likes.length} comments={comments?.length} />
          </Box>
        )}

        {liked ? (
          <Button onClick={(e) => deslike(e)} variant="ButtonFilledSmall">
            <HStack alignItems={"flex-end"}>
              <Text mr="5px">Curtido </Text> <BiLike fontSize="20px" />
            </HStack>
          </Button>
        ) : (
          <Button onClick={(e) => like(e)} variant="ButtonBorderedSmall">
            <HStack alignItems={"flex-end"}>
              <Text mr="5px">Curtir </Text> <BiLike fontSize="20px" />
            </HStack>
          </Button>
        )}
      </VStack>

      <ModalChakra title={"Modal pergunta"} isOpen={isOpen} onClose={onClose}>
        <Flex flexDirection={"column"}>
          <BasicCardDoubts
            question={question}
            ImgDefault={!!userCreator?.image ? userCreator.image : ImgDefault}
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
        <AddAnswer postId={question.id} />
      </ModalChakra>
      <ModalProfileUsers isOpen={isOpenUsers} onClose={onCloseUsers} user={userCreator} />
    </Flex>
  );
}
