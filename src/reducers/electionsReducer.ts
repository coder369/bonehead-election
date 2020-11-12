import { Reducer } from "react";
import { combineReducers } from "redux";
import { ElectionActions, REFRESH_ELECTIONS_DONE_ACTION } from "../actions/electionActions";
import { Election } from "../models/Election";

export const electionsReducer: Reducer<Election[], ElectionActions> = (elections = [], action) => {
    switch (action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.payload.elections

        default:
            return elections;
    }
}

export const AppReducer = combineReducers({
    elections: electionsReducer,
})