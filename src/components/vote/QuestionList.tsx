import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBallotForm } from '../../hooks/useBallotForm';
import { Election } from '../../models/Election';
import { Voter } from '../../models/Voter';

export type QuestionListProps = {
    election: Election;
    voter: Voter;
    onSubmitBallot: (election: Election) => void;
};

export function QuestionList({ election, voter, onSubmitBallot }: QuestionListProps) {
    const [ballot, change] = useBallotForm(Array(election.questions.length).fill(false))
    const history = useHistory();

    const submitBallot = () => {
        const questions = [...election.questions];
        const voterIds = [...election.voterIds];

        // Please go easy on me Eric
        for (let i = 0, len = ballot.length; i < len; i++) {
            if (ballot[i])
                questions[i].yesCount++;
            else
                questions[i].noCount++;
        }

        voterIds.push(voter.id);

        const newElection = {
            id: election.id,
            name: election.name,
            questions: questions,
            voterIds: voterIds,
        };

        onSubmitBallot(newElection);

        history.push("/");
    }

    return (
        <>
            <ul>{election.questions.map((q) => (
                <li key={q.id}>
                    <label htmlFor={"" + q.id}>{q.question}</label>
                    <input type="checkbox" id={"" + q.id} name={"" + q.id} checked={ballot[q.id]} onChange={change} />
                </li>))}</ul>

            <button type="button" onClick={submitBallot}>
                Submit
            </button>
        </>
    );
}