import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import AddComment from "../AddComment";
import BasicCardDoubts from "../BasicCardDoubts";

function ModalChakra({
  isOpen,
  onClose,
  title,
  question,
  ImgDefault,
  deleteQuestion,
  answers,
  deslike,
  like,
  comments,
  user,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              width={"100%"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <BasicCardDoubts
                question={question}
                ImgDefault={ImgDefault}
                deleteQuestion={deleteQuestion}
                answers={answers}
                deslike={deslike}
                like={like}
                comments={comments}
                user={user}
              />
            </Flex>

            <AddComment postId={question.id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalChakra;
