const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = initialState, action) => {
  console.log("state now: ", state);
  console.log("action", action);

  switch (action.type) {
    case "VOTE": {
      const newState = state.map((o) =>
        o.id === action.payload.id ? { ...o, votes: o.votes + 1 } : o
      );
      newState.sort((a, b) => b.votes - a.votes) 
      return newState;
    }
    case "CREATE":
      return state.concat({
        content: action.payload.anecdote,
        id: getId(),
        votes: 0,
      });
    default:
      return state;
  }
};

export const vote = (id) => {
  return ({ type: "VOTE", payload: { id: id } });
}

export const createAnecdote = (event) => {
  event.preventDefault();
  const toCreate = event.target.anecdote.value;
  event.target.anecdote.value = "";
  return ({
    type: "CREATE",
    payload: { anecdote: toCreate },
  });
}

export default anecdoteReducer;
