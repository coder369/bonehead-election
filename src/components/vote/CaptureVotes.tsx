import React, { useEffect } from 'react';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';

export type CaptureVotesProps = {
    elections: Election[];
    voters: Voter[],
    onRefreshElections: () => void;
    onRefreshVoters: () => void;
}

export function CaptureVotes({ elections, voters, onRefreshElections, onRefreshVoters }: CaptureVotesProps) {

    useEffect(() => {
        onRefreshElections();
        onRefreshVoters();
    }, [onRefreshElections, onRefreshVoters]);

    return (
        <div>
            {JSON.stringify(elections)}
            {JSON.stringify(voters)}
        </div>
    );
}