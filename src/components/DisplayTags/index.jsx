import { Box, Text, Stack, Button, useMediaQuery } from "@chakra-ui/react";
import { useTags } from "../../providers/hooks";

const DisplayTags = ({ handleTagClick, tagsSelected }) => {
  const { tags } = useTags();
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  return (
    <Box mt={!isMobile && "20px"}>
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
        {tags.map((tag,i) => (
          <Button
            key={tag+i}
            variant={
              tagsSelected?.some((ele) => ele === tag)
                ? "TagButtonOn"
                : "TagButton"
            }
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
