import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import Filter from "./Filter";

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const voteAnecdote = (id) => {
    dispatch(vote(id));
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
              <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};
