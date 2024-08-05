import { createSlice } from "@reduxjs/toolkit";

const initialState = "12345";

const notificationTimeoutSlice = createSlice({
  name: "notificationTimeout",
  initialState,
  reducers: {
    timeout(state, action) {
      clearTimeout(state)
      const timeoutId = action.payload;
      return timeoutId;
    },
  },
});

export const { timeout } = notificationTimeoutSlice.actions;
export default notificationTimeoutSlice.reducer;
