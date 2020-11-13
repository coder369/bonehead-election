import React from "react";

import { Election } from "../../models/Election";

export type ElectionTableProps = {
    elections: Election[];
}

export function ElectionTable(props: ElectionTableProps) {
    return (
        <table id="election-table">
            <thead>
                <tr>
                    <th>Election</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.elections.map((election) => 
                    <tr>
                        <td>{election.name}</td>
                        <td><button>View Results</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
