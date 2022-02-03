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
  const setItem = (option) => {
    if (option === 0) {
      setArray(
        array
          .slice()
          .sort((a, b) => {
            if (a.date.month > b.date.month) {
              if (a.date.day > b.date.day) {
                if (a.date.hour > b.date.hour) {
                  return -1;
                }
              }
            }
            if (a.date.month < b.date.month) {
              if (a.date.day < b.date.day) {
                if (a.date.hour < b.date.hour) {
                  return 1;
                }
              }
            }
            return 0;
          })
          .reverse()
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
