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
  console.log(comments);
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

            <Heading size={"lg"}>Comentários</Heading>
            <Box width={"90%"}>
              <Flex>
                <Box
                  maxHeight={"400px"}
                  width={"100%"}
                  overflowY="auto"
                  p={"10px"}
                  flexDirection={"column"}
                  padding={"10px"}
                  justifyContent={"center"}
                  sx={{
                    "&::-webkit-scrollbar": {
                      width: "25px",
                    },
                    "&::-webkit-scrollbar-track": {
                      width: "30px",
                      borderRadius: "50px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      border: "3px solid #0001FF",
                      background: "white",
                      borderRadius: "50px",
                    },
                  }}
                >
                  <Flex
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                    width={"100%"}
                  >
                    {!!comments &&
                      comments.map((ele, key) => (
                        <CardComment
                          key={key}
                          question={question}
                          ImgDefault={ImgDefault}
                          deleteQuestion={deleteQuestion}
                          answers={answers}
                          deslike={deslike}
                          like={like}
                          comments={ele.comment}
                          user={ele.userId}
                        />
                      ))}
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <AddComment postId={question.id} />
            <AddAnswer postId={question.id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalChakra;
