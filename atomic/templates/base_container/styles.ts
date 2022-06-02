import { styled } from "@stitches/react";

export const BaseContainer = styled("div", {
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#ffffff",
  variants: {
    scroll: {
      horizontal: {
        overflowX: "scroll",
      },
      vertical: {
        overflowY: "scroll",
      },
    },
  },
});
