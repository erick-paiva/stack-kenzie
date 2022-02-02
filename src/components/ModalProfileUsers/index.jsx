import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import ModalChakra from "../ModalChakra";
import imdDefault from "../../assets/imgDefault.svg";

export default function ModalProfileUsers({ user, isOpen, onClose }) {

  return (
    <ModalChakra title="Perfil" isOpen={isOpen} onClose={onClose}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Image src={user.image ? user.image : imdDefault} h="100px" borderRadius="full" />
        <Text>{user?.linkedin}</Text>
        <Text>{user.name}</Text>
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
    </ModalChakra>
  );
}
