import { combineReducers } from "redux";
import { electionsReducer, selectedElectionReducer } from "./electionsReducer";
import { errorMessageReducer, getVoterReducer, votersReducer } from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    selectedElection: selectedElectionReducer,
    selectedVoter: getVoterReducer,
    errorMessage: errorMessageReducer,
})