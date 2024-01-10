import React, { ReactElement } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { MenuItem, MenuStyles } from "./Menu.styles";

const Menu: FC = (): ReactElement => {
  return (
    <MenuStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MenuItem>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
      </MenuItem>
      <MenuItem>about</MenuItem>
      <MenuItem>create</MenuItem>
      <MenuItem>films</MenuItem>
      <MenuItem>create</MenuItem>
    </MenuStyles>
  );
};

export default Menu;
