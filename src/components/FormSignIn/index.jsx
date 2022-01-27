import {
  Button,
  Heading,
  Text,
  VStack,
  Input,
  Image,
  Box,
  FormErrorMessage,
  Grid,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo1.svg";
import { useAuth } from "../../providers/hooks";

export default function FormSignIn() {
  const { signIn } = useAuth();

  const history = useHistory();

  // // function handleClickLogin() {
  // //   history.push("/dashboard");
  // // }

  // function handleClickRegister() {
  //   history.push("/register");
  // }

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail Obrigatório!")
      .email("Precisa ser um E-mail"),
    password: yup.string().required("Senha Obrigatória!"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleSignIn = (data) => {
    signIn(data.email, data.password);
    console.log(data);
  };

  return (
    <Box
      mt="50px"
      ml="50px"
      width="434px"
      height="552px"
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
        as="form"
        mt="6"
        spacing={4}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Box w="100%">
          <Text ml="1" mt="1" color="gray.600">
            Email
          </Text>
          <Input
            w="100%"
            h="40px"
            borderRadius="6px"
            fontSize="16px"
            border="1px solid #E2E8F0"
            color="#2D3748"
            name="email"
            placeholder="email@email.com.br"
            label="Login"
            error={errors.email?.message}
            {...register("email")}
          />
          {errors.email?.message && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </Box>

        <Box w="100%">
          <Text color="gray.600">Senha</Text>
          <Input
            w="100%"
            h="40px"
            borderRadius="6px"
            fontSize="16px"
            border="1px solid #E2E8F0"
            color="#2D3748"
            name="password"
            type="password"
            placeholder="sua senha"
            label="Senha"
            error={errors.password?.message}
            {...register("password")}
          />
        </Box>
        
        <Box w="100%">
          <Button
            type="submit"
            bg="#0001FF"
            color="#FFFFFF"
            w="100%"
            h="40px"
            borderRadius="6px"
            _hover={{
              background: "#3333FF",
            }}
            fontSize="16px"
            mb="50px"
          >
            Logar
          </Button>

          <Box w="100%">
            <Text ml="1" mt="1" color="gray.600">
              Não tem conta? Cadastre
            </Text>
            <Button
              bg="#FFFFFF"
              color="#0001FF"
              border="1px solid #0001FF"
              w="100%"
              h="40px"
              borderRadius="6px"
              _hover={{
                background: "gray.50",
              }}
              fontSize="16px"
              // onClick={() => handleClickRegister()}
            >
              Cadastre-se
            </Button>
          </Box>
          </Box>
        
      </VStack>
    </Box>
  );
}
