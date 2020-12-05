/*
 * Copyright(c) 2020
 *
 * @author Indrajith C
 *
 *
 */
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/** ========= TAG COMPONENTS ========= */
/** ========= SUB COMPONENT ========= */
/** ========= MODULE STYLES ========= */
/** ========= CUSTOM COMPONENTS ========= */
/** ========= API SERVICE FUNCTIONS ========= */
/** ========= SVG IMAGE ICON ========= */
/** ========= UTILS ========= */

import Theme from "./src/themes/theme";

const GlobalStyles = createGlobalStyle`
body {
  font-family: ${(props) => props.theme.fonts.main};
  background: #fffdfd
}
`;

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);

const sample = (o) => o;

export {
  wrapRootElement,
  sample,
};
