import { Container } from "@chakra-ui/react";

export default function ContainerBase({ children, w, m, onClick, onHover }) {
  return (
    <Container
      onClick={onClick}
      _hover={onHover}
      maxW={w}
      m={m}
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
