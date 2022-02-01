import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../../providers/hooks";
import Avatar from "../Avatar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { InputChakra } from "../InputChakra";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import imdDefault from "../../assets/imgDefault.svg";

const ModalProfileUser = ({ onOpen, isOpen, onClose }) => {
  const { user, accessToken, setUser } = useAuth();
  const [module, setModule] = useState(user.module);
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Precisa ser um E-mail"),
    slack: yup.string(),
    // module: yup.boolean().oneOf([true], "Marque ao menos uma opção!"),
    linkedin: yup.string(),
    image: yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(formSchema) });

  const updateProfile = (value) => {
    api
      .patch(`/users/${user.id}`, value, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(() =>
        api.get(`/users/${user.id}`).then((resp) => setUser(resp.data))
      );
  };

  const editProfile = (data) => {
    if (data.email) {
      updateProfile({ email: data.email });
    }
    if (data.name) {
      updateProfile({ name: data.name });
    }
    if (data.slack) {
      updateProfile({ slack: data.slack });
    }
    if (module) {
      updateProfile({ module: module });
    }
    if (data.image) {
      updateProfile({ image: data.image });
    }
    if (data.linkedin) {
      updateProfile({ linkedin: data.linkedin });
    }
  };
  const logOut = () => {
    localStorage.removeItem("@StackKenzie:accessToken");
    localStorage.removeItem("@StackKenzie:user");
    history.push("/")
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody paddingX="30px">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* <Avatar userCreator={user} /> */}
            <Image
              src={user.image ? user.image : imdDefault}
              h="100px"
              borderRadius="full"
            />
            <Text>{user?.linkedin}</Text>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <HStack spacing="6" margin="20px 20px">
              <Button variant="ButtonBorderedWhite" w="80px">
                {user.coach ? "COACH" : "ALUNO"}
              </Button>
              <Button variant="ButtonBorderedWhite" w="80px">
                {user.module}
              </Button>
              {user?.linkedin && (
                <Button variant="ButtonBorderedWhite" w="80px">
                  LINKEDIN
                </Button>
              )}
            </HStack>
          </Flex>
          <VStack spacing="4" as="form" onSubmit={handleSubmit(editProfile)} mb="20px">
            <InputChakra
              placeholder="seu nome"
              label="Nome do usuário"
              h="40px"
              {...register("name")}
            />
            <InputChakra
              placeholder="email@email.com"
              label="Email"
              h="40px"
              {...register("email")}
            />
            <InputChakra
              placeholder="www.linkedin.com/user"
              label="Linkedin"
              h="40px"
              {...register("linkedin")}
            />
            <InputChakra
              placeholder="copie e cole o link da imagem aqui"
              label="Imagem de perfil"
              h="40px"
              {...register("image")}
            />
            <RadioGroup
              w="100%"
              h="40%"
              onChange={setModule}
              value={module}
              borderRadius="6px"
              border="1px  #E2E8F0"
              defaultValue="1"
            >
              <Stack
                spacing={14}
                direction="row"
                m="8px"
                ml="10px"
                color="theme.colors"
              >
                <Radio value={"Q1"}>Q1</Radio>
                <Radio value={"Q2"}>Q2</Radio>
                <Radio value={"Q3"}>Q3</Radio>
                <Radio value={"Q4"}>Q4</Radio>
              </Stack>
            </RadioGroup>
            <Button
              //   onClick={onClose}
              variant="ButtonFilledBlue"
              w="100%"
              type="submit"
            >
              ATUALIZAR
            </Button>
            <Button variant="ButtonBorderedWhite" w="100%" onClick={logOut}>
              SAIR DA CONTA
            </Button>
          </VStack>
        </ModalBody>
        {/* <ModalFooter>
          
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default ModalProfileUser;
