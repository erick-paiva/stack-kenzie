import { Box, Heading } from "@chakra-ui/react";

import { useComments } from "../../../providers/hooks";

const CommentsTest = ({ comments }) => {
  return (
    <Box
      rounded={"lg"}
      bg="brand.800"
      boxShadow={"lg"}
      p={5}
      borderRadius="10px"
      align={"center"}
      w="300px"
      color="white"
    >
      {comments
        ? comments.map((res) => (
            <Box align="left" key={res.userId}>
              <Heading fontSize={"2xl"} align="center">
                EndPoint Comments
              </Heading>
              <b>Comentário:</b> {res.comment} <br />
            </Box>
          ))
        : "Sem questões"}
    </Box>
  );
};

export default CommentsTest;
