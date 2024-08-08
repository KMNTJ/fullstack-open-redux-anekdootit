import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import Filter from "./Filter";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const voteAnecdote = (anecdote) => {
    dispatch(vote(anecdote.id));
    dispatch(setNotification(`You voted for: '${anecdote.content}'`, 10));
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
