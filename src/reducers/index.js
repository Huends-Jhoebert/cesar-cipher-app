import isSelectReducer from "./isSelectReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isEncryptSelected: isSelectReducer,
});

export default allReducers;
