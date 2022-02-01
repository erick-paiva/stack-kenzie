import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react";

export default function PopoverChakra({ jsx, children }) {
  return (
    <Popover>
      <PopoverTrigger>
        {jsx}
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          {/* <PopoverHeader>Header</PopoverHeader> */}
          <PopoverCloseButton />
          <PopoverBody>
            {children}
          </PopoverBody>
          {/* <PopoverFooter>This is the footer</PopoverFooter> */}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
