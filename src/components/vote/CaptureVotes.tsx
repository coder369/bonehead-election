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
    onSelectVoter: (voter: Voter) => void;
    onSubmitBallot: (election: Election) => void;
}

export function CaptureVotes({ elections, voters, selectedElection, selectedVoter, errorMessage, onRefreshElections, onRefreshVoters, onSelectElection, onSelectVoter, onSubmitBallot }: CaptureVotesProps) {

    useEffect(() => {
        onRefreshElections();
        onRefreshVoters();
    }, [onRefreshElections, onRefreshVoters]);

    const submitBallot = (election: Election) => {
        onSelectVoter({   
            id: -1,
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            birthdate: "",
            email: "",
            phone: "",
        });
        onSelectElection({
            id: -1,
            name: "",
            questions: [],
            voterIds: [],
        });
        onSubmitBallot(election);
    }

    const selectVoter = (voterId: number) => {
        onSelectVoter(voters.filter((voter) => voter.id === voterId)[0]);
    }

    return (
        <>
            {(selectedElection.id === undefined || selectedElection.id === -1)
                ? <ElectionList elections={elections} onSelectElection={onSelectElection} />
                : (selectedElection.id !== undefined && (selectedVoter.id === undefined || selectedVoter.id === -1))
                    ? <VoterLogin voters={voters} selectedElection={selectedElection} onSelectVoter={selectVoter} errorMessage={errorMessage} />
                    : <Ballot election={selectedElection} voter={selectedVoter} onSubmitBallot={submitBallot} />}
        </>
    );
}