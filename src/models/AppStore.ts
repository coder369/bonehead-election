import { Election } from "./Election";
import { Voter } from "./Voter";
import { Question } from "./Question"

export type SortDir = 'asc' | 'desc';

export type VotersSort = {
    sortCol: keyof Voter;
    sortDir: SortDir;
}

export type AppState = {
    elections: Election[],
    voters: Voter[],
    selectedElectionId: number,
    selectedVoterId: number,
    editVoterId: number,
    votersSort: VotersSort,
    questions: Question[],
};

export type ElectionState = {

}