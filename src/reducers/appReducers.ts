import { combineReducers } from "redux";
import { electionsReducer } from "./electionsReducer";
import {editVoterIdReducer, votersReducer, votersSortReducer} from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    votersSort: votersSortReducer
})