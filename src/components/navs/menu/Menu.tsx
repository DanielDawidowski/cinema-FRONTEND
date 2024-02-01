import React, { useState } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";
import type { Dispatch } from "@reduxjs/toolkit";
import { Logout, MenuItem, MenuStyles, Search } from "./Menu.styles";
import { useAppDispatch, useAppSelector } from "../../../redux-toolkit/hooks";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { userService } from "../../../services/api/user/user.service";
import { clearUser } from "../../../redux-toolkit/reducers/user/user.reducer";
import LogoutSVG from "../../../assets/svg/logout.svg";
import Input from "../../input/Input";
import Dropdown from "../../dropdown/Dropdown";
import { IMenuAdmin, menuAdmin } from "./Menu.interface";

const Menu: FC = (): ReactElement => {
  const { profile } = useAppSelector((state) => state.user);
  const [search, setSearch] = useState<string>("");
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
      <MenuItem>
        <Link to="/films">
          <h4>Films</h4>
        </Link>
      </MenuItem>
      {!profile ? (
        <MenuItem>
          <Link to="/login">
            <h4>Login</h4>
          </Link>
        </MenuItem>
      ) : (
        <MenuItem>
          <Dropdown label="Admin">
            {menuAdmin.map((item: IMenuAdmin, i: number) => (
              <Link key={i} to={item.link}>
                <h4>{item.name}</h4>
              </Link>
            ))}
          </Dropdown>
        </MenuItem>
      )}
      <MenuItem>
        <Search>
          <Input
            id="search"
            name="search"
            type="text"
            value={search}
            placeholder="search"
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
          />
          <PiMagnifyingGlassBold />
        </Search>
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
