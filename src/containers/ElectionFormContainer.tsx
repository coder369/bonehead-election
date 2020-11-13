import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { submitElection, createAddQuestionAction } from "../actions/electionActions";
import { ElectionForm } from "../components/election/ElectionForm";
import { AppState } from "../models/AppStore";

export function ElectionFormContainer() {
    const stateProps = useSelector((state: AppState) => {
        return {
            questions: state.questions,
        };
    });

    const dispatch = useDispatch();

    const boundActionProps = useMemo(
        () =>
            bindActionCreators(
                {
                    onSaveElection: submitElection,
                    onAddQuestion: createAddQuestionAction
                },
                dispatch
            ),
        [dispatch]
    );

    return <ElectionForm {...stateProps} {...boundActionProps} />
}