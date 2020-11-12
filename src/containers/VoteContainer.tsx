import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshElections } from "../actions/electionActions";
import { refreshVoters } from "../actions/voterActions";
import { CaptureVotes } from "../components/vote/CaptureVotes";
import { AppState } from "../models/AppStore";

export function VoteContainer() {
    const stateProps = useSelector((state: AppState) => {
        return {
            elections: state.elections,
            voters: state.voters,
        }
    });

    const dispatch = useDispatch();

    const boundActionProps = useMemo(
        () =>
            bindActionCreators(
                {
                    onRefreshElections: refreshElections,
                    onRefreshVoters: refreshVoters,
                },
                dispatch
            ),
        [dispatch]
    );

    return <CaptureVotes {...stateProps} {...boundActionProps} />
}
