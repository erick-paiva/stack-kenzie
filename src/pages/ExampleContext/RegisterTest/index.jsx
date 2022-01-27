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

export default function RegisterTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [module, setModule] = useState("");
  const [coach, setCoach] = useState(false);

  const { signUp } = useAuth();

  const handleForm = (e) => {
    e.preventDefault();
    signUp(name, email, password, bio, module, coach);
  };

  return (
    <Box
      as="form"
      rounded={"lg"}
      bg="#556B2F"
      color="white"
      boxShadow={"lg"}
      p={10}
      borderRadius="10px"
      align={"center"}
      onSubmit={handleForm}
      w="300px"
    >
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Test Cadastro</Heading>
      </Stack>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Nome</FormLabel>
          <Input w="90%" p={8} onChange={(e) => setName(e.target.value)} />
        </FormControl>
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
        <FormControl id="bio">
          <FormLabel>Biografia</FormLabel>
          <Input w="90%" p={8} onChange={(e) => setBio(e.target.value)} />
        </FormControl>
        <FormControl id="module">
          <FormLabel>Módulo</FormLabel>
          <Input w="90%" p={8} onChange={(e) => setModule(e.target.value)} />
        </FormControl>
        <FormControl id="coach">
          <FormLabel>É Coach?</FormLabel>
          <Input w="90%" p={8} onChange={(e) => setCoach(e.target.value)} />
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
