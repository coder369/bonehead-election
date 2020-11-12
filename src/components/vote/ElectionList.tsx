import React from 'react';
import { Election } from '../../models/Election';

export type ElectionListProps = {
    elections: Election[];
    onSelectElection: (electionId: number) => void;
};

export function ElectionList({ elections, onSelectElection }: ElectionListProps) {
    return (
        <ul>{elections.map((election) => (
            <li key={election.id}>
                <span>{election.name}</span>
                <span>
                    <button type="button" onClick={() => onSelectElection(election.id)}>Select</button>
                </span>
            </li>))}</ul>
    );
}