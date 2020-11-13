import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';

export type VoterLoginProps = {
    voters: Voter[];
    selectedElection: Election;
    onSelectVoter: (voterId: number) => void;
    errorMessage: string;
};

export function VoterLogin({ voters, selectedElection, onSelectVoter, errorMessage }: VoterLoginProps) {
    const [voteForm, change] = useForm({
        voterId: -1
    });

    return (
        <form>
            {errorMessage || <div>{errorMessage}</div>}
            <div>
                <label htmlFor="voterId-input">Voter Email:</label>
                <input type="number" name="voterId" id="voterId-input" value={voteForm.voterId} onChange={change} />
            </div>
            <button type="button"
                disabled={!voters.map((v) => v.id).includes(voteForm.voterId) || selectedElection.voterIds.includes(voteForm.voterId)
                }
                onClick={() => onSelectVoter(voteForm.voterId)}>
                Vote
            </button>
        </form>
    );
}