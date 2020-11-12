import { Reducer } from "react";
import {
    VoterActions,
    REFRESH_VOTERS_DONE_ACTION,
    isRefreshVotersDoneAction,
    isEditVoterAction,
    isCancelVoterAction,
    isSortVotersAction,
} from "../actions/voterActions";
import { Voter } from "../models/Voter";
import {VotersSort} from "../models/AppStore";

export const votersReducer: Reducer<Voter[], VoterActions> = (voters = [], action) => {
    switch (action.type) {
        case REFRESH_VOTERS_DONE_ACTION:
            return action.payload.voters

        default:
            return voters;
    }
}

export const editVoterIdReducer: Reducer<number, VoterActions> = (
    editVoterId = -1,
    action
) => {
    if (isEditVoterAction(action)) {
        return action.payload.voterId;
    }

    if (isCancelVoterAction(action) || isRefreshVotersDoneAction(action)) {
        return -1;
    }

    return editVoterId;
};

export const votersSortReducer: Reducer<VotersSort, VoterActions> = (
    votersSort = { sortCol: "id", sortDir: "asc" },
    action
) => {
    if (isSortVotersAction(action)) {
        if (
            votersSort.sortCol === action.payload.sortCol &&
            votersSort.sortDir === "asc"
        ) {
            return {
                sortCol: action.payload.sortCol,
                sortDir: "desc",
            };
        } else {
            return {
                sortCol: action.payload.sortCol,
                sortDir: "asc",
            };
        }
    }

    return votersSort;
};