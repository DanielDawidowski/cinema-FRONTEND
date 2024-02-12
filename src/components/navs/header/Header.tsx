import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import PropTypes from "prop-types";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {
  DropdownStyles,
  HeaderStyles,
  Icons,
  Inner,
  LogoStyles,
  Wrapper,
} from "./Header.styles";
import {
  Container,
  DisplayMedia,
  Grid,
} from "../../../components/layout/globalStyles/global.styles";
import IHeader from "./Header.interface";
import Logo from "../../logo/Logo";
import Menu from "../menu/Menu";
import Navigation from "../navigation/Navigation";
import Dropdown from "../../dropdown/Dropdown";
import { CityName, cities } from "../../../interfaces/city/city.interface";
import Search from "../../search/Search";

const Header: FC<IHeader> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>("");
  const [search, setSearch] = useState<string>("");

  const handleChange = (name: string): void => {
    setSelected(name);
  };

  return (
    <HeaderStyles>
      <Inner>
        <Container>
          <Wrapper>
            <LogoStyles>
              <Logo link width="65px" height="30px" />
            </LogoStyles>
            <DropdownStyles>
              <Dropdown label={selected ? selected : "All Cinemas"} title>
                {cities.map((city: CityName, i: number) => (
                  <h4 key={i} onClick={() => handleChange(city)}>
                    {city}
                  </h4>
                ))}
              </Dropdown>
            </DropdownStyles>
            <DisplayMedia $media>
              <Menu />
            </DisplayMedia>
            <Icons
              style={{
                justifyContent: toggleMenu ? "flex-end" : "space-between",
              }}
            >
              {!openSearch && !toggleMenu ? (
                <PiMagnifyingGlassBold onClick={() => setOpenSearch(true)} />
              ) : null}
              <DisplayMedia>
                <Grid>
                  {toggleMenu ? (
                    <IoCloseSharp onClick={() => setToggleMenu(!toggleMenu)} />
                  ) : (
                    <GiHamburgerMenu
                      onClick={() => setToggleMenu(!toggleMenu)}
                    />
                  )}
                </Grid>
              </DisplayMedia>
            </Icons>
          </Wrapper>
          <Search
            openSearch={openSearch}
            setOpenSearch={setOpenSearch}
            search={search}
            setSearch={setSearch}
          />
        </Container>
      </Inner>
      <Navigation toggleMenu={toggleMenu} />
    </HeaderStyles>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
};

export default Header;
