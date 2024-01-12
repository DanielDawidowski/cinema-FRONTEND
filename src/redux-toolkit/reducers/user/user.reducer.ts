import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILoginUser } from "../../../interfaces/auth/auth.interface";

const initialState: ILoginUser = {
  token: "",
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<ILoginUser>) => {
      const { token, profile } = action.payload;
      localStorage.setItem("user", JSON.stringify(profile));
      state.token = token;
      state.profile = profile;
    },
    clearUser: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.token = "";
      state.profile = null;
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
