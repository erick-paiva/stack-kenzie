import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";

import { useAuth } from "../../../providers/hooks";

export default function LoginTest() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, user } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();
    signIn(email, password);
    user && alert(`Login realizado com sucesso do email: ${user.email}`);
  };

  return (
    <Box
      as="form"
      rounded={"lg"}
      bg="#4B0082"
      color="white"
      boxShadow={"lg"}
      p={10}
      borderRadius="10px"
      align={"center"}
      onSubmit={handleForm}
      w="300px"
    >
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Test Login</Heading>
      </Stack>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            w="90%"
            p={8}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            w="90%"
            p={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          bg={"red"}
          color={"white"}
          _hover={{
            bg: "blue",
          }}
          p={8}
          type="submit"
        >
          Entrar
        </Button>
      </Stack>
    </Box>
  );
}
