import React, { useState, ChangeEvent, Fragment} from "react";
import { NewElection, Election } from "../../models/Election";
import { Question } from "../../models/Question";
import { useForm } from "../../hooks/useForm";

export type ElectionEditProps = {
    onSaveElection: (newElection: NewElection) => void;
    onAddQuestion: (question: string) => void;
    questions: Question[],
}

export const ElectionForm = (props: ElectionEditProps) => {
    // const [electionForm, setQuestions, change, resetElectionForm] = useElectionForm({
    //     name: "",
    //     questions: [],
    //     voterIds: [],
    // });

    const [electionForm, change, resetElectionForm] = useForm({
        electionName: '',
        question: "",
    });

    const addQuestion = () => {
        props.onAddQuestion(electionForm.question);
    };

    const submitElection = () => {
        props.onSaveElection({
           name: electionForm.electionName,
           questions: props.questions,
           voterIds: []
        });

        resetElectionForm();
    };

    

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name-input">Name</label>
                    <input 
                        type="text"
                        id="name-input"
                        name="electionName"
                        value={electionForm.electionName}
                        onChange={change}
                    />
                </div>
                <div>
                    {props.questions ? <ul>
                        {props.questions.map((question) => 
                            <li>{question}</li>
                        )}
                    </ul>
                    :
                    <Fragment/>}
                </div>
                <div>
                    <label htmlFor="question-input">Question</label>
                    <input
                        type="text"
                        name="question"
                        id="question-input" 
                        value={electionForm.question}
                        onChange={change} 
                    />
                </div>
                    <button type="button" onClick={addQuestion}>
                        Add Question
                    </button>
                <div>
                    <button type="button" onClick={submitElection}>
                        Submit Election
                    </button>
                </div>
            </form>
        </div>
    );
};