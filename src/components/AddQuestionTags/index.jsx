import {
    Box,
    Button,
    Flex,
    Text,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  
  import ModalChakra from "../ModalChakra";
  import DisplayTags from "../../components/DisplayTags";



  
  export default function AddTag() {
    
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    
    return (
      <ModalChakra
        title="Adicionar tags"
        buttonText="Adicionar tags"
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      >
        <VStack spacing="2" padding="0 0 20px">
          
  
          
          <DisplayTags />
          
        </VStack>
      </ModalChakra>
    );
  }
  