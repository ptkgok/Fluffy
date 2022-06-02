import LateralMenu from "@Organisms/lateral_menu";
import React, { ReactChildren } from "react";
import * as Component from "./styles";

type BaseContainerProps = {
  children: any;
  menu?: boolean;
};

const BaseContainer = ({ children, menu }: BaseContainerProps) => {
  return (
    <Component.BaseContainer>
      {menu && <LateralMenu />}
      {children}
    </Component.BaseContainer>
  );
};

export default BaseContainer;
