import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import DisplayStatus from "../DisplayStatus";
import { BiLike } from "react-icons/bi";
export default function BasicCardDoubts({
  question,
  ImgDefault,
  comments,
  user,
}) {
  console.log(comments);
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
          <Image
            src={!!user?.image ? user.image : ImgDefault}
            h="50px"
            w="auto"
          />
          <Text as="figcaption" fontSize="14px">
            usuário: {user}
          </Text>
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
          {comments}
        </Text>
      </Flex>
    </Flex>
  );
}
