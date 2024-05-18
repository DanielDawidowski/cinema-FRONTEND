import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import type { FC, ReactElement } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../redux-toolkit/hooks";
import { IShow } from "../../../../interfaces/show/show.interface";
import { IMovie } from "../../../../interfaces/movie/movie.interface";
import useWindowSize from "../../../../hooks/useWindowSize";
import { Utils } from "../../../../utils/utils";
import useDetectOutsideClick from "../../../../hooks/useDetectOutsideClick";
import { IHall } from "../../../../interfaces/hall/hall.interface";
import { hallService } from "../../../../services/api/hall/hall.service";
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
import { getMoviesList } from "../../../../redux-toolkit/api/movies";
import { AppDispatch } from "../../../../redux-toolkit/store";
import { getShowsList } from "../../../../redux-toolkit/api/shows";

const HomeMovieList: FC = (): ReactElement => {
  const { showsList, city } = useAppSelector((state) => state.shows);
  const { movies, filteredMovies } = useAppSelector((state) => state.movies);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  const [selected, setSelected] = useState<IMovie | null>({} as IMovie);
  const [movieId, setMovieId] = useState<string>("");
  const [show, setShow] = useState<IShow>({} as IShow);
  const [hall, setHall] = useState<IHall>({} as IHall);
  const size = useWindowSize();
  const movieRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useDetectOutsideClick(movieRef, false);

  const dispatch = useDispatch<AppDispatch>();

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall(show.hall);
      setHall(response.data.hall);
    } catch (error) {
      console.error(error);
    }
  }, [show.hall]);

  const handleClick = useCallback(
    (obj: IMovie, i: number): void => {
      setExpandedGroup(i);
      setSelected(obj);
      setMovieId(obj._id!);
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
    (objects: IMovie[], groupSize: number) => {
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
                    <img src={selected?.img} alt={selected?.name} />
                    <p>{selected?.description}</p>
                  </SelectedMovie>
                  <ToggleContent>
                    <Flex $align="flex-start" $justify="flex-end">
                      <IoCloseCircle onClick={() => setToggle(false)} />
                    </Flex>
                    {!city ? <CityList /> : null}
                    {city ? (
                      <HomeShowList
                        shows={showsList} //shows
                        hall={hall}
                        setShow={setShow}
                      />
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
      hall,
      setToggle,
    ]
  );

  const memorizeMovies = useMemo(
    () =>
      renderObjectsInGroups(
        filteredMovies.length > 0 ? filteredMovies : movies,
        Utils.emitNumber(size.width as number)
      ),
    [renderObjectsInGroups, filteredMovies, movies, size]
  );

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getShowsList({ city, movieId }));
  }, [dispatch, city, movieId]);

  useEffect(() => {
    getHall();
  }, [getHall, showsList]);

  return <MoviesList>{memorizeMovies}</MoviesList>;
};

export default HomeMovieList;
