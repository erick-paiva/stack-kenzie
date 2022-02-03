import { Button, Grid, GridItem, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/hooks";
import { api } from "../../services/api";
import Avatar from "../Avatar";
import ContainerBase from "../ContainerBase/Index";

export default function CardAnswer({ answer, user, callback }) {
  const [userComment, setUserComment] = useState({});
  const { accessToken, user: userProvider } = useAuth();
  const toast = useToast();
  useEffect(() => {
    api.get(`/users/${user}`).then((resp) => setUserComment(resp.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAnswer = () => {
    api
      .delete(`/answers/${answer.id}`, {
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
        {userComment.coach && (
          <GridItem colStart={9} colSpan={4}>
            <Text
              fontSize="12px"
              fontWeight="700"
              color="white"
              bg={"#48BB78"}
              textAlign="center"
              padding="6px 4px"
              borderRadius="2px"
            >
              RESPOSTA
            </Text>
          </GridItem>
        )}
        <GridItem colSpan={12} rowSpan={1}>
          <Text fontSize="16px" fontWeight="400" lineHeight="24px">
            {!!answer.body && answer.body}
          </Text>
        </GridItem>
      </Grid>
      {!!answer.body && userProvider.id === user && (
        <Button mt="20px" variant="ButtonBorderedSmall" onClick={deleteAnswer}>
          Deletar
        </Button>
      )}
    </ContainerBase>
  );
}
