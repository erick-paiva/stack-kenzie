import { HStack, VStack } from "@chakra-ui/react";

import LoginTest from "./LoginTest";
import RegisterTest from "./RegisterTest";
import QuestionsTest from "./QuestionsTest";

const ExampleContext = () => {
  return (
    <HStack
      spacing={4}
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      p={10}
    >
      <RegisterTest />
      <VStack align="flex-start" spacing={8}>
        <LoginTest />
        <QuestionsTest />
      </VStack>
    </HStack>
  );
};

export default ExampleContext;
