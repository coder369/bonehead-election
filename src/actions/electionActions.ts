import { Action, AnyAction, Dispatch } from "redux";
import { Election } from "../models/Election";

export const SET_SELECTED_ELECTION_ACTION = 'SET_SELECTED_ELECTION_ACTION'

export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST_ACTION';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE_ACTION';

export interface SetSelectedElectionAction extends Action<typeof SET_SELECTED_ELECTION_ACTION> {
    payload: {
        electionId: number,
    }
}

export function isSetSelectedElectionAction(action: AnyAction): action is SetSelectedElectionAction {
    return action.type === SET_SELECTED_ELECTION_ACTION;
}

export type CreateSetSelectedElectionAction = (electionId: number) => SetSelectedElectionAction;

export const createSetSelectedElectionAction: CreateSetSelectedElectionAction = (electionId) => {
    return {
        type: SET_SELECTED_ELECTION_ACTION,
        payload: {
            electionId,
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