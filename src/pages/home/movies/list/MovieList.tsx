import React, { useState, useCallback, useMemo, useRef } from "react";
import type { FC, ReactElement } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useAppSelector } from "../../../../redux-toolkit/hooks";
import { IShows } from "../../../../interfaces/show/show.interface";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Utils } from "../../../../utils/utils";
import useDetectOutsideClick from "../../../../hooks/useDetectOutsideClick";
import { Flex } from "../../../../components/layout/globalStyles/global.styles";
import {
  MoviesList,
  SelectedMovie,
  ToggleBar,
  ToggleContent,
} from "./HomeMovies.styles";
import CityList from "../city/CityList";
import MovieColumn from "./MovieColumn";
import HomeShowList from "../show/ShowList";

const HomeMovieList: FC = (): ReactElement => {
  const { filteredShows, showsList, city } = useAppSelector(
    (state) => state.shows
  );
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  const [selected, setSelected] = useState<IShows | null>({} as IShows);

  const size = useWindowSize();
  const movieRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useDetectOutsideClick(movieRef, false);

  const handleClick = useCallback(
    (obj: IShows, i: number): void => {
      setExpandedGroup(i);
      setSelected(obj);
      setToggle(true);
      setTimeout(() => {
        Utils.scrollToElement(obj._id!, 1000);
      }, 500);
    },
    [setToggle]
  );

  const handleMovie = useCallback((): void => {
    setToggle(true);
  }, [setToggle]);

  const renderObjectsInGroups = useCallback(
    (objects: IShows[], groupSize: number) => {
      const result: JSX.Element[] = [];

      for (let i = 0; i < objects.length; i += groupSize) {
        const group = objects.slice(i, i + groupSize);
        const groupDiv = (
          <div key={i} ref={movieRef}>
            <MovieColumn
              i={i}
              group={group}
              toggle={toggle}
              selected={selected}
              groupSize={groupSize}
              handleMovie={handleMovie}
              handleClick={handleClick}
            />
            {toggle ? (
              expandedGroup === i ? (
                <ToggleBar
                  id={selected?._id}
                  ref={movieRef}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: i === expandedGroup ? "100%" : 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1 }}
                  exit={{
                    height: 0,
                    transition: { duration: 1 },
                    opacity: 0,
                  }}
                >
                  <SelectedMovie>
                    <img
                      src={selected?.movie?.img}
                      alt={selected?.movie?.name}
                    />
                    <p>{selected?.movie?.description}</p>
                  </SelectedMovie>
                  <ToggleContent>
                    <Flex $align="flex-start" $justify="flex-end">
                      <IoCloseCircle onClick={() => setToggle(false)} />
                    </Flex>
                    {!city ? <CityList /> : null}
                    {city ? (
                      <HomeShowList shows={showsList} selected={selected} />
                    ) : null}
                  </ToggleContent>
                </ToggleBar>
              ) : null
            ) : null}
          </div>
        );

        result.push(groupDiv);
      }

      return result;
    },
    [
      expandedGroup,
      city,
      selected,
      showsList, //shows
      handleMovie,
      handleClick,
      toggle,
      setToggle,
    ]
  );

  const memorizeMovies = useMemo(
    () =>
      renderObjectsInGroups(
        filteredShows.length > 0 ? filteredShows : showsList,
        Utils.emitNumber(size.width as number)
      ),
    [renderObjectsInGroups, filteredShows, showsList, size]
  );

  return <MoviesList>{memorizeMovies}</MoviesList>;
};

export default HomeMovieList;
