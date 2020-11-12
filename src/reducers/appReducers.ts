import { combineReducers } from "redux";
import { electionsReducer, selectedElectionReducer } from "./electionsReducer";
import { selectedVoterReducer, votersReducer } from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    selectedElectionId: selectedElectionReducer,
    selectedVoterId: selectedVoterReducer,
})