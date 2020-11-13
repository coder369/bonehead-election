import React, { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import {appendVoter} from "../../actions/voterActions";
import {VoterForm} from "./VoterForm";
import {Header} from "../Header";

export function VoterFormContainer() {
    const dispatch = useDispatch();

    const boundActionProps = useMemo(
        () =>
            bindActionCreators(
                {
                    onSubmitVoter: appendVoter,
                },
                dispatch
            ),
        [dispatch]
    );

    return (
        <>
            <Header headerText={"Register New Voter"}/>
            <VoterForm buttonText="Complete Registration" {...boundActionProps} />
        </>
        );
}