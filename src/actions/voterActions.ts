import { Action, AnyAction, Dispatch } from "redux";
import {NewVoter, Voter} from "../models/Voter";

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST_ACTION';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE_ACTION';
export const APPEND_VOTER_REQUEST_ACTION = 'APPEND_VOTER_REQUEST_ACTION'
export const REPLACE_VOTER_REQUEST_ACTION = 'REPLACE_VOTER_REQUEST_ACTION'
export const REMOVE_VOTER_REQUEST_ACTION = 'REMOVE_VOTER_REQUEST_ACTION'
export const EDIT_VOTER_ACTION = "EDIT_VOTER";
export const CANCEL_VOTER_ACTION = "CANCEL_VOTER";
export const SORT_VOTERS_ACTION = "SORT_VOTERS";

// --- RefreshVoter Request ---
export type RefreshVotersRequestAction = Action<typeof REFRESH_VOTERS_REQUEST_ACTION>;

export function isRefreshVotersRequestAction(action: AnyAction): action is RefreshVotersRequestAction {
    return action.type === REFRESH_VOTERS_REQUEST_ACTION;
}

export type CreateRefreshVotersRequestAction = () => RefreshVotersRequestAction;

export const createRefreshVotersRequestAction: CreateRefreshVotersRequestAction = () => {
    return {
        type: REFRESH_VOTERS_REQUEST_ACTION,
    }
}

// --- RefreshVoter Done ---
export interface RefreshVotersDoneAction extends Action<typeof REFRESH_VOTERS_DONE_ACTION> {
    payload: {
        voters: Voter[],
    }
}

export function isRefreshVotersDoneAction(action: AnyAction): action is RefreshVotersDoneAction {
    return action.type === REFRESH_VOTERS_DONE_ACTION;
}

export type CreateRefreshVotersDoneAction = (voters: Voter[]) => RefreshVotersDoneAction;

export const createRefreshVotersDoneAction: CreateRefreshVotersDoneAction = (voters) => {
    return {
        type: REFRESH_VOTERS_DONE_ACTION,
        payload: {
            voters,
        },
    }
}

export const refreshVoters = () => {
    return (dispatch: Dispatch) => {
        dispatch(createRefreshVotersRequestAction());
        return fetch("http://localhost:3060/voters")
            .then((res) => res.json())
            .then((voters) => dispatch(createRefreshVotersDoneAction(voters)))
    };
}


// --- Append voter ---
export interface AppendVoterRequestAction
    extends Action<typeof APPEND_VOTER_REQUEST_ACTION> {
    payload: {
        voter: NewVoter;
    };
}

export function isAppendVoterRequestAction(
    action: AnyAction
): action is AppendVoterRequestAction {
    return action.type === APPEND_VOTER_REQUEST_ACTION;
}

export type CreateAppendVoterRequestAction = (
    voter: NewVoter
) => AppendVoterRequestAction;

export const createAppendVoterRequestAction: CreateAppendVoterRequestAction = (
    voter: NewVoter
) => {
    return {
        type: APPEND_VOTER_REQUEST_ACTION,
        payload: {
            voter,
        },
    };
};

export const appendVoter = (voter: NewVoter) => {
    return (dispatch: Dispatch) => {
        dispatch(createAppendVoterRequestAction(voter));
        return fetch("http://localhost:3060/voters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(voter),
        }).then(() => {
            refreshVoters()(dispatch);
        });
    };
};



export type VoterActions =
    RefreshVotersRequestAction |
    RefreshVotersDoneAction |
    AppendVoterRequestAction 

