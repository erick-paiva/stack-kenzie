import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "../../assets/logoKenzieStack.svg";
import imgDefault from "../../assets/imgDefault.svg";
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
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      h={["180px", "180px", "126px"]}
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
            <Avatar userCreator={user} />
            <ModalProfileUser
              onOpen={onOpen}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Box>
        ) : (
          <>
            <InputChakra
              m="auto"
              placeholder="Pesquise sua dúvida"
              border="2px solid red"
              defaultBorder="blue"
              h="50px"
              maxW="500px"
              onChange={(e) => setNameSearch(e.currentTarget.value.trim())}
            />

            <Box onClick={onOpen} cursor="pointer">
              <Avatar userCreator={user} sm />
              <ModalProfileUser
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
              />
            </Box>
          </>
        )}
      </Flex>
      {isMobile && (
        <Flex width="82%" justifyContent="center">
          <InputChakra
            mt="15px"
            placeholder="Pesquise sua dúvida"
            border="2px solid red"
            defaultBorder="blue"
            h="50px"
            onChange={(e) => setNameSearch(e.currentTarget.value.trim())}
          />
        </Flex>
      )}
    </Flex>
  );
}
