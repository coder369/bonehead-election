import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { createSetSelectedElectionAction, refreshElections, updateElectionResults } from "../actions/electionActions";
import { createSetSelectedVoterAction, refreshVoters } from "../actions/voterActions";
import { CaptureVotes } from "../components/vote/CaptureVotes";
import { AppState } from "../models/AppStore";

export function VoteContainer() {
    const stateProps = useSelector((state: AppState) => state);
    const dispatch = useDispatch();
    const boundActionProps = useMemo(
        () =>
            bindActionCreators(
                {
                    onRefreshElections: refreshElections,
                    onRefreshVoters: refreshVoters,
                    onSelectElection: createSetSelectedElectionAction,
                    onSelectVoter: createSetSelectedVoterAction,
                    onSubmitBallot: updateElectionResults,
                },
                dispatch
            ),
        [dispatch]
    );

    return <CaptureVotes {...stateProps} {...boundActionProps} />
}
