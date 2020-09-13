// import styled, { css } from "styled-components";
import React from "react";

// LMAO
// First time trying to work with React SSR
// And styled-components didn't work
// I should probably just write css (or learn how to use styled-components with SSR)
// But where is the fun of that? 👀
const style = (Component: string, css: any) => {
  return ({ children, ...rest }: any) => (
    <Component style={css} {...rest}>
      {children}
    </Component>
  );
};

const flex_column_mixin = {
  display: "flex",
  flexDirection: "column",
};

// const Div = style("div", { display: "flex" });
export const CenteredContainer = style("div", {
  ...flex_column_mixin,
  alignItems: "center",
  justifyContent: "center",
  padding: "0 5vw",
});

const text_mixin = {
  fontWeight: "normal",
  fontSize: "25px",
};

export const Header = style("h1", {
  ...text_mixin,
  fontSize: "clamp(25px, 9.8vw, 46.8px)",
  alignSelf: "center",
});

export const Form = style("form", {
  ...flex_column_mixin,
  alignItems: "flex-end",
  width: "100%",
  maxWidth: "430px",
  height: "100%",
  maxHeight: "375px",
  justifyContent: "space-between",
});

export const FlexWrapper = style("div", {
  display: "flex",
  width: "100%",
  maxWidth: "425px",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
});

export const Label = style("label", {
  ...text_mixin,
  flexGrow: 1,
  minWidth: "71px",
});

export const Input = style("input", {
  ...text_mixin,
  padding: "7.5px",
  border: "1px solid black",
  minWidth: "min(315px, calc(90% - 10px))",
  flexGrow: 1,
});

export const Button = style("button", {
  ...text_mixin,
  backgroundColor: "inherit",
  border: "1px solid black",
  padding: "10px 60px",
  cursor: "pointer",
});
