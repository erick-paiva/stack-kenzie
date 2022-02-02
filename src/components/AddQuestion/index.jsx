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

  const handleClick = ({titleQuestion,bodyQuestion}) => {
    console.log(titleQuestion, bodyQuestion)
    const date = getHours();
    createQuestion({
      userId: user.id,
      date: date,
      question: {
        title: titleQuestion,
        body: bodyQuestion,
        likes: [],
      },
      tags: [
        "HTML",
        "JS",
        "REACT",
        "LINUX",
        "NODE JS",
        "PYTHON",
        "FLASK",
        "DJANGO",
        "SQL",
        "NOSQL",
      ],
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
          // onChange={(e) => setTitleQuestion(e.currentTarget.value)}
          h="40px"
          error={errors.titleQuestion}
          {...register("titleQuestion")}
        />

        <TextAreaChakra
          placeholder="Descreva com detalhes a sua dúvida"
          label="Descreva sua dúvida"
          // onChange={(e) => setBodyQuestion(e.currentTarget.value)}
          h="190px"
          error={errors.bodyQuestion}
          {...register("bodyQuestion")}
        />
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
            <Button ml={"20px"} variant={"ButtonBorderedSmall"}>
              Tags
            </Button>
          </Flex>
        </Box>
        <Button type="submit" variant="ButtonFilledBlue">
          ENVIAR PERGUNTA
        </Button>
      </VStack>
    </ModalChakra>
  );
}
