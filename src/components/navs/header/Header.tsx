import React, { useState } from "react";
import type { FC, ReactElement, ChangeEvent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { HeaderStyles, Icons, Inner, SearchHeader } from "./Header.styles";
import {
  Container,
  Flex,
  DisplayMedia,
  Grid,
} from "../../../components/layout/globalStyles/global.styles";
import IHeader from "./Header.interface";
import Logo from "../../logo/Logo";
import Menu from "../menu/Menu";
import Navigation from "../navigation/Navigation";
import Input from "../../input/Input";
import Dropdown from "../../dropdown/Dropdown";
import { CityName, cities } from "../../../interfaces/city/city.interface";

const Header: FC<IHeader> = (props): ReactElement => {
  const { toggleMenu, setToggleMenu } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  return (
    <HeaderStyles>
      <Inner>
        <Container>
          <Flex $justify="space-between" $align="center">
            <Link to="/">
              <Logo width="65px" height="30px" />
            </Link>
            <Dropdown Label="Choose cinema">
              {cities.map((city: CityName, i: number) => (
                <div key={i}>{city}</div>
              ))}
            </Dropdown>
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
          </Flex>
          {openSearch ? (
            <SearchHeader>
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
              <Grid>
                <IoCloseSharp onClick={() => setOpenSearch(false)} />
              </Grid>
            </SearchHeader>
          ) : null}
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
