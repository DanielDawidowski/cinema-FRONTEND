import React, { ReactElement } from "react";
import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { NavStyles } from "./Navigation.styles";
import Menu from "../menu/Menu";

interface INav {
  toggleMenu: boolean;
}

const Navigation: FC<INav> = (props): ReactElement => {
  const { toggleMenu } = props;
  return (
    <AnimatePresence>
      {toggleMenu && (
        <NavStyles
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          exit={{ height: 0 }}
        >
          <Menu />
        </NavStyles>
      )}
    </AnimatePresence>
  );
};

Navigation.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
};

export default Navigation;
