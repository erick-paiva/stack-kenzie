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
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/hooks";
import PopoverChakra from "../PopoverChakra";

export default function BasicCardDoubts({
  question = [],
  scale,
  ImgDefault,
  deleteQuestion,
  answers = [],
  deslike,
  comments = [],
  like,
  user,
}) {
  const history = useHistory();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(question, user.id);
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
      transform={scale}
      cursor="pointer"
      justifyContent="space-between"
      width="100%"
    >
      <Box as="figure" textAlign="center">
        <Image src={ImgDefault} h="80px" w="auto" />
        <Text as="figcaption" fontSize="14px">
          {user?.name}
        </Text>
      </Box>

      <Box padding="0 15px" h="100%">
        <Text fontSize="30px" fontWeight="700" margin="0">
          {question?.question.title}
        </Text>
        <Text fontSize="16px" fontWeight="400" lineHeight="24px">
          {question?.question.body}
        </Text>
        <Flex marginTop="15px">
          {question?.question?.tags?.map((ele) => (
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
        {question?.userId === user.id && (
          <Button bg="red" onClick={deleteQuestion}>
            deletar questão
          </Button>
        )}
        <Box
          fontSize="12px"
          fontWeight="700"
          color="white"
          boxSize="border-box"
          bg={
            answers?.some((ele) => ele?.postId === question?.id)
              ? "#48BB78"
              : "#E53E3E"
          }
          textAlign="center"
          padding="6px 4px"
          borderRadius="2px"
          width="105px"
        >
          {answers.some((ele) => ele.postId === question?.id)
            ? "RESPONDIDO"
            : "SEM RESPOSTA"}
        </Box>
        <Text fontSize="14px">
          {question?.question?.likes?.length} curtidas
        </Text>
        <Text fontSize="14px">{comments?.length} comentários</Text>
        {question.question?.likes.some((ele) => ele.userId === user.id) ? (
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
    </Flex>
  );
}
