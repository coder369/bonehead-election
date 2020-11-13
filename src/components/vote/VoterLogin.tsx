import React, { ChangeEvent } from 'react';
import { HTMLFormControls, useForm } from '../../hooks/useForm';
import { Voter } from '../../models/Voter';

export type VoterLoginProps = {
    voters: Voter[];
    onSelectVoter: (voterId: number) => void;
    errorMessage: string;
};

export function VoterLogin({ voters, onSelectVoter, errorMessage }: VoterLoginProps) {
    const [voteForm, change] = useForm({
        voterId: -1
    });

    const onChange = (e: ChangeEvent<HTMLFormControls>) => {
        change(e);

        let voter = voters.filter((voter) => voter.email === e.target.value)

        if (voter.length === 1) {
            voteForm.voterId = voter[0].id;
        } else {
            voteForm.voterId = -1
        }
    }

    return (
        <form>
            {errorMessage || <div>{errorMessage}</div>}
            <div>
                <label htmlFor="voterId-input">Voter Email:</label>
                <input type="number" name="voterId" id="voterId-input" value={voteForm.voterId} onChange={onChange} />
            </div>
            <button type="button" disabled={voteForm.voterId === -1} onClick={() => onSelectVoter(voteForm.voterId)}>
                Submit
            </button>
        </form>
    );
}