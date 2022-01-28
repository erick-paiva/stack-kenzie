import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";


function ModalChakra({ children, title , isOpenProps, onCloseProps, ButtonText }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {ButtonText && <Button onClick={onOpen}>{ButtonText}</Button>}
      <Modal isOpen={isOpenProps ? isOpenProps : isOpen} onClose={onCloseProps ? onCloseProps : onClose}>

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          {/* 
          
            O modal footer receber o button. Talvez seja necessario passar
            ele no children.

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> 
          
          */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalChakra;
