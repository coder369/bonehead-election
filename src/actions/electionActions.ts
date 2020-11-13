import { Action, AnyAction, Dispatch } from "redux";
import { Election, NewElection } from "../models/Election";

export const SET_SELECTED_ELECTION_ACTION = 'SET_SELECTED_ELECTION_ACTION'

export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST_ACTION';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE_ACTION';

export const ADD_QUESTION_ACTION = 'ADD_QUESTION_ACTION';

export const SUBMIT_ELECTION_REQUEST_ACTION = 'SUBMIT_ELECTION_REQUEST_ACTION';

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

export interface AddQuestionAction extends Action<typeof ADD_QUESTION_ACTION> {
    payload: {
        question: string,
    }
}

export function isAddQuestionAction(action: AnyAction): action is AddQuestionAction {
    return action.type === ADD_QUESTION_ACTION;
}

export type CreateAddQuestionAction = (question: string) => AddQuestionAction;

export const createAddQuestionAction: CreateAddQuestionAction = (question) => {
    return {
        type: ADD_QUESTION_ACTION,
        payload: {
            question,
        },
    }
}

export interface SubmitElectionRequestAction
  extends Action<typeof SUBMIT_ELECTION_REQUEST_ACTION> {
  payload: {
    election: NewElection;
  };
}

export function isSubmitElectionRequestAction(
  action: AnyAction
): action is SubmitElectionRequestAction {
  return action.type === SUBMIT_ELECTION_REQUEST_ACTION;
}

export type CreateSubmitElectionRequestAction = (
  election: NewElection
) => SubmitElectionRequestAction;

export const createSubmitElectionRequestAction: CreateSubmitElectionRequestAction = (
  election: NewElection
) => {
  return {
    type: SUBMIT_ELECTION_REQUEST_ACTION,
    payload: {
      election,
    },
  };
};

export const submitElection = (election: NewElection) => {
    return (dispatch: Dispatch) => {
      dispatch(createSubmitElectionRequestAction(election));
      return fetch("http://localhost:3060/elections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toElectionObj(election)),
      }).then(() => {
        refreshElections()(dispatch);
      });
    };
  };

const toElectionObj = (newElection: NewElection) => {
  const election = {
    name: newElection.name,
    voterIds: [],
    questions: newElection.questions.map((q,i) => ({ id: i, question: q, yesCount: 0, noCount: 0 }))
  };

  return election;
}
  

export type ElectionActions = 
    RefreshElectionsDoneAction
    | SetSelectedElectionAction
    | AddQuestionAction;