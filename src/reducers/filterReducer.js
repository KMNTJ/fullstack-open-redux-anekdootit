import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    textFilter(state, action) {
      const textToFilterBy = action.payload;
      return textToFilterBy;
    },
  },
});

export const { textFilter } = filterSlice.actions;
export default filterSlice.reducer;
