import { Action, AnyAction, Dispatch } from "redux";
import { Election } from "../models/Election";

export const SET_SELECTED_ELECTION_ACTION = 'SET_SELECTED_ELECTION_ACTION'

export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST_ACTION';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE_ACTION';

export const UPDATE_ELECTION_RESULTS_REQUEST_ACTION = 'UPDATE_ELECTION_RESULTS_REQUEST_ACTION';
export const UPDATE_ELECTION_RESULTS_DONE_ACTION = 'UPDATE_ELECTION_RESULTS_DONE_ACTION';

export interface UpdateElectionResultsRequestAction extends Action<typeof UPDATE_ELECTION_RESULTS_REQUEST_ACTION> {
    payload: {
        election: Election
    }
};

export function isUpdateElectionResultsRequestAction(action: AnyAction): action is UpdateElectionResultsRequestAction {
    return action.type === UPDATE_ELECTION_RESULTS_REQUEST_ACTION;
}

export type CreateUpdateElectionResultsRequestAction = (election: Election) => UpdateElectionResultsRequestAction;

export const createUpdateElectionResultsRequestAction: CreateUpdateElectionResultsRequestAction = (election) => {
    return {
        type: UPDATE_ELECTION_RESULTS_REQUEST_ACTION,
        payload: {
            election,
        }
    }
}

export const updateElectionResults = (election: Election) => {
    return (dispatch: Dispatch) => {
        dispatch(createUpdateElectionResultsRequestAction(election));
        return fetch('http://localhost:3060/elections/' + election.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...election })
        })
            .then(() => {
                // not sure what I should do here...
            });
    };
}

export interface SetSelectedElectionAction extends Action<typeof SET_SELECTED_ELECTION_ACTION> {
    payload: {
        election: Election,
    }
}

export function isSetSelectedElectionAction(action: AnyAction): action is SetSelectedElectionAction {
    return action.type === SET_SELECTED_ELECTION_ACTION;
}

export type CreateSetSelectedElectionAction = (election: Election) => SetSelectedElectionAction;

export const createSetSelectedElectionAction: CreateSetSelectedElectionAction = (election) => {
    return {
        type: SET_SELECTED_ELECTION_ACTION,
        payload: {
            election,
        },
    }
}

export type RefreshElectionsRequestAction = Action<typeof REFRESH_ELECTIONS_REQUEST_ACTION>;

export function isRefreshElectionsRequestAction(action: AnyAction): action is RefreshElectionsRequestAction {
    return action.type === REFRESH_ELECTIONS_REQUEST_ACTION;
}

export type CreateRefreshElectionsRequestAction = () => RefreshElectionsRequestAction;

export const createRefreshElectionsRequestAction: CreateRefreshElectionsRequestAction = () => {
    return {
        type: REFRESH_ELECTIONS_REQUEST_ACTION,
    }
}

export interface RefreshElectionsDoneAction extends Action<typeof REFRESH_ELECTIONS_DONE_ACTION> {
    payload: {
        elections: Election[],
    }
}

export function isRefreshElectionsDoneAction(action: AnyAction): action is RefreshElectionsDoneAction {
    return action.type === REFRESH_ELECTIONS_DONE_ACTION;
}

export type CreateRefreshElectionsDoneAction = (elections: Election[]) => RefreshElectionsDoneAction;

export const createRefreshElectionsDoneAction: CreateRefreshElectionsDoneAction = (elections) => {
    return {
        type: REFRESH_ELECTIONS_DONE_ACTION,
        payload: {
            elections,
        },
    }
}

export const refreshElections = () => {
    return (dispatch: Dispatch) => {
        dispatch(createRefreshElectionsRequestAction());
        return fetch("http://localhost:3060/elections")
            .then((res) => res.json())
            .then((elections) => dispatch(createRefreshElectionsDoneAction(elections)))
    };
}

export type ElectionActions = 
    RefreshElectionsDoneAction
    | SetSelectedElectionAction
    | UpdateElectionResultsRequestAction