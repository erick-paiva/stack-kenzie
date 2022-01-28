import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect, forwardRef } from "react";


const InputBase = (
  { name, label, icon: Icon, error = null, defaultBorder = "gray.200", ...rest },ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState(defaultBorder);

  useEffect(() => {
    if (error) {
      return setVariation("red.500");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("purple.800");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("green.500");
    }else{
      setVariation(defaultBorder)
    }
  }, [error, value]);

  return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel color="gray.700">{label}</FormLabel>}

        <InputGroup flexDirection="column">
          {Icon && (
            <InputLeftElement color={variation} mt="2.5">
              <Icon />
            </InputLeftElement>
          )}

          <ChakraInput
            id={name}
            name={name}
            onChangeCapture={(e) => setValue(e.currentTarget.value)}
            onBlurCapture={handleInputBlur}
            onFocus={handleInputFocus}
            borderColor={variation}
            color={variation}
            bg="white"
            variant="outline"
            _hover={{ bgColor: "gray.100" }}
            _placeholder={variation}
            _focus={{
              bg: "gray.100",
            }}
            size="lg"
            h="60px"
            ref={ref}
            {...rest}
          />

          {!!error && (
            <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
          )}
        </InputGroup>
      </FormControl>
  );
};

export const InputChakra = forwardRef(InputBase);