import React, { useState, ChangeEvent } from "react";
import {Voter} from "../../models/Voter";

export type VoterEditRowProps = {
    voter: Voter;
    onSaveVoter: (voter: Voter) => void;
    onCancelVoter: () => void;
};

export const VoterEditRow = (props: VoterEditRowProps) => {
    const [voterForm, setVoterForm] = useState({
        firstName: props.voter.firstName,
        lastName: props.voter.lastName,
        address: props.voter.address,
        city: props.voter.city,
        state: props.voter.state,
        zip: props.voter.zip,
        birthdate: props.voter,
        email: props.voter,
        phone: props.voter,

        make: props.voter.make,
        model: props.voter.model,
        year: props.voter.year,
        color: props.voter.color,
        price: props.voter.price,
    });

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setVoterForm({
            ...voterForm,
            [e.target.name]:
                e.target.type === "number" ? Number(e.target.value) : e.target.value,
        });
    };

    const saveVoter = () => {
        props.onSaveVoter({
            ...voterForm,
            id: props.voter.id,
        });
    };

    return (
        <tr>
            <td>{props.voter.id}</td>
            <td>
                <input
                    type="text"
                    id="make-input"
                    name="make"
                    value={voterForm.make}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="model-input"
                    name="model"
                    value={voterForm.model}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="number"
                    id="year-input"
                    name="year"
                    value={voterForm.year}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="color-input"
                    name="color"
                    value={voterForm.color}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="number"
                    id="price-input"
                    name="price"
                    value={voterForm.price}
                    onChange={change}
                />
            </td>
            <td>
                <button type="button" onClick={saveVoter}>
                    Save
                </button>
                <button type="button" onClick={props.onCancelVoter}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};
