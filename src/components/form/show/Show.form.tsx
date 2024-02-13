import React, { useCallback, useEffect, useState } from "react";
import type { ReactElement, ChangeEvent, FC, FormEvent } from "react";
import propTypes from "prop-types";
import Input from "../../input/Input";
import Button from "../../button/Button";
import { ButtonColor } from "../../button/Button.interface";
import Spinner from "../../spinner/Spinner";
import { ErrorMessage, Flex } from "../../layout/globalStyles/global.styles";
import { IShow } from "../../../interfaces/show/show.interface";
import { FormItemStyles, FormStyles } from "../Form.styles";
import { cities } from "../../../interfaces/city/city.interface";
import { hallService } from "../../../services/api/hall/hall.service";
import { IHall } from "../../../interfaces/hall/hall.interface";
import Select from "../../select/Select";
import { movieService } from "../../../services/api/movie/movie.service";
import { IMovie } from "../../../interfaces/movie/movie.interface";
import { MovieUtils } from "../../../utils/movie-utils";
import { HallUtils } from "../../../utils/hall-utils";

interface ICreateShowForm {
  values: IShow;
  setValues: (values: IShow) => void;
  eventAction: (e: FormEvent) => Promise<void | undefined>;
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  show?: IShow;
}

const ShowForm: FC<ICreateShowForm> = (props): ReactElement => {
  const {
    values,
    setValues,
    loading,
    eventAction,
    hasError,
    errorMessage,
    show,
  } = props;

  const { hall, movie, time, date } = values;
  const [city, setCity] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [halls, setHalls] = useState<IHall[]>([]);

  const eventActionName = eventAction.name;

  const getHallsByCity = useCallback(async (): Promise<void> => {
    try {
      const response = await hallService.getHallsByCity(city);
      setHalls(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, [city]);

  const getAllMovies = useCallback(async (): Promise<void> => {
    try {
      const response = await movieService.getAllMovies();
      setMovies(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCity = (name: string): void => {
    setCity(name);
  };

  const handleHall = (name: number): void => {
    const hallId = HallUtils.hallId(halls, city, name);
    setValues({ ...values, hall: hallId });
  };

  const handleMovie = (name: string): void => {
    const movieId = MovieUtils.movieId(movies, name);
    setValues({ ...values, movie: movieId });
  };

  useEffect(() => {
    getHallsByCity();
    getAllMovies();
  }, [getHallsByCity, getAllMovies]);

  return (
    <>
      {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <FormStyles>
        <FormItemStyles>
          <Select
            label="City"
            options={cities}
            onSelect={(option: string) => handleCity(option)}
          />
        </FormItemStyles>
        {city ? (
          <FormItemStyles>
            <Select
              label="Pick Hall"
              options={HallUtils.hallNumbers(halls)}
              onSelect={(option: number) => handleHall(option)}
            />
          </FormItemStyles>
        ) : null}
        <FormItemStyles>
          <Select
            label="Pick Movie"
            options={MovieUtils.movieTitles(movies)}
            onSelect={(option: string) => handleMovie(option)}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="time"
            name="time"
            type="time"
            value={time}
            labelText="What time ?"
            handleChange={handleChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="date"
            name="date"
            type="date"
            value={date}
            labelText="Date"
            handleChange={handleChange}
          />
        </FormItemStyles>

        {eventActionName === "editShow" ? (
          <FormItemStyles>
            <Flex $align="center" $justify="flex-start">
              {loading ? <Spinner size={30} /> : null}
              <Button
                color={ButtonColor.success}
                onClick={eventAction}
                disabled={!hall || !movie || !date || !time}
              >
                {loading ? <h4>Editing</h4> : <h4>Edit</h4>}
              </Button>
            </Flex>
          </FormItemStyles>
        ) : (
          <FormItemStyles>
            <Flex $align="center" $justify="flex-start">
              {loading ? <Spinner size={30} /> : null}
              <Button
                color={ButtonColor.success}
                disabled={!hall || !movie || !date || !time}
                onClick={eventAction}
              >
                {loading ? <h4>Creating</h4> : <h4>Create</h4>}
              </Button>
            </Flex>
          </FormItemStyles>
        )}
      </FormStyles>
    </>
  );
};

ShowForm.propTypes = {
  setValues: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  eventAction: propTypes.func.isRequired,
  hasError: propTypes.bool.isRequired,
};

export default ShowForm;
