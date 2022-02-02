import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react/cjs/react.development";
import { useQuestions } from "../../providers/hooks";

export default function DropDownButton({ itens, setOption, option, setArray, array }) {


  // useEffect(() => {
  //   setItem(option)
  //   console.log("alterou")
  // },[questions,option])
  console.log(option, "opt")

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

  useEffect(() => {
    setItem(option)
  },[option,array])
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
        {itens.map((ele, index) => (
          <Box onClick={() => setOption(index)} key={ele}>
            <MenuItem>{ele}</MenuItem>
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
}
