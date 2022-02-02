import { Box, Text, Stack, Badge, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useTags } from "../../providers/hooks";

const DesplayTags = () => {
  const { tags, updateTags } = useTags();

  return (
    <Box>
      <Text color="#0001FF" fontWeight="bold">
        #TAGS
      </Text>
      <Stack
        w="319px"
        h="292px"
        border="2px solid #E2E8F0"
        justify="center"
        align="flex-start"
        direction="rowSpan"
        wrap="wrap"
        p="5"
        bg="white"
        borderRadius="6px"
      >
        {tags.map((tag) => (
          <Button
            key={tag.name}
            border={tag.isActive ? "2px solid #0001FF" : "2px solid #CBD5E0"}
            color={tag.isActive ? "#0001FF" : "#CBD5E0"}
            bg="white"
            borderRadius="5px"
            margin="2px 5px"
            onClick={() => updateTags(tag.name)}
            cursor="pointer"
          >
            {tag.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default DesplayTags;
