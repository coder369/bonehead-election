import { combineReducers } from "redux";
import { electionsReducer, selectedElectionReducer } from "./electionsReducer";
import {votersReducer, editVoterIdReducer, votersSortReducer, getVoterReducer, errorMessageReducer } from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    votersSort: votersSortReducer,
    selectedElection: selectedElectionReducer,
    selectedVoter: getVoterReducer,
    errorMessage: errorMessageReducer,
})