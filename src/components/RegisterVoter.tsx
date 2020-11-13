import React from "react";

import {Header} from "./Header";
import {VoterFormContainer} from "./register/VoterFormContainer";

export const RegisterVoter = () => {
    return (
        <>
            <Header headerText={"Register New Voter"}/>
            <VoterFormContainer/>
        </>
    );
}
