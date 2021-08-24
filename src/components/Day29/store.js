import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Day27/reducers";


const store = createStore(rootReducer , applyMiddleware(thunk));

export default store; 