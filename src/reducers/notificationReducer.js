import { createSlice } from "@reduxjs/toolkit";

const initialState = "This is the initial notification.";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      console.log("Mock set notification", action.payload);
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
