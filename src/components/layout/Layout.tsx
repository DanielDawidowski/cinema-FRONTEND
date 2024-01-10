import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { themeGlobal } from "./globalStyles/variables";
import { ILayout } from "./Layout.interface";
import { LayoutStyles } from "./Layout.styles";
import { GlobalStyles } from "./globalStyles/global.styles";
import { TypographyStyles } from "./globalStyles/typography.syles";
import Header from "../navs/header/Header";

const Layout: FC<ILayout> = (props): ReactElement => {
  const { children } = props;
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <ThemeProvider theme={themeGlobal}>
      <LayoutStyles>
        <GlobalStyles />
        <TypographyStyles />
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <main>{children}</main>
      </LayoutStyles>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
