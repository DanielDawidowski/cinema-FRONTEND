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
import { FormItemStyles, FormStyles } from "../Form.styles";
import Spinner from "../../spinner/Spinner";
import { Flex } from "../../layout/globalStyles/global.styles";
import { MovieUtils } from "../../../utils/movie-utils";
import {
  IMovie,
  IMovieCategories,
  IMovieCategory,
  movieCategories,
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
  } = props;
  const { name, description } = values;

  const fileInputRef = useRef<HTMLInputElement>(null);

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

    // Update the selectedCategories array based on the current selection status
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
      <FormStyles>
        {hasError ? <h4>{errorMessage}</h4> : null}
        <FormItemStyles>
          <Input
            name="image"
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
            value={name}
            labelText="Movie title"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="description"
            name="description"
            type="text"
            value={description}
            labelText="Description"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <TextArea
            id="description"
            name="description"
            value={description}
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
            $selected={categoryList.includes(category)}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Category>
        ))}

        <FormItemStyles>
          <Button
            color={ButtonColor.success}
            disabled={!name || movieCategories.length < 0 || !description}
            onClick={eventAction}
          >
            {loading ? (
              <Flex $align="center" $justify="center">
                <Spinner size={20} />
                <span>Creating</span>
              </Flex>
            ) : (
              <h4>Create</h4>
            )}
          </Button>
        </FormItemStyles>
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
