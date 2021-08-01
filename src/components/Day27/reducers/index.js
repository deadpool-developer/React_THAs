import { todoReducer } from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo : todoReducer,
});

export default rootReducer;