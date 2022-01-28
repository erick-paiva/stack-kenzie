import { Box, Button, useDisclosure } from "@chakra-ui/react"
import { InputChakra } from "../InputChakra";
import {TextAreaChakra} from "../TextAreaChakra"
import ModalChakra from "../Modal"
import { useState } from "react/cjs/react.development";
import { useAuth, useQuestions } from "../../providers/hooks";


export default function CreateQuestionButton (){
    const [titleQuestion, setTitleQuestion] = useState("")
    const [bodyQuestion, setBodyQuestion] = useState("")
    const { createQuestion } = useQuestions()
    const {user} = useAuth()
    const getHours = () => {
        const date = new Date();
        const dia = date.getDate(); 
        const mes = date.getMonth(); // 0-11 (zero=janeiro)
        const ano = date.getFullYear(); // 4 dígitos
        const hora = date.getHours(); // 0-23
        const min = date.getMinutes();

        return{day: dia, month:mes, year: ano, hour: hora, minutes: min }
    }
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = () => {
        const date = getHours()
        createQuestion({
            userId: user.id,
            date: date,
            question: {title: titleQuestion, body: bodyQuestion, likes: [{"userId": 1}]},
            tags: ["JS","REACT","LINUX","NODE JS"]
        })
    }
    return(
        <Box>
            <ModalChakra isOpenProps={isOpen} onCloseProps={onClose} title="Fazer uma pergunta" >
                <InputChakra placeholder="Digite o título da sua pergunta" label="Título da pergunta" onChange={e => setTitleQuestion(e.currentTarget.value)} />
               
                <TextAreaChakra placeholder="Digite o título da sua pergunta" label="Título da pergunta" onChange={e => setBodyQuestion(e.currentTarget.value)}/>
                <Button onClick={handleClick}>ENVIAR PERGUNTA</Button>
            </ModalChakra>

            <Button onClick={onOpen}>
            Fazer uma pergunta
            </Button>
        </Box>
    )
}