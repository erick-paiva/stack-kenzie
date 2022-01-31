import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import DisplayStatus from "../DisplayStatus";
import { BiLike } from "react-icons/bi";
import Avatar from "../Avatar";
export default function BasicCardDoubts({
  question,
  ImgDefault,
  deleteQuestion,
  answers,
  deslike,
  like,
  comments,
  user,
}) {
  const [liked, setLiked] = useState(
    question.question.likes.some((ele) => ele.userId === user.id)
  );
  const is800px = useBreakpointValue({ base: false, md: true });

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
      boxSize="border-box"
      cursor="pointer"
      justifyContent="space-between"
      width="100%"
      flexDirection={["column", "column", "row"]}
    >
      <Flex
        as="figure"
        w={["100%", "100%", "auto"]}
        textAlign="center"
        flexDirection={["row", "row", "column"]}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* <Box>
          <Image
            src={!!user?.image ? user.image : ImgDefault}
            h="80px"
            w="auto"
          />
          <Text as="figcaption" fontSize="14px">
            {user?.name}
          </Text>
        </Box> */}
        <Avatar userCreator={user}  />
        {!is800px && (
          <VStack spacing="2" color="primary">
            {question.userId === user.id && <Button variant="ButtonBorderedSmall" onClick={deleteQuestion}>Deletar</Button>}
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
            {question.userId === user.id && <Button variant="ButtonBorderedSmall" onClick={deleteQuestion}>Deletar</Button>}
            <DisplayStatus answers={answers} question={question} />
            <Text fontSize="14px">
              {question?.question.likes.length} curtidas
            </Text>
            <Text fontSize="14px">{comments?.length} comentários</Text>
          </Box>
        )}

        {liked ? (
          <Button
            onClick={() => {deslike();setLiked(false)}}
            Button
            variant="ButtonFilledBlue"
            // w="100px"
            h="32px"
            paddingX="10px"
            mt={["15px", "17px", "0"]}
          >
            <Flex w="100%" alignItems="flex-end" justifyContent="center">
              <Text mr="5px">Curtir </Text> <BiLike fontSize="20px" />
            </Flex>
          </Button>
        ) : (
          <Button
            onClick={() => {like();setLiked(true)}}
            Button
            variant="ButtonBorderedSmall"
            // w="100px"
            h="32px"
            paddingX="10px"
            mt={["15px", "17px", "0"]}
          >
            <Flex w="100%" alignItems="flex-end" justifyContent="center">
              <Text mr="5px">Curtir </Text> <BiLike fontSize="20px" />
            </Flex>
          </Button>
        )}
      </VStack>
    </Flex>
  );
}
