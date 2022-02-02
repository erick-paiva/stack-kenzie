import { Box, Text, Stack, Button } from "@chakra-ui/react";
import { useTags } from "../../providers/hooks";

<<<<<<< HEAD
const DisplayTags = () => {
  const { tags, updateTags } = useTags();
  
=======
const DisplayTags = ({handleTagClick, tagsSelected}) => {
  const { tags } = useTags();

>>>>>>> c880cab0b99a0f26b16c65e8cd98c63c662f0a7a
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
            key={tag}
            variant={tagsSelected.some(ele => ele === tag) ? "TagButtonOn" : "TagButton"}
            borderRadius="5px"
            margin="2px 5px"
            cursor="pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default DisplayTags;
