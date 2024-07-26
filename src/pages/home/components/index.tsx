import Charts from "./Charts";
import Summary from "./Summary";
import { CardContainer } from "./styles";

const Home = () => {
  return (
    <>
      <CardContainer>
        <Summary />
      </CardContainer>

      <CardContainer>
        <Charts />
      </CardContainer>
    </>
  );
};

export default Home;
