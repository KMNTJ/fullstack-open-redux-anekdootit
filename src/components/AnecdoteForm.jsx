import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { newAnecdoteNotification, clearNotification } from "../reducers/notificationReducer";
import { timeout } from "../reducers/notificationTimeoutReducer"

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const newAnecdote = event.target.anecdote.value;
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification(null));
    }, 5000);
    dispatch(timeout(timeoutId))
    dispatch(createAnecdote(newAnecdote));
    dispatch(newAnecdoteNotification(newAnecdote));
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
