// import styled, { css } from "styled-components";
import React from "react";
import style from "../style";

// Shared components

const flex_column_mixin = {
  display: "flex",
  flexDirection: "column",
};

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

export const FlexWrapper = style("div", {
  display: "flex",
  width: "100%",
  maxWidth: "430px",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
});

const button_mixin = {
  ...text_mixin,
  backgroundColor: "inherit",
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
  cursor: "pointer",
  flexGrow: 1,
  color: "inherit",
  textDecoration: "none",
};

export const LinkButton = style("a", button_mixin);

// Components for /new.tsx

const dimensions_mixin = {
  width: "100%",
  maxWidth: "430px",
  height: "100%",
  maxHeight: "375px",
};

export const Form = style("form", {
  ...flex_column_mixin,
  ...dimensions_mixin,
  alignItems: "flex-end",
  justifyContent: "space-between",
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

export const ErrorList = style("ul", {
  color: "red",
  alignSelf: "center",
});

export const Button = style("button", button_mixin);

// Components for /index.tsx

dimensions_mixin.maxWidth = "min(100%, 900px)";

export const Column = style("div", {
  ...flex_column_mixin,
  ...dimensions_mixin,
  alignItems: "center",
  justifyContent: "space-between",
  maxHeight: "min(100vh, 500px)",
  overflow: "auto",
});

const table_mixin = {
  border: "1px solid black",
};

export const Table = style("table", {
  ...table_mixin,
  ...dimensions_mixin,
  height: "auto",
  borderCollapse: "collapse",
});

export const Th = style("th", {
  ...table_mixin,
  padding: "8px",
  fontSize: "16px",
  textAlign: "left",
});

const table_item_mixin = {
  padding: "5px",
  fontSize: "13px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  // Hack to control td width by the th width
  maxWidth: "1px",
};

export const Tr = style("tr", {
  ...table_mixin,
  ...table_item_mixin,
});

export const Td = style("td", { ...table_mixin, ...table_item_mixin });

export const Link = style("a", {
  ...text_mixin,
  fontSize: "16px",
});

export const FakeLink = style("span", {
  ...text_mixin,
  fontSize: "16px",
});
