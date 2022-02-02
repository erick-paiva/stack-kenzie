import { Grid, GridItem } from "@chakra-ui/react";
import CardAnswer from "../../components/CardAnswer";
import CardDoubts from "../../components/CardDoubts";
import { Header } from "../../components/Header";
import DesplayTags from "../../components/DisplayTags";
import { useQuestions, useComments, useAnswers } from "../../providers/hooks";

const Dashboard = () => {
  const { answers } = useAnswers();
  return (
    <Grid
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(12, 1fr)"
      gap={2}
    >
      <GridItem colSpan={12}>
        <Header />
      </GridItem>
      <GridItem rowSpan={2} colSpan={8}>
        {answers && answers.map((answer) => <CardAnswer answer={answer} />)}
      </GridItem>
      <GridItem rowSpan={2} colSpan={4} h="100px">
        <DesplayTags />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
