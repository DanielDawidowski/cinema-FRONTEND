import React, { useCallback } from "react";
import type { FC, ReactElement } from "react";
import type { Dispatch as ReduxDispatch } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../../../redux-toolkit/hooks";
import { CityList } from "../../Home.styles";
import { CityName, cities } from "../../../../interfaces/city/city.interface";
import { setCity } from "../../../../redux-toolkit/reducers/shows/shows.reducer";

const HomeCityList: FC = (): ReactElement => {
  const dispatch: ReduxDispatch = useAppDispatch();

  const handleCity = useCallback(
    (city: string): void => {
      dispatch(setCity({ city }));
    },
    [dispatch]
  );

  return (
    <CityList>
      {cities.map((city: CityName, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 2 }}
          exit={{
            transition: { duration: 1 },
            opacity: 0,
          }}
        >
          <h4 onClick={() => handleCity(city)}>{city}</h4>
        </motion.div>
      ))}
    </CityList>
  );
};

export default HomeCityList;
