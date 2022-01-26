import {
  Button,
  Heading,
  Text,
  VStack,
  Input,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo1.svg";

export default function FormSignIn() {
  const history = useHistory();

  // // function handleClickLogin() {
  // //   history.push("/dashboard");
  // // }

  function handleClickRegister() {
    history.push("/");
  }

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

  const Logar = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(Logar)}>
      <Heading
        width="400px"
        height="130px"
        background="#0001FF"
        borderRadius="6px"
        boxShadow="lg"
      >
        <Image
          src={Logo}
          alt="stakenzie"
          title="stakenzie"
          width="161px"
          height="95px"
        />
      </Heading>

      <VStack mt="10">
      <Box w="100%">
          <Text ml="1" mt="1" mb="2" color="gray.600">
            Nome do usuário
          </Text>
          <Input
            name="email"
            placeholder="email@email.com.br"
            label="Login"
            error={errors.email?.message}
            {...register("email")}
          />
        </Box>
        <Box w="100%">
          <Text ml="1" mt="2" mb="2" color="gray.600">
            Email
          </Text>
          <Input
            name="email"
            placeholder="email@email.com.br"
            label="Login"
            error={errors.email?.message}
            {...register("email")}
          />
        </Box>

        <Box w="100%">
          <Text ml="1" mt="2" mb="2" color="gray.600">
            Senha
          </Text>
          <Input
            name="password"
            type="password"
            placeholder="sua senha"
            label="Senha"
            error={errors.password?.message}
            {...register("password")}
          />
        </Box>

        <Box w="100%">
          <Text ml="1" mt="2" mb="2" color="gray.600">
            Confirme sua senha
          </Text>
          <Input
            name="password"
            type="password"
            placeholder="repita a senha"
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
            w="400px"
            h="40px"
            borderRadius="6px"
            _hover={{
              background: "#3333FF",
            }}
            mt="30px"
          >
            Logar
          </Button>

          <Text ml="1" mt="2" mb="2" color="gray.600">
            Não tem conta? Cadastre
          </Text>
          <Button
            bg="#FFFFFF"
            color="#0001FF"
            border="1px solid #0001FF"
            w="400px"
            h="40px"
            borderRadius="6px"
            _hover={{
              background: "gray.50",
            }}
            mt="15px"
            onClick={() => handleClickRegister()}
            
          >
            Ir para o login
          </Button>
        </Box>
      </VStack>
    </form>
  );
}
