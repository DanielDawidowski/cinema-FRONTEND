import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user/user.reducer";
import modalReducer from "./reducers/modal/modal.reducer";
import hallReducer from "./reducers/hall/hall.reducer";
import cityReducer from "./reducers/city/city.reducer";
import ticketReduer from "./reducers/ticket/ticket.reduer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    hall: hallReducer,
    city: cityReducer,
    ticket: ticketReduer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
