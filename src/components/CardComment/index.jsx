import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/hooks";
import { api } from "../../services/api";
import Avatar from "../Avatar";
import ContainerBase from "../ContainerBase/Index";
import { useToast } from "@chakra-ui/react";

export default function CardComment({ comment, answerBody, user, callback }) {
  const [userComment, setUserComment] = useState({});
  const { accessToken, user: userProvider } = useAuth();

  const toast = useToast();

  useEffect(() => {
    api.get(`/users/${user}`).then((resp) => setUserComment(resp.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteComment = () => {
    api
      .delete(`/comments/${comment.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => {
        callback();
        toast({
          containerStyle: {
            background: "#E53E3E",
            color: "whiter",
            borderRadius: "8px",
          },
          title: "Comentário deletado!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <ContainerBase>
      <Grid templateColumns={"repeat(12, 1fr)"} gridAutoRows>
        <GridItem colStart={2} colSpan={3} rowSpan={1} mb="20px">
          <Avatar userCreator={userComment} sm />
          {userComment.coach && (
            <Button variant={"ButtonBorderedSmall"}>Coach</Button>
          )}
        </GridItem>

        <GridItem colSpan={12} rowSpan={1}>
          <Text fontSize="16px" fontWeight="400" lineHeight="24px">
            {!!comment?.comment && comment.comment}
            {!!answerBody && answerBody}
          </Text>
        </GridItem>
      </Grid>
      {(userProvider.id === comment.userId || userProvider.coach) && (
        <Button mt="20px" variant="ButtonBorderedSmall" onClick={deleteComment}>
          Deletar
        </Button>
      )}
    </ContainerBase>
  );
}
