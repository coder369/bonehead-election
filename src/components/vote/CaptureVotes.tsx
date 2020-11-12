import React, { useEffect } from 'react';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';
import { ElectionList } from './ElectionList';
import { VoterLogin } from './VoterLogin';

export type CaptureVotesProps = {
    elections: Election[];
    voters: Voter[];
    selectedElectionId: number;
    selectedVoterId: number;
    onRefreshElections: () => void;
    onRefreshVoters: () => void;
    onSelectElection: (electionId: number) => void;
    onSelectVoter: (voterId: number) => void;
}

export function CaptureVotes({ elections, voters, selectedElectionId, selectedVoterId, onRefreshElections, onRefreshVoters, onSelectElection, onSelectVoter }: CaptureVotesProps) {

    useEffect(() => {
        onRefreshElections();
        onRefreshVoters();
    }, [onRefreshElections, onRefreshVoters]);

    return (
        <>
            { selectedElectionId === -1
            ? (<ElectionList elections={elections} onSelectElection={onSelectElection} />)
            : selectedVoterId === -1
            ? (<VoterLogin voters={voters} onSelectVoter={onSelectVoter}/>)
            : <div>
                <div>Selected Election Id: {selectedElectionId}</div>
                <div>Selected Voter Id: {selectedVoterId}</div>
            </div>
            }   
        </>
    );
}