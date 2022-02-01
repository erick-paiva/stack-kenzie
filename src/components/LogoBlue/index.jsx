import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo1.svg";

function LogoBlue() {
  return (
    <Box
      background="#0001FF"
      borderRadius="6px"
      w="100%"
      boxShadow="md"
      rounded="md"
    >
      <Image
        src={Logo}
        alt="stakenzie"
        title="stakenzie"
        width="161px"
        height="95px"
        mx="auto"
      />
    </Box>
  );
}

export default LogoBlue;
