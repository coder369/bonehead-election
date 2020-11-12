import { Action, AnyAction, Dispatch } from "redux";
import { Voter } from "../models/Voter";

export const SET_SELECTED_VOTER_ACTION = 'SET_SELECTED_VOTER_ACTION'

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST_ACTION';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE_ACTION';

export const GET_VOTER_REQUEST_ACTION = 'GET_VOTER_REQUEST_ACTION';
export const GET_VOTER_DONE_ACTION = 'GET_VOTER_DONE_ACTION';

export interface SetSelectedVoterAction extends Action<typeof SET_SELECTED_VOTER_ACTION> {
    payload: {
        voterId: number,
    }
}

export function isSetSelectedVoterAction(action: AnyAction): action is SetSelectedVoterAction {
    return action.type === SET_SELECTED_VOTER_ACTION;
}

export type CreateSetSelectedVoterAction = (voterId: number) => SetSelectedVoterAction;

export const createSetSelectedVoterAction: CreateSetSelectedVoterAction = (voterId) => {
    return {
        type: SET_SELECTED_VOTER_ACTION,
        payload: {
            voterId,
        },
    }
}

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

export interface GetVoterRequestAction extends Action<typeof GET_VOTER_REQUEST_ACTION>{
    payload: {
        voterId: number,
    }
}

export function isGetVoterRequestAction(action: AnyAction): action is GetVoterRequestAction {
    return action.type === GET_VOTER_REQUEST_ACTION;
}

export type CreateGetVoterRequestAction = (voterId: number) => GetVoterRequestAction;

export const createGetVoterRequestAction: CreateGetVoterRequestAction = (voterId) => {
    return {
        type: GET_VOTER_REQUEST_ACTION,
        payload: {
            voterId
        }
    }
}

export interface GetVoterDoneAction extends Action<typeof GET_VOTER_DONE_ACTION> {
    payload: {
        voter: Voter,
    }
}

export function isGetVoterDoneAction(action: AnyAction): action is GetVoterDoneAction {
    return action.type === GET_VOTER_DONE_ACTION;
}

export type CreateGetVoterDoneAction = (voter: Voter) => GetVoterDoneAction;

export const createGetVoterDoneAction: CreateGetVoterDoneAction = (voter) => {
    return {
        type: GET_VOTER_DONE_ACTION,
        payload: {
            voter,
        },
    }
}

export const getVoter = (voterId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(createGetVoterRequestAction(voterId));
        return fetch("http://localhost:3060/voters/" + voterId)
            .then((res) => res.json())
            .then((voters) => dispatch(createGetVoterDoneAction(voters)))
    };
}

export type VoterActions = 
    RefreshVotersDoneAction
    | GetVoterDoneAction