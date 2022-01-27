import { HStack, VStack } from "@chakra-ui/react";

import LoginTest from "./LoginTest";
import RegisterTest from "./RegisterTest";
import QuestionsTest from "./QuestionsTest";
import CommentsTest from "./CommentsTest";
import AnswersTest from "./AnswersTest";

import {useAnswers, useComments, useQuestions} from "../../providers/hooks"


const ExampleContext = () => {

  const {answers} = useAnswers();
  const {questions} = useQuestions();
  const {comments} = useComments();

  return (
    <HStack
      spacing={4}
      w="100vw"
      h="100vh"
      align="center"
      justifyContent="center"
      p={2}
      bg="brand.700"
    >
      <RegisterTest />
      <VStack align="flex-start" spacing={8}>
        <LoginTest />
        <QuestionsTest questions={questions} />
        <CommentsTest comments={comments}/>
      </VStack>
      <VStack align="flex-start" spacing={8}>
        <AnswersTest answers={answers}/>
      </VStack>
    </HStack>
  );
};

export default ExampleContext;
