import React, { useRef } from "react";
import type {
  ReactElement,
  ChangeEvent,
  FC,
  SetStateAction,
  FormEvent,
  Dispatch as DispatchReact,
} from "react";
import propTypes from "prop-types";
import Input from "../../input/Input";
import Button from "../../button/Button";
import { ButtonColor } from "../../button/Button.interface";
import { FormImage, FormItemStyles, FormStyles } from "../Form.styles";
import Spinner from "../../spinner/Spinner";
import { ErrorMessage, Flex } from "../../layout/globalStyles/global.styles";
import { MovieUtils } from "../../../utils/movie-utils";
import {
  IMovie,
  IMovieCategories,
  IMovieCategory,
} from "../../../interfaces/movie/movie.interface";
import { Category } from "../../../pages/admin/movie/CreateMovie.styles";
import TextArea from "../../textarea/Textarea";

interface ICreateMovieForm {
  values: IMovie;
  setValues: (values: IMovie) => void;
  eventAction: (e: FormEvent) => Promise<void | undefined>;
  setCategoryList: DispatchReact<SetStateAction<IMovieCategory[]>>;
  categoryList: IMovieCategory[];
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  movie?: IMovie;
}

const MovieForm: FC<ICreateMovieForm> = (props): ReactElement => {
  const {
    values,
    setValues,
    loading,
    eventAction,
    hasError,
    setCategoryList,
    categoryList,
    errorMessage,
    movie,
  } = props;
  const { name, description, img } = values;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const eventActionName = eventAction.name;

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const fileValue = await MovieUtils.readAsBase64(file);
        setValues({ ...values, img: fileValue });
      } catch (error) {
        // Handle or log the error if necessary
        console.error("Error", error);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCategoryClick = (selectedCategory: IMovieCategories) => {
    const isCategorySelected = categoryList.includes(selectedCategory);

    if (isCategorySelected) {
      setCategoryList((prevSelected) =>
        prevSelected.filter((category) => category !== selectedCategory)
      );
    } else {
      setCategoryList((prevSelected) => [...prevSelected, selectedCategory]);
    }
  };

  return (
    <>
      {!img && movie?.img ? (
        <FormImage>
          <img src={movie.img} alt="movie" />
        </FormImage>
      ) : null}
      {img && (
        <FormImage>
          <img src={img} alt="movie" />
        </FormImage>
      )}
      {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <FormStyles>
        <FormItemStyles>
          <Input
            name="img"
            type="file"
            ref={fileInputRef}
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
            handleChange={handleFileChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="name"
            name="name"
            type="text"
            value={name || movie?.name}
            labelText="Movie title"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <TextArea
            id="description"
            name="description"
            value={description || movie?.description}
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            onChange={handleChange}
            label="Description"
            placeholder="---"
            rows={6}
            cols={30}
          />
        </FormItemStyles>
        <h3>Categories</h3>
        {Object.values(IMovieCategory).map((category) => (
          <Category
            key={category}
            $selected={categoryList?.includes(category)}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Category>
        ))}
        {eventActionName === "editMovie" ? (
          <FormItemStyles>
            <Button color={ButtonColor.success} onClick={eventAction}>
              {loading ? (
                <Flex $align="center" $justify="center">
                  <Spinner size={30} />
                  <h4>Editing</h4>
                </Flex>
              ) : (
                <h4>Edit</h4>
              )}
            </Button>
          </FormItemStyles>
        ) : (
          <FormItemStyles>
            <Button
              color={ButtonColor.success}
              disabled={!name || categoryList.length < 0 || !description}
              onClick={eventAction}
            >
              {loading ? (
                <Flex $align="center" $justify="center">
                  <Spinner size={30} />
                  <h4>Creating</h4>
                </Flex>
              ) : (
                <h4>Create</h4>
              )}
            </Button>
          </FormItemStyles>
        )}
      </FormStyles>
    </>
  );
};

MovieForm.propTypes = {
  setValues: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  eventAction: propTypes.func.isRequired,
  hasError: propTypes.bool.isRequired,
  errorMessage: propTypes.string.isRequired,
};

export default MovieForm;
