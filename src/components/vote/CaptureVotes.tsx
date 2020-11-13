import React, { useEffect } from 'react';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';
import { ElectionList } from './ElectionList';
import { VoterLogin } from './VoterLogin';

export type CaptureVotesProps = {
    elections: Election[];
    voters: Voter[];
    selectedElection: Election;
    selectedVoter: Voter;
    errorMessage: string;
    onRefreshElections: () => void;
    onRefreshVoters: () => void;
    onSelectElection: (election: Election) => void;
    onSelectVoter: (voterId: number) => void;
}

export function CaptureVotes({ elections, voters, selectedElection, selectedVoter, onRefreshElections, onRefreshVoters, onSelectElection, onSelectVoter, errorMessage }: CaptureVotesProps) {

    useEffect(() => {
        onRefreshElections();
        onRefreshVoters();
    }, [onRefreshElections, onRefreshVoters]);

    console.log("Voter: " + JSON.stringify(selectedVoter));
    console.log("Election: " + JSON.stringify(selectedElection));

    return (
        <>
            <ElectionList elections={elections} onSelectElection={onSelectElection} />
            <VoterLogin voters={voters} onSelectVoter={onSelectVoter} errorMessage={errorMessage}/>
        </>
    );
}