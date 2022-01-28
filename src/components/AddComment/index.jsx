import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAnswers, useAuth, useComments } from "../../providers/hooks";

function AddComment() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { user } = useAuth();
  const { createComment } = useComments();

  // MOCKADO - recebe por props
  const postId = 4;

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
    comment: "value",
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
      <Button onClick={handleSubmit}>Adicionar comentário</Button>
    </div>
  );
}

export default AddComment;
