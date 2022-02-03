import { Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiCommentEdit } from "react-icons/bi";
import { useAnswers, useAuth } from "../../providers/hooks";

function AddAnswer({ postId, getData }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { user } = useAuth();
  const { createAnswer } = useAnswers();

  const data = {
    userId: user.id,
    postId: postId,
    date: {
      day: 25,
      month: 1,
      year: 2022,
      hour: 8,
      minutes: 21,
    },
    body: value,
  };

  const handleSubmit = () => {
    createAnswer(data, getData);
  };
  return (
    <div>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Escreva sua resposta"
        size="sm"
      />
      <Button variant={"ButtonBorderedSmall"} onClick={handleSubmit}>
        <HStack alignItems={"flex-end"}>
          <Text mr="5px">Responder </Text>
          <BiCommentEdit fontSize="20px" />
        </HStack>
      </Button>
    </div>
  );
}

export default AddAnswer;
