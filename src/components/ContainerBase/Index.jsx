import { Container } from "@chakra-ui/react";

export default function ContainerBase({ children, w }) {
  return (
    <Container
      maxW={w}
      padding="15px"
      border="1px solid "
      borderColor="gray.100"
      bg="white"
      borderRadius="6px"
      boxShadow="md"
      p="30px"
      rounded="md"
    >
      {children}
    </Container>
  );
}
