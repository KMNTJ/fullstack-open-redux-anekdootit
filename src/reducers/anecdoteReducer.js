import { createSlice } from "@reduxjs/toolkit";
import anecdotesDb from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdoteReducer(state, action) {
      return state.concat({
        content: action.payload.content,
        id: action.payload.id,
        votes: 0,
      });
    },
    vote(state, action) {
      const newState = state.map((o) =>
        o.id === action.payload ? { ...o, votes: o.votes + 1 } : o
      );
      newState.sort((a, b) => b.votes - a.votes);
      return newState;
    },
    setAnecdotesReducer(state, action) {
      return action.payload;
    },
  },
});

export const intitializeAnecdotes = () => {
  return async (dispatch) => {
    const dbAnecdotes = await anecdotesDb.getAll();
    dispatch(setAnecdotesReducer(dbAnecdotes));
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesDb.createNew(anecdote);
    dispatch(createAnecdoteReducer(newAnecdote));
  };
};

export const { createAnecdoteReducer, vote, setAnecdotesReducer } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
