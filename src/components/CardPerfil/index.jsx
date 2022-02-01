import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "../Avatar";

function CardPerfil({ user }) {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Avatar userCreator={user} />
      <Text>{user.email}</Text>

      <HStack spacing="6" margin="20px 20px">
        <Button variant="ButtonBorderedWhite" w="80px">
          {user.coach ? "COACH" : "ALUNO"}
        </Button>
        <Button variant="ButtonBorderedWhite" w="80px">
          {user.module}
        </Button>
        {user?.linkedin && (
          <Button variant="ButtonBorderedWhite" w="80px">
            LINKEDIN
          </Button>
        )}
      </HStack>
    </Flex>
  );
}

export default CardPerfil;
