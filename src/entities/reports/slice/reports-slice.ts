import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface reportStore {
  filter: any;
}

const initialState: reportStore = {
  filter: {},
};

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<any>) {
      state.filter = action.payload;
    },
    resetFilter(state) {
      state.filter = {};
    },
  },
});

const reportSliceReducer = reportSlice.reducer;
export { reportSlice, reportSliceReducer };
