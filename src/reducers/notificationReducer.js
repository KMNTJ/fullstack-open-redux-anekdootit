import { createSlice } from "@reduxjs/toolkit";

const initialState = "This is the initial notification.";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    newAnecdoteNotification(state, action) {
      return "You created a new anecdote: " + action.payload;
    },
    voteAnecdoteNotification(state, action) {
      return "You voted for: " + action.payload;
    },
    clearNotification() {
      return null;
    },
  },
});

export const { newAnecdoteNotification, voteAnecdoteNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
