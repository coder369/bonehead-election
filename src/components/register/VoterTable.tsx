import React, {ChangeEvent, useState} from "react";
import {Voter} from "../../models/Voter";
import {VotersSort} from "../../models/AppStore";
import upArrow from "../../012-up-arrow.svg";
import downArrow from "../../059-down-arrow-11.svg";

import "./arrow-style.css"
import {VoterEditRow} from "./VoterEditRow";
import {VoterViewRow} from "./VoterViewRow";

export type VoterTableProps = {
    voters: Voter[];
    editVoterId: number;
    votersSort: VotersSort;
    onEditVoter: (voterId: number) => void;
    onDeleteVoter: (voterId: number) => void;
    onDeleteMultiVoters: (multiSelection: number[]) => void;
    onSaveVoter: (voter: Voter) => void;
    onCancelVoter: () => void;
    onSortVoters: (voter: keyof Voter) => void;
};

const sortArrow = (votersSort: VotersSort, sortCol: keyof Voter) => {
    return (
        votersSort.sortCol === sortCol && (
            votersSort.sortDir === "asc" ?
                <img src={downArrow} className="arrow-image" alt="↓" /> :
                <img src={upArrow} className="arrow-image" alt="↑" />
        )
    );
};

export function VoterTable(props: VoterTableProps) {
    let initialSelectedId: number[] = []

    const [multiSelectedVoters, setMultiSelectedVoters] = useState([...initialSelectedId]);

    const change = (event: ChangeEvent<HTMLInputElement>)=> {
        let targetId: number  = Number(event.target.id)
        if (event.target.checked && !multiSelectedVoters.includes(targetId)) {
            setMultiSelectedVoters([
                ...multiSelectedVoters, targetId
            ])
        } else if (!event.target.checked) {
            setMultiSelectedVoters(multiSelectedVoters.filter(i=>i!==targetId))
        }
    }

    const toggleAllVoter = ()=> {
        if (multiSelectedVoters.length < props.voters.length) {
            setMultiSelectedVoters(props.voters.map(v=>v.id))
        } else {
            setMultiSelectedVoters(initialSelectedId)
        }
    }

    const onClickMultiDelete = () => {
        props.onDeleteMultiVoters(multiSelectedVoters);
        setMultiSelectedVoters(initialSelectedId)
    }


    return (
        <>
            <table id="voter-table">
                <thead>
                <tr>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("id")}>
                            Id {sortArrow(props.votersSort, "id")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("firstName")}>
                            First Name {sortArrow(props.votersSort, "firstName")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("lastName")}>
                            Last Name {sortArrow(props.votersSort, "lastName")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("address")}>
                            Address {sortArrow(props.votersSort, "address")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("city")}>
                            City {sortArrow(props.votersSort, "city")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("state")}>
                            State {sortArrow(props.votersSort, "state")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("zip")}>
                            Zip {sortArrow(props.votersSort, "zip")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("birthdate")}>
                            Birth date {sortArrow(props.votersSort, "birthdate")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("email")}>
                            Email {sortArrow(props.votersSort, "email")}
                        </button>
                    </th>
                    <th className="col-header">
                        <button type="button" onClick={() => props.onSortVoters("phone")}>
                            Phone {sortArrow(props.votersSort, "phone")}
                        </button>
                    </th>
                    <th className="col-header">Actions</th>
                    <th>Multi-Select</th>
                </tr>
                </thead>
                <tbody>
                {props.voters.map((voter) => (
                        <tr key={voter.id}>
                            {
                                voter.id === props.editVoterId ? (
                                    <VoterEditRow
                                        key={voter.id}
                                        voter={voter}
                                        onSaveVoter={props.onSaveVoter}
                                        onCancelVoter={props.onCancelVoter}
                                    />
                                ) : (
                                    <VoterViewRow
                                        key={voter.id}
                                        voter={voter}
                                        onEditVoter={props.onEditVoter}
                                        onDeleteVoter={props.onDeleteVoter}
                                    />
                                )
                            }
                            <td>
                                <input
                                    key={voter.id}
                                    id={voter.id.toString()}
                                    name={voter.id.toString()+"-select-box"}
                                    type="checkbox"
                                    checked={multiSelectedVoters.includes(voter.id)}
                                    onChange={change} />
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
            <button type={"button"} onClick={toggleAllVoter}> Check/ Uncheck all </button>
            <button type={"button"} onClick={onClickMultiDelete}> Delete Selected Voter(s) </button>

            <br/>
            <div>
                Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        </>




    );
}
