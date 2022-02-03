import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react";

export default function PopoverChakra({ jsx, children }) {
  return (
    <Popover>
      <PopoverTrigger>
        {jsx}
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {children}
          </PopoverBody>
       
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
