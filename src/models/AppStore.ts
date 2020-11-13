import { Election } from "./Election";
import { Voter } from "./Voter";

export type SortDir = 'asc' | 'desc';

export type VotersSort = {
    sortCol: keyof Voter;
    sortDir: SortDir;
}

export type AppState = {
    elections: Election[],
    voters: Voter[],
    selectedElection: Election,
    selectedVoter: Voter,
    editVoterId: number,
    votersSort: VotersSort,
    errorMessage: string,
};