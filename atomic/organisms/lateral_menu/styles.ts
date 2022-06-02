import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "10vw",
  height: "100vh",
  backgroundColor: "#f9f9f9",
  paddingTop: "40px",
  gap: "1.5rem",
  "@media (max-width: 1280px)": {
    width: "max-content",
    padding: 10
  }
});

export const ProfilePart = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "85%",
  "@media (max-width: 1280px)": {
    width: "max-content"
  }
});

export const ProfileName = styled("span", {
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "#000",
  marginLeft: "10px",
  "@media (max-width: 1280px)": {
    display: 'none'
  }
});

export const Options = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90%",
  listStyle: "none",
  gap: 5,
  padding: 0,
  "@media (max-width: 1280px)": {
    width: '100%',
    margin: 0
  }
});

export const Option = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 8,
  width: "100%",
  minHeight: "30px",
  background: "transparent",
  borderRadius: 8,
  paddingLeft: 20,
  fontFamily: "system-ui",
  fontWeight: "bold",
  variants: {
    selected: {
      isSelected: {
        backgroundColor: "#f0f0f0",
        color: "#1e1e1e",
      },
      isNotSelected: {
        backgroundColor: "transparent",
        color: "#8b8b8b",
      },
    },
  },
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  "@media (max-width: 1280px)": {
    span: {
      display: 'none'
    },
    justifyContent: "center",
    padding: '5px 10px',
    width: "max-content",
    height: "max-content",
  }
});
