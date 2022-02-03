import {
  Button,
  Text,
  VStack,
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
import { useAuth } from "../../providers/hooks";
import { useState } from "react";
import { InputChakra } from "../InputChakra";
import ContainerBase from "../ContainerBase/Index";
import LogoBlue from "../LogoBlue";

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
    linkedin: yup.string().required("Campo Obrigatório!"),
    module: yup.boolean().oneOf([true], "Marque ao menos uma opção!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres!")
      .required("Senha Obrigatória!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As Senhas devem ser iguais!"),
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
    <ContainerBase w={"434px"}>
      <LogoBlue />

      <VStack
        alignItems="flex-start"
        mt="10"
        as="form"
        spacing={"20px"}
        onSubmit={handleSubmit(handleSignUp)}
      >
        <InputChakra
          name="name"
          placeholder="Nome Completo"
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
          placeholder="email@email.com"
          label="Email"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.email}
          {...register("email")}
        />

        <InputChakra
          label="LinkedIn"
          placeholder="www.linkedin.com/nome"
          fontSize="16px"
          border="1px solid #E2E8F0"
          color="#2D3748"
          error={errors.linkedin}
          {...register("linkedin")}
        />

        <RadioGroup
          w="250px"
          onChange={setValue}
          value={value}
          borderRadius="6px"
          border="1px  #E2E8F0"
          defaultValue="1"
        >
          <Text>Módulo</Text>
          <Stack spacing={"auto"} direction="row" mt="8px" ml="10px">
            <Radio isRequired value={"Q1"}>
              Q1
            </Radio>
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
        <Box w="100%">
          <Text color="gray.500" mb="5px">
            Já possui uma conta?
          </Text>
          <Button
            variant={"ButtonBorderedWhite"}
            onClick={() => history.push("/")}
          >
            Ir para o login
          </Button>
        </Box>
      </VStack>
    </ContainerBase>
  );
}
