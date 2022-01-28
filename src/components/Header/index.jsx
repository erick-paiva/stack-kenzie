import { Box, Flex, Image, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Logo from "../../assets/logoKenzieStack.svg";
import imgDefault from "../../assets/imgDefault.svg";
import { InputChakra } from "../InputChakra";

export function Header({setNameSearch}) {
  // const [aa, seta] = useState("")
  // console.log(aa)

  // const [is800px] = useMediaQuery("min-width: 800px")
  const is800px = useBreakpointValue({ base: false, md: true });
  return (
    <Flex w="100%" flexDirection="column" alignItems="center" justifyContent={"center"} boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)" h={["180px","180px","126px"]}  >
    <Flex w="100%" justifyContent="space-between" alignItems="center" paddingX="30px" >
      <Image src={Logo} />


    {!is800px ? 

      <Image src={imgDefault} h="60px" />
      
      :
      <>
      <Box minW="320px" maxW="100%">
      <InputChakra
        placeholder="Pesquise sua dúvida"
        border="2px solid red"
        defaultBorder="blue"
        h="50px"
        onChange={e => setNameSearch(e.currentTarget.value)} 
      />
      </Box>
      <Image src={imgDefault} h="60px" /> 

      </>

      
    }
    
     
    </Flex>
    {!is800px && 
    <Flex width="80%" justifyContent="center">
    <InputChakra
      mt="15px"
      placeholder="Pesquise sua dúvida"
      border="2px solid red"
      defaultBorder="blue"
      h="50px"
      onChange={e => setNameSearch(e.currentTarget.value)} 
    />
    </Flex>
    }
    </Flex>
  );
}
