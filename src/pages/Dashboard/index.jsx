import React from "react";
import AddAnswer from "../../components/AddAnswer";
import AddComment from "../../components/AddComment";
import CardDoubts from "../../components/CardDoubts";
import ModalChakra from "../../components/Modal";

export default function Dashboard() {
  return (
    <div>
      <CardDoubts />
      <ModalChakra title="Modal pergunta" buttonName="Modal pergunta">
        <CardDoubts />
        <AddComment />
        <AddAnswer />
      </ModalChakra>
    </div>
  );
}
