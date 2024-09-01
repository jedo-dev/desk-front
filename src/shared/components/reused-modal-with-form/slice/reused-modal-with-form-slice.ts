import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type reusedModalWithFormState = {
  openModal: boolean;
};

const initialState: reusedModalWithFormState = {
  openModal: false,
};

export const reusedModalWithFormSlice = createSlice({
  name: 'reusedModal',
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
  },
});

export const { setOpen } = reusedModalWithFormSlice.actions;
export const reusedModalWithFormReducer = reusedModalWithFormSlice.reducer;
