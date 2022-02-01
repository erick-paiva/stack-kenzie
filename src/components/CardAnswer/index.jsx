import { Button, HStack, Text, VStack, Avatar } from "@chakra-ui/react";

const CardAnswer = ({ answer }) => {
  return (
    <HStack boxShadow="lg" p="5" bg="white">
      <VStack>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Text>@Coach</Text>
      </VStack>
      <VStack justify="flex-start">
        <Text fontSize="16px">{answer.body}</Text>
        <Text w="100%" color="#0001FF">
          5000 Likes <Button p="2">Curtir</Button>
        </Text>
      </VStack>
    </HStack>
  );
};

export default CardAnswer;
