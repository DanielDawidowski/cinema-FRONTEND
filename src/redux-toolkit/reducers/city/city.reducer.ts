import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICity } from "../../../interfaces/city/city.interface";

const initialState: ICity = {
  city: "",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<ICity>) => {
      const { city } = action.payload;
      state.city = city;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
