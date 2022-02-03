import {
  Box,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "../../assets/logoKenzieStack.svg";

import { InputChakra } from "../InputChakra";
import ModalProfileUser from "../ModalProfilelUser";
import Avatar from "../Avatar";
import { useAuth } from "../../providers/hooks";

export function Header({ setNameSearch }) {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="100%"
      p="20px"
      h="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      position="sticky"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingX="50px"
      >
        <Image src={Logo} />

        {isMobile ? (
          <Box onClick={onOpen} cursor="pointer">
            <Avatar userCreator={user} sm noName />
            <ModalProfileUser isOpen={isOpen} onClose={onClose} />
          </Box>
        ) : (
          <>
            <InputChakra
              m="auto"
              placeholder="Pesquise sua dúvida"
              h="50px"
              maxW="500px"
              width="100%"
              onChange={(e) => setNameSearch(e.currentTarget.value.trim())}
            />

            <Box onClick={onOpen} cursor="pointer">
              <Avatar userCreator={user} sm noName />
              <ModalProfileUser isOpen={isOpen} onClose={onClose} />
            </Box>
          </>
        )}
      </Flex>
      {isMobile && (
        <Flex justifyContent="center" paddingX={"50px"} width="100%">
          <InputChakra
            mt="15px"
            placeholder="Pesquise sua dúvida"
            h="50px"
            onChange={(e) => setNameSearch(e.currentTarget.value.trim())}
          />
        </Flex>
      )}
    </Flex>
  );
}
