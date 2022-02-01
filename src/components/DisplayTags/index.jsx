import { Box, Text, Stack } from "@chakra-ui/react";

const DesplayTags = () => {
  return (
    <Box>
      <Text color="#0001FF">#TAGS</Text>
      <Stack w="319px" h="292px" border="2px solid #E2E8F0">
        {" "}
        <Box>JAVASCRIPT</Box>
      </Stack>
    </Box>
  );
};

export default DesplayTags;
