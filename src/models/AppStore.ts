import { Election } from "./Election";
import { Voter } from "./Voter";

export type AppState = {
    elections: Election[],
    voters: Voter[]
    selectedElectionId: number,
    selectedVoterId: number,
};