import { combineReducers } from "redux";
import { electionsReducer, questionsReducer, electionReducer } from "./electionsReducer";
import {votersReducer, editVoterIdReducer, votersSortReducer, voterReducer, errorMessageReducer } from "./votersReducer";
export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    votersSort: votersSortReducer,
    selectedElection: electionReducer,
    selectedVoter: voterReducer,
    errorMessage: errorMessageReducer,
    questions: questionsReducer,

})