import React, { useState, useEffect, useCallback } from "react";
import type { FC, ReactElement } from "react";
import axios from "axios";
import { hallService } from "../../../../services/api/hall/hall.service";
import Layout from "../../../../components/layout/Layout";
import { ValidationError } from "../../../../interfaces/error/Error.interface";
import {
  Container,
  ErrorMessage,
  ListStyles,
  ListTable,
  ListTableInner,
  StyledTable,
  StyledTh,
  StyledTr,
} from "../../../../components/layout/globalStyles/global.styles";
import Spinner from "../../../../components/spinner/Spinner";
import { IHall } from "../../../../interfaces/hall/hall.interface";
import HallItem from "./HallItem";
import {
  FormItemStyles,
  FormStyles,
} from "../../../../components/form/Form.styles";
import Select from "../../../../components/select/Select";
import { CityName, cities } from "../../../../interfaces/city/city.interface";

const HallList: FC = (): ReactElement => {
  const [halls, setHalls] = useState<IHall[]>([]);
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const getHallsByCity = useCallback(async (): Promise<void> => {
    try {
      const response = await hallService.getHallsByCity(city);
      setHalls(response.data.list);
      // console.log("response", response.data.events);
    } catch (error) {
      console.log("error", error);
    }
  }, [city]);

  const deleteHall = async (hallId: string): Promise<void> => {
    const result = window.confirm("Czy na pewno chcesz usunąć?");
    if (result) {
      try {
        await hallService.deleteHall(hallId);
        // console.log("response", response);
        getHallsByCity();
      } catch (error) {
        if (
          axios.isAxiosError<ValidationError, Record<string, unknown>>(error) &&
          error.response
        ) {
          setLoading(false);
          setErrorMessage(error?.response?.data.message as string);
        } else {
          console.error(error);
        }
      }
    }
  };

  const handleCity = (option: string) => {
    setSelectedOption(option as CityName);
    setCity(option);
  };

  const filteredHalls = halls.filter((el) => el.city === city);

  useEffect(() => {
    getHallsByCity();
  }, [getHallsByCity]);

  const headers = ["Hall", "Actions"];

  return (
    <Layout>
      <Container $small>
        {loading ? (
          <Spinner />
        ) : (
          <ListStyles>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            <FormStyles>
              <FormItemStyles>
                <Select
                  label="City"
                  options={cities}
                  selectedOption={selectedOption!}
                  onSelect={(option: string) => handleCity(option)}
                />
              </FormItemStyles>
            </FormStyles>

            <ListTable>
              <ListTableInner>
                <StyledTable>
                  <thead>
                    <StyledTr>
                      {headers.map((header, index) => (
                        <StyledTh key={index}>{header}</StyledTh>
                      ))}
                    </StyledTr>
                  </thead>
                  <tbody>
                    {filteredHalls.map((hall, i) => (
                      <HallItem key={i} hall={hall} deleteHall={deleteHall} />
                    ))}
                  </tbody>
                </StyledTable>
              </ListTableInner>
            </ListTable>
          </ListStyles>
        )}
      </Container>
    </Layout>
  );
};

export default HallList;
