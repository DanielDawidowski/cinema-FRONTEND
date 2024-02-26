import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user/user.reducer";
import modalReducer from "./reducers/modal/modal.reducer";
import hallReducer from "./reducers/hall/hall.reducer";
import cityReducer from "./reducers/city/city.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    hall: hallReducer,
    city: cityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
