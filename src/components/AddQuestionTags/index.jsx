import {
    Box,
    Button,
    Flex,
    Text,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";

import ModalChakra from "../ModalChakra";


export const AddTag = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <ModalChakra
            title="Fazer uma pergunta"
            buttonText="Fazer uma pergunta"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
        >

        </ModalChakra>
    )
}