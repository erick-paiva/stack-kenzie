import {
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Box,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo1.svg";
import { useAuth } from "../../providers/hooks";
import { useState } from "react";
import { InputChakra } from "../InputChakra";

export default function FormSignUp() {
  const { signUp } = useAuth();
  const [value, setValue] = useState("");

  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório!"),
    email: yup
      .string()
      .required("E-mail Obrigatório!")
      .email("Precisa ser um E-mail"),
    slack: yup.string().required("Campo Obrigatório!"),
    module: yup.boolean().oneOf([true], "Marque ao menos uma opção!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres!")
      .required("Senha Obrigatória!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As Senhas devem ser iguais!"),

    //Atenção Inserir o input do slack
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleSignUp = (data) => {
    signUp({
      name: data.name,
      email: data.email,
      slack: data.slack,
      module: data.module,
      password: data.password,
    });
  };

  return (
    <Box
      width="434px"
      height="840px"
      padding="15px 15px"
      border="1px solid "
      borderColor="gray.100"
      bg="white"
      borderRadius="6px"
      boxShadow="md"
      p="6"
      rounded="md"
    >
      <Heading
        background="#0001FF"
        borderRadius="6px"
        w="100%"
        mt="10px"
        boxShadow="md"
        rounded="md"
      >
        <Image
          src={Logo}
          alt="stakenzie"
          title="stakenzie"
          width="161px"
          height="95px"
          mt="20px"
          mb="20px"
          ml="110px"
        />
      </Heading>

      <VStack
        alignItems="flex-start"
        mt="10"
        as="form"
        spacing={4}
        onSubmit={handleSubmit(handleSignUp)}
      >
        <InputChakra
          w="100%"
          h="40px"
          borderRadius="6px"
          name="name"
          placeholder="Nome"
          label="Nome"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.name}
          {...register("name")}
        />

        <InputChakra
          w="100%"
          h="40px"
          borderRadius="6px"
          label="Email"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.email}
          {...register("email")}
        />

        <InputChakra
          w="100%"
          h="40px"
          borderRadius="6px"
          label="Slack"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.email}
          {...register("slack")}
        />

        <RadioGroup
          w="100%"
          h="40%"
          onChange={setValue}
          value={value}
          borderRadius="6px"
          border="1px  #E2E8F0"
          defaultValue="1"
        >
          <Stack
            spacing={14}
            direction="row"
            m="8px"
            ml="10px"
            color="theme.colors"
          >
            <Radio value={"Q1"}>Q1</Radio>
            <Radio value={"Q2"}>Q2</Radio>
            <Radio value={"Q3"}>Q3</Radio>
            <Radio value={"Q4"}>Q4</Radio>
          </Stack>
        </RadioGroup>

        <InputChakra
          w="100%"
          h="40px"
          borderRadius="6px"
          type="password"
          placeholder="sua senha"
          label="Senha"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.password?.message}
          {...register("password")}
        />
        {errors.password?.message && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}

        <InputChakra
          w="100%"
          h="40px"
          borderRadius="6px"
          type="password"
          placeholder="repita a senha"
          label="Confirmar Senha"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.password?.message}
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm?.message && (
          <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
        )}

        <Button
          fontSize="16px"
          type="submit"
          bg="#0001FF"
          color="#FFFFFF"
          w="100%"
          h="40px"
          borderRadius="6px"
          _hover={{
            background: "#3333FF",
          }}
        >
          Cadastrar
        </Button>

        <Text ml="1" mt="2" mb="2" color="gray.600">
          Não possui uma conta?
        </Text>
        <Button
          fontSize="16px"
          bg="#FFFFFF"
          color="#0001FF"
          border="1px solid #0001FF"
          w="100%"
          h="40px"
          borderRadius="6px"
          _hover={{
            background: "gray.50",
          }}
          onClick={() => history.push("/")}
        >
          Ir para o login
        </Button>
      </VStack>
    </Box>
  );
}
