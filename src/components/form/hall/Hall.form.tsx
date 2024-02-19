import React, { ReactElement, useState } from "react";
import type { ChangeEvent, FC, FormEvent } from "react";
import propTypes from "prop-types";
import Input from "../../input/Input";
import Button from "../../button/Button";
import { ButtonColor } from "../../button/Button.interface";
import { IHall } from "../../../interfaces/hall/hall.interface";
import { FormItemStyles, FormStyles } from "../Form.styles";
import Select from "../../select/Select";
import { CityName, cities } from "../../../interfaces/city/city.interface";
import Spinner from "../../spinner/Spinner";
import { ErrorMessage, Flex } from "../../layout/globalStyles/global.styles";

interface ICreateHallForm {
  values: IHall;
  setValues: (values: IHall) => void;
  eventAction: (e: FormEvent) => Promise<void | undefined>;
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  hall?: IHall;
}

const HallForm: FC<ICreateHallForm> = (props): ReactElement => {
  const {
    values,
    setValues,
    loading,
    eventAction,
    hasError,
    errorMessage,
    hall,
  } = props;
  const { city, hallNumber, seats } = values;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const eventActionName = eventAction.name;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCity = (option: string) => {
    setSelectedOption((option as CityName) || hall?.city);
    setValues({ ...values, city: (option as CityName) || hall?.city });
  };

  return (
    <>
      <FormStyles>
        {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        <FormItemStyles>
          <Select
            label="City"
            options={cities}
            selectedOption={selectedOption!}
            onSelect={(option: string) => handleCity(option as CityName)}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="hallNumber"
            name="hallNumber"
            type="number"
            value={hallNumber || hall?.hallNumber}
            labelText="Number of Hall"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
        </FormItemStyles>

        {eventActionName === "createHall" ? (
          <Flex $align="center" $justify="flex-start">
            {loading ? <Spinner size={30} /> : null}
            <Button
              color={ButtonColor.success}
              disabled={!city || !hallNumber || !seats}
              onClick={eventAction}
            >
              {loading ? <h4>Creating</h4> : <h4>Create</h4>}
            </Button>
          </Flex>
        ) : (
          <FormItemStyles>
            <Flex $align="center" $justify="flex-start">
              {loading ? <Spinner size={30} /> : null}
              <Button color={ButtonColor.success} onClick={eventAction}>
                {loading ? <h4>Editing</h4> : <h4>Edit</h4>}
              </Button>
            </Flex>
          </FormItemStyles>
        )}
      </FormStyles>
    </>
  );
};

HallForm.propTypes = {
  setValues: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  eventAction: propTypes.func.isRequired,
  hasError: propTypes.bool.isRequired,
  errorMessage: propTypes.string.isRequired,
};

export default HallForm;
