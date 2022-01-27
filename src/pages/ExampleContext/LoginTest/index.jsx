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
      boxShadow={"lg"}
      p={2}
      borderRadius="5px"
      align={"center"}
      onSubmit={handleForm}
      w="300px"
      bgGradient="radial(gray.300, yellow.400, pink.200)"
    >
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Test Login</Heading>
      </Stack>
      <Stack spacing={2}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            w="90%"
            p={1}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            w="90%"
            p={1}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button p={2} type="submit" colorScheme="facebook" border="none">
          Entrar
        </Button>
      </Stack>
    </Box>
  );
}
