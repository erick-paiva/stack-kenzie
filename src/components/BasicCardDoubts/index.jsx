import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import DisplayStatus from "../DisplayStatus";
import { BiLike } from "react-icons/bi";
import Avatar from "../Avatar";
import ContainerBase from "../ContainerBase/Index";
import { useAuth } from "../../providers/hooks";
export default function BasicCardDoubts({
  question,
  ImgDefault,
  deleteQuestion,
  answers,
  deslike,
  like,
  likes,
  comments,
  user,
}) {
  const [liked] = useState(
    question.question.likes.some((ele) => ele.userId === user.id)
  );
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const { user: userProvider } = useAuth();
  return (
    <ContainerBase>
      {isMobile ? (
        <Grid templateColumns="repeat(12, 1fr)" templateRows="repeat(3, 1fr)">
          <GridItem rowSpan={1} colSpan={3}>
            <Flex justifyContent={"space-between"} mb="20px">
              <Avatar sm userCreator={ImgDefault} />
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
              question={question}
              likes={likes.length}
              comments={comments.length}
            />
          </GridItem>

          <GridItem rowSpan={2} colSpan={12}>
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
              {(question.userId === user.id || userProvider.coach) ? (
                <Button variant="ButtonBorderedSmall" onClick={deleteQuestion}>
                  Deletar
                </Button>
              ) : (
                <>
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
                </>
              )}
            </Flex>
          </GridItem>
        </Grid>
      ) : (
        <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={"center"}>
          <GridItem colSpan={2}>
            <Avatar sm userCreator={ImgDefault} />
          </GridItem>

          <GridItem colSpan={8}>
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
                question={question}
                likes={likes.length}
                comments={comments.length}
                m={"0 0 10px 0"}
              />

{(question.userId === user.id || userProvider.coach) ? (
                <Button variant="ButtonBorderedSmall" onClick={deleteQuestion}>
                  Deletar
                </Button>
              ) : (
                <>
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
                </>
              )}
            </Center>
          </GridItem>
        </Grid>
      )}
    </ContainerBase>
  );
}
