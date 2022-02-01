import { Box, Image, Text } from "@chakra-ui/react";

import ImgDefault from "../../assets/imgDefault.svg";

export default function Avatar({ userCreator, callback }) {
  return (
    <>
      <Box as="figure" textAlign="center" onClick={(e) => {callback();e.stopPropagation()}}>
        <Image
          src={!!userCreator?.image ? userCreator.image : ImgDefault}
          borderRadius="full"
          w={["55px", "55px", "60px", "60px"]}
          h={["55px", "55px", "60px", "60px"]}
        />
        <Text as="figcaption" fontSize="13.1283px">
          {userCreator?.name}
        </Text>
      </Box>
    </>
  );
}
