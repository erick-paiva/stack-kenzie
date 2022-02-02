import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function DropDownButton() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        variant="ButtonBorderedSmall"
        mb="20px"
      >
        Ordenar por
      </MenuButton>
      <MenuList>
        <MenuItem>Data</MenuItem>
        <MenuItem>Curtidas</MenuItem>
      </MenuList>
    </Menu>
  );
}
