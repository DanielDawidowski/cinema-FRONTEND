import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoMdArrowRoundForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaInfoCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Layout from "../../components/layout/Layout";
import {
  BuyButton,
  Description,
  ImageWrapper,
  Left,
  MovieHeader,
  MovieHeaderContent,
  MovieStyles,
  Ratings,
  Right,
  Shows,
  ShowsHeader,
  ShowsList,
  ShowsListElement,
  Table,
} from "./Movie.styles";
import {
  Container,
  Flex,
  Grid,
  Line,
} from "../../components/layout/globalStyles/global.styles";
import { movieService } from "../../services/api/movie/movie.service";
import { IMovie, IMovieCategory } from "../../interfaces/movie/movie.interface";
import { ValidationError } from "../../interfaces/error/Error.interface";
import { themeGlobal } from "../../components/layout/globalStyles/variables";
import Button from "../../components/button/Button";
import { ButtonColor } from "../../components/button/Button.interface";
import { Utils } from "../../utils/utils";
import { Arrow } from "../../components/dropdown/Dropdown.styles";
import CityList from "../home/movies/city/CityList";
import { useAppSelector } from "../../redux-toolkit/hooks";
import Spinner from "../../components/spinner/Spinner";
import { IShow, IShows } from "../../interfaces/show/show.interface";
import Tooltip from "../../components/tooltip/Tooltip";
import { ShowListItem } from "../home/Home.styles";
import { showService } from "../../services/api/show/show.service";

const Movie: FC = (): ReactElement => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [shows, setShows] = useState<IShows[]>([] as IShows[]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { city } = useAppSelector((state) => state.shows);

  const { movieId } = useParams();

  const getMovie = useCallback(async () => {
    try {
      const response = await movieService.getMovie(movieId as string);
      setMovie(response.data.movie);
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
      } else {
        console.error(error);
      }
    }
  }, [movieId]);

  const getShows = useCallback(async () => {
    try {
      const response = await showService.getShowsByMovieName(city, movieId);
      setShows(response.data.list);
    } catch (error) {
      if (
        axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
        error.response
      ) {
        setLoading(false);
      } else {
        console.error(error);
      }
    }
  }, [city, movieId]);

  const handleScroll = useCallback((obj: string): void => {
    setTimeout(() => {
      Utils.scrollToElement(obj, 1000);
    }, 500);
  }, []);

  const halfLength = Math.ceil(movie?.description?.length / 2);
  const firstHalf = movie?.description?.slice(0, halfLength);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    getMovie();
    getShows();
  }, [getMovie, getShows]);

  return (
    <Layout>
      <Container>
        <MovieStyles>
          {loading ? (
            <Grid>
              <Spinner size={30} />
              ... loading
            </Grid>
          ) : (
            <>
              <Left id="image">
                <ImageWrapper>
                  <img src={movie?.img} alt={movie?.name} />
                </ImageWrapper>
              </Left>
              <Right>
                <MovieHeader>
                  <img src={movie?.img} alt={movie?.name} />
                  <MovieHeaderContent>
                    <Line $gradient $width="45%" />
                    <h3>{movie?.name}</h3>
                    <Ratings>
                      {Array.from(Array(4).keys()).map((i) => (
                        <FaStar key={i} style={{ fill: themeGlobal.orange }} />
                      ))}
                      <FaStarHalfAlt style={{ fill: themeGlobal.orange }} />
                    </Ratings>
                  </MovieHeaderContent>
                </MovieHeader>
                <BuyButton>
                  <Button
                    color={ButtonColor.secondary}
                    onClick={() => handleScroll("movieId")}
                  >
                    <h4>Buy Tickets</h4>
                  </Button>
                </BuyButton>
                <Description>
                  <p>{isExpanded ? movie.description : firstHalf}</p>
                  <h3 role="button" onClick={handleToggle}>
                    {isExpanded ? (
                      <Flex $align="center" $justify="center">
                        Show Less
                        <Arrow
                          initial={{ rotate: 0 }}
                          animate={{
                            rotate: isExpanded ? 180 : 0,
                            originX: 0.5,
                          }}
                        >
                          <IoIosArrowDown />
                        </Arrow>
                      </Flex>
                    ) : (
                      <Flex $align="center" $justify="center">
                        Show More
                        <Arrow
                          initial={{ rotate: 0 }}
                          animate={{
                            rotate: isExpanded ? 180 : 0,
                            originX: 0.5,
                          }}
                        >
                          <IoIosArrowDown />
                        </Arrow>
                      </Flex>
                    )}
                  </h3>
                </Description>
                <Table>
                  <tbody>
                    <tr>
                      <td>genre</td>
                      <td>
                        {movie?.category?.map(
                          (cat: IMovieCategory, i: number) => (
                            <span key={i}>{cat}</span>
                          )
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>cast</td>
                      <td>
                        {movie?.actors?.map((actor: string, i: number) => (
                          <span key={i}>{actor}</span>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td>director</td>
                      <td>{movie?.director}</td>
                    </tr>
                  </tbody>
                </Table>
                <Shows id="movieId">
                  <ShowsHeader>
                    <Line $gradient $width="45%" />

                    <h2>Buy Tickets</h2>
                  </ShowsHeader>
                  {!city ? (
                    <CityList />
                  ) : (
                    <ShowsList>
                      {shows.map((show: IShows, i: number) => (
                        <ShowsListElement key={i}>
                          {show.shows.map((s: IShow, index: number) => (
                            <Link key={index} to={`/booking/${s._id}`}>
                              <ShowListItem>
                                <div>
                                  <h5>{s.time}</h5>
                                  <IoMdArrowRoundForward />
                                </div>
                                <motion.div>
                                  <Tooltip text={`Hall ${s.hall}`}>
                                    <FaInfoCircle
                                      style={{ fill: themeGlobal.white }}
                                    />
                                  </Tooltip>
                                </motion.div>
                              </ShowListItem>
                            </Link>
                          ))}
                        </ShowsListElement>
                      ))}
                    </ShowsList>
                  )}
                </Shows>
              </Right>
            </>
          )}
        </MovieStyles>
      </Container>
    </Layout>
  );
};

export default Movie;
