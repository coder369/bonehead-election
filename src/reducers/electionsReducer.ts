import { Reducer } from "react";
import { ElectionActions, REFRESH_ELECTIONS_DONE_ACTION, SET_SELECTED_ELECTION_ACTION } from "../actions/electionActions";
import { Election } from "../models/Election";

export const electionsReducer: Reducer<Election[], ElectionActions> = (elections = [], action) => {
    switch (action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.payload.elections

        default:
            return elections;
    }
}

export const selectedElectionReducer: Reducer<Election, ElectionActions> = (election = {} as Election, action) => {
    switch (action.type) {
        case SET_SELECTED_ELECTION_ACTION:
            return action.payload.election

        default:
            return election;
    }
}