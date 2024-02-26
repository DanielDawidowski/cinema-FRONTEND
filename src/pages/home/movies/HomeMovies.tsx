import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { IoMdSwitch } from "react-icons/io";
import { Container } from "../../../components/layout/globalStyles/global.styles";
import { TabsElement, TabsStyles } from "../../auth/auth-tabs/Auth.styles";
import { FilterActions, FilterIcon, StickyFilter, Tabs } from "../Home.styles";
import useSticky from "../../../hooks/useSticky";
import HomeMovieList from "./HomeMovieList";

const HomeMovies: FC = (): ReactElement => {
  const [type, setType] = useState<string>("Per movie");
  const isSticky = useSticky("filters");

  return (
    <Container style={{ height: "200vh" }}>
      <FilterActions id="filters">
        <h3>now on screens</h3>
        {isSticky ? (
          <StickyFilter>
            <IoMdSwitch />
            <h4>filters</h4>
          </StickyFilter>
        ) : (
          <FilterIcon>
            <IoMdSwitch />
            <h4>filters</h4>
          </FilterIcon>
        )}

        <Tabs>
          <TabsStyles>
            <TabsElement
              $active={type === "Per day"}
              onClick={() => setType("Per day")}
            >
              <h5>Per day</h5>
            </TabsElement>
            <TabsElement
              $active={type === "Per movie"}
              onClick={() => setType("Per movie")}
            >
              <h5>Per movie</h5>
            </TabsElement>
          </TabsStyles>
        </Tabs>
      </FilterActions>
      {type === "Per movie" ? <HomeMovieList /> : null}
    </Container>
  );
};

export default HomeMovies;
