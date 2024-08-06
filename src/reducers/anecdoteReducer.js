import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
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
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, vote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
