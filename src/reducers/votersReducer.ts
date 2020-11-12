import { Reducer } from "react";
import { VoterActions, REFRESH_VOTERS_DONE_ACTION } from "../actions/voterActions";
import { Voter } from "../models/Voter";

export const votersReducer: Reducer<Voter[], VoterActions> = (voters = [], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.voters

        default:
            return voters;
    }
}