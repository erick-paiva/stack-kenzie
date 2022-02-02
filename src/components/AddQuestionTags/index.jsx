import {
    Flex,
    useDisclosure,
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

            <Flex
              h="fitContent"
              w="100%"
              mt="20px"
              justifyContent="center"
              alignItems="center"
              flexWrap={"wrap"}
              p="0 0 20px"
            >
              <DisplayTags />              
            </Flex>
          
  
          
          
      </ModalChakra>
    );
  }
  