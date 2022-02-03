import { Button, Text, VStack, Box } from "@chakra-ui/react";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/hooks";
import { InputChakra } from "../InputChakra";
import ContainerBase from "../ContainerBase/Index";
import LogoBlue from "../LogoBlue";

export default function FormSignIn() {
  const { signIn } = useAuth();

  const history = useHistory();

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
  };

  return (
    <ContainerBase w={"434px"}>
      <Box as="form" onSubmit={handleSubmit(handleSignIn)}>
        <LogoBlue />
        <VStack alignItems="flex-start" mt="6" spacing={4}>
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

          <Button type="submit" variant={"ButtonFilledBlue"}>
            Logar
          </Button>

          <Text ml="1" mt="1" color="gray.600">
            Não possui uma conta?
          </Text>
          <Button
            variant={"ButtonBorderedWhite"}
            onClick={() => history.push("/signup")}
          >
            Cadastre-se
          </Button>
        </VStack>
      </Box>
    </ContainerBase>
  );
}
