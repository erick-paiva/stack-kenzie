import {
    Box,
    Button,
    Flex,
    Text,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  import { InputChakra } from "../InputChakra";
  import { TextAreaChakra } from "../TextAreaChakra";
  
  import { useState } from "react/cjs/react.development";
  import { useAuth, useQuestions } from "../../providers/hooks";
  import ModalChakra from "../ModalChakra";
//   import { AddTag } from "../AddQuestionTags"; 


  
  export default function AddTag() {
    const [titleQuestion, setTitleQuestion] = useState("");
    const [bodyQuestion, setBodyQuestion] = useState("");
    const { createQuestion } = useQuestions();
    const { user } = useAuth();
    const getHours = () => {
      const date = new Date();
      const dia = date.getDate();
      const mes = date.getMonth();
      const ano = date.getFullYear();
      const hora = date.getHours();
      const min = date.getMinutes();
  
      return { day: dia, month: mes, year: ano, hour: hora, minutes: min };
    };
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleClick = () => {
      const date = getHours();
      createQuestion({
        userId: user.id,
        date: date,
        question: {
          title: titleQuestion,
          body: bodyQuestion,
          likes: [],
        },
        tags: ["JS", "REACT", "LINUX", "NODE JS"],
      });
    };
  
    
    return (
      <ModalChakra
        title="Adicionar tags"
        buttonText="Adicionar tags"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <VStack spacing="4" padding="0 0 20px">
          
  
          
          <Box w="100%">
            <Text>Tags</Text>
            <Flex alignItems="center">
              <Flex
                border="1px solid"
                borderRadius="6px"
                borderColor="gray.200"
                h="fitContent"
                w="100%"
                mt="7px"
                alignItems="center"
                flexWrap={"wrap"}
                p="5px"
              >
                <Button variant={"tagButton"}>JAVASCRIPT</Button>
                <Button variant={"tagButton"}>REACT</Button>
                <Button variant={"tagButton"}>CSS</Button>
              </Flex>
              
            </Flex>
          </Box>
          
        </VStack>
      </ModalChakra>
    );
  }
  