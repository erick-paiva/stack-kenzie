import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAnswers, useAuth } from "../../providers/hooks";

function AddAnswer() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const { user } = useAuth();
  const { createAnswer } = useAnswers();

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
    createAnswer(data);
  };
  return (
    <div>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Escreva sua resposta"
        size="sm"
      />
      <Button onClick={handleSubmit}>Adicionar resposta</Button>
    </div>
  );
}

export default AddAnswer;
