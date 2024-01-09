import React, { ReactElement } from "react";
import type { FC } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { themeGlobal } from "./variables";
import { ILayout } from "./Layout.interface";
import { LayoutStyles } from "./Layout.styles";
import { GlobalStyles } from "./globalStyles/global.styles";
import { TypographyStyles } from "./globalStyles/typography.syles";

const Layout: FC<ILayout> = (props): ReactElement => {
  const { children } = props;

  return (
    <ThemeProvider theme={themeGlobal}>
      <LayoutStyles>
        <GlobalStyles />
        <TypographyStyles />
        <main>{children}</main>
      </LayoutStyles>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
