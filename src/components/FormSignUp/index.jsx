import {
  Button,
  Heading,
  Text,
  VStack,
  Input,
  Image,
  Box,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
  Input as ChakraInput,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo1.svg";
import { useAuth } from "../../providers/hooks";
import { useState } from "react";

export default function FormSignUp() {
  const { signUp } = useAuth();
  const [value, setValue] = useState("");

  const history = useHistory();

  // // function handleClickLogin() {
  // //   history.push("/dashboard");
  // // }

  //   function handleClickRegister() {
  //     history.push("/");
  //   }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório!"),
    email: yup
      .string()
      .required("E-mail Obrigatório!")
      .email("Precisa ser um E-mail"),
    slack: yup.string().required("Campo Obrigatório!").email("@nome"),
    module: yup.boolean().oneOf([true], "Marque ao menos uma opção!"),
    password: yup.string().required("Senha Obrigatória!"),
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
    console.log("chamou")
  };

  return (
    <>
      <Box
        mt="50px"
        ml="50px"
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
          <Box w="100%">
            <Text color="gray.500" fontSize="16px">
              Nome do usuário
            </Text>

            <Input
              w="100%"
              h="40px"
              borderRadius="6px"
              name="name"
              placeholder="Nome"
              label="name"
              fontSize="16px"
              border="1px solid #E2E8F0"
              color="#2D3748"
              error={errors.name?.message}
              {...register("name")}
            />
            {errors.name?.message && (
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            )}
          </Box>

          <Box w="100%">
            <Text color="gray.500" fontSize="16px">
              Email
            </Text>
            <Input
              w="100%"
              h="40px"
              borderRadius="6px"
              name="email"
              placeholder="email@email.com.br"
              label="Login"
              fontSize="16px"
              border="1px solid #E2E8F0"
              color="#2D3748"
              error={errors.email?.message}
              {...register("email")}
            />
            {errors.email?.message && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </Box>

          <Box w="100%">
            <Text color="gray.500">Slack</Text>
            <Input
              w="100%"
              h="40px"
              borderRadius="6px"
              name="email"
              placeholder="@nomeSlack"
              label="Login"
              fontSize="16px"
              border="1px solid #E2E8F0"
              color="#2D3748"
              error={errors.email?.message}
              {...register("email")}
            />
            {errors.email?.message && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </Box>

          <Box w="100%">
            <Text color="gray.500">Módulo</Text>
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
          </Box>

          <Box w="100%">
            <Text color="gray.500">Senha</Text>
            <Input
              w="100%"
              h="40px"
              borderRadius="6px"
              name="password"
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
          </Box>

          <Box w="100%">
            <Text color="gray.500">Confirme sua senha</Text>
            <Input
              w="100%"
              h="40px"
              borderRadius="6px"
              name="passwordConfirm"
              type="password"
              placeholder="repita a senha"
              label="passwordConfirm"
              fontSize="16px"
              border="1px solid #E2E8F0"
              color="#2D3748"
              error={errors.password?.message}
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message && (
              <FormErrorMessage>
                {errors.passwordConfirm?.message}
              </FormErrorMessage>
            )}
          </Box>

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
            <Text ml="1" mt="2" mb="2" color="gray.600">
              Não tem conta? Cadastre
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
              onClick={() => history.push("/signin")}
            >
              Ir para o login
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
