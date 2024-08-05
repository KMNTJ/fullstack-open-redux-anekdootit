import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";
import notificationTimeoutReducer from "./reducers/notificationTimeoutReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
    notificationTimeout: notificationTimeoutReducer
  },
});

console.log(store.getState())

export default store;
