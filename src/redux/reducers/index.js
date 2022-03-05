import { combineReducers } from "redux";
import characterListReducer from "./characterListReducer";

const rootReducer = combineReducers({
  characterListReducer,
});

export default rootReducer;
