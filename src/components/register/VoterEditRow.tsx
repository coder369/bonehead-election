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
        birthdate: props.voter.birthdate,
        email: props.voter.email,
        phone: props.voter.phone,
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
                    id="firstName-input"
                    name="firstName"
                    value={voterForm.firstName}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="lastName-input"
                    name="lastName"
                    value={voterForm.lastName}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="address-input"
                    name="address"
                    value={voterForm.address}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="city-input"
                    name="city"
                    value={voterForm.city}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="state-input"
                    name="state"
                    value={voterForm.state}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="zip-input"
                    name="zip"
                    value={voterForm.zip}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="birthdate-input"
                    name="birthdate"
                    value={voterForm.birthdate}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="email-input"
                    name="email"
                    value={voterForm.email}
                    onChange={change}
                />
            </td>
            <td>
                <input
                    type="text"
                    id="phone-input"
                    name="phone"
                    value={voterForm.phone}
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
