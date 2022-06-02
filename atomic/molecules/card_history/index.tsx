import { Button } from "@nextui-org/react";
import React from "react";
import * as Component from "./styles";

const CardHistory = () => {
  return (
    <Component.Container>
      <Component.Content>
        <span style={{ color: "GrayText" }}>YOUR DAY YOUR WAY</span>
        <h3 style={{ color: "Highlight" }}>Your checklist for better sleep</h3>
      </Component.Content>
      <Component.BottomInformations>
        <span>Breathing App Get a good night's sleep.</span>
        <Button>Banda</Button>
      </Component.BottomInformations>
    </Component.Container>
  );
};

export default CardHistory;
