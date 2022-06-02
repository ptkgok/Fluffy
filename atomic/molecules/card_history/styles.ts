import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "70% 30%",
  width: "100%",
  maxWidth: "600px",
  height: "200px",
  backgroundImage: "url('https://images.adsttc.com/media/images/5a99/41fa/f197/cc7a/e000/0229/large_jpg/MV5BYjM3MzQ1MDMtMjc4NS00Y2RmLTkwM2YtZWVjMzIwNTQwMmRmXkEyXkFqcGdeQXVyNzg2ODI2OTU_._V1_SX1777_CR0_0_1777_735_AL_.jpg?1519993331')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: 10,
});

export const BottomInformations = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 10,
  backdropFilter: "saturate(180%) blur(10px)",
  background: "rgba(255, 255, 255, 0.4)",
  width: "100%",
  height: "100%",
});
