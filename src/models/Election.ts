import { Question } from "./Question";

export type Election = {
    id: number,
    name: string,
    questions: Question[],
    voterIds: number[],
}

export type NewElection = Omit<Election, 'id'>;

export type ElectionKeys = keyof Election;
