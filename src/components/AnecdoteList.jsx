import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  voteAnecdoteNotification,
} from "../reducers/notificationReducer";
import { timeout } from "../reducers/notificationTimeoutReducer";
import Filter from "./Filter";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const voteAnecdote = (anecdote) => {
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification(null));
    }, 5000);
    dispatch(timeout(timeoutId));
    dispatch(vote(anecdote.id));
    dispatch(voteAnecdoteNotification(anecdote.content));
  };

  return (
    <>
      <Filter></Filter>
      {anecdotes.map((anecdote) =>
        anecdote.content.includes(filter) ? (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteAnecdote(anecdote)}>vote</button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};
