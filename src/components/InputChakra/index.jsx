import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";

const inputVariation = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

export const InputChakra = (
  { name, label, icon: Icon, error = null, ...rest }
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel color="gray.400">{label}</FormLabel>}

        <InputGroup flexDirection="column">
          {Icon && (
            <InputLeftElement color={inputVariation[variation]} mt="2.5">
              <Icon />
            </InputLeftElement>
          )}

          <ChakraInput
            id={name}
            name={name}
            onChangeCapture={(e) => setValue(e.currentTarget.value)}
            onBlurCapture={handleInputBlur}
            onFocus={handleInputFocus}
            borderColor={inputVariation[variation]}
            color={inputVariation[variation]}
            bg="gray.50"
            variant="outline"
            _hover={{ bgColor: "gray.100" }}
            _placeholder={{ color: "gray.300" }}
            _focus={{
              bg: "gray.100",
            }}
            size="lg"
            h="60px"
            
            {...rest}
          />

          {!!error && (
            <FormErrorMessage color="red.500">{error.message}</FormErrorMessage>
          )}
        </InputGroup>
      </FormControl>
  );
};
