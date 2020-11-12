import { Reducer } from "react";
import { VoterActions, REFRESH_VOTERS_DONE_ACTION, SET_SELECTED_VOTER_ACTION } from "../actions/voterActions";
import { Voter } from "../models/Voter";

export const votersReducer: Reducer<Voter[], VoterActions> = (voters = [], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.voters

        default:
            return voters;
    }
}

export const selectedVoterReducer: Reducer<number, VoterActions> = (voterId = -1, action) => {
    switch (action.type) {
        case SET_SELECTED_VOTER_ACTION:
            return action.payload.voterId

        default:
            return voterId;
    }
}