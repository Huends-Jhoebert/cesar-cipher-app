const isSelectReducer = (state = true, action) => {
  switch (action.type) {
    case "TURN":
      return !state;
    default:
      return state;
  }
};

export default isSelectReducer;
