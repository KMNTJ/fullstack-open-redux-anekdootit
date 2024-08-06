import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  newAnecdoteNotification,
  clearNotification,
} from "../reducers/notificationReducer";
import { timeout } from "../reducers/notificationTimeoutReducer";
import anecdotes from "../services/anecdotes";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const newAnecdote = event.target.anecdote.value;
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification(null));
    }, 5000);
    dispatch(timeout(timeoutId));
    const postedAnecdote = await anecdotes.createNew(newAnecdote);
    dispatch(createAnecdote(postedAnecdote));
    dispatch(newAnecdoteNotification(postedAnecdote));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};
