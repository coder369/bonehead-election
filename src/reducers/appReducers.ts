import { combineReducers } from "redux";
import { electionsReducer, selectedElectionReducer } from "./electionsReducer";
import { selectedVoterReducer, votersReducer, editVoterIdReducer, votersSortReducer } from "./votersReducer";

export const AppReducer = combineReducers({
    elections: electionsReducer,
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    votersSort: votersSortReducer,
    selectedElectionId: selectedElectionReducer,
    selectedVoterId: selectedVoterReducer,
})