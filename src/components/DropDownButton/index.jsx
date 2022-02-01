import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function DropDownButton({ itens }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        variant="ButtonBorderedWhite"
        w={["50%", "50%", "auto"]}
        fontSize={["12px", "18px", "20px"]}
      >
        Ordenar por
      </MenuButton>
      <MenuList>
        {itens.map((ele) => (
          <MenuItem key={ele}>{ele}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
