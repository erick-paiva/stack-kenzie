import { Center, Image, Text } from "@chakra-ui/react";

import ImgDefault from "../../assets/imgDefault.svg";

export default function Avatar({ userCreator, callback, sm }) {
  return (
    <Center
      flexDir={"column"}
      as="figure"
      onClick={(e) => {
        callback();
        e.stopPropagation();
      }}
      w={sm ? "60px" : "100px"}
      h={sm ? "60px" : "100px"}
    >
      <Image
        src={!!userCreator?.image ? userCreator.image : ImgDefault}
        borderRadius="full"
        w="100%"
        h="100%"
      />
      <Text>{userCreator.name}</Text>
    </Center>
  );
}
