import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { InputChakra } from "../InputChakra";
import { TextAreaChakra } from "../TextAreaChakra";

import { useState } from "react/cjs/react.development";
import { useAuth, useQuestions } from "../../providers/hooks";
import ModalChakra from "../ModalChakra";
import AddTag from "../AddQuestionTags";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AddQuestion() {
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

  const [tagSelected, setTagSelected] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  //Fix - Yup verica não pode em branco
  const QuestionSchema = yup.object().shape({
    titleQuestion: yup.string().required("Campo Obrigatório!"),
    bodyQuestion: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(QuestionSchema) });

  const handleClick = ({ titleQuestion, bodyQuestion }) => {
    // console.log(titleQuestion, bodyQuestion);
    const date = getHours();
    createQuestion({
      userId: user.id,
      date: date,
      question: {
        title: titleQuestion,
        body: bodyQuestion,
        likes: [],
      },
      tags: tagSelected,
    });
  };

  return (
    <ModalChakra
      title="Fazer uma pergunta"
      buttonText="Fazer uma pergunta"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <VStack
        as="form"
        onSubmit={handleSubmit(handleClick)}
        spacing="8"
        padding="0 0 30px"
      >
        <InputChakra
          placeholder="Digite o título da sua pergunta"
          label="Título da pergunta"
          h="40px"
          error={errors.titleQuestion}
          {...register("titleQuestion")}
        />

        <TextAreaChakra
          placeholder="Descreva com detalhes a sua dúvida"
          label="Descreva sua dúvida"
          h="190px"
          error={errors.bodyQuestion}
          {...register("bodyQuestion")}
        />
        <Box w="100%">
          <Text>Tags</Text>
          <HStack display="flex" flexWrap={"wrap"}>
            <Box
              w="68%"
              display={"flex"}
              flexWrap={"wrap"}
              border="1px solid"
              borderRadius="6px"
              borderColor="gray.200"
              p="0 5px 5px"
            >
              {tagSelected.map((element) => (
                <Flex
                  border="1px solid"
                  borderRadius="6px"
                  borderColor="gray.200"
                  color="grayTag"
                  h="fitContent"
                  w="fitContent"
                  mt="7px"
                  alignItems="center"
                  p="0 5px"
                  ml="4px"
                >
                  {element}
                </Flex>
              ))}
            </Box>
            <AddTag tagSelected={tagSelected} setTagSelected={setTagSelected} />
          </HStack>
        </Box>
        <Button type="submit" variant="ButtonFilledBlue">
          ENVIAR PERGUNTA
        </Button>
      </VStack>
    </ModalChakra>
  );
}
