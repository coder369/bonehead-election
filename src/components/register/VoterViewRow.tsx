import React from "react";
import {Voter} from "../../models/Voter";

export type VoterViewRowProps = {
    voter: Voter;
    onEditVoter: (voterId: number) => void;
    onDeleteVoter: (voterId: number) => void;
}

export function VoterViewRow(props: VoterViewRowProps) {
    const deleteVoter = () => {
        props.onDeleteVoter(props.voter.id);
    };

    return (
        <>
            <td className="col-body">{props.voter.id}</td>
            <td className="col-body">{props.voter.firstName}</td>
            <td className="col-body">{props.voter.lastName}</td>
            <td className="col-body">{props.voter.address}</td>
            <td className="col-body">{props.voter.city}</td>
            <td className="col-body">{props.voter.state}</td>
            <td className="col-body">{props.voter.zip}</td>
            <td className="col-body">{props.voter.birthdate}</td>
            <td className="col-body">{props.voter.email}</td>
            <td className="col-body">{props.voter.phone}</td>
            <td>
                <button type="button" onClick={() => props.onEditVoter(props.voter.id)}>
                    Edit
                </button>
                <button type="button" onClick={deleteVoter}>
                    Delete
                </button>
            </td>
        </>
    )
}