import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { BsChevronDown } from "react-icons/bs";

export default function DropDownButton({ itens, setArray, array }) {
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const verificaData = (a,b) => {
    const dataA = new Date(`${a.date.month}-${a.date.day}-${a.date.year}`)
    const dataB = new Date(`${b.date.month}-${b.date.day}-${b.date.year}`)
    if(dataA < dataB){
      return 1
    }
    if(dataA > dataB){
      return -1
    }
    return 0
  }
  const setItem = (option) => {
    if (option === 0) {
      setArray(
        array
          .slice()
          .sort(verificaData)
      );
    }

    if (option === 1) {
      setArray(
        array
          .slice()
          .sort((a, b) => b.question?.likes.length - a.question?.likes.length)
      );
    }
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={!isMobile && <BsChevronDown />}
        variant="ButtonBorderedSmall"
      >
        Ordenar
      </MenuButton>
      <MenuList>
        {itens.map((ele, index) => (
          <Box onClick={() => setItem(index)} key={ele}>
            <MenuItem>{ele}</MenuItem>
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
}
