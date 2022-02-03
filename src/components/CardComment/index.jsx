import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react/cjs/react.development";
import { useAuth } from "../../providers/hooks";
import { api } from "../../services/api";
import Avatar from "../Avatar";

export default function CardComment({ comment, answerBody, user, callback }) {
  const [userComment, setUserComment] = useState({});
  const { accessToken, user: userProvider } = useAuth();

  useEffect(() => {
    api.get(`/users/${user}`).then((resp) => setUserComment(resp.data));
  }, []);

  const deleteComment = () => {
    api
      .delete(`/comments/${comment.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => callback());
  };

  return (
    <Flex
      minH="150px"
      borderRadius="6px"
      alignItems="center"
      boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      padding="15px 20px"
      boxSize="border-box"
      cursor="pointer"
      justifyContent="space-between"
      width="90%"
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
        <Box>
          {/* <Image
            src={!!userComment?.image ? userComment.image : ImgDefault}
            h="50px"
            w="auto"
          /> */}
          <Avatar userCreator={userComment} sm />
          {/* <Text as="figcaption" fontSize="14px">
            {userComment?.name}
          </Text> */}
        </Box>
      </Flex>

      <Flex
        paddingX={["0", "0", "15px"]}
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
        w="100%"
      >
        <Text fontSize="16px" fontWeight="400" lineHeight="24px">
          {!!comment?.comment && comment.comment}
          {!!answerBody && answerBody}
        </Text>
        {!!comment && userProvider.id === comment.userId && (
          <Button onClick={deleteComment}>DELETAR</Button>
        )}
      </Flex>
    </Flex>
  );
}
