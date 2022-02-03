import ModalChakra from "../ModalChakra";

import CardPerfil from "../CardPerfil";

export default function ModalProfileUsers({ user, isOpen, onClose }) {
  return (
    <ModalChakra title="Perfil" isOpen={isOpen} onClose={onClose}>
      <CardPerfil user={user} />
    </ModalChakra>
  );
}
