import React from 'react';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';
import { QuestionList } from './QuestionList';

export type BallotProps = {
    election: Election,
    voter: Voter,
    onSubmitBallot: (election: Election) => void;
}

export function Ballot({
    election,
    voter,
    onSubmitBallot
}: BallotProps) {
    return (
        <form>
            <h1>{election.name}</h1>
            <QuestionList election={election} voter={voter} onSubmitBallot={onSubmitBallot} />
        </form>
    );
}