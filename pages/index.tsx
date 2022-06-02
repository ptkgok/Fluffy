import CardHistory from "@Molecules/card_history";
import { Container } from "@nextui-org/react";
import BaseContainer from "@Templates/base_container";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <BaseContainer menu>
      <Container>
        <CardHistory />
      </Container>
    </BaseContainer>
  );
};

export default Home;
