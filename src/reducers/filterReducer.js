const filterInitialState = "";

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "WRITE": {
      const newState = action.payload;
      return newState;
    }
    case "READ":
      return state;
    default:
      return state;
  }
};

export const filterText = (inputValue) => {
  return {
    type: "WRITE",
    payload: inputValue,
  };
};

export default filterReducer;
