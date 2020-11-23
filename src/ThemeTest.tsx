import { Func } from "mocha";
import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

type IProps = {
  children: React.ReactNode;
};

export const ThemeTest: FunctionComponent<IProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
