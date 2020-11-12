import React, { ChangeEvent, useState } from 'react';
import { HTMLFormControls, useForm } from '../../hooks/useForm';
import { Voter } from '../../models/Voter';

export type VoterLoginProps = {
    voters: Voter[];
    onSelectVoter: (voterId: number) => void;
};

export function VoterLogin({ voters, onSelectVoter }: VoterLoginProps) {
    const [voterId, setVoterId] = useState(-1);
    const [voterForm, change] = useForm({
        email: '',
    });

    const onChange = (e: ChangeEvent<HTMLFormControls>) => {
        change(e)

        let voter = voters.filter((voter) => voter.email === e.target.value)

        if (voter.length === 1) {
            setVoterId(voter[0].id);
        } else {
            setVoterId(-1);
        }
    }

    return (
        <>
            <div>
                <label htmlFor="email-input">Voter Email:</label>
                <input type="text" name="email" id="email-input" value={voterForm.email} onChange={onChange} />
            </div>
            <button type="button" disabled={voterId === -1} onClick={() => { onSelectVoter(voterId) }}>
                Submit
            </button>
        </>
    );
}