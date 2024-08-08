import { createSlice } from "@reduxjs/toolkit";
import { timeout } from "../reducers/notificationTimeoutReducer";

const initialState = "This is the initial notification.";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    clearNotification() {
      return null;
    },
    notify(state, action) {
      return action.payload;
    },
  },
});

export const setNotification = (message, duration) => {
  return async (dispatch) => {
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification(null));
    }, duration * 1000);
    dispatch(timeout(timeoutId));
    dispatch(notify(message));
  };
};

export const { clearNotification, notify } = notificationSlice.actions;
export default notificationSlice.reducer;
