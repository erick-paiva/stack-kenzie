import { Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuth, useComments } from "../../providers/hooks";
import { FaCommentDots } from "react-icons/fa";

function AddComment({ postId }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { user } = useAuth();
  const { createComment } = useComments();

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
    comment: value,
  };

  const handleSubmit = () => {
    createComment(data);
  };
  return (
    <div>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Escreva seu comentário"
        size="sm"
      />
      <Button variant={"ButtonBorderedSmall"} onClick={handleSubmit}>
        <HStack>
          <Text>Comentar</Text>
          <FaCommentDots />
        </HStack>
      </Button>
    </div>
  );
}

export default AddComment;
