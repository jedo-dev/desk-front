import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormElement } from '../model/form-element.model';

export interface reusedFormState {
  formItems: IFormElement[];
}

export const initialState: reusedFormState = {
  formItems: [],
};

export const reusedFormSlice = createSlice({
  name: 'reusedForm',
  initialState,
  reducers: {
    setFormItems(state, action: PayloadAction<IFormElement[]>) {
      state.formItems = action.payload;
    },
    resetFormItems(state) {
      state.formItems = [];
    },
  },
});

export const { setFormItems, resetFormItems } = reusedFormSlice.actions;

export const reusedFormReducer = reusedFormSlice.reducer;
