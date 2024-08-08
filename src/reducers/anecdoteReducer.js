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
    voteReducer(state, action) {
      const newState = state.map((o) =>
        o.id === action.payload.id ? { ...o, votes: action.payload.votes } : o
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

export const vote = (anecdoteId) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdotesDb.vote(anecdoteId);
    dispatch(voteReducer(votedAnecdote));
  };
};

export const { createAnecdoteReducer, voteReducer, setAnecdotesReducer } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
