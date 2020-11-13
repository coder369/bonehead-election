import React from "react";
import { ElectionFormContainer } from "../../containers/ElectionFormContainer";
import { ElectionTableContainer } from "../../containers/ElectionTableContainer";

export const CreateElection = () => {
    return (
        <> 
            <ElectionFormContainer/>
            <ElectionTableContainer/>
        </> );
}