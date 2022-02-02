import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../../assets/logoKenzieStack.svg";
import imgDefault from "../../assets/imgDefault.svg";
import { InputChakra } from "../InputChakra";
import ModalProfileUser from "../ModalProfilelUser";
import Avatar from "../Avatar";
import { useAuth } from "../../providers/hooks";

export function Header({ setNameSearch }) {
  const is800px = useBreakpointValue({ base: false, md: true });
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
        paddingX="30px"
      >
        <Image src={Logo} />

        {!is800px ? (
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
            <Box minW="50vw" maxW="100%">
              <InputChakra
                placeholder="Pesquise sua dúvida"
                border="2px solid red"
                defaultBorder="blue"
                h="50px"
                onChange={(e) => setNameSearch(e.currentTarget.value)}
              />
            </Box>
            <Box onClick={onOpen} cursor="pointer">
              {/* <Avatar userCreator={user} /> */}
              <Image
                src={user?.image ? user.image : imgDefault}
                h="60px"
                borderRadius="full"
              />
              <ModalProfileUser
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
              />
            </Box>
            {/* <Image src={imgDefault} h="60px" />  */}
          </>
        )}
      </Flex>
      {!is800px && (
        <Flex width="82%" justifyContent="center">
          <InputChakra
            mt="15px"
            placeholder="Pesquise sua dúvida"
            border="2px solid red"
            defaultBorder="blue"
            h="50px"
            onChange={(e) => setNameSearch(e.currentTarget.value)}
          />
        </Flex>
      )}
    </Flex>
  );
}
