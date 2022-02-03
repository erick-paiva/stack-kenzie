import { Button, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react/cjs/react.development";
import { useAuth } from "../../providers/hooks";
import { api } from "../../services/api";
import Avatar from "../Avatar";
import ContainerBase from "../ContainerBase/Index";

export default function CardComment({ comment, answerBody, user, callback }) {
  const [userComment, setUserComment] = useState({});
  const { accessToken, user: userProvider } = useAuth();

  useEffect(() => {
    api.get(`/users/${user}`).then((resp) => setUserComment(resp.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteComment = () => {
    api
      .delete(`/comments/${comment.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() => callback());
  };

  return (
    <ContainerBase>
      <Grid templateColumns={"repeat(12, 1fr)"} gridAutoRows>
        <GridItem colSpan={3} rowSpan={1} mb="20px">
          <Avatar userCreator={userComment} sm />
        </GridItem>
        <GridItem colSpan={12} rowSpan={1}>
          <Text fontSize="16px" fontWeight="400" lineHeight="24px">
            {!!comment?.comment && comment.comment}
            {!!answerBody && answerBody}
          </Text>
        </GridItem>
      </Grid>
      {!!comment && userProvider.id === comment.userId && (
        <Button mt="20px" variant="ButtonBorderedSmall" onClick={deleteComment}>
          Deletar
        </Button>
      )}
    </ContainerBase>
  );
}
