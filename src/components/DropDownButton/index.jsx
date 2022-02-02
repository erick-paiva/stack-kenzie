import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useQuestions } from "../../providers/hooks";

export default function DropDownButton({ itens,  setOption }) {
  const { questions } = useQuestions();
  
  const setItem = (option) => {
    if (option === 0) {

      setOption(questions.slice().sort(
        (a, b) => {
          if(a.date.month > b.date.month){
            if(a.date.day > b.date.day){
              if(a.date.hour > b.date.hour){
                return -1
              }
            }
          }
          if(a.date.month < b.date.month){
            if(a.date.day < b.date.day){
              if(a.date.hour < b.date.hour){
                return 1
              }
            }
          }
          return 0
        }
      ).reverse())
    }
    if (option === 1) {

      setOption(questions.slice().sort(
        (a, b) => {
          if(a.date.month > b.date.month){
            if(a.date.day > b.date.day){
              if(a.date.hour > b.date.hour){
                return 1
              }
            }
          }
          if(a.date.month < b.date.month){
            if(a.date.day < b.date.day){
              if(a.date.hour < b.date.hour){
                return -1
              }
            }
          }
          return 0
        }
      ))
    }
    if (option === 2) {

      setOption(questions.slice().sort(
        (a, b) =>
          b.question?.likes.length -
          a.question?.likes.length
      ))
    }
    if (option === 3) {
      setOption(questions.slice().sort(
        (a, b) =>
          a.question?.likes.length -
          b.question?.likes.length
      ))
    }
  }
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
          <Box onClick={() => setItem(index)} key={ele}>

          <MenuItem >
            {ele}
          </MenuItem>
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
}
