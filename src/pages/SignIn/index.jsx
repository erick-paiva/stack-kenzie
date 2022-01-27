import FormSignIn from "../../components/FormSignIn";

<<<<<<< HEAD
export default function SignIn() {
  return <FormSignIn />;
}
=======
function SignIn() {
  return (
    <>
      <Flex
        height={["auto", "auto", "100vh", "100vh"]}
        justifyContent="center"
        background="#ffff
        "
        alignItems="center"
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        color="white"
      >
        <Flex
          w={["100%", "100%", "100%", "100%"]}
          justifyContent="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
           <Grid
            mt={["4", "4", "0"]}
            width="434px"
            height="552px"
            padding="30px 15px"
            border="1px solid"
            borderRadius="6px"
            boxShadow="lg"
            borderColor="gray.50"
            as="form"
            bg="white"
            color="blue.800"
            ml={"50px"}
            
          >
            <FormSignIn />
          </Grid>
          <Grid w={["100%", "100%", "50%", "50%"]} ml="150px">
            <Heading fontSize="6xl" color="#0001FF" mb="30">
              <Text>ENCONTRE A</Text>
              <Text>RESPOSTA DAS</Text>
              <Text>SUAS DÚVIDAS</Text>
            </Heading>

            <Text
              fontWeight="bold"
              color="gray.900"
              mb="20px"
              styleName="heading-large/md"
              font-size="20px"
              font-style="normal"
              font-weight="700"
              line-height="24px"
              letter-spacing="0em"
              text-align="left"
            >
              Faça perguntas a serem respondidas pelos coachs da Kenzie Academy
              Brasil
            </Text>

            <Text fontWeight="bold" color="gray.900" mb="20px">
              Comente as postagens dos colegas e ajude a tirar dúvidas
            </Text>

            <Text fontWeight="bold" color="gray.900" mb="20px">
              Curta as dúvidas mais interessantes para colocar em evidência
            </Text>
            <Button
            bg="#0001FF"            
            color="#FFFF"
            border="1px solid #0001FF"
            w="276px"
            h="48px"
            borderRadius="6px"
            _hover={{
              background: "#3333FF",
            }}
            mt="20px"
           
          >
            Cadastre-se
          </Button>
          </Grid>
          
         
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn;
>>>>>>> d6bb7426e485ce5411f4f51fd06120532b69f309
