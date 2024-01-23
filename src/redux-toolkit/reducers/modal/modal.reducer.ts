import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IModalProps {
  isModalOpen: boolean;
  isHallModal: boolean;
}

const initialState: IModalProps = {
  isModalOpen: false,
  isHallModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.isHallModal = false;
    },
    toggleHallModal: (state, action: PayloadAction<boolean>) => {
      state.isHallModal = action.payload;
    },
  },
});

export const { openModal, closeModal, toggleHallModal } = modalSlice.actions;
export default modalSlice.reducer;
