import { Center, Image, Text } from "@chakra-ui/react";

import ImgDefault from "../../assets/user_sign.png";

export default function Avatar({ userCreator, sm, noName }) {
  return (
    <Center flexDir={"column"} as="figure">
      <Image
        src={!!userCreator?.image ? userCreator.image : ImgDefault}
        borderRadius="full"
        minW={sm ? "60px" : "100px"}
        minH={sm ? "60px" : "100px"}
        maxW={sm ? "60px" : "100px"}
        maxH={sm ? "60px" : "100px"}
      />

      {!noName && (
        <Text textAlign={"center"} width={"100px"}>
          {userCreator.name}
        </Text>
      )}
    </Center>
  );
}
