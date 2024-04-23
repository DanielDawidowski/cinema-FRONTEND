import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IModalProps {
  isModalOpen: boolean;
  isHallModal: boolean;
  isFilterModal: boolean;
}

const initialState: IModalProps = {
  isModalOpen: false,
  isHallModal: false,
  isFilterModal: true,
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
      state.isFilterModal = false;
    },
    toggleHallModal: (state, action: PayloadAction<boolean>) => {
      state.isHallModal = action.payload;
    },
    toggleFilterModal: (state, action: PayloadAction<boolean>) => {
      state.isFilterModal = action.payload;
    },
  },
});

export const { openModal, closeModal, toggleHallModal, toggleFilterModal } =
  modalSlice.actions;
export default modalSlice.reducer;
