import { createStore } from 'redux'
import { userFromReducer } from "./userForm/userFromReducer";

const store = createStore(userFromReducer)

export default store