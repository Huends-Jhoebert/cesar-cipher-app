const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREAMENT":
      if (state >= 25) {
        return state;
      }
      return state + 1;
    case "DECREAMENT":
      if (state == 1) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
