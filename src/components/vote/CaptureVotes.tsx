import React, { useEffect } from 'react';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';
import { Ballot } from './Ballot';
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
    onSubmitBallot: (election: Election) => void;
}

export function CaptureVotes({ elections, voters, selectedElection, selectedVoter, errorMessage, onRefreshElections, onRefreshVoters, onSelectElection, onSelectVoter, onSubmitBallot }: CaptureVotesProps) {

    useEffect(() => {
        onRefreshElections();
        onRefreshVoters();
    }, [onRefreshElections, onRefreshVoters]);

    console.log("Voter: " + JSON.stringify(selectedVoter));
    console.log("Election: " + JSON.stringify(selectedElection));

    return (
        <>
            {(selectedElection.id === undefined)
                ? <ElectionList elections={elections} onSelectElection={onSelectElection} />
                : (selectedElection.id !== undefined && selectedVoter.id === undefined)
                    ? <VoterLogin voters={voters} selectedElection={selectedElection} onSelectVoter={onSelectVoter} errorMessage={errorMessage} />
                    : <Ballot election={selectedElection} voter={selectedVoter} onSubmitBallot={onSubmitBallot} />}
        </>
    );
}