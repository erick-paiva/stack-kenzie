import { Center, Image, Text } from "@chakra-ui/react";

import ImgDefault from "../../assets/user_sign.png";

export default function Avatar({ userCreator, callback, sm, noName }) {
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
        //src={!!userCreator?.image ? userCreator.image : <Avatar src='https://bit.ly/broken-link' />}

        borderRadius="full"
        minW={sm ? "60px" : "100px"}
        minH={sm ? "60px" : "100px"}
        maxW={sm ? "60px" : "100px"}
        maxH={sm ? "60px" : "100px"}
      />

      {!noName && (
        <Text textAlign={"center"} isTruncated width={"100px"}>
          {userCreator.name}
        </Text>
      )}
    </Center>
  );
}
