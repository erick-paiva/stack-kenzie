import {
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo1.svg";
import { useAuth } from "../../providers/hooks";
import { InputChakra } from "../InputChakra";

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
    console.log(data)
    signIn(data.email, data.password);
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
      as="form"
      onSubmit={handleSubmit(handleSignIn)}
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
        mt="6"
        spacing={4}
       
      >
          <InputChakra
            w="100%"
            h="40px"
            placeholder="email@email.com.br"
            label="Login"
            error={errors?.email}
            {...register("email")}
          />

          <InputChakra
            w="100%"
            h="40px"
            type="password"
            placeholder="sua senha"
            label="Senha"
            error={errors?.password}
            {...register("password")}
          />

        
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
              onClick={() => history.push("/signup")}
            >
              Cadastre-se
            </Button>
        
      </VStack>
    </Box>
  );
}
