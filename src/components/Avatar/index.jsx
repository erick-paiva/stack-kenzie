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
    >
      <Image
        src={!!userCreator?.image ? userCreator.image : ImgDefault}
        borderRadius="full"
        minW={sm ? "60px" : "100px"}
        minH={sm ? "60px" : "100px"}
        maxW={sm ? "60px" : "100px"}
        maxH={sm ? "60px" : "100px"}
      />
      <Text textAlign={"center"} isTruncated width={"100px"}>
        {userCreator.name}
      </Text>
    </Center>
  );
}
