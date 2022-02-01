import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import AddAnswer from "../AddAnswer";
import AddComment from "../AddComment";
import BasicCardDoubts from "../BasicCardDoubts";
import CardComment from "../CardComment";
import CardDoubts from "../CardDoubts";

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
  console.log(question);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              // width={"100%"}
              // justifyContent={"center"}
              // alignItems={"center"}
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
              {/* <CardDoubts question={question} disable callback={callback} /> */}
            </Flex>

            <AddComment postId={question.id} />
            <AddAnswer postId={question.id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalChakra;
