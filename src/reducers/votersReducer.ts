import { Reducer } from "react";
import { VoterActions, REFRESH_VOTERS_DONE_ACTION, GET_VOTER_DONE_ACTION } from "../actions/voterActions";
import { Voter } from "../models/Voter";

export const votersReducer: Reducer<Voter[], VoterActions> = (voters = [], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.voters

        default:
            return voters;
    }
}

export const getVoterReducer: Reducer<Voter, VoterActions> = (voter = {} as Voter, action) => {
    switch (action.type) {
        case GET_VOTER_DONE_ACTION:
            return action.payload.voter

        default:
            return voter;
    }
}


export const errorMessageReducer: Reducer<string, VoterActions> = (errorMessage, action) => {
    switch (action.type) {
        case GET_VOTER_DONE_ACTION:
            if(action.payload.voter === null || action.payload.voter === undefined){
                return 'Invalid voter id.';
            }

            return '';

        default:
            return '';
    }
}