import React from "react";
import type { FC, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import type { Dispatch } from "@reduxjs/toolkit";
import { Logout, MenuItem, MenuStyles } from "./Menu.styles";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { userService } from "../../../services/api/user/user.service";
import { clearUser } from "../../../redux-toolkit/reducers/user/user.reducer";
import LogoutSVG from "../../../assets/svg/logout.svg";

import Search from "./search/Search";
import AdminDropdown from "./admin/adminDropdown";

const Menu: FC = (): ReactElement => {
  const { profile } = useAppSelector((state) => state.user);
  const dispatch: Dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const deleteUser = useLocalStorage<string>("user");

  const logout = async (): Promise<void> => {
    await userService.logoutUser();
    dispatch(clearUser());
    deleteUser.delete();
    navigate("/");
  };

  return (
    <MenuStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!profile ? (
        <MenuItem>
          <Link to="/login">
            <h4>Login</h4>
          </Link>
        </MenuItem>
      ) : (
        <MenuItem>
          <AdminDropdown />
        </MenuItem>
      )}
      <MenuItem>
        <Search />
      </MenuItem>
      {profile ? (
        <MenuItem>
          <Link to="/">
            <Logout>
              <img src={LogoutSVG} alt="logout" onClick={logout} />
            </Logout>
          </Link>
        </MenuItem>
      ) : null}
    </MenuStyles>
  );
};

export default Menu;
