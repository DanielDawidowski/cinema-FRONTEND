import React, { ReactElement } from "react";
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
import { Flex } from "../../layout/globalStyles/global.styles";

interface ICreateHallForm {
  values: IHall;
  setValues: (values: IHall) => void;
  eventAction: (e: FormEvent) => Promise<void | undefined>;
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
}

const HallForm: FC<ICreateHallForm> = (props): ReactElement => {
  const { values, setValues, loading, eventAction, hasError } = props;
  const { city, hallNumber, seats } = values;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormStyles>
        <FormItemStyles>
          <Select
            label="City"
            options={cities}
            onSelect={(option: string) =>
              setValues({ ...values, city: option as CityName })
            }
          />
        </FormItemStyles>

        <FormItemStyles>
          <Input
            id="hallNumber"
            name="hallNumber"
            type="number"
            value={hallNumber as number}
            labelText="Number of Hall"
            placeholder="---"
            style={{ border: `${hasError ? "1px solid #fa9b8a" : ""}` }}
            handleChange={handleChange}
          />
        </FormItemStyles>

        <FormItemStyles>
          <Button
            color={ButtonColor.primary}
            disabled={!city || !hallNumber || !seats}
            onClick={eventAction}
          >
            {loading ? (
              <Flex $align="center" $justify="center">
                <Spinner size={20} />
                <span>Creating</span>
              </Flex>
            ) : (
              <span>Create</span>
            )}
          </Button>
        </FormItemStyles>
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
