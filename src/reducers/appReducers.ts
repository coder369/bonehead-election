import { combineReducers } from "redux";
import { electionsReducer } from "./electionsReducer";
import { votersReducer } from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
})