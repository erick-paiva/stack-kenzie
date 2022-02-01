import { Grid, GridItem } from "@chakra-ui/react";
import CardAnswer from "../../components/CardAnswer";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import { useQuestions, useComments, useAnswers } from "../../providers/hooks";

const Dashboard = () => {
  const { answers } = useAnswers();
  console.log("answers: ", answers);
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      <GridItem colSpan={12}>
        <Header />
      </GridItem>
      <GridItem rowSpan={2} colSpan={8} bg="papayawhip">
        {answers && answers.map((answer) => <CardAnswer answer={answer} />)}
      </GridItem>
      <GridItem rowSpan={2} colSpan={4} h="100px" bg="tomato">
        sdsa
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
