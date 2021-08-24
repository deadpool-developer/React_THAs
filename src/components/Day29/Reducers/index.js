import  placeReducer from "./Place_Reducer";
import  placeDataReducer from "./PlaceData_Reducer";
import  ThemeReducer from "./Theme_Reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

    place : placeReducer,
    placeData : placeDataReducer,
    theme : ThemeReducer,
});

export default rootReducer;